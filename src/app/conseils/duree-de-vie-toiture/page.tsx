/**
 * ARTICLE — « Quelle est la duree de vie moyenne d'une toiture ? »
 *
 * Regle de tenue de ce fichier : aucun chiffre sans source nommee dans le
 * texte. Les fourchettes par materiau sont donnees comme des ordres de
 * grandeur de la litterature professionnelle, jamais comme des normes — parce
 * qu'aucune norme ne fixe de duree de vie de couverture. Les seuls chiffres
 * opposables cites ici sont la garantie de 30 ans des fabricants de tuiles
 * terre cuite, les statistiques de sinistralite de l'AQC et les durees des
 * garanties legales du code civil.
 *
 * PAS de `datePublished` dans le JSON-LD : aucune date reelle de publication
 * n'est disponible, et une date inventee est une donnee fausse publiee.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { BUSINESS_ID, serializeJsonLd } from "@/components/seo/serializeJsonLd";
import { BUSINESS, SEO } from "@/lib/constants";

const PATH = "/conseils/duree-de-vie-toiture";
const TITLE = "Durée de vie d'une toiture : ce qui vieillit vraiment";
const DESCRIPTION =
  "Ardoise, tuile, zinc : aucune norme ne fixe la durée de vie d'une couverture. Ce qui la détermine, c'est la pose, les points singuliers et l'entretien.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    type: "article",
    locale: "fr_FR",
    siteName: BUSINESS.name,
    title: `${TITLE} | ${BUSINESS.name}`,
    description: DESCRIPTION,
    url: PATH,
    images: [{ url: SEO.ogImage, width: 1200, height: 630 }],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${SEO.siteUrl}${PATH}#article`,
  headline: "Quelle est la durée de vie moyenne d'une toiture ?",
  description: DESCRIPTION,
  inLanguage: "fr-FR",
  mainEntityOfPage: { "@id": `${SEO.siteUrl}${PATH}#webpage` },
  isPartOf: { "@id": `${SEO.siteUrl}${PATH}#webpage` },
  author: { "@id": BUSINESS_ID },
  publisher: { "@id": BUSINESS_ID },
  about: [
    { "@type": "Thing", name: "Durée de vie d'une toiture" },
    { "@type": "Thing", name: "Couverture en petits éléments" },
    { "@type": "Thing", name: "Garantie décennale" },
  ],
  citation: [
    {
      "@type": "CreativeWork",
      name: "Agence qualité construction — Flop 10 des désordres décennaux, rapport 2026 (base Sycodés)",
      url: "https://qualiteconstruction.com/actualite/desordres-decennaux-aqc-2026-flop-10-sinistralite-francaise-06-2026/",
    },
    {
      "@type": "CreativeWork",
      name: "Article 1792 du code civil — responsabilité décennale",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006443552",
    },
  ],
};

const H2 = "mt-12 mb-4 text-2xl font-bold text-gray-900 sm:text-3xl";
const H3 = "mt-8 mb-3 text-xl font-bold text-gray-900";
const P = "mb-4 leading-relaxed text-gray-700";
const UL = "mb-4 ml-5 list-disc space-y-2 leading-relaxed text-gray-700 marker:text-orange-700";
const A = "font-semibold text-orange-700 underline underline-offset-2 hover:text-orange-800";

export default function DureeDeVieToiturePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Conseils", url: "/conseils" },
          { name: "Durée de vie d'une toiture", url: PATH },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(articleJsonLd) }}
      />

      <article>
        {/* EN-TÊTE */}
        <header className="border-b border-gray-200 bg-gray-50 py-14">
          <Container>
            <div className="mx-auto max-w-3xl">
              <nav aria-label="Fil d'Ariane" className="mb-5 text-sm text-gray-500">
                <Link href="/" className="hover:text-orange-700">
                  Accueil
                </Link>
                <span className="px-2" aria-hidden="true">
                  /
                </span>
                <Link href="/conseils" className="hover:text-orange-700">
                  Conseils
                </Link>
              </nav>
              <h1 className="mb-6 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Quelle est la durée de vie moyenne d&apos;une toiture ?
              </h1>
              <p className="text-lg leading-relaxed text-gray-700">
                <strong>Aucune norme ne fixe la durée de vie d&apos;une toiture.</strong> La
                littérature professionnelle donne des ordres de grandeur — 30 à 50 ans pour une
                tuile béton, 50 à 100 ans pour une tuile de terre cuite, 75 à 150 ans pour une
                ardoise naturelle — mais ces chiffres ne décrivent que l&apos;élément de
                couverture. La durée de vie de l&apos;ouvrage, elle, est celle de son maillon
                faible. Et le maillon faible n&apos;est presque jamais la tuile.
              </p>
            </div>
          </Container>
        </header>

        {/* CORPS */}
        <div className="bg-white py-12">
          <Container>
            <div className="mx-auto max-w-3xl">
              <p className={P}>
                Trois durées circulent sous le même mot. Les confondre conduit à refaire trop tôt
                une couverture saine, ou à laisser vieillir un ouvrage dont un détail de pose est
                en train de céder. Commençons par les séparer.
              </p>

              <h2 className={H2}>Trois durées que l&apos;on confond en permanence</h2>

              <h3 className={H3}>1. La durée de vie du matériau : un ordre de grandeur</h3>
              <p className={P}>
                C&apos;est le chiffre que l&apos;on trouve partout. Il faut le lire pour ce
                qu&apos;il est : une moyenne d&apos;observation, pas une donnée normative. Les
                fourchettes varient d&apos;une source à l&apos;autre, parfois du simple au double,
                parce qu&apos;elles ne mesurent pas la même chose — la tenue mécanique, la tenue à
                l&apos;eau, ou simplement l&apos;âge auquel une couverture a été refaite.
              </p>
              <ul className={UL}>
                <li>
                  <strong>Ardoise naturelle</strong> — 75 à 150 ans.
                </li>
                <li>
                  <strong>Tuile en terre cuite</strong> — 50 à 100 ans.
                </li>
                <li>
                  <strong>Zinc</strong> — 50 à 110 ans selon les sources et l&apos;épaisseur employée.
                </li>
                <li>
                  <strong>Tuile béton</strong> — 30 à 50 ans.
                </li>
              </ul>
              <p className={P}>
                Ces tableaux omettent toujours la variable qui compte le plus : l&apos;exposition.
                Un même modèle de tuile ne vieillit pas au même rythme sur un versant nord
                ombragé, qui reste humide plusieurs jours après une pluie, et sur un versant sud
                dégagé qui sèche en une heure. Sur une même maison, les deux pans peuvent avoir
                vingt ans d&apos;écart d&apos;état réel.
              </p>

              <h3 className={H3}>2. La garantie du fabricant : 30 ans, et c&apos;est un fait daté</h3>
              <p className={P}>
                Les principaux fabricants de tuiles en terre cuite — Terreal, Edilians, Monier —
                garantissent <strong>trente ans</strong> la résistance au gel de leurs produits, sur
                la base des essais de la norme NF EN 1304. Contrairement aux fourchettes
                ci-dessus, cette durée n&apos;est pas une estimation de blog : c&apos;est un
                engagement contractuel, écrit et opposable.
              </p>
              <p className={P}>
                Une garantie n&apos;est pas une durée de vie. Trente ans de garantie sur le gel ne
                signifient pas qu&apos;une tuile dure trente ans — elle en dure ordinairement bien
                davantage — mais que le fabricant répond du gel pendant trente ans. C&apos;est un
                plancher contractuel, pas un plafond technique.
              </p>
              <p className={P}>
                Cet engagement est conditionnel, et les conditions sont toujours les mêmes : une
                mise en œuvre conforme aux NF DTU de couverture, l&apos;emploi des accessoires
                compatibles de la gamme — faîtières, closoirs, tuiles de rive, chatières — et une
                ventilation correcte de la sous-face. Autrement dit,{" "}
                <strong>la garantie du matériau est suspendue à la qualité de la pose</strong>. Ce
                n&apos;est pas le produit qui décide de sa longévité, c&apos;est le chantier.
              </p>

              <h3 className={H3}>3. La durée de vie de l&apos;ouvrage : celle du maillon faible</h3>
              <p className={P}>
                Une couverture n&apos;est pas un matériau, c&apos;est un assemblage : charpente,
                liteaux, écran de sous-toiture, fixations, éléments de couverture, points
                singuliers, zinguerie, évacuation des eaux pluviales. L&apos;ouvrage cède au
                premier de ces composants qui lâche, jamais au dernier. C&apos;est cette
                durée-là qui vous intéresse, et c&apos;est la seule dont on ne parle nulle part.
              </p>

              <h2 className={H2}>Le maillon faible n&apos;est presque jamais la tuile</h2>
              <p className={P}>
                Sur une toiture qui a passé cinquante ans, ce qui a vieilli n&apos;est pas ce que
                l&apos;on voit depuis la rue. Ce sont les pièces cachées, et les raccords.
              </p>
              <ul className={UL}>
                <li>
                  <strong>Les liteaux et le support.</strong> Ils travaillent sous l&apos;humidité,
                  noircissent, deviennent friables. Une tuile parfaitement saine sur un liteau
                  pourri glisse au premier coup de vent.
                </li>
                <li>
                  <strong>L&apos;écran de sous-toiture.</strong> Il se détend, se perce sur les
                  pointes, se déchire aux angles. Beaucoup de couvertures anciennes n&apos;en ont
                  tout simplement pas : la moindre infiltration arrive alors directement sur le
                  bois.
                </li>
                <li>
                  <strong>Les fixations.</strong> Crochets d&apos;ardoise, clous, vis, pattes de
                  zinguerie : la corrosion les prend bien avant que l&apos;élément qu&apos;ils
                  tiennent ne soit usé.
                </li>
                <li>
                  <strong>Les points singuliers.</strong> Noues, solins, souches de cheminée,
                  sorties de toit, rives, raccords contre mur. C&apos;est là que la toiture est
                  fabriquée sur place, pièce par pièce — et donc là qu&apos;elle se trompe.
                </li>
                <li>
                  <strong>La zinguerie et l&apos;évacuation.</strong> Gouttières, chéneaux,
                  descentes. Une descente bouchée fait déborder une gouttière, qui mouille une
                  rive, qui pourrit une planche, qui déstabilise un rang de tuiles. La chaîne est
                  toujours la même.
                </li>
              </ul>
              <p className={P}>
                Cette hiérarchie n&apos;est pas une opinion de métier, elle se lit dans les
                statistiques de sinistralité. L&apos;
                <strong>Agence qualité construction</strong> (AQC) exploite la base Sycodés, qui
                recense les désordres déclarés au titre de la garantie décennale. Dans son rapport
                2026, portant sur les désordres relevés de 1996 à 2025, les couvertures en petits
                éléments — tuiles et ardoises — constituent{" "}
                <strong>le premier poste de désordres décennaux en maison individuelle, avec 9,6 %
                du « Flop 10 »</strong> (9,7 % dans l&apos;édition 2025). Tous bâtiments
                confondus, <strong>67 % des désordres se manifestent par un défaut
                d&apos;étanchéité à l&apos;eau</strong> sur la période 2023-2025.
              </p>
              <p className={P}>
                Et le diagnostic des experts de l&apos;AQC désigne la cause : des « problèmes de
                mise en œuvre au niveau des points singuliers, avec des noues souvent non conformes
                au NF DTU ». Ce qui abrège la vie d&apos;une toiture est donc un mètre de noue, un
                solin, un recouvrement — pas la qualité de la tuile posée par-dessus.
              </p>

              <h2 className={H2}>Ce qui use une couverture dans la Marne</h2>
              <p className={P}>
                Le mécanisme dominant sous notre climat est l&apos;alternance gel-dégel sur des
                éléments devenus poreux. Les normales climatiques 1991-2020 relevées à la station
                de Fagnières, à quelques kilomètres de Châlons-en-Champagne, donnent{" "}
                <strong>11,2 °C de moyenne annuelle</strong> et environ{" "}
                <strong>632 mm de précipitations</strong> réparties sur toute l&apos;année :
                un climat océanique dégradé, sans saison sèche marquée. Une toiture y est rarement
                sèche en profondeur entre novembre et mars.
              </p>
              <p className={P}>
                Tant que la surface d&apos;une tuile est fermée — engobe, émail, ou terre cuite
                dense — l&apos;eau reste dessus et s&apos;évapore. Quand la porosité s&apos;ouvre,
                l&apos;eau pénètre, gèle, augmente de volume et fait éclater le matériau de
                l&apos;intérieur. C&apos;est la gélivité, et le phénomène est cumulatif : chaque
                hiver élargit les fissures du précédent. C&apos;est précisément ce que la norme NF
                EN 1304 mesure, et sur quoi les fabricants adossent leurs trente ans de garantie.
              </p>
              <p className={P}>
                Deux choix de pose pèsent lourd sur cette usure. D&apos;abord la pente et le
                recouvrement : les NF DTU imposent une pente minimale et une valeur de recouvrement
                qui dépendent de la zone climatique (1, 2 ou 3) et de la situation du bâtiment
                (protégée, normale, exposée). La Marne est en <strong>zone 1</strong>, la moins
                sévère. Mais une couverture posée à la limite basse de la pente admissible, avec le
                recouvrement minimal, laisse à l&apos;eau plus de temps pour remonter sous les
                éléments qu&apos;une couverture posée avec de la marge : à matériau identique, elle
                vieillira plus vite. Ensuite la ventilation de la sous-face, qui évacue la vapeur
                d&apos;eau venant du logement. Sans elle, la couverture est humide des deux côtés.
              </p>

              <h2 className={H2}>Les repères d&apos;âge lisibles sur une toiture</h2>
              <p className={P}>
                Certaines couvertures se datent sans document. Le repère le plus net est le
                fibrociment : <strong>une couverture en fibrociment posée avant le 1er juillet 1997
                est présumée contenir de l&apos;amiante</strong>. L&apos;interdiction résulte du
                décret n° 96-1133 du 24 décembre 1996, et c&apos;est cette date de juillet 1997 que
                retient la réglementation du repérage avant travaux. Concrètement, cela donne un
                âge plancher — au moins vingt-neuf ans — et impose un repérage avant toute
                intervention. Une plaque amiantée ne se brosse pas, ne se perce pas, ne se découpe
                pas et ne se nettoie pas au jet : sa dépose relève d&apos;une filière réglementée
                et d&apos;entreprises formées à ce risque.
              </p>
              <p className={P}>
                Les autres repères sont plus banals mais souvent plus fiables : la facture ou le
                devis des derniers travaux, le diagnostic remis lors d&apos;une vente, ou
                simplement l&apos;absence d&apos;écran de sous-toiture, qui trahit généralement une
                couverture ancienne ou une réfection faite sans reprise du support.
              </p>

              <h2 className={H2}>
                Décennale, parfait achèvement : ce que ces durées veulent dire
              </h2>
              <p className={P}>
                Trois garanties légales courent après des travaux. Elles portent sur les travaux
                exécutés, jamais sur la durée de vie de l&apos;ouvrage.
              </p>
              <ul className={UL}>
                <li>
                  <strong>Parfait achèvement, un an</strong> (article 1792-6 du code civil) :
                  l&apos;entreprise reprend les désordres signalés à la réception ou pendant
                  l&apos;année qui suit.
                </li>
                <li>
                  <strong>Bon fonctionnement, deux ans</strong> (article 1792-3) : elle vise les
                  équipements dissociables de l&apos;ouvrage.
                </li>
                <li>
                  <strong>Responsabilité décennale, dix ans</strong> (article 1792) : elle couvre
                  les désordres qui compromettent la solidité de l&apos;ouvrage ou qui le rendent
                  impropre à sa destination. Un défaut d&apos;étanchéité de couverture en relève
                  sans discussion — c&apos;est même le cas d&apos;école.
                </li>
              </ul>
              <p className={P}>
                Dix ans de décennale ne veulent donc pas dire qu&apos;une toiture est garantie dix
                ans. Cela veut dire que pendant dix ans, un désordre répondant à ces critères
                engage la responsabilité de l&apos;entreprise qui a exécuté les travaux. Une
                réfection faite dans les règles dure très largement au-delà ; une couverture mal
                raccordée peut fuir la troisième année, et c&apos;est exactement la situation que
                la décennale traite.
              </p>

              <h2 className={H2}>Ce qui allonge la durée de vie, et ce qui la raccourcit</h2>
              <p className={P}>
                Trois habitudes ont un effet réel. Une pratique très répandue produit
                l&apos;inverse de ce qu&apos;elle promet.
              </p>
              <ul className={UL}>
                <li>
                  <strong>Regarder les points singuliers avant le reste.</strong> Un solin repris,
                  une noue refaite, quelques éléments remplacés coûtent une fraction d&apos;une
                  réfection et traitent l&apos;endroit précis où les statistiques disent que la
                  toiture cède.
                </li>
                <li>
                  <strong>Laisser l&apos;eau partir.</strong> Gouttières et descentes dégagées,
                  raccords étanches : l&apos;eau qui stagne ou qui déborde est la première cause de
                  vieillissement accéléré des rives et des bas de pente.
                </li>
                <li>
                  <strong>Ventiler la sous-face.</strong> C&apos;est aussi la condition posée par
                  les fabricants pour que leur garantie tienne.
                </li>
                <li>
                  <strong>Éviter le nettoyage à haute pression.</strong> Le jet décape l&apos;engobe
                  ou l&apos;émail — la couche qui ferme la surface de la tuile — ouvre la porosité
                  et pousse l&apos;eau sous les recouvrements. Une couverture usée nettoyée au jet
                  haute pression vieillit plus vite après qu&apos;avant.
                </li>
              </ul>
              <p className={P}>
                On lit souvent qu&apos;un démoussage rallonge la durée de vie d&apos;une toiture de
                dix ou vingt ans. Personne ne l&apos;a mesuré et aucune source sérieuse ne
                l&apos;établit. Retirer la mousse supprime une rétention d&apos;eau et rend la
                couverture lisible : c&apos;est utile, cela ne se convertit pas en années. De la
                même façon, aucun texte n&apos;impose à un propriétaire occupant une fréquence
                d&apos;entretien de sa toiture. Le rythme utile dépend de l&apos;exposition, des
                arbres alentour et de la pente, pas d&apos;un calendrier.
              </p>

              <h2 className={H2}>Faut-il refaire maintenant ou dans dix ans ?</h2>
              <p className={P}>
                L&apos;âge ne décide de rien à lui seul. Trois questions décident.
              </p>
              <ul className={UL}>
                <li>
                  <strong>Est-ce que l&apos;eau entre ?</strong> Les signes se lisent depuis le sol
                  et surtout depuis les combles — c&apos;est l&apos;objet de notre article sur{" "}
                  <Link href="/conseils/toiture-en-mauvais-etat-signes" className={A}>
                    les signes d&apos;une toiture en mauvais état
                  </Link>
                  .
                </li>
                <li>
                  <strong>Est-ce que le support tient ?</strong> Liteaux sains, charpente sèche,
                  écran en place : tant que le support est bon, la couverture se répare.
                </li>
                <li>
                  <strong>La reprise est-elle ponctuelle ou générale ?</strong> Si les défauts sont
                  localisés — une noue, un solin, une rive —, la réparation est le bon calcul. Si
                  les éléments sont poreux sur tout un versant, chaque intervention en casse
                  d&apos;autres : la réfection devient alors moins chère que l&apos;entretien.
                </li>
              </ul>
              <p className={P}>
                Un projet d&apos;achat ajoute une quatrième question, celle du budget — nous la
                traitons en détail dans notre article sur{" "}
                <Link href="/conseils/prix-refaire-toiture-100m2" className={A}>
                  le prix d&apos;une réfection de 100 m²
                </Link>
                . Les bases de facturation, le taux horaire et les conditions de devis sont publiés
                sur notre page{" "}
                <Link href="/tarifs" className={A}>
                  tarifs
                </Link>{" "}
                ; seul un devis établi après visite engage un prix ferme. Le détail de nos
                interventions figure sur la page{" "}
                <Link href="/services" className={A}>
                  services
                </Link>
                , et les communes où nous nous déplaçons sur la page{" "}
                <Link href="/zone-intervention" className={A}>
                  zone d&apos;intervention
                </Link>
                .
              </p>

              {/* SOURCES */}
              <h2 className={H2}>Sources</h2>
              <ul className="mb-4 ml-5 list-disc space-y-2 leading-relaxed text-gray-700 marker:text-gray-400">
                <li>
                  Agence qualité construction —{" "}
                  <a
                    href="https://qualiteconstruction.com/actualite/desordres-decennaux-aqc-2026-flop-10-sinistralite-francaise-06-2026/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={A}
                  >
                    Flop 10 des désordres décennaux, rapport 2026
                  </a>{" "}
                  (base Sycodés, désordres 1996-2025) et{" "}
                  <a
                    href="https://qualiteconstruction.com/actualite/desordres-decennaux-aqc-2025-flop-10-maisons-individuelles-couvertures-petits-elements-06-2025/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={A}
                  >
                    rapport 2025
                  </a>
                  .
                </li>
                <li>
                  Terreal —{" "}
                  <a
                    href="https://terreal.com/fr/article/la-garantie-tuile-terreal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={A}
                  >
                    garantie 30 ans contre le gel des tuiles en terre cuite
                  </a>{" "}
                  (norme NF EN 1304).
                </li>
                <li>
                  Légifrance —{" "}
                  <a
                    href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006443552"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={A}
                  >
                    article 1792 du code civil
                  </a>{" "}
                  (responsabilité décennale), articles 1792-3 et 1792-6.
                </li>
                <li>
                  INRS —{" "}
                  <a
                    href="https://www.inrs.fr/risques/amiante/reglementation.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={A}
                  >
                    réglementation amiante
                  </a>{" "}
                  (décret n° 96-1133 du 24 décembre 1996).
                </li>
                <li>
                  Normales climatiques 1991-2020, station de Fagnières (Marne) : 11,2 °C de moyenne
                  annuelle, environ 632 mm de précipitations.
                </li>
              </ul>

              {/* MAILLAGE */}
              <h2 className={H2}>À lire aussi</h2>
              <ul className="mb-8 grid gap-3 sm:grid-cols-2">
                <li>
                  <Link
                    href="/conseils/toiture-en-mauvais-etat-signes"
                    className="flex h-full items-start gap-3 rounded-xl border border-gray-200 bg-white p-5 transition-colors hover:border-orange-400"
                  >
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-orange-700" aria-hidden="true" />
                    <span className="font-semibold text-gray-900">
                      À quoi ressemble une toiture en mauvais état ?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/conseils/couvreurs-sont-ils-fiables"
                    className="flex h-full items-start gap-3 rounded-xl border border-gray-200 bg-white p-5 transition-colors hover:border-orange-400"
                  >
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-orange-700" aria-hidden="true" />
                    <span className="font-semibold text-gray-900">
                      Les couvreurs sont-ils dignes de confiance ?
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/conseils/prix-refaire-toiture-100m2"
                    className="flex h-full items-start gap-3 rounded-xl border border-gray-200 bg-white p-5 transition-colors hover:border-orange-400"
                  >
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-orange-700" aria-hidden="true" />
                    <span className="font-semibold text-gray-900">
                      Prix pour refaire une toiture de 100 m²
                    </span>
                  </Link>
                </li>
              </ul>
              <p className={P}>
                Tous nos articles sont regroupés sur la page{" "}
                <Link href="/conseils" className={A}>
                  conseils
                </Link>
                .
              </p>

              {/* APPEL À L'ACTION */}
              <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
                <h2 className="mb-3 text-xl font-bold text-gray-900">
                  Un doute sur l&apos;état de votre couverture ?
                </h2>
                <p className="mb-5 leading-relaxed text-gray-700">
                  Nous montons sur le toit, nous regardons les points singuliers et le support,
                  puis nous vous disons ce qui se répare et ce qui se refait. Le déplacement et le
                  devis sont gratuits.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button href="/contact">
                    <FileText className="h-5 w-5" aria-hidden="true" /> Demander un devis
                  </Button>
                  <a
                    href={BUSINESS.phoneHref}
                    className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-gray-300 px-6 py-3 font-semibold text-gray-900 transition-colors hover:border-orange-400 hover:text-orange-700"
                  >
                    <Phone className="h-5 w-5" aria-hidden="true" /> {BUSINESS.phone}
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </article>
    </>
  );
}
