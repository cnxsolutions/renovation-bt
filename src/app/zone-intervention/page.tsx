/**
 * Zone d'intervention — PAGE PILIER geographique.
 *
 * Son travail : dire ou l'entreprise se deplace, et distribuer l'autorite vers
 * les pages commune de /couvreur/<slug>. Chaque commune y est liee une fois,
 * avec son code postal, sa distance verifiee et la phrase d'ouverture de sa
 * page — celle qui dit ce qu'on trouve sur ses toits.
 *
 * REGLE DE CE FICHIER : rien n'est saisi a la main, sauf le decoupage en
 * secteurs et les chapeaux de secteur. Les noms et codes postaux viennent de
 * src/data/cities.ts, les distances et les accroches de src/data/city-content/,
 * le rayon et les departements de src/lib/constants.ts.
 *
 * CE QUI A ETE RETIRE, ET NE DOIT PAS REVENIR
 *  - la section « Pourquoi une seule page plutot qu'une page par commune » :
 *    une justification d'architecture editoriale adressee a un auditeur, publiee
 *    devant le client — et devenue fausse, puisque chaque commune a sa page ;
 *  - l'explication au visiteur du calcul des distances a vol d'oiseau, et la
 *    phrase « nous n'annoncons aucun delai sur ce site » ;
 *  - « seul departement pour lequel nous tenons une liste nominative a ce
 *    jour », qui decrivait l'etat d'avancement d'un fichier de donnees.
 *
 * Les distances affichees sont celles, arrondies et verifiees a la main, du
 * champ `distanceKm` de chaque fichier commune — plus le calcul orthodromique
 * qui vivait ici, et dont l'imprecision rendait toute distance affichee a
 * l'unite pres mensongere. Ne jamais en deduire un temps de trajet ni un delai
 * d'intervention.
 */
import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Compass, ArrowRight, Building2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { CTABanner } from "@/components/sections/CTABanner";
import { cities, type City } from "@/data/cities";
import { getCityContent } from "@/data/city-content";
import { BUSINESS, SEO } from "@/lib/constants";

const RADIUS_KM = BUSINESS.serviceRadius.value;

export const metadata: Metadata = {
  title: "Zone d'intervention du couvreur dans la Marne",
  description: `Les ${cities.length} communes où nous intervenons, dans un rayon de ${RADIUS_KM} km autour d'Écury-sur-Coole (51) : Châlons-en-Champagne, Reims, Épernay, Vitry-le-François, Sézanne.`,
  alternates: { canonical: "/zone-intervention" },
  /*
   * La fusion des metadonnees de Next est SUPERFICIELLE : cet objet REMPLACE
   * entierement celui du layout racine. Tout ce qui n'est pas repete ici est
   * perdu — siteName, locale, type et l'image par defaut. On les redeclare
   * donc explicitement plutot que de croire a un heritage qui n'existe pas.
   */
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: BUSINESS.displayName,
    title: "Zone d'intervention : couvreur dans la Marne (51)",
    description: `Les communes desservies dans un rayon de ${RADIUS_KM} km autour d'Écury-sur-Coole, du Châlonnais au Rémois, de la vallée de la Marne au sud du département.`,
    url: "/zone-intervention",
    images: [{ url: SEO.ogImage, width: 1200, height: 630 }],
  },
};

/* -------------------------------------------------------------------------- */
/*  DECOUPAGE EN SECTEURS                                                      */
/* -------------------------------------------------------------------------- */

interface Secteur {
  id: string;
  titre: string;
  /** Ce que le secteur a de particulier SUR LES TOITS. Pas un texte de vente. */
  chapeau: string;
  /** Slugs de src/data/cities.ts. Un slug inconnu est ignore au rendu. */
  slugs: string[];
}

/**
 * L'ordre est celui d'un tour du rayon : le Chalonnais d'abord, puis l'est et
 * le nord, puis l'ouest, puis le sud. Toute commune de cities.ts absente de ce
 * decoupage reste rendue, dans le bloc de fin : une commune ne peut pas
 * disparaitre de la page parce qu'on a oublie de l'y ranger.
 */
const SECTEURS: Secteur[] = [
  {
    id: "chalonnais",
    titre: "Châlons-en-Champagne et sa couronne",
    chapeau:
      "Notre secteur de tous les jours. Un centre châlonnais serré, à pan de bois et à forte pente, des faubourgs et des lotissements couverts en tuile mécanique, et les villages de la vallée de la Coole, à quelques minutes du siège.",
    slugs: [
      "chalons-en-champagne",
      "ecury-sur-coole",
      "saint-memmie",
      "compertrix",
      "fagnieres",
      "sarry",
      "coolus",
      "saint-martin-sur-le-pre",
    ],
  },
  {
    id: "plaine-argonne",
    titre: "La plaine champenoise et l'Argonne",
    chapeau:
      "À l'est et au nord de Châlons : des villages-rues de plein champ, des bourgs entièrement rebâtis — après l'incendie de 1719 pour Sainte-Ménehould, après 1918 pour Suippes — et des toitures que rien n'abrite du vent de plaine.",
    slugs: [
      "courtisols",
      "somme-vesle",
      "mourmelon-le-grand",
      "suippes",
      "sainte-menehould",
    ],
  },
  {
    id: "remois",
    titre: "Reims et son agglomération",
    chapeau:
      "Le nord de notre rayon. La Reconstruction des années 1920 y a laissé des combles brisés, de l'ardoise et beaucoup de zinc ; les communes de la couronne mêlent ce bâti-là aux quartiers sortis de terre depuis.",
    slugs: ["reims", "tinqueux", "cormontreuil", "betheny", "bezannes", "muizon"],
  },
  {
    id: "vallee-de-la-marne",
    titre: "La vallée de la Marne",
    chapeau:
      "À l'ouest, la vallée et ses coteaux viticoles. L'ardoise des maisons de négoce et la tuile des faubourgs, sur des versants où l'accès au pied du toit compte autant que le toit lui-même.",
    slugs: ["epernay", "dormans"],
  },
  {
    id: "sud-marnais",
    titre: "Le sud du département",
    chapeau:
      "Le Vitryat, la Champagne crayeuse et la Brie champenoise. Trois centres reconstruits après un incendie ou un bombardement, où la tuile plate à forte pente côtoie les couvertures d'après-guerre.",
    slugs: ["vitry-le-francois", "fere-champenoise", "sezanne"],
  },
];

/** Valeur de rangement des communes dont la distance n'est pas renseignee. */
const DISTANCE_INCONNUE = Number.MAX_SAFE_INTEGER;

/** Distance verifiee a la main dans le fichier commune, en km. */
function distanceKm(city: City): number {
  return getCityContent(city.slug)?.distanceKm ?? DISTANCE_INCONNUE;
}

/** Accroche de la page commune : sa premiere phrase, ecrite pour elle. */
function accroche(city: City): string | undefined {
  return getCityContent(city.slug)?.intro[0];
}

/** La plus proche d'abord, puis par ordre alphabetique. */
function parProximite(a: City, b: City): number {
  const ecart = distanceKm(a) - distanceKm(b);
  return ecart !== 0 ? ecart : a.name.localeCompare(b.name, "fr");
}

function communesParSecteur() {
  // `as const` : sans lui, TypeScript infere `(string | City)[][]` au lieu du
  // tuple attendu par le constructeur de Map.
  const parSlug = new Map(cities.map((city) => [city.slug, city] as const));
  const rangees = new Set<string>();

  const secteurs = SECTEURS.map((secteur) => {
    const communes = secteur.slugs
      .map((slug) => parSlug.get(slug))
      .filter((city): city is City => city !== undefined);
    for (const city of communes) rangees.add(city.slug);
    return { secteur, communes: communes.sort(parProximite) };
  }).filter((groupe) => groupe.communes.length > 0);

  const autres = cities
    .filter((city) => !rangees.has(city.slug))
    .sort(parProximite);

  return { secteurs, autres };
}

/* -------------------------------------------------------------------------- */
/*  RENDU                                                                      */
/* -------------------------------------------------------------------------- */

function CommuneCard({ city }: { city: City }) {
  const distance = distanceKm(city);
  const texte = accroche(city);

  let reperage: string | null = null;
  if (distance === 0) reperage = "Notre siège";
  else if (distance !== DISTANCE_INCONNUE) reperage = `à ${distance} km du siège`;

  const entete = (
    <>
      <span className="flex items-baseline justify-between gap-3">
        <span className="text-lg font-bold text-gray-900">{city.name}</span>
        <span className="shrink-0 text-sm text-gray-500">{city.postalCode}</span>
      </span>
      {reperage && (
        <span className="mt-0.5 block text-sm text-gray-500">{reperage}</span>
      )}
      {/* `line-clamp-3` pose lui-meme `display: -webkit-box` : ne pas lui
          adjoindre `block`, qui ecraserait la troncature. */}
      {texte && (
        <span className="mt-3 line-clamp-3 text-sm leading-relaxed text-gray-600">
          {texte}
        </span>
      )}
    </>
  );

  if (!city.hasPage) {
    return (
      <li className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-5">
        {entete}
      </li>
    );
  }

  return (
    <li className="h-full">
      <Link
        href={`/couvreur/${city.slug}`}
        className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-5 transition-colors hover:border-orange-400 hover:bg-orange-50"
      >
        {entete}
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-orange-700">
          Couvreur à {city.name}
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
      </Link>
    </li>
  );
}

export default function ZoneInterventionPage() {
  const { secteurs, autres } = communesParSecteur();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Zone d'intervention", url: "/zone-intervention" },
        ]}
      />

      {/* EN-TETE */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 text-white">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-500 px-4 py-1.5 text-sm font-medium text-gray-900">
              <Compass className="h-4 w-4" aria-hidden="true" /> Rayon de{" "}
              {RADIUS_KM} km
            </div>
            <h1 className="mb-6 text-4xl font-extrabold sm:text-5xl">
              Notre zone d&apos;intervention dans la Marne
            </h1>
            <p className="mb-4 text-lg leading-relaxed text-gray-200">
              Nous sommes établis à {BUSINESS.address.city} (
              {BUSINESS.address.postalCode}), à 8 km au sud de
              Châlons-en-Champagne, et nous nous déplaçons dans un rayon de{" "}
              {RADIUS_KM} km autour de cette adresse. Les {cities.length} communes
              ci-dessous ont chacune leur page : le bâti, les matériaux de
              couverture et les contraintes de chantier qu&apos;on y rencontre.
            </p>
            <p className="text-gray-300">
              {BUSINESS.hours}, fermé le dimanche. Le déplacement et le devis sont
              gratuits.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-8 py-4 font-semibold text-gray-900 transition-colors hover:bg-orange-400"
              >
                <Phone className="h-5 w-5" aria-hidden="true" /> {BUSINESS.phone}
              </a>
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="bg-white/15 hover:bg-white/25"
              >
                Décrire mon chantier
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* DEPARTEMENTS */}
      <section className="bg-white py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Départements couverts
            </h2>
            <p className="mb-6 text-gray-600">
              Depuis {BUSINESS.address.city}, un rayon de {RADIUS_KM} km déborde
              sur quatre départements limitrophes de la Marne.
            </p>
            <ul className="flex flex-wrap gap-3">
              {BUSINESS.departments.map((department) => (
                <li
                  key={department}
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 font-medium text-gray-800"
                >
                  <MapPin className="h-4 w-4 text-orange-500" aria-hidden="true" />
                  {department}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-gray-500">
              La liste ci-dessous détaille les communes de la Marne. Dans les
              départements limitrophes, la règle est la même : si le chantier est
              dans le rayon de {RADIUS_KM} km, il est dans notre zone.
            </p>
          </div>
        </Container>
      </section>

      {/* COMMUNES PAR SECTEUR */}
      <section className="bg-gray-50 py-16">
        <Container>
          <SectionHeading
            title="Les communes où nous intervenons"
            subtitle="Chacune a sa page : ce que l'on trouve sur ses toits, et ce que cela change sur un chantier."
          />

          <div className="mx-auto max-w-5xl space-y-14">
            {secteurs.map(({ secteur, communes }) => (
              <div key={secteur.id}>
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  {secteur.titre}
                </h3>
                <p className="mb-6 max-w-3xl leading-relaxed text-gray-600">
                  {secteur.chapeau}
                </p>
                <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {communes.map((city) => (
                    <CommuneCard key={city.slug} city={city} />
                  ))}
                </ul>
              </div>
            ))}

            {autres.length > 0 && (
              <div>
                <h3 className="mb-6 text-xl font-bold text-gray-900">
                  Autres communes desservies
                </h3>
                <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {autres.map((city) => (
                    <CommuneCard key={city.slug} city={city} />
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="mx-auto mt-12 max-w-5xl rounded-xl border border-orange-200 bg-orange-50 p-6">
            <h3 className="mb-2 text-lg font-bold text-gray-900">
              Votre commune n&apos;est pas dans la liste ?
            </h3>
            <p className="leading-relaxed text-gray-700">
              Elle est probablement desservie quand même : nous nous déplaçons
              dans tout le rayon de {RADIUS_KM} km, et la Marne compte plusieurs
              centaines de communes. Un appel au{" "}
              <a
                href={BUSINESS.phoneHref}
                className="font-semibold text-orange-700 hover:underline"
              >
                {BUSINESS.phone}
              </a>{" "}
              suffit à le confirmer.
            </p>
          </div>
        </Container>
      </section>

      {/* OU NOUS SOMMES */}
      <section className="bg-white py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Où nous sommes, où nous allons
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Notre atelier et notre adresse d&apos;immatriculation sont à{" "}
              {BUSINESS.address.city}. C&apos;est de là que part le camion,
              chargé, sans dépôt intermédiaire : aller voir une toiture à
              Châlons, à Suippes ou à Épernay n&apos;a rien d&apos;une expédition.
            </p>
            <p className="mb-4 leading-relaxed text-gray-700">
              Partout dans le rayon, la marche à suivre est la même. Vous
              appelez, nous venons voir, vous recevez un devis écrit. Le
              déplacement et le devis sont gratuits, et c&apos;est{" "}
              {BUSINESS.operatorName} qui se déplace.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/couvreur/ecury-sur-coole"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-gray-300 px-5 py-3 font-semibold text-gray-800 transition-colors hover:border-orange-400 hover:text-orange-700"
              >
                <Building2 className="h-5 w-5" aria-hidden="true" /> Notre siège à{" "}
                {BUSINESS.address.city}
              </Link>
              <Link
                href="/couvreur/chalons-en-champagne"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-gray-300 px-5 py-3 font-semibold text-gray-800 transition-colors hover:border-orange-400 hover:text-orange-700"
              >
                <MapPin className="h-5 w-5" aria-hidden="true" /> Couvreur à
                Châlons-en-Champagne
              </Link>
              <Link
                href="/tarifs"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-gray-300 px-5 py-3 font-semibold text-gray-800 transition-colors hover:border-orange-400 hover:text-orange-700"
              >
                Nos tarifs
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
