import { BUSINESS, SEO } from "@/lib/constants";
import {
  BUSINESS_ID,
  LOGO_ID,
  WEBSITE_ID,
  absoluteUrl,
  serializeJsonLd,
} from "./serializeJsonLd";

/**
 * Graphe d'entites du site, emis une fois pour toutes depuis le layout racine.
 *
 * Ce bloc est le SEUL endroit ou l'entreprise est decrite. Les autres blocs
 * JSON-LD du site (fil d'Ariane, FAQ, pages ville) ne doivent pas la
 * redecrire : ils doivent la referencer par son `@id`, `BUSINESS_ID`.
 *
 * Regle de tenue de ce fichier : aucune valeur en dur. Tout ce qui decrit
 * l'entreprise vient de `BUSINESS`, qui est la source de verite verifiee. Une
 * adresse ecrite a deux endroits finit toujours par diverger — c'est
 * exactement ce qui etait arrive au `streetAddress` de ce fichier, qui
 * annoncait « 43 Rue de Chalons-sur-Marne » quand la fiche Google et le
 * registre disent « 43 Bis ».
 */

const DAY_CODES = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"] as const;

const DAY_NAMES: Record<(typeof DAY_CODES)[number], string> = {
  Mo: "Monday",
  Tu: "Tuesday",
  We: "Wednesday",
  Th: "Thursday",
  Fr: "Friday",
  Sa: "Saturday",
  Su: "Sunday",
};

/**
 * Traduit la notation compacte de `BUSINESS.openingHoursSchema`
 * (« Mo-Sa 00:00-23:59 ») en `OpeningHoursSpecification`, la forme que Google
 * documente pour LocalBusiness.
 *
 * On PARSE au lieu de recopier la liste des jours : l'ancien code listait les
 * sept jours en dur, dimanche compris, alors que la fiche d'etablissement
 * annonce l'entreprise fermee le dimanche. Deriver les horaires de la constante
 * garantit qu'une correction d'horaire ne peut plus oublier ce fichier.
 */
function toOpeningHoursSpecification(schema: string) {
  return schema
    .split(";")
    .map((rule) => rule.trim())
    .filter(Boolean)
    .map((rule) => {
      const [dayPart, hourPart] = rule.split(/\s+/);
      if (!dayPart || !hourPart) return null;

      const dayOfWeek: string[] = [];
      for (const range of dayPart.split(",")) {
        const [from, to] = range.split("-");
        const start = (DAY_CODES as readonly string[]).indexOf(from);
        const end = to ? (DAY_CODES as readonly string[]).indexOf(to) : start;
        if (start < 0 || end < 0 || end < start) continue;
        for (let i = start; i <= end; i++) dayOfWeek.push(DAY_NAMES[DAY_CODES[i]]);
      }

      const [opens, closes] = hourPart.split("-");
      if (dayOfWeek.length === 0 || !opens || !closes) return null;

      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek,
        opens,
        closes,
      };
    })
    .filter((spec): spec is NonNullable<typeof spec> => spec !== null);
}

/** Conversion vers les metres attendus par `geoRadius`. Codes UN/CEFACT. */
const METERS_PER_UNIT: Record<string, number> = { KMT: 1000, MTR: 1, SMI: 1609 };

/**
 * Zone reellement desservie.
 *
 * Le cercle est calcule depuis `BUSINESS.serviceRadius` et la liste depuis
 * `BUSINESS.departments`, donc les deux ne peuvent plus se contredire. L'ancien
 * code declarait un rayon de 150 km tout en revendiquant le Bas-Rhin, le
 * Haut-Rhin et les Vosges, qui sont a plus de 200 km d'Ecury-sur-Coole : la
 * zone annoncee etait incoherente avec elle-meme.
 */
function buildAreaServed() {
  const areaServed: Record<string, unknown>[] = [];

  const metersPerUnit = METERS_PER_UNIT[BUSINESS.serviceRadius.unit];
  if (metersPerUnit) {
    areaServed.push({
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: BUSINESS.geo.latitude,
        longitude: BUSINESS.geo.longitude,
      },
      geoRadius: String(BUSINESS.serviceRadius.value * metersPerUnit),
    });
  }

  for (const department of BUSINESS.departments) {
    // « Marne (51) » est une etiquette d'interface, pas un nom de territoire.
    areaServed.push({
      "@type": "AdministrativeArea",
      name: department.replace(/\s*\(\d+\)\s*$/, ""),
    });
  }

  return areaServed;
}

export function JsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SEO.siteUrl,
        /*
         * Ici, et ici SEULEMENT, c'est `displayName` qui est le `name`.
         * Le noeud `WebSite` alimente la fonctionnalite « nom du site » de
         * Google, celle qui remplace le domaine affiche au-dessus du titre dans
         * les resultats. On y veut donc l'enseigne lisible, « Rénovation BT »,
         * pas la chaine d'entite avec son pipe. Le nom exact de la fiche reste
         * declare en `alternateName`, et surtout sur le noeud de l'entreprise
         * ci-dessous, qui est celui que Google rapproche de la fiche.
         */
        name: BUSINESS.displayName,
        alternateName: BUSINESS.name,
        description: SEO.defaultDescription,
        publisher: { "@id": BUSINESS_ID },
        inLanguage: "fr-FR",
      },
      {
        "@type": ["RoofingContractor", "HomeAndConstructionBusiness"],
        "@id": BUSINESS_ID,
        // TROIS noms, trois roles, et il ne faut pas les confondre :
        //  - `name` est la chaine EXACTE de la fiche d'etablissement Google,
        //    « BOISSON Teddy | RENOVATIONBT ». C'est sur ce noeud que Google
        //    rapproche le site de la fiche ; toute variation de graphie affaiblit
        //    ce rapprochement, qui est le premier facteur on-page du Local Pack.
        //  - `alternateName` est l'enseigne lisible portee par le site et le
        //    domaine. Elle est declaree, pas cachee : c'est ce que schema.org
        //    prevoit pour un second nom d'une meme entite.
        //  - `legalName` est la denomination immatriculee au registre.
        name: BUSINESS.name,
        alternateName: BUSINESS.displayName,
        legalName: BUSINESS.legalName,
        url: SEO.siteUrl,
        telephone: BUSINESS.phoneInternational,
        email: BUSINESS.email,
        description: SEO.defaultDescription,
        slogan: BUSINESS.slogan,
        // Anciennement `/og-image.jpg`, qui renvoyait 404 : une `image` morte
        // sur le noeud principal prive le site de sa vignette partout.
        image: absoluteUrl(SEO.ogImage),
        logo: { "@id": LOGO_ID },
        // Date de creation au registre national des entreprises. Verifiable,
        // et c'est le seul signal d'anciennete qu'on puisse prouver.
        foundingDate: BUSINESS.foundingDate,
        // L'entreprise est une entreprise individuelle : son fondateur est son
        // exploitant, et c'est un fait du registre, pas une allegation. Nommer
        // la personne relie l'entite du site a celle que porte la fiche Google,
        // qui s'intitule elle-meme « BOISSON Teddy | RENOVATIONBT ».
        founder: {
          "@type": "Person",
          name: BUSINESS.operatorName,
        },
        // URL construite sur le Place ID, donc stable meme si la fiche est
        // renommee ou deplacee.
        hasMap: BUSINESS.googleMapsUrl,
        // `sameAs: []` n'apporte rien et suggere a tort qu'on a cherche. Tant
        // qu'aucun profil externe n'est verifie, la propriete n'existe pas.
        ...(BUSINESS.sameAs.length > 0 ? { sameAs: BUSINESS.sameAs } : {}),
        address: {
          "@type": "PostalAddress",
          streetAddress: BUSINESS.address.street,
          addressLocality: BUSINESS.address.city,
          postalCode: BUSINESS.address.postalCode,
          addressRegion: BUSINESS.address.region,
          addressCountry: BUSINESS.address.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: BUSINESS.geo.latitude,
          longitude: BUSINESS.geo.longitude,
        },
        areaServed: buildAreaServed(),
        // Site francais, prix en euros : `$$` etait un reste de template.
        priceRange: "€€",
        currenciesAccepted: "EUR",
        paymentAccepted: "Cash, Credit Card, Bank Transfer",
        openingHoursSpecification: toOpeningHoursSpecification(
          BUSINESS.openingHoursSchema,
        ),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services de couverture et rénovation",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Toiture",
                description:
                  "Couverture, zinguerie, nettoyage hydrofuge, démoussage, réfection complète",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Façade",
                description:
                  "Peinture extérieure, nettoyage, décapage, ravalement, crépi et enduit",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Gouttières",
                description:
                  "Habillage PVC/Alu, nettoyage, réparation, remplacement, pose neuve",
              },
            },
          ],
        },
        knowsAbout: BUSINESS.knowsAbout,
        additionalType: "https://www.wikidata.org/wiki/Q11470729",
      },
      {
        "@type": "ImageObject",
        "@id": LOGO_ID,
        url: `${SEO.siteUrl}/icon.svg`,
        contentUrl: `${SEO.siteUrl}/icon.svg`,
        // Le logo porte l'enseigne, pas la chaine d'entite : la legende decrit
        // ce que l'image montre reellement.
        caption: BUSINESS.displayName,
        // Dimensions reelles du viewBox de public/icon.svg (0 0 100 100).
        // Le fichier declarait 200x200, qui ne correspondait a rien.
        width: 100,
        height: 100,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(graph) }}
    />
  );
}

/*
 * CE QUI A ETE RETIRE DE CE GRAPHE, ET POURQUOI IL NE FAUT PAS LE REMETTRE
 *
 * 1. `aggregateRating` (note Google republiee sur le site).
 *    Google, documentation « Review snippet », mise a jour du 24/07/2026 :
 *    « If the entity that's being reviewed controls the reviews about itself,
 *    their pages that use LocalBusiness or any other type of Organization
 *    structured data are ineligible for star review feature », et « Don't
 *    aggregate reviews or ratings from other websites ». Republier sa propre
 *    note Google viole les deux regles a la fois : l'entite controle la page
 *    qui affiche l'avis, et la note provient d'un autre site. Le balisage
 *    n'ouvrait donc aucune etoile — il exposait seulement le site a une action
 *    manuelle pour donnees structurees non conformes. La corriger ne suffit
 *    pas : il faut ne pas l'emettre.
 *    Ce qui serait legitime : des `Review` reellement collectes et heberges par
 *    le site, avec auteur et date, et l'`aggregateRating` calcule sur EUX.
 *    Cela suppose un dispositif de collecte d'avis, pas une constante.
 *
 * 2. `hasCredential` de type `EducationalOccupationalCredential` pour
 *    l'assurance decennale. Ce type designe un diplome ou une certification
 *    professionnelle ; une police d'assurance n'en est pas une. Le noeud ne
 *    portait ni assureur, ni numero de police, ni periode de validite — rien
 *    de verifiable, donc rien d'exploitable par un moteur. `LEGAL.decennale`
 *    est aujourd'hui entierement `null` : il n'y a litteralement rien a
 *    declarer. Le jour ou `LEGAL.decennale.insurer` sera renseigne, la forme
 *    correcte est une mention en clair sur la page (et l'attestation jointe au
 *    devis, qui est la seule obligation legale), pas un faux diplome.
 *
 * 3. Les departements alsaciens et mosellans dans `areaServed`, et le noeud
 *    `State` « Grand Est ». Revendiquer une region entiere tout en declarant un
 *    rayon de 60 km est contradictoire, et une zone desservie invraisemblable
 *    dilue la pertinence locale au lieu de l'elargir.
 */
