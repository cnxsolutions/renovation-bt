/**
 * ARTICLE — « Quel est le prix pour refaire une toiture de 100 m² ? »
 *
 * REGLES DE TENUE, non negociables :
 *  - AUCUN prix propre a l'entreprise n'est affiche ici. La page /tarifs est la
 *    seule page tarifaire du site (arrete du 24 janvier 2017) ; cet article y
 *    renvoie et ne la double pas.
 *  - Toute fourchette citee est attribuee a sa source et presentee pour ce
 *    qu'elle est : un releve de guides commerciaux, pas un bareme.
 *  - Aucune aide publique n'est evoquee, aucun delai n'est annonce.
 *  - Le coefficient de pente ouvre l'article : c'est l'erreur qui rend
 *    inexactes la quasi-totalite des pages concurrentes.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { BUSINESS_ID, absoluteUrl, serializeJsonLd } from "@/components/seo/serializeJsonLd";
import { BUSINESS } from "@/lib/constants";

const PATH = "/conseils/prix-refaire-toiture-100m2";

const TITLE = "Prix pour refaire une toiture de 100 m² en 2026";
const DESCRIPTION =
  "100 m² au sol ne font pas 100 m² de toiture. Fourchettes 2026, postes réels d'un devis, coefficient de pente, TVA et surcoûts qui expliquent les écarts.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
};

/** Coefficients de rampant : 1 / cos(angle de pente). */
const PENTES = [
  { angle: "30°", coefficient: "1,155", surface: "115,5 m²" },
  { angle: "35°", coefficient: "1,221", surface: "122,1 m²" },
  { angle: "40°", coefficient: "1,305", surface: "130,5 m²" },
  { angle: "45°", coefficient: "1,414", surface: "141,4 m²" },
] as const;

const POSTES = [
  {
    titre: "Installation et échafaudage",
    texte:
      "Protection des abords, montage et location de l'échafaudage ou de la nacelle. C'est un coût largement fixe : il pèse deux fois plus lourd sur 60 m² que sur 150 m².",
  },
  {
    titre: "Dépose et évacuation",
    texte:
      "Démontage de l'ancienne couverture, benne, transport et dépôt en installation agréée. Le devis doit préciser les modalités d'enlèvement des déchets et l'installation où ils seront déposés.",
  },
  {
    titre: "Support : liteaux et écran",
    texte:
      "Remplacement des liteaux, pose ou remplacement de l'écran de sous-toiture. Deux postes invisibles une fois le chantier fini, et deux postes que les prix au m² affichés en ligne omettent presque toujours.",
  },
  {
    titre: "Couverture",
    texte:
      "Fourniture et pose des tuiles ou des ardoises. C'est le seul poste que recouvre réellement un « prix au m² » trouvé sur internet.",
  },
  {
    titre: "Points singuliers",
    texte:
      "Faîtage, rives, arêtiers, noues, solins, sorties de toit et souches de cheminée. Ils se comptent au mètre linéaire ou à l'unité, jamais au m² de versant, et concentrent l'essentiel du temps passé.",
  },
  {
    titre: "Zinguerie",
    texte:
      "Gouttières, descentes d'eau pluviale, chéneaux, habillages. Sur une maison de ville, c'est souvent ce poste qui a lâché en premier.",
  },
  {
    titre: "Reprise de charpente",
    texte:
      "Chevrons, pannes ou entrait affaiblis. Rien ne permet de le chiffrer avant la dépose : un devis sérieux prévoit un prix unitaire pour cette éventualité plutôt que de l'ignorer.",
  },
] as const;

const SOURCES = [
  {
    label:
      "Index INSEE du bâtiment BT01, BT30 (couverture en ardoises de schiste) et BT32 (couverture en tuiles en terre cuite), base 100 en 2010 — Informations rapides n° 169",
    url: "https://www.insee.fr/fr/statistiques/9022817",
  },
  {
    label: "Devis dans le bâtiment : mentions obligatoires — entreprendre.service-public.gouv.fr",
    url: "https://entreprendre.service-public.gouv.fr/vosdroits/F23568",
  },
  {
    label:
      "Arrêté du 24 janvier 2017 relatif à la publicité des prix des prestations de dépannage, réparation et entretien dans le secteur du bâtiment — Légifrance",
    url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000033935513",
  },
  {
    label:
      "Décret n° 2020-1817 du 29 décembre 2020 relatif à la mention des déchets dans les devis de travaux — Légifrance",
    url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000042841880",
  },
  {
    label: "Code général des impôts, article 279-0 bis (TVA à taux réduit sur les travaux) — Légifrance",
    url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000028678429/2014-04-01",
  },
  {
    label: "Amiante : réglementation applicable — INRS",
    url: "https://www.inrs.fr/risques/amiante/reglementation.html",
  },
  {
    label:
      "Désordres décennaux : le flop 10 de la sinistralité française, base Sycodés 1996-2025 — Agence Qualité Construction, 2026",
    url: "https://qualiteconstruction.com/actualite/desordres-decennaux-aqc-2026-flop-10-sinistralite-francaise-06-2026/",
  },
] as const;

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${absoluteUrl(PATH)}#article`,
  headline: "Quel est le prix pour refaire une toiture de 100 m² ?",
  description: DESCRIPTION,
  inLanguage: "fr-FR",
  mainEntityOfPage: { "@id": `${absoluteUrl(PATH)}#webpage` },
  isPartOf: { "@id": `${absoluteUrl(PATH)}#webpage` },
  author: { "@id": BUSINESS_ID },
  publisher: { "@id": BUSINESS_ID },
  about: [
    { "@type": "Thing", name: "Réfection de toiture" },
    { "@type": "Thing", name: "Prix des travaux de couverture" },
  ],
  citation: SOURCES.map((source) => ({
    "@type": "WebPage",
    name: source.label,
    url: source.url,
  })),
};

const H2 = "mt-12 mb-4 text-2xl font-bold text-gray-900 sm:text-3xl";
const H3 = "mt-8 mb-3 text-xl font-semibold text-gray-900";
const P = "mb-4 leading-relaxed text-gray-700";
const A = "font-medium text-orange-700 hover:underline";

export default function PrixToiture100m2Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Conseils", url: "/conseils" },
          { name: "Prix pour refaire une toiture de 100 m²", url: PATH },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(articleJsonLd) }}
      />

      <article>
        {/* ------------------------------------------------------- EN-TÊTE */}
        <header className="border-b border-gray-200 bg-gray-50 py-14">
          <Container>
            <div className="mx-auto max-w-3xl">
              <Link
                href="/conseils"
                className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-orange-700 hover:underline"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Conseils
              </Link>
              <h1 className="mb-5 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl">
                Quel est le prix pour refaire une toiture de 100 m² ?
              </h1>
              <p className="text-lg leading-relaxed text-gray-700">
                Les guides de prix publiés en 2026 situent la réfection complète d&apos;une toiture
                de 100 m² entre <strong>13 000 et 32 000 € TTC</strong> selon le matériau et
                l&apos;état de l&apos;existant. Avant de retenir un chiffre, il faut régler une
                question que presque personne ne pose : de quel 100 m² parle-t-on ? Cent mètres
                carrés au sol ne font pas cent mètres carrés de toiture, et l&apos;écart dépasse
                souvent 20 %.
              </p>
            </div>
          </Container>
        </header>

        <Container>
          <div className="mx-auto max-w-3xl py-12">
            {/* ------------------------------------------------ SURFACE */}
            <h2 className={H2}>100 m² au sol ne font pas 100 m² de toiture</h2>
            <p className={P}>
              Un toit est incliné. La surface que le couvreur couvre — le rampant — est donc
              toujours plus grande que l&apos;emprise au sol de la maison. Le calcul est immédiat :
            </p>
            <div className="mb-6 rounded-xl border border-gray-200 bg-gray-50 p-6 text-center">
              <p className="text-lg font-semibold text-gray-900">
                surface de rampant = surface au sol × 1 / cos (angle de pente)
              </p>
            </div>
            <div className="mb-6 overflow-x-auto">
              <table className="w-full min-w-[28rem] border-collapse text-left text-gray-700">
                <caption className="mb-3 text-left text-sm text-gray-500">
                  Surface de couverture réelle pour 100 m² d&apos;emprise au sol, débords de toit
                  non compris.
                </caption>
                <thead>
                  <tr className="border-b-2 border-gray-300 text-sm uppercase tracking-wide text-gray-500">
                    <th scope="col" className="py-3 pr-4 font-semibold">
                      Pente
                    </th>
                    <th scope="col" className="py-3 pr-4 font-semibold">
                      Coefficient
                    </th>
                    <th scope="col" className="py-3 font-semibold">
                      Surface à couvrir
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {PENTES.map((pente) => (
                    <tr key={pente.angle} className="border-b border-gray-200">
                      <th scope="row" className="py-3 pr-4 font-semibold text-gray-900">
                        {pente.angle}
                      </th>
                      <td className="py-3 pr-4">{pente.coefficient}</td>
                      <td className="py-3 font-semibold text-gray-900">{pente.surface}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className={P}>
              Une maison de 100 m² d&apos;emprise au sol dont le toit est incliné à 35° représente
              donc environ <strong>122 m² de couverture</strong>. Et ce chiffre ne comprend ni les
              débords de toit, ni les recouvrements, ni les chutes de coupe autour des noues et des
              lucarnes. Sur un budget de 20 000 €, la différence entre 100 et 122 m² se compte en
              milliers d&apos;euros.
            </p>
            <p className={P}>
              C&apos;est la première question à poser en lisant un devis :{" "}
              <strong>la surface retenue est-elle celle du sol ou celle du rampant&nbsp;?</strong>{" "}
              Deux devis qui affichent le même prix au m² mais pas la même surface ne se comparent
              pas.
            </p>

            {/* -------------------------------------------------- POSTES */}
            <h2 className={H2}>Ce qu&apos;il y a réellement derrière un prix au m²</h2>
            <p className={P}>
              Un chantier de réfection n&apos;est pas une seule prestation, mais sept ou huit. Un
              prix global au mètre carré les écrase toutes, et c&apos;est en les rouvrant que
              l&apos;on comprend pourquoi deux devis peuvent varier du simple au double.
            </p>
            <div className="mb-4 divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white">
              {POSTES.map((poste) => (
                <div key={poste.titre} className="p-5">
                  <h3 className="mb-1 font-bold text-gray-900">{poste.titre}</h3>
                  <p className="text-sm leading-relaxed text-gray-700">{poste.texte}</p>
                </div>
              ))}
            </div>
            <p className={P}>
              L&apos;obligation de mentionner les déchets n&apos;est pas une formalité de style :
              depuis le 1<sup>er</sup> juillet 2021, en application du décret n° 2020-1817 du 29
              décembre 2020, le devis doit indiquer les modalités d&apos;enlèvement et de gestion
              des déchets ainsi que l&apos;installation dans laquelle ils seront déposés. Un devis
              muet sur ce point est incomplet.
            </p>

            {/* --------------------------------------------- FOURCHETTES */}
            <h2 className={H2}>Les fourchettes publiées, et ce qu&apos;elles valent</h2>
            <p className={P}>
              Les chiffres qui circulent viennent presque tous de guides de prix édités par des
              plateformes de mise en relation. Ce sont des estimations commerciales, pas des
              barèmes : leurs fourchettes sont larges, elles agrègent la France entière et elles
              tirent naturellement vers le haut. Il faut les lire comme des ordres de grandeur.
            </p>
            <ul className="mb-4 space-y-2 text-gray-700">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-700" />
                <span>
                  Pour 100 m² de toiture, un guide annonce 19 000 à 32 000 € TTC ; un autre 13 000 à
                  30 000 €, en précisant que 80 % des projets se situent entre 15 000 et 25 000 €.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-700" />
                <span>
                  Au mètre carré posé, ces mêmes guides donnent 80 à 110 € pour la tuile béton, 100
                  à 140 € pour la tuile en terre cuite, 130 à 180 € pour l&apos;ardoise naturelle.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-700" />
                <span>
                  La main-d&apos;œuvre y représente de l&apos;ordre de la moitié du budget. C&apos;est
                  aussi la part qui varie le plus d&apos;une région à l&apos;autre.
                </span>
              </li>
            </ul>
            <p className={P}>
              Les bases sur lesquelles nous chiffrons — taux horaire, frais de déplacement,
              caractère gratuit du devis — sont publiées sur notre page{" "}
              <Link href="/tarifs" className={A}>
                tarifs
              </Link>
              , et le détail de ce que recouvre réellement{" "}
              <Link href="/conseils/tarif-horaire-couvreur" className={A}>
                le tarif horaire d&apos;un couvreur
              </Link>{" "}
              fait l&apos;objet d&apos;un article à part. Un prix ferme, lui, ne peut sortir que
              d&apos;une visite : la pente, l&apos;accès et l&apos;état du support ne se lisent pas
              au téléphone.
            </p>

            {/* ------------------------------------------------ INDEX INSEE */}
            <h2 className={H2}>
              Pourquoi la couverture a plus augmenté que le reste du bâtiment
            </h2>
            <p className={P}>
              «&nbsp;Les prix ont augmenté&nbsp;» est une phrase creuse tant qu&apos;elle
              n&apos;est pas mesurée. Elle l&apos;est : l&apos;INSEE publie des index mensuels de
              coût par corps d&apos;état, en base 100 en 2010. En mai 2026, l&apos;index BT30
              «&nbsp;Couverture en ardoises de schiste&nbsp;» atteint <strong>152,5</strong> et
              l&apos;index BT32 «&nbsp;Couverture en tuiles en terre cuite&nbsp;»{" "}
              <strong>146,4</strong>, quand l&apos;index BT01 tous corps d&apos;état confondus
              s&apos;établit à <strong>137,9</strong>.
            </p>
            <p className={P}>
              Autrement dit : la couverture a renchéri d&apos;environ 46 à 52 % depuis 2010, contre
              38 % pour l&apos;ensemble du bâtiment. Deux conséquences pratiques. D&apos;abord, un
              devis de 2021 ne se compare pas à un devis de 2026 sans correction. Ensuite, un prix
              relevé dans un article non daté n&apos;a aucune valeur : demandez toujours de quelle
              année vient le chiffre que vous lisez.
            </p>

            {/* ------------------------------------------- CE QUI FAIT EXPLOSER */}
            <h2 className={H2}>Les trois variables qui font vraiment exploser un budget</h2>
            <p className={P}>
              Entre deux maisons de même surface et de même matériau, l&apos;écart de prix ne vient
              presque jamais de la couverture elle-même. Il vient de trois choses.
            </p>

            <h3 className={H3}>1. L&apos;amiante</h3>
            <p className={P}>
              C&apos;est le poste qui change tout, et qu&apos;aucun simulateur en ligne
              n&apos;intègre. L&apos;interdiction de l&apos;amiante résulte du décret n° 96-1133 du
              24 décembre 1996, entré en vigueur le 1<sup>er</sup> juillet 1997. Avant cette date,
              la quasi-totalité du fibrociment français en contenait, de l&apos;ordre de 10 à 15 %
              de fibres de chrysotile.
            </p>
            <p className={P}>
              Toute couverture en fibrociment antérieure à 1997 — plaques ondulées de garage,
              d&apos;appentis, de bâtiment agricole — est donc présumée amiantée jusqu&apos;à
              preuve du contraire. Elle impose un repérage avant travaux, une dépose par une
              entreprise formée et certifiée pour cette activité, et une filière
              d&apos;élimination spécifique. Un «&nbsp;à partir de&nbsp;» au m² qui prétendrait
              englober ce cas serait un engagement intenable : ces travaux relèvent d&apos;un devis
              séparé, établi par une entreprise certifiée.
            </p>

            <h3 className={H3}>2. L&apos;état de la charpente</h3>
            <p className={P}>
              Une charpente ne se juge pas depuis le sol, et rarement depuis le comble : elle se
              découvre à la dépose. Chevron affaibli en pied, panne attaquée par des insectes
              xylophages, entrait fendu au droit d&apos;un assemblage. Un devis honnête ne prétend
              pas le savoir à l&apos;avance ; il prévoit un prix unitaire pour le remplacement
              d&apos;un élément, et il annonce qu&apos;un avenant sera établi si la dépose révèle
              autre chose.
            </p>

            <h3 className={H3}>3. L&apos;accès</h3>
            <p className={P}>
              L&apos;échafaudage, la benne et le stationnement du véhicule sont des coûts largement
              fixes. Une maison en cœur de bourg, mitoyenne, sur une rue étroite où il faut demander
              une autorisation de voirie, ne coûte pas la même chose qu&apos;un pavillon sur terrain
              plat avec un accès camion. C&apos;est aussi pour cette raison que le prix au m² baisse
              quand la surface augmente : les coûts fixes se diluent.
            </p>

            {/* ----------------------------------------------------- TVA */}
            <h2 className={H2}>TVA : 10 %, 5,5 % ou 20 %</h2>
            <p className={P}>
              Le taux applicable dépend du logement, pas du chantier. La réfection d&apos;une
              toiture relève du taux réduit de <strong>10 %</strong> lorsqu&apos;elle porte sur un
              local à usage d&apos;habitation achevé depuis plus de deux ans (article 279-0 bis du
              code général des impôts). La part correspondant strictement à l&apos;isolation
              thermique relève, elle, du taux de <strong>5,5 %</strong> (article 278-0 bis A).
              Enfin, le taux normal de <strong>20 %</strong> s&apos;applique à un logement de moins
              de deux ans et aux locaux qui ne sont pas affectés à l&apos;habitation.
            </p>
            <p className={P}>
              Depuis le 1<sup>er</sup> janvier 2025, les attestations 1300-SD et 1301-SD ont
              disparu : une mention portée sur le devis et sur la facture les remplace. Vérifiez
              enfin que vous comparez bien des montants de même nature — un prix hors taxes lu comme
              un prix TTC crée à lui seul un écart de 10 à 20 % entre deux propositions.
            </p>

            {/* ------------------------------------------------ URBANISME */}
            <h2 className={H2}>L&apos;urbanisme peut peser sur le budget avant les travaux</h2>
            <p className={P}>
              Refaire une toiture à l&apos;identique — même matériau, même teinte — est dispensé de
              formalité. En revanche, changer de matériau, changer de couleur ou créer une ouverture
              impose une déclaration préalable, en application de l&apos;article R421-17 du code de
              l&apos;urbanisme.
            </p>
            <p className={P}>
              En abords de monument historique ou en site patrimonial remarquable, l&apos;architecte
              des Bâtiments de France rend un avis qui lie la commune, et le délai
              d&apos;instruction passe d&apos;un à deux mois. Autour de Châlons-en-Champagne, la
              situation est fréquente : le centre ancien compte plusieurs édifices protégés, et le
              périmètre de leurs abords recouvre une part importante du tissu bâti ancien.
              L&apos;avis peut imposer un
              matériau, un format ou une teinte — donc un prix. Nos{" "}
              <Link href="/couvreur/chalons-en-champagne" className={A}>
                interventions à Châlons-en-Champagne
              </Link>{" "}
              et les communes de notre{" "}
              <Link href="/zone-intervention" className={A}>
                zone d&apos;intervention
              </Link>{" "}
              sont concernées au premier chef.
            </p>

            {/* ----------------------------------------------- ZONE DTU */}
            <h2 className={H2}>Zone climatique : le même toit ne se pose pas partout pareil</h2>
            <p className={P}>
              Les NF DTU de couverture découpent la France en trois zones climatiques et en trois
              situations d&apos;exposition. La Marne relève de la <strong>zone 1</strong> —
              intérieur des terres, altitude inférieure à 200 m —, ce qui autorise des pentes et des
              recouvrements plus faibles qu&apos;en zone 2 ou 3.
            </p>
            <p className={P}>
              Ce n&apos;est pas un détail de technicien : le recouvrement détermine le nombre
              d&apos;éléments au mètre carré, donc la quantité de matériau, donc le prix. Un devis
              qui précise la zone et la situation (protégée, normale ou exposée) montre que le
              chiffrage a été fait sur votre toit, et pas recopié.
            </p>

            {/* ------------------------------------------ LIRE TROIS DEVIS */}
            <h2 className={H2}>Comment comparer trois devis sans se tromper</h2>
            <p className={P}>
              Le devis écrit est obligatoire quel que soit le montant pour les prestations de
              dépannage, de réparation et d&apos;entretien du bâtiment (arrêté du 24 janvier 2017).
              Une fois les trois devis sur la table, onze points suffisent à les rendre comparables.
            </p>
            <ol className="mb-4 list-decimal space-y-2 pl-6 text-gray-700 marker:font-semibold marker:text-orange-700">
              <li>La surface retenue : rampant ou emprise au sol ?</li>
              <li>La pente, exprimée en degrés ou en pourcentage.</li>
              <li>La zone climatique et la situation d&apos;exposition.</li>
              <li>Le matériau : marque, modèle, moule, finition, teinte.</li>
              <li>L&apos;écran de sous-toiture : présence et classement.</li>
              <li>Les liteaux : neufs ou réemploi.</li>
              <li>La zinguerie, détaillée au mètre linéaire poste par poste.</li>
              <li>L&apos;échafaudage : inclus ou en option.</li>
              <li>L&apos;évacuation des déchets et l&apos;installation de dépôt.</li>
              <li>Le taux de TVA appliqué et le total TTC.</li>
              <li>La durée de validité de l&apos;offre.</li>
            </ol>
            <p className={P}>
              Dernier point utile à connaître : le contrat peut prévoir une retenue de garantie de
              5 % TTC, conservée pendant un an après la réception des travaux, en application de la
              loi n° 71-584 du 16 juillet 1971. C&apos;est un levier légal, à condition
              qu&apos;il figure au contrat.
            </p>

            {/* ------------------------------------------------- QUALITÉ */}
            <h2 className={H2}>Le devis le moins cher n&apos;est pas le moins coûteux</h2>
            <p className={P}>
              L&apos;Agence Qualité Construction suit la sinistralité française depuis 1996 dans sa
              base Sycodés. Dans son rapport 2026, les couvertures en petits éléments — tuiles et
              ardoises — arrivent en tête des désordres décennaux en maison individuelle, avec{" "}
              <strong>9,6 %</strong> des désordres constatés. Et <strong>67 %</strong> des désordres
              se manifestent par un défaut d&apos;étanchéité à l&apos;eau.
            </p>
            <p className={P}>
              Une toiture est un ouvrage que l&apos;on refait une fois par génération. L&apos;écart
              entre le devis le moins cher et le suivant se rattrape en quelques années dès lors
              qu&apos;une reprise devient nécessaire — et une reprise coûte toujours plus qu&apos;un
              poste bien traité du premier coup.
            </p>

            {/* -------------------------------------------------- SOURCES */}
            <h2 className={H2}>Sources</h2>
            <ol className="mb-4 space-y-2 text-sm text-gray-600">
              {SOURCES.map((source, index) => (
                <li key={source.url} className="flex gap-3">
                  <span className="font-semibold text-gray-400">{index + 1}.</span>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-orange-700 hover:underline"
                  >
                    {source.label}
                  </a>
                </li>
              ))}
            </ol>
            <p className="mb-4 text-sm leading-relaxed text-gray-500">
              Les fourchettes de prix citées proviennent de guides de prix en ligne édités par des
              plateformes de mise en relation ; elles sont reprises ici comme ordres de grandeur du
              marché national, et non comme des références officielles.
            </p>

            {/* --------------------------------------------- MAILLAGE */}
            <h2 className={H2}>À lire aussi</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Link
                href="/conseils/tarif-horaire-couvreur"
                className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-orange-700">
                  Main-d&apos;œuvre
                </span>
                <span className="block font-bold text-gray-900 group-hover:text-orange-700">
                  Quel est le tarif horaire d&apos;un couvreur ?
                </span>
              </Link>
              <Link
                href="/conseils/meilleure-periode-travaux-toiture"
                className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-orange-700">
                  Calendrier
                </span>
                <span className="block font-bold text-gray-900 group-hover:text-orange-700">
                  Quel est le mois le moins cher pour les travaux de toiture ?
                </span>
              </Link>
              <Link
                href="/conseils/ancien-nom-chalons-en-champagne"
                className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-orange-700">
                  Repère local
                </span>
                <span className="block font-bold text-gray-900 group-hover:text-orange-700">
                  Quel était l&apos;ancien nom de Châlons-en-Champagne ?
                </span>
              </Link>
            </div>

            {/* ------------------------------------------------------ CTA */}
            <div className="mt-12 rounded-xl border border-gray-200 bg-gray-50 p-6">
              <p className="mb-4 leading-relaxed text-gray-700">
                Pour savoir ce que représente votre toiture — sa surface réelle, son état et les
                postes à prévoir —, le plus simple reste une visite sur place. Le déplacement et le
                devis sont gratuits, et c&apos;est l&apos;artisan qui montera sur le toit qui vient
                relever et chiffrer.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={BUSINESS.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-orange-800"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  {BUSINESS.phone}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-gray-900 px-6 py-3 font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
                >
                  Demander un devis gratuit
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                Retrouvez tous nos articles dans les{" "}
                <Link href="/conseils" className={A}>
                  conseils
                </Link>
                , et les bases de facturation sur la page{" "}
                <Link href="/tarifs" className={A}>
                  tarifs
                </Link>
                .
              </p>
            </div>
          </div>
        </Container>
      </article>
    </>
  );
}
