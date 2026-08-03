/**
 * PAGE TARIFS — grille de prix publiee.
 *
 * ============================ A LIRE AVANT DE PUBLIER ========================
 * LES MONTANTS DE CE FICHIER ENGAGENT L'ENTREPRISE.
 *
 * Un « a partir de » affiche sur un site est un PLANCHER OPPOSABLE, pas un
 * ordre de grandeur. Un prix annonce ici puis dementi au devis constitue une
 * pratique commerciale trompeuse au sens de l'article L121-2 du code de la
 * consommation. Le gerant doit donc VALIDER un par un, avant mise en ligne :
 *   - TAUX_HORAIRE_TTC et DECOMPTE_DU_TEMPS ;
 *   - chaque `aPartirDe` du tableau GROUPES ;
 *   - l'absence de majoration de nuit, de samedi et d'urgence, qui est ecrite
 *     en toutes lettres sur la page et devra donc etre tenue SANS EXCEPTION.
 * Une majoration non annoncee et facturee ensuite detruirait la credibilite de
 * toute la page, et l'arrete impose de publier TOUS les taux pratiques.
 *
 * ORIGINE DES MONTANTS : releve de marche 2026 (guides de prix nationaux, plus
 * trois sources reellement locales : un couvreur de la Marne publiant une
 * grille, un couvreur remois, une page budgetaire departementale). La colonne
 * « marche » du tableau est un REPERE releve dans ces sources — jamais une
 * moyenne du departement, jamais une comparaison avec un concurrent nomme
 * (publicite comparative et denigrement : C. conso. art. L122-1 et suivants).
 * Ne JAMAIS citer d'enseigne concurrente sur cette page.
 *
 * REVISION : la grille est datee (GRILLE_ANNEE) et doit etre revue au moins une
 * fois par an. L'indice BT32 est a 145,2 en mars 2026, soit +2,9 % sur un an :
 * une grille non revisee derive et devient une source de litige.
 *
 * CADRE REGLEMENTAIRE : arrete du 24 janvier 2017, dont l'annexe 1 vise
 * nommement « couverture, toiture (y compris application d'hydrofuge et
 * demoussage) » et « etancheite ». Son article 3 impose que ces informations
 * soient « aisement accessibles sur tout espace de communication en ligne dedie
 * au professionnel » — la page est donc INDEXABLE, ne pas y ajouter de noindex.
 * Les six informations dues par l'article 2 sont toutes rendues :
 *   1. taux horaire TTC ................ bloc « Taux horaire »
 *   2. decompte du temps ............... bloc « Decompte du temps »
 *   3. prix forfaitaires TTC (m2, ml) .. tableau GROUPES
 *   4. frais de deplacement ............ bloc « Deplacement » + ligne du tableau
 *   5. devis gratuit ou payant ......... bloc « Devis » (LEGAL.pricing.quoteIsFree)
 *   6. autres conditions ............... bloc « Ce qui s'ajoute »
 *
 * CE QUI NE DOIT PAS REVENIR SUR CETTE PAGE
 *  - le bloc « Point de vigilance » sur l'absence de qualification RGE. Aucun
 *    texte n'oblige a publier ce qu'on n'a pas ; l'obligation (C. conso. art.
 *    L122-26) est le renvoi vers France Renov', qui est rendu plus bas. Ne rien
 *    promettre suffit : LEGAL.isRGE reste `false` et interdit toute mention de
 *    MaPrimeRenov', de CEE ou d'eco-PTZ comme mobilisables sur nos chantiers.
 *  - les pastilles ambre de contenu manquant, qui affichaient au client le
 *    cahier des charges du developpeur a la place des prix.
 *  - les citations d'articles de loi en corps de texte commercial. Le cadre
 *    reglementaire tient en une ligne discrete, en pied de page.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { BUSINESS, LEGAL, SEO } from "@/lib/constants";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import {
  BUSINESS_ID,
  absoluteUrl,
  serializeJsonLd,
} from "@/components/seo/serializeJsonLd";

/** Millesime de la grille. A incrementer a chaque revision annuelle. */
const GRILLE_ANNEE = 2026;

const PAGE_PATH = "/tarifs";

/**
 * Taux horaire de main-d'oeuvre, TTC.
 *
 * `LEGAL.pricing.hourlyRateTTC` vaut encore `null` : la valeur vit ici tant
 * qu'elle n'a pas ete arbitree par le gerant. Le jour ou elle l'est, la
 * reporter dans les constantes et lire la constante depuis cette page.
 *
 * Declaree AVANT `metadata`, qui la cite : une constante lue plus haut que sa
 * declaration serait dans la zone morte temporelle au chargement du module.
 */
const TAUX_HORAIRE_TTC = 45;

const DECOMPTE_DU_TEMPS =
  "Le temps est décompté à la demi-heure entamée, à partir de notre arrivée sur le chantier. La demi-heure est la plus petite durée facturable : il n'y a pas de minimum d'intervention au-delà.";

export const metadata: Metadata = {
  title: `Tarifs ${GRILLE_ANNEE} : prix au m² et taux horaire`,
  description: `Prix de départ TTC par prestation : réfection de toiture au m², démoussage, zinguerie, dépannage. Taux horaire de ${TAUX_HORAIRE_TTC} € TTC, déplacement et devis gratuits.`,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: BUSINESS.displayName,
    title: `Tarifs ${GRILLE_ANNEE} d'un couvreur dans la Marne`,
    description:
      "Nos prix de départ TTC, prestation par prestation, notre taux horaire et nos conditions de devis. Déplacement et devis gratuits.",
    url: PAGE_PATH,
    images: [{ url: SEO.ogImage, width: 1200, height: 630 }],
  },
};

/* -------------------------------------------------------------------------- */
/*  DONNEES DE LA GRILLE                                                       */
/* -------------------------------------------------------------------------- */

type CleUnite = "m2" | "ml" | "fenetre" | "forfait" | "heure";

/**
 * `label` s'affiche a l'ecran, `schema` part dans le JSON-LD, `code` est le
 * code UN/CEFACT attendu par `unitCode` (MTK = metre carre, MTR = metre,
 * HUR = heure, C62 = unite).
 */
const UNITES: Record<CleUnite, { label: string; schema: string; code: string }> = {
  m2: { label: "le m²", schema: "m²", code: "MTK" },
  ml: { label: "le mètre linéaire", schema: "mètre linéaire", code: "MTR" },
  fenetre: { label: "par fenêtre posée", schema: "fenêtre", code: "C62" },
  forfait: { label: "au forfait", schema: "intervention", code: "C62" },
  heure: { label: "de l'heure", schema: "heure", code: "HUR" },
};

interface Prestation {
  /** Identifiant stable : sert d'ancre `@id` dans le JSON-LD. */
  id: string;
  libelle: string;
  /** Une phrase : ce que le prix de depart suppose, ou ce qu'il ne couvre pas. */
  precision: string;
  unite: CleUnite;
  /** Prix de depart TTC. `0` = gratuit. */
  aPartirDe: number;
  /** Repere de marche 2026 [bas, haut], ou `null` si aucune source exploitable. */
  marche: [number, number] | null;
}

interface GroupeTarifs {
  id: string;
  titre: string;
  prestations: Prestation[];
}

const GROUPES: GroupeTarifs[] = [
  {
    id: "refection",
    titre: "Réfection de toiture",
    prestations: [
      {
        id: "refection-tuile-mecanique",
        libelle: "Toiture en tuile mécanique",
        precision: "Fourniture et pose sur une toiture à deux pans.",
        unite: "m2",
        aPartirDe: 55,
        marche: [60, 140],
      },
      {
        id: "refection-tuile-plate",
        libelle: "Toiture en tuile plate",
        precision:
          "À surface égale, la pose est bien plus dense qu'en tuile mécanique.",
        unite: "m2",
        aPartirDe: 72,
        marche: [80, 150],
      },
      {
        id: "refection-ardoise",
        libelle: "Toiture en ardoise",
        precision: "Pose au crochet, sur liteaunage neuf.",
        unite: "m2",
        aPartirDe: 78,
        marche: [80, 165],
      },
    ],
  },
  {
    id: "entretien",
    titre: "Entretien et traitement",
    prestations: [
      {
        id: "demoussage",
        libelle: "Démoussage",
        precision:
          "Brossage, rinçage et application d'un traitement anti-mousse.",
        unite: "m2",
        aPartirDe: 8.9,
        marche: [9, 35],
      },
      {
        id: "hydrofuge",
        libelle: "Traitement hydrofuge",
        precision:
          "S'ajoute au démoussage : le produit ne tient que sur une couverture propre.",
        unite: "m2",
        aPartirDe: 6,
        marche: [5, 20],
      },
      {
        id: "nettoyage-toiture",
        libelle: "Nettoyage haute pression",
        precision: "Nettoyage seul, sans traitement anti-mousse ni hydrofuge.",
        unite: "m2",
        aPartirDe: 7,
        marche: [8, 25],
      },
    ],
  },
  {
    id: "zinguerie",
    titre: "Zinguerie et évacuation des eaux",
    prestations: [
      {
        id: "gouttiere-zinc",
        libelle: "Gouttière en zinc",
        precision:
          "Fourniture et pose sur linéaire droit. La dépose de l'ancienne gouttière se chiffre à part.",
        unite: "ml",
        aPartirDe: 34,
        marche: [36, 100],
      },
      {
        id: "descente-eau-pluviale",
        libelle: "Descente d'eau pluviale",
        precision: "Fourniture et pose.",
        unite: "ml",
        aPartirDe: 22,
        marche: [20, 70],
      },
      {
        id: "solin-zinc",
        libelle: "Solin en zinc",
        precision:
          "En pied de mur. Une souche de cheminée se chiffre après visite.",
        unite: "ml",
        aPartirDe: 24,
        marche: [25, 80],
      },
      {
        id: "noue-zinc",
        libelle: "Noue en zinc façonnée",
        precision:
          "Façonnage sur mesure. La couverture reprise de part et d'autre est comptée à part.",
        unite: "ml",
        aPartirDe: 38,
        marche: [40, 100],
      },
      {
        id: "faitage",
        libelle: "Faîtage",
        precision:
          "Scellement à sec sur closoir ventilé. Une réfection au mortier se chiffre après visite.",
        unite: "ml",
        aPartirDe: 28,
        marche: [30, 165],
      },
    ],
  },
  {
    id: "depannage",
    titre: "Dépannage et réparation",
    prestations: [
      {
        id: "recherche-de-fuite",
        libelle: "Recherche de fuite",
        precision:
          "Diagnostic visuel sur place. Une recherche au fumigène ou à la caméra thermique fait l'objet d'un devis distinct.",
        unite: "forfait",
        aPartirDe: 90,
        marche: [120, 400],
      },
      {
        id: "reparation-fuite",
        libelle: "Réparation ponctuelle d'une fuite",
        precision: "Une heure de main-d'œuvre et les petites fournitures.",
        unite: "forfait",
        aPartirDe: 140,
        marche: [150, 600],
      },
      {
        id: "remplacement-tuiles",
        libelle: "Remplacement de quelques tuiles",
        precision:
          "Fournitures comprises. Au-delà de quelques tuiles, le chiffrage passe au m².",
        unite: "forfait",
        aPartirDe: 130,
        marche: [150, 300],
      },
    ],
  },
  {
    id: "ouvertures-facades",
    titre: "Fenêtres de toit et façades",
    prestations: [
      {
        id: "fenetre-de-toit",
        libelle: "Fenêtre de toit posée en remplacement",
        precision:
          "Modèle standard à rotation manuelle, à la place d'une fenêtre existante. Créer une ouverture neuve suppose une reprise de charpente : devis spécifique.",
        unite: "fenetre",
        aPartirDe: 590,
        marche: [600, 2600],
      },
      {
        id: "ravalement-enduit",
        libelle: "Ravalement de façade avec enduit",
        precision:
          "Façade droite de plain-pied ou à un étage, sans reprise de support importante.",
        unite: "m2",
        aPartirDe: 38,
        marche: [40, 140],
      },
      {
        id: "nettoyage-facade",
        libelle: "Nettoyage de façade",
        precision: "Haute pression et traitement anti-mousse.",
        unite: "m2",
        aPartirDe: 9,
        marche: [6, 30],
      },
    ],
  },
  {
    id: "deplacement",
    titre: "Déplacement et devis",
    prestations: [
      {
        id: "deplacement-devis",
        libelle: "Visite, prise de mesures et devis écrit",
        precision:
          "Partout dans notre rayon de 60 km, que vous nous confiiez ensuite les travaux ou non.",
        unite: "forfait",
        aPartirDe: 0,
        marche: [20, 60],
      },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  TEXTES LONGS                                                               */
/* -------------------------------------------------------------------------- */

const CE_QUI_SAJOUTE = [
  "l'échafaudage ou la location d'une nacelle",
  "la dépose de la couverture existante et son évacuation en déchetterie",
  "la reprise ou le traitement de la charpente",
  "l'écran de sous-toiture et les liteaux, quand leur état impose de les changer",
  "l'isolation",
  "les travaux de maçonnerie ou d'électricité liés au chantier",
];

const CE_QUI_FAIT_VARIER = [
  "La pente et la complexité du toit : croupes, noues, lucarnes, souches de cheminée.",
  "La hauteur et le nombre de niveaux, qui décident du mode d'accès au toit.",
  "L'accès du terrain pour le camion et le matériel.",
  "L'état réel de la charpente et du support, qui ne se voit qu'une fois la couverture ouverte.",
  "La surface : au-delà de 100 m², le prix au m² baisse, l'échafaudage étant un coût fixe qui se dilue.",
  "Le matériau existant et celui que vous choisissez.",
];

/* -------------------------------------------------------------------------- */
/*  RENDU                                                                      */
/* -------------------------------------------------------------------------- */

/** Formatage francais : espace insecable avant l'euro, virgule decimale. */
function euro(value: number): string {
  const [entier, decimales] = value.toFixed(2).split(".");
  const groupe = entier.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  const nombre = decimales === "00" ? groupe : `${groupe},${decimales}`;
  return `${nombre} €`;
}

function prixDeDepart(prestation: Prestation): string {
  if (prestation.aPartirDe === 0) return "Gratuit";
  return `${euro(prestation.aPartirDe)} ${UNITES[prestation.unite].label}`;
}

/** Repere de marche, ou `null` si aucune source exploitable ne le fonde. */
function repereDeMarche(prestation: Prestation): string | null {
  if (!prestation.marche) return null;
  const [bas, haut] = prestation.marche;
  return `${bas} à ${euro(haut)}`;
}

function Fiche({
  titre,
  children,
}: {
  titre: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="mb-2 text-base font-bold text-gray-900">{titre}</h3>
      <div className="text-sm leading-relaxed text-gray-700">{children}</div>
    </div>
  );
}

const H2 = "mt-14 mb-4 text-2xl font-bold text-gray-900";
const P = "mb-4 leading-relaxed text-gray-700";

/**
 * Grille tarifaire balisee.
 *
 * Le noeud reprend `BUSINESS_ID` : il ne redecrit pas l'entreprise, il ajoute
 * `makesOffer` a l'entite deja declaree par le layout, que Google fusionne par
 * identifiant. Chaque prix publie a l'ecran a son `Offer` et son
 * `UnitPriceSpecification` — un prix visible qui n'aurait pas son equivalent
 * balise, ou l'inverse, serait une incoherence dans le meme document.
 */
function TarifsJsonLd() {
  const areaServed = BUSINESS.departments.map((department) => ({
    "@type": "AdministrativeArea",
    name: department.replace(/\s*\(\d+\)\s*$/, ""),
  }));

  const pageUrl = absoluteUrl(PAGE_PATH);
  const priceValidUntil = `${GRILLE_ANNEE}-12-31`;

  const offreTauxHoraire = {
    "@type": "Offer",
    "@id": `${pageUrl}#offre-main-doeuvre`,
    name: "Main-d'œuvre de couverture",
    description: DECOMPTE_DU_TEMPS,
    priceCurrency: "EUR",
    priceValidUntil,
    areaServed,
    businessFunction: "https://purl.org/goodrelations/v1#ProvideService",
    itemOffered: {
      "@type": "Service",
      name: "Main-d'œuvre de couverture",
      serviceType: "Couverture",
      provider: { "@id": BUSINESS_ID },
    },
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      priceCurrency: "EUR",
      price: TAUX_HORAIRE_TTC,
      valueAddedTaxIncluded: true,
      unitCode: UNITES.heure.code,
      unitText: UNITES.heure.schema,
    },
  };

  const offres = GROUPES.flatMap((groupe) =>
    groupe.prestations.map((prestation) => {
      const unite = UNITES[prestation.unite];
      return {
        "@type": "Offer",
        "@id": `${pageUrl}#offre-${prestation.id}`,
        name: prestation.libelle,
        description: prestation.precision,
        category: groupe.titre,
        priceCurrency: "EUR",
        priceValidUntil,
        areaServed,
        businessFunction: "https://purl.org/goodrelations/v1#ProvideService",
        itemOffered: {
          "@type": "Service",
          name: prestation.libelle,
          serviceType: groupe.titre,
          provider: { "@id": BUSINESS_ID },
        },
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          priceCurrency: "EUR",
          price: prestation.aPartirDe,
          // `minPrice` dit « a partir de ». Une prestation gratuite n'a pas de
          // plancher : elle a un prix, et il vaut zero.
          ...(prestation.aPartirDe > 0 ? { minPrice: prestation.aPartirDe } : {}),
          valueAddedTaxIncluded: true,
          unitCode: unite.code,
          unitText: unite.schema,
        },
      };
    })
  );

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["RoofingContractor", "HomeAndConstructionBusiness"],
        "@id": BUSINESS_ID,
        makesOffer: [offreTauxHoraire, ...offres],
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

export default function TarifsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Tarifs", url: PAGE_PATH },
        ]}
      />
      <TarifsJsonLd />

      <section className="bg-white py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold text-gray-900">
              Nos tarifs {GRILLE_ANNEE} et nos conditions de devis
            </h1>
            <p className="mb-4 text-lg leading-relaxed text-gray-600">
              Voici sur quelles bases nous chiffrons un chantier de couverture,
              de toiture, de démoussage ou d&apos;étanchéité — avant même que
              vous nous appeliez. Tous les montants sont en euros toutes taxes
              comprises.
            </p>
            <p className="mb-10 text-lg leading-relaxed text-gray-600">
              Le déplacement et le devis sont gratuits. Les prix ci-dessous sont
              des prix de départ : ils vous disent comment votre chantier sera
              calculé. Le montant ferme, lui, est celui du devis écrit établi
              après la visite.
            </p>

            {/* ------------------------------------------ BASES DE FACTURATION */}
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Nos bases de facturation
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Fiche titre="Taux horaire de main-d'œuvre">
                <p className="mb-2">
                  <strong className="text-lg text-gray-900">
                    {euro(TAUX_HORAIRE_TTC)} {UNITES.heure.label}
                  </strong>
                </p>
                <p>
                  Le même taux à toute heure : {BUSINESS.hours}, fermé le
                  dimanche. Ni tarif de nuit, ni majoration du samedi, ni
                  supplément d&apos;urgence.
                </p>
              </Fiche>

              <Fiche titre="Décompte du temps">
                <p>{DECOMPTE_DU_TEMPS}</p>
              </Fiche>

              <Fiche titre="Déplacement">
                <p className="mb-2">
                  <strong className="text-lg text-gray-900">
                    {LEGAL.pricing.travelFees}
                  </strong>
                </p>
                <p>
                  Aucun frais de route, aucun forfait kilométrique, dans tout
                  notre rayon de {BUSINESS.serviceRadius.value} km.
                </p>
              </Fiche>

              <Fiche titre="Devis">
                {LEGAL.pricing.quoteIsFree ? (
                  <p>
                    <strong className="text-gray-900">Gratuit</strong>, écrit et
                    détaillé, y compris la visite nécessaire pour l&apos;établir
                    — et quelle que soit la suite que vous y donnez.
                  </p>
                ) : (
                  <p>
                    Le devis est payant. Son coût vous est annoncé avant tout
                    déplacement et déduit de la facture si vous nous confiez les
                    travaux.
                  </p>
                )}
              </Fiche>

              <Fiche titre="Ce qui s'ajoute, le cas échéant">
                <p>
                  Location d&apos;échafaudage ou de nacelle, évacuation des
                  déchets et acompte éventuel sont détaillés poste par poste sur
                  le devis. Rien ne s&apos;ajoute après signature sans votre
                  accord écrit.
                </p>
              </Fiche>

              <Fiche titre="TVA">
                <p>
                  Nos prix sont toutes taxes comprises : c&apos;est la somme que
                  vous aurez à payer. Le taux appliqué figure sur le devis — 10 %
                  pour l&apos;entretien, la réparation et l&apos;amélioration
                  d&apos;un logement achevé depuis plus de deux ans, 20 % pour le
                  neuf, les extensions et les dépendances.
                </p>
              </Fiche>
            </div>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------ GRILLE */}
      <section className="bg-gray-50 py-16">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-3 text-2xl font-bold text-gray-900">
              Nos prix de départ, prestation par prestation
            </h2>
            <p className="mb-6 leading-relaxed text-gray-700">
              Chaque ligne porte aussi, en petit, la fourchette relevée en{" "}
              {GRILLE_ANNEE} sur le marché de la couverture, en France et dans la
              Marne. C&apos;est un repère pour situer notre prix, pas une moyenne
              du département.
            </p>

            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
              <table className="w-full border-collapse text-left">
                <caption className="sr-only">
                  Prix de départ toutes taxes comprises par prestation, grille{" "}
                  {GRILLE_ANNEE}
                </caption>
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50 text-sm">
                    <th scope="col" className="px-5 py-3 font-semibold text-gray-900">
                      Prestation
                    </th>
                    <th scope="col" className="px-5 py-3 font-semibold text-gray-900">
                      À partir de (TTC)
                    </th>
                  </tr>
                </thead>
                {GROUPES.map((groupe) => (
                  <tbody key={groupe.id}>
                    <tr className="border-y border-gray-200 bg-gray-50">
                      <th
                        scope="rowgroup"
                        colSpan={2}
                        className="px-5 py-2 text-sm font-bold uppercase tracking-wide text-orange-700"
                      >
                        {groupe.titre}
                      </th>
                    </tr>
                    {groupe.prestations.map((prestation) => {
                      const marche = repereDeMarche(prestation);
                      return (
                        <tr
                          key={prestation.id}
                          className="border-b border-gray-100 last:border-b-0"
                        >
                          <th scope="row" className="px-5 py-4 align-top font-normal">
                            <span className="block font-semibold text-gray-900">
                              {prestation.libelle}
                            </span>
                            <span className="mt-1 block text-sm font-normal text-gray-600">
                              {prestation.precision}
                            </span>
                            {marche && (
                              <span className="mt-1 block text-sm font-normal text-gray-500">
                                Marché {GRILLE_ANNEE} : {marche}
                              </span>
                            )}
                          </th>
                          <td className="px-5 py-4 align-top font-bold text-gray-900">
                            {prixDeDepart(prestation)}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                ))}
              </table>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Prix indicatifs en euros TTC, grille {GRILLE_ANNEE}. Seul le devis
              signé fait foi.
            </p>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------ CE QUE LE PRIX SUPPOSE */}
      <section className="bg-white py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Ce qu&apos;un prix de départ suppose
            </h2>
            <p className={P}>
              Les montants du tableau valent pour une toiture simple à deux pans,
              de plain-pied ou à un étage, avec un accès dégagé pour le camion et
              le matériel, et sans reprise de charpente. C&apos;est le chantier
              courant ; c&apos;est aussi celui qui permet d&apos;annoncer un prix
              avant d&apos;être monté sur le toit.
            </p>
            <p className={P}>Se chiffrent en plus, quand le chantier l&apos;exige :</p>
            <ul className="mb-6 space-y-2">
              {CE_QUI_SAJOUTE.map((item) => (
                <li key={item} className="flex gap-3 text-gray-700">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className={P}>
              Les prix ci-dessus ne couvrent pas les couvertures en fibrociment
              amianté : leur dépose relève d&apos;une filière d&apos;élimination
              réglementée et se chiffre séparément. Nous le repérons à la visite.
            </p>

            <h2 className={H2}>Ce qui fait varier un prix de toiture</h2>
            <ul className="mb-6 space-y-2">
              {CE_QUI_FAIT_VARIER.map((item) => (
                <li key={item} className="flex gap-3 text-gray-700">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className={P}>
              C&apos;est pour cela que nous venons voir. La visite est gratuite,
              elle dure le temps qu&apos;il faut, et elle est le seul moyen
              honnête de transformer un prix de départ en prix ferme.
            </p>

            <h2 className={H2}>Vous recevez toujours un devis écrit</h2>
            <p className={P}>
              Quel que soit le montant, même pour une intervention de quelques
              heures, vous recevez un devis écrit avant que nous montions sur le
              toit. Il détaille chaque prestation et chaque fourniture, en
              quantité et en prix unitaire, avec le total hors taxes et toutes
              taxes comprises et la durée de validité de l&apos;offre. Un
              exemplaire vous reste.
            </p>
            <p className={P}>
              Votre attestation d&apos;assurance décennale est jointe au devis,
              puis à la facture.
            </p>

            <h2 className={H2}>Travaux de rénovation énergétique</h2>
            <p className={P}>
              Avant d&apos;engager des travaux qui touchent à l&apos;isolation,
              vous pouvez obtenir un conseil gratuit, neutre et indépendant auprès
              du service public de la performance énergétique de l&apos;habitat. Il
              vous dira quels travaux sont pertinents pour votre logement, dans quel
              ordre les mener, et à quelles conditions ils peuvent être financés.
            </p>
            <p className={P}>
              <a
                href="https://france-renov.gouv.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-orange-700 px-5 py-3 font-semibold text-white transition-colors hover:bg-orange-800"
              >
                France Rénov&apos; — france-renov.gouv.fr
              </a>
            </p>

            <h2 className={H2}>Demander un devis</h2>
            <p className={P}>
              Décrivez-nous votre toiture au{" "}
              <a
                href={BUSINESS.phoneHref}
                className="font-semibold text-orange-700 hover:underline"
              >
                {BUSINESS.phone}
              </a>{" "}
              ou par le{" "}
              <Link
                href="/contact"
                className="font-semibold text-orange-700 hover:underline"
              >
                formulaire de contact
              </Link>
              . Le détail de chaque prestation est sur la page{" "}
              <Link href="/services" className="text-orange-700 hover:underline">
                nos services
              </Link>
              , et les communes où nous nous déplaçons sur la page{" "}
              <Link
                href="/zone-intervention"
                className="text-orange-700 hover:underline"
              >
                zone d&apos;intervention
              </Link>
              .
            </p>

            <p className="mt-12 border-t border-gray-200 pt-6 text-sm text-gray-500">
              Grille {GRILLE_ANNEE}, revue chaque année. Prix en euros toutes
              taxes comprises, publiés au titre de l&apos;information du
              consommateur sur les prix des prestations de dépannage, de
              réparation et d&apos;entretien du bâtiment. Les informations légales
              relatives à l&apos;entreprise figurent dans les{" "}
              <Link href="/mentions-legales" className="hover:underline">
                mentions légales
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
