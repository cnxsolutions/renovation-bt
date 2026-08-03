import type { Metadata } from "next";
import { BUSINESS, SEO } from "@/lib/constants";
import {
  BUSINESS_ID,
  WEBSITE_ID,
  absoluteUrl,
  serializeJsonLd,
} from "@/components/seo/serializeJsonLd";

import { Hero } from "@/components/sections/Hero";
import { ChantiersChalons } from "@/components/sections/ChantiersChalons";
import { Services } from "@/components/sections/Services";
import { Fuite } from "@/components/sections/Fuite";
import { DevisEtPrix } from "@/components/sections/DevisEtPrix";
import { About } from "@/components/sections/About";
import { ZoneIntervention } from "@/components/sections/ZoneIntervention";
import { FAQ } from "@/components/sections/FAQ";
import { ConseilsTeaser } from "@/components/sections/ConseilsTeaser";
import { CTABanner } from "@/components/sections/CTABanner";
import { FAQ_ACCUEIL, IMAGE_LCP } from "@/components/sections/accueil-content";
import {
  DEVIS_ET_DEPLACEMENT,
  DISTANCE_CENTRE_CHALONS_KM,
} from "@/components/sections/business-facts";

/* ========================================================================== */
/*  METADONNEES                                                               */
/* ========================================================================== */

/**
 * TITRE — 44 caracteres, 60 une fois le gabarit `SEO.titleTemplate` applique
 * (« | Rénovation BT », 16 caracteres), donc dans la borne 30-60.
 *
 * POURQUOI CE TITRE, ET PAS L'ANCIEN. L'accueil servait
 * « Couvreur toiture à Châlons-en-Champagne (51) » et la page ville sert
 * « Couvreur à Châlons-en-Champagne (51000) » : deux titres qui ne different
 * que par le mot « toiture » et trois zeros. C'est la chaine que Google affiche
 * et sur laquelle il regroupe — la collision reelle entre les deux pages etait
 * la, plus encore que dans les H1.
 *
 * Le nouveau titre place la requete en tete, puis nomme une PERSONNE : sur les
 * neuf pages concurrentes du corpus, aucune ne dit qui monte sur le toit. Et
 * une fois le gabarit applique, il se lit « Couvreur Châlons-en-Champagne,
 * Teddy Boisson | Rénovation BT » — les deux moities du titre de la fiche
 * d'etablissement (`BUSINESS.name` = « BOISSON Teddy | RENOVATIONBT ») dans le
 * meme ordre. Un visiteur venu de la fiche reconnait l'entite avant de cliquer.
 */
const PAGE_TITLE = `Couvreur à Châlons-en-Champagne, ${BUSINESS.operatorName}`;

/**
 * DESCRIPTION — 156 caracteres, dans la borne 70-160.
 * Quatre faits opposables (la personne, la distance, la date de creation, la
 * gratuite attestee par la fiche) et une preuve annoncee. Zero delai, zero
 * note, zero aide financiere.
 * « Devis et déplacement gratuits » est la graphie EXACTE de la fiche : la
 * coherence du NAP se joue aussi dans les extraits de resultats.
 */
const PAGE_DESCRIPTION = `Couvreur à Châlons-en-Champagne : ${BUSINESS.operatorName}, artisan ${BUSINESS.experience}. Toiture, zinguerie, gouttières, chantiers photographiés. ${DEVIS_ET_DEPLACEMENT}.`;

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: "/" },
};

/* ========================================================================== */
/*  JSON-LD PROPRE A LA PAGE                                                  */
/* ========================================================================== */

/** `absoluteUrl("/")` rend « https://…/ » : les `@id` suivent donc la meme */
/*  convention que ceux de `BreadcrumbJsonLd` (`{url}#webpage`) et de         */
/*  `serializeJsonLd` (`{origin}/#business`). Aucune chaine n'est retapee.    */
const PAGE_URL = absoluteUrl("/");
const WEBPAGE_ID = `${PAGE_URL}#webpage`;
const IMAGE_ID = `${PAGE_URL}#photo-chantier-chalons`;

/**
 * Ce que ce bloc ajoute au graphe, et ce qu'il n'y ajoute surtout pas.
 *
 * A) LE NOEUD `WebPage`, qui est le vrai manque. `/` etait la SEULE page
 *    indexable du site sans noeud `WebPage` : toutes les autres en obtiennent
 *    un via `BreadcrumbJsonLd`, qui frappe `{url}#webpage`. Rien, dans le
 *    graphe, ne disait donc que `/` est la page de l'entite.
 *
 * B) `mainEntityOfPage` SUR LE NOEUD ENTREPRISE. C'est la declaration lisible
 *    par machine que la page de marque est `/`, et que
 *    `/couvreur/chalons-en-champagne` est une page de service local et non un
 *    second siege. C'est le seul geste de balisage qui porte directement sur la
 *    cannibalisation.
 *    Le noeud ci-dessous ne REDECRIT PAS l'entreprise : il ne porte que son
 *    `@id` et la propriete ajoutee. Deux noeuds de meme `@id` fusionnent, c'est
 *    le mecanisme normal de JSON-LD. La place ideale de cette propriete reste
 *    `src/components/seo/JsonLd.tsx`, hors du perimetre de cette refonte ; le
 *    jour ou elle y sera ecrite, SUPPRIMER ce noeud pour ne pas la declarer
 *    deux fois.
 *
 * C) UN `ImageObject` LOCALISE pour la photo LCP. `contentLocation` rend
 *    lisible par machine ce que `/realisations` affirme deja en HTML : ces
 *    chantiers ont eu lieu a Châlons-en-Champagne. A DIRE FRANCHEMENT : cela
 *    n'ouvre AUCUN resultat enrichi. C'est du graphe d'entites, et c'est le
 *    seul endroit ou la preuve locale devient exploitable par une machine.
 *    A FAIRE CONFIRMER PAR LE GERANT : la localisation des cinq chantiers
 *    repose aujourd'hui sur la convention de nommage des fichiers.
 *
 * CE QUI N'EST PAS EMIS, ET POURQUOI IL NE FAUT PAS L'AJOUTER
 *  - `BreadcrumbList` : un fil d'Ariane a un seul maillon n'ouvre rien.
 *  - `aggregateRating` et tout noeud `Review` : l'entite qui controle les avis
 *    la concernant est inéligible au resultat enrichi d'avis, et une note
 *    recopiee devient fausse en quelques semaines.
 *  - `hasCredential` : `LEGAL.decennale` est entierement `null`. Il n'y a
 *    litteralement rien a declarer.
 *  - `"@type": "EmergencyService"` : chez schema.org, ce type designe un
 *    hopital, un commissariat ou une caserne de pompiers. Un couvreur n'en est
 *    pas un — ce serait une declaration d'entite fausse pour zero gain.
 *  - `openingHours: "24/7"` sous quelque forme que ce soit : l'entreprise est
 *    fermee le dimanche, et `toOpeningHoursSpecification` l'exclut deja
 *    correctement depuis `BUSINESS.openingHoursSchema`.
 *  - Toute duplication des `Offer` de `/tarifs` : le catalogue de prix balise
 *    vit la-bas et s'accroche deja a `BUSINESS_ID`. Deux declarations de prix
 *    concurrentes pour le meme service, dans le meme graphe, se contrediraient.
 */
function AccueilJsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": WEBPAGE_ID,
        url: PAGE_URL,
        name: SEO.titleTemplate.replace("%s", PAGE_TITLE),
        description: PAGE_DESCRIPTION,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": BUSINESS_ID },
        mainEntity: { "@id": BUSINESS_ID },
        primaryImageOfPage: { "@id": IMAGE_ID },
        inLanguage: "fr-FR",
      },
      {
        "@type": "ImageObject",
        "@id": IMAGE_ID,
        url: absoluteUrl(IMAGE_LCP.src),
        contentUrl: absoluteUrl(IMAGE_LCP.src),
        // Dimensions LUES dans le fichier, jamais estimees.
        width: IMAGE_LCP.width,
        height: IMAGE_LCP.height,
        caption: IMAGE_LCP.legende,
        contentLocation: {
          "@type": "Place",
          name: "Châlons-en-Champagne",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Châlons-en-Champagne",
            postalCode: "51000",
            addressRegion: BUSINESS.address.region,
            addressCountry: BUSINESS.address.country,
          },
        },
        creator: { "@id": BUSINESS_ID },
      },
      {
        // Voir le point B ci-dessus : reference, pas redescription.
        "@id": BUSINESS_ID,
        mainEntityOfPage: { "@id": WEBPAGE_ID },
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

/* ========================================================================== */
/*  LA PAGE                                                                   */
/* ========================================================================== */

/**
 * ORDRE DES SECTIONS, ET CE QU'IL ARBITRE
 *
 *  1. Hero .............. le symptome, la personne, le numero. Fait appeler.
 *  2. Chantiers ......... la preuve, immediatement. Cinq toits de Chalons.
 *  3. Prestations ....... la taxonomie de la fiche, en francais.
 *  4. Fuite ............. le vocabulaire du client, puis le telephone.
 *  5. Devis et prix ..... ce qui se passe apres l'appel, puis /tarifs.
 *  6. L'artisan ......... qui monte sur le toit, et les avis sur la fiche.
 *  7. Zone .............. le seul lien vers la page ville, ancre descriptive.
 *  8. FAQ ............... prix, devis, deroulement — voir la note ci-dessous.
 *  9. Conseils .......... la distribution vers le cluster editorial.
 * 10. Appel a l'action .. le numero, et la porte de sortie du dimanche.
 *
 * QUATRE POINTS D'APPEL, pas six : hero, bloc fuite, FAQ et bloc final.
 * L'ancienne page repetait la meme offre six fois, ce qui se lit comme de la
 * pression et non comme de la disponibilite.
 *
 * `SeoContent` DISPARAIT de cette page. Il rendait une SECONDE grille de six
 * services sur la meme page que `Services` — de la cannibalisation en
 * miniature a l'interieur d'une page —, trois appels a l'action redondants, et
 * la phrase « Spécialiste couvreur chalons en champagne, nous intervenons
 * rapidement », qui est a la fois une chaine de mots-cles sans ponctuation et
 * une promesse de delai. Il vendait aussi « Charpente » et « Velux », absents
 * de `/services` : deux culs-de-sac. Le composant n'est plus monte nulle part
 * et peut etre supprime du depot.
 *
 * `pageUrl="/"` SUR LA FAQ : sans lui, le noeud `FAQPage` est anonyme et ne se
 * rattache a aucune `WebPage`. A ne pas vendre comme un gain de visibilite —
 * le resultat enrichi FAQ est supprime depuis le 7 mai 2026.
 *
 * LE LIEN ENTRANT `/#faq`. `src/app/couvreur/[city]/page.tsx` renvoie vers
 * `/#faq` en annoncant que « les questions de prix, de devis et de deroulement
 * d'un chantier » y sont traitees. `FAQ_ACCUEIL` ouvre donc sur ces trois
 * questions exactement, et la section conserve son `id="faq"`. Remplacer la
 * FAQ de l'accueil sans verifier ce lien entrant l'aurait casse en silence.
 */
export default function HomePage() {
  return (
    <>
      <AccueilJsonLd />

      <Hero />
      <ChantiersChalons />
      <Services />
      <Fuite />
      <DevisEtPrix />
      <About />
      <ZoneIntervention />
      <FAQ
        items={FAQ_ACCUEIL}
        title="Tarif, devis, déroulement du chantier : ce qu'on nous demande le plus souvent"
        subtitle="Les réponses que nous donnons au téléphone, écrites ici."
        pageUrl="/"
      />
      <ConseilsTeaser />
      <CTABanner
        title="Décrivez-nous votre toiture"
        subtitle="Un appel suffit pour convenir d'une visite. Le déplacement et le devis écrit ne vous sont pas facturés."
      />
    </>
  );
}
