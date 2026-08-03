/**
 * ARTICLE — « A quoi ressemble une toiture en mauvais etat ? »
 *
 * Deux regles de tenue :
 *  1. Aucun signe decrit ici n'invite le lecteur a monter sur son toit. Le
 *     texte le lui interdit explicitement, et toutes les observations proposees
 *     se font depuis le sol, depuis une fenetre ou depuis les combles.
 *  2. Aucun signe ne se conclut par « donc il faut tout refaire ». La
 *     hierarchie en trois niveaux (attendre / dans l'annee / sans attendre) est
 *     la colonne vertebrale de l'article : elle existe pour empecher la page de
 *     glisser vers l'argument de peur.
 *
 * PAS de `datePublished` dans le JSON-LD : aucune date reelle disponible.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, ArrowRight, FileText, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { BUSINESS_ID, serializeJsonLd } from "@/components/seo/serializeJsonLd";
import { BUSINESS, SEO } from "@/lib/constants";

const PATH = "/conseils/toiture-en-mauvais-etat-signes";
const TITLE = "Toiture en mauvais état : les signes qui alertent";
const DESCRIPTION =
  "Tuiles déplacées, mousse, tache au plafond, jour dans les combles : ce qui peut attendre, ce qui se traite dans l'année, ce qui impose un contrôle rapide.";

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
  headline: "À quoi ressemble une toiture en mauvais état ?",
  description: DESCRIPTION,
  inLanguage: "fr-FR",
  mainEntityOfPage: { "@id": `${SEO.siteUrl}${PATH}#webpage` },
  isPartOf: { "@id": `${SEO.siteUrl}${PATH}#webpage` },
  author: { "@id": BUSINESS_ID },
  publisher: { "@id": BUSINESS_ID },
  about: [
    { "@type": "Thing", name: "Diagnostic de toiture" },
    { "@type": "Thing", name: "Infiltration d'eau" },
    { "@type": "Thing", name: "Tuile poreuse" },
  ],
  citation: [
    {
      "@type": "CreativeWork",
      name: "Agence qualité construction — Flop 10 des désordres décennaux, rapport 2026 (base Sycodés)",
      url: "https://qualiteconstruction.com/actualite/desordres-decennaux-aqc-2026-flop-10-sinistralite-francaise-06-2026/",
    },
    {
      "@type": "CreativeWork",
      name: "France Assureurs — bilan des sinistres climatiques 2025 (mars 2026)",
      url: "https://www.franceassureurs.fr/risques-climatiques-et-assurance/",
    },
  ],
};

const H2 = "mt-12 mb-4 text-2xl font-bold text-gray-900 sm:text-3xl";
const H3 = "mt-8 mb-3 text-xl font-bold text-gray-900";
const P = "mb-4 leading-relaxed text-gray-700";
const UL = "mb-4 ml-5 list-disc space-y-2 leading-relaxed text-gray-700 marker:text-orange-700";
const A = "font-semibold text-orange-700 underline underline-offset-2 hover:text-orange-800";

export default function ToitureMauvaisEtatPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Conseils", url: "/conseils" },
          { name: "Toiture en mauvais état : les signes", url: PATH },
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
                À quoi ressemble une toiture en mauvais état ?
              </h1>
              <p className="text-lg leading-relaxed text-gray-700">
                <strong>
                  Une toiture en mauvais état se lit à quatre endroits : depuis le sol, depuis les
                  combles, pendant la pluie et après un épisode de gel.
                </strong>{" "}
                Les signes les plus parlants ne sont pas les plus spectaculaires — un jour visible
                entre deux tuiles depuis le grenier en dit plus qu&apos;un versant couvert de
                mousse. Et le défaut se trouve presque toujours à un raccord, rarement en pleine
                pente.
              </p>
            </div>
          </Container>
        </header>

        {/* CORPS */}
        <div className="bg-white py-12">
          <Container>
            <div className="mx-auto max-w-3xl">
              <div className="mb-8 flex gap-3 rounded-xl border-l-4 border-orange-700 bg-orange-50 p-5">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-orange-700" aria-hidden="true" />
                <p className="leading-relaxed text-gray-800">
                  <strong>Ne montez pas sur votre toit.</strong> Aucune observation de cet article
                  ne le demande. Marcher sur une couverture casse des éléments sains, décale des
                  recouvrements, et les chutes de hauteur restent l&apos;accident le plus grave du
                  bâtiment. Tout ce qui suit s&apos;observe depuis le sol, depuis une fenêtre ou
                  depuis les combles.
                </p>
              </div>

              <h2 className={H2}>1. Ce que vous voyez depuis le sol</h2>
              <p className={P}>
                Faites le tour de la maison, de préférence par temps clair et depuis plusieurs
                angles. Une paire de jumelles fait un meilleur outil de diagnostic qu&apos;une
                échelle.
              </p>
              <ul className={UL}>
                <li>
                  <strong>Éléments déplacés, glissés, fissurés ou manquants.</strong> Une tuile qui
                  a bougé laisse un liseré d&apos;ombre plus large que ses voisines.
                </li>
                <li>
                  <strong>Une ligne de faîtage qui n&apos;est plus rectiligne</strong>, ou un
                  arêtier qui s&apos;ouvre.
                </li>
                <li>
                  <strong>Du mortier de scellement qui se désagrège</strong> en faîtage, en rive ou
                  autour d&apos;une souche de cheminée : de petits morceaux dans la gouttière ou au
                  sol sont le premier indice.
                </li>
                <li>
                  <strong>Des gouttières décrochées, déformées, ou qui débordent</strong> à chaque
                  pluie. Une trace verticale sur la façade sous un joint de gouttière signale une
                  fuite qui dure.
                </li>
                <li>
                  <strong>Mousse épaisse et lichens</strong>, surtout sur le versant nord et sous
                  les arbres.
                </li>
                <li>
                  <strong>Des éléments retrouvés au sol</strong> après un coup de vent. Un débris de
                  tuile dans une allée n&apos;est jamais un hasard.
                </li>
              </ul>

              <h2 className={H2}>2. Ce que vous voyez depuis les combles</h2>
              <p className={P}>
                C&apos;est l&apos;observation la plus utile, et la moins pratiquée. Elle se fait{" "}
                <strong>deux fois</strong> : une première par temps sec, lampe éteinte, pour
                repérer les points lumineux ; une seconde quelques heures après une forte pluie,
                lampe allumée, pour repérer l&apos;eau.
              </p>
              <ul className={UL}>
                <li>
                  <strong>Du jour visible</strong> entre les éléments de couverture ou autour
                  d&apos;une souche. Là où passe la lumière, l&apos;eau finit par passer.
                </li>
                <li>
                  <strong>Des auréoles sur la sous-face</strong>, des liteaux noircis ou friables,
                  des coulures sur les chevrons.
                </li>
                <li>
                  <strong>Un écran de sous-toiture déchiré, détendu ou absent.</strong>
                </li>
                <li>
                  <strong>Un isolant tassé, sombre ou humide</strong> : la laine qui a pris
                  l&apos;eau ne se rétablit pas et perd sa fonction.
                </li>
                <li>
                  <strong>De la condensation sur les fermes</strong>, une odeur d&apos;humidité, des
                  traces de champignons ou de moisissures sur la charpente.
                </li>
              </ul>
              <p className={P}>
                Ces deux passages, à eux seuls, valent la plupart des diagnostics faits depuis la
                rue.
              </p>

              <h2 className={H2}>3. La tache au plafond n&apos;indique pas où est le trou</h2>
              <p className={P}>
                C&apos;est le point le plus contre-intuitif du sujet, et celui qui fait perdre le
                plus de temps. Une tuile fissurée ne produit pas une fuite visible dans la foulée.
                L&apos;eau traverse, mouille l&apos;écran de sous-toiture, y{" "}
                <strong>chemine</strong> en suivant la pente et les plis, atteint un liteau, court
                le long d&apos;un chevron, puis tombe. La tache apparaît des semaines ou des mois
                plus tard, souvent à plusieurs mètres du point d&apos;entrée, parfois sur un autre
                versant.
              </p>
              <p className={P}>
                Conséquence pratique : chercher le défaut à l&apos;aplomb de la tache est
                généralement une impasse. On remonte le chemin de l&apos;eau, on regarde les
                raccords situés au-dessus, et on vérifie ce que donne le versant pendant une pluie
                réelle. C&apos;est aussi pourquoi une infiltration ancienne peut avoir dégradé une
                charpente bien avant que le plafond ne le dise.
              </p>

              <h2 className={H2}>4. Où une toiture casse réellement</h2>
              <p className={P}>
                Aux points singuliers. Noues, solins, souches de cheminée, sorties de toit,
                raccords contre mur, rives : partout où la couverture est fabriquée sur place,
                pièce par pièce. Une fuite se déclare rarement au milieu d&apos;un versant.
              </p>
              <p className={P}>
                Les chiffres de l&apos;<strong>Agence qualité construction</strong> le confirment.
                Dans son rapport 2026, exploitant la base Sycodés des désordres déclarés en
                garantie décennale, les couvertures en petits éléments — tuiles et ardoises —
                constituent le premier poste de désordres en maison individuelle (9,6 % du
                « Flop 10 », désordres 1996-2025), et{" "}
                <strong>
                  67 % des désordres, tous bâtiments confondus, se manifestent par un défaut
                  d&apos;étanchéité à l&apos;eau
                </strong>{" "}
                sur la période 2023-2025. Les experts de l&apos;AQC désignent des « problèmes de
                mise en œuvre au niveau des points singuliers, avec des noues souvent non conformes
                au NF DTU ».
              </p>
              <p className={P}>
                Autrement dit : avant de conclure qu&apos;une couverture est finie, il faut avoir
                regardé ses raccords. C&apos;est souvent un mètre de zinc qui est en cause, pas
                cent mètres carrés de tuiles.
              </p>

              <h2 className={H2}>5. Reconnaître une tuile poreuse ou gélive</h2>
              <p className={P}>
                Là, en revanche, le problème est le matériau lui-même. Quatre indices, visibles aux
                jumelles ou sur une tuile récupérée au sol :
              </p>
              <ul className={UL}>
                <li>
                  <strong>Une surface devenue rugueuse</strong> au toucher, alors qu&apos;une tuile
                  saine est lisse ou satinée.
                </li>
                <li>
                  <strong>Une tuile qui reste sombre longtemps après la pluie</strong> quand ses
                  voisines ont séché : elle a absorbé l&apos;eau au lieu de la laisser filer.
                </li>
                <li>
                  <strong>Des éclats en feuillets</strong>, comme si le matériau se délitait par
                  couches.
                </li>
                <li>
                  <strong>Des arêtes qui s&apos;effritent</strong>, en partie basse notamment.
                </li>
              </ul>
              <p className={P}>
                Le mécanisme est simple : l&apos;eau absorbée gèle, augmente de volume et fait
                éclater l&apos;élément de l&apos;intérieur. C&apos;est la gélivité, et c&apos;est
                précisément ce que mesure la norme NF EN 1304, sur laquelle les fabricants de
                tuiles en terre cuite adossent leur garantie de trente ans contre le gel. Sous le
                climat de la Marne, humide toute l&apos;année et sujet aux alternances gel-dégel,
                c&apos;est le mode d&apos;usure dominant.
              </p>
              <p className={P}>
                <strong>Mousse et porosité ne sont pas le même diagnostic.</strong> La mousse est un
                problème d&apos;aspect et de rétention d&apos;eau : elle retient l&apos;humidité et
                peut faire remonter l&apos;eau sous les recouvrements, mais elle n&apos;abîme pas
                le matériau en profondeur. La porosité, elle, est une dégradation de l&apos;élément.
                La première se traite par un démoussage soigneux, la seconde par un remplacement.
                Confondre les deux conduit à nettoyer une couverture qu&apos;il fallait changer, ou
                l&apos;inverse.
              </p>

              <h2 className={H2}>6. Charpente ou couverture ? La distinction change le devis</h2>
              <p className={P}>
                Un versant qui <strong>ondule, se creuse ou s&apos;affaisse localement</strong> ne
                pose pas un problème de tuiles. C&apos;est un signe de charpente : panne fléchie,
                assemblage qui a joué, bois attaqué, ou surcharge. Une toiture ancienne peut
                présenter une légère déformation stable depuis un siècle ; un creux qui s&apos;est
                formé récemment, ou qui s&apos;accentue, doit être regardé de près. Le diagnostic
                et le chiffrage n&apos;ont rien à voir avec une reprise de couverture.
              </p>

              <h2 className={H2}>7. Après la grêle et après le vent</h2>
              <p className={P}>
                Un contrôle après un épisode violent est rarement inutile. Selon le bilan publié
                par <strong>France Assureurs</strong> en mars 2026, la grêle a touché deux tiers des
                communes françaises en 2025, pour{" "}
                <strong>2,2 milliards d&apos;euros de dommages assurés</strong>, sur un total de
                5,2 milliards d&apos;euros de sinistres climatiques.
              </p>
              <p className={P}>
                L&apos;impact de grêle sur une tuile en terre cuite laisse un éclat en cratère,
                souvent clair au centre, presque toujours invisible depuis le sol. Il n&apos;ouvre
                pas de fuite immédiate : il ouvre la porosité, et la fuite arrive deux ou trois
                hivers plus tard. Le vent, lui, décale les éléments et arrache les rives — les
                dégâts se voient mieux, mais ils se cherchent aussi sur les versants que la rue ne
                montre pas.
              </p>

              <h2 className={H2}>8. Fibrociment posé avant juillet 1997 : ne touchez à rien</h2>
              <p className={P}>
                Une couverture en fibrociment ondulé posée avant le{" "}
                <strong>1er juillet 1997</strong> est présumée contenir de l&apos;amiante :
                l&apos;interdiction résulte du décret n° 96-1133 du 24 décembre 1996. Tant que ce
                point n&apos;est pas levé par un repérage, la consigne est simple et sans nuance :
              </p>
              <ul className={UL}>
                <li>ne pas gratter, ne pas brosser, ne pas poncer ;</li>
                <li>ne pas nettoyer au jet, ni à haute ni à basse pression ;</li>
                <li>ne pas percer, ne pas découper, ne pas démonter.</li>
              </ul>
              <p className={P}>
                Ces gestes libèrent des fibres. Un repérage avant travaux est obligatoire et
                l&apos;intervention relève d&apos;une entreprise formée à ce risque, dans une
                filière de traitement des déchets réglementée.
              </p>

              <h2 className={H2}>Trois niveaux : ce qui attend, ce qui se traite, ce qui presse</h2>
              <p className={P}>
                Tout signe n&apos;appelle pas la même réaction. Voici comment nous hiérarchisons,
                sur le terrain.
              </p>

              <h3 className={H3}>À traiter, sans urgence</h3>
              <ul className={UL}>
                <li>Mousse et lichens isolés, sans élément dégradé dessous.</li>
                <li>Gouttière qui déborde ponctuellement, feuilles accumulées.</li>
                <li>Salissures, coulures d&apos;aspect, tuile décolorée mais lisse.</li>
              </ul>

              <h3 className={H3}>Dans l&apos;année</h3>
              <ul className={UL}>
                <li>Éléments déplacés, glissés ou cassés, même en petit nombre.</li>
                <li>Solin fissuré, mortier de faîtage qui se désagrège, rive ouverte.</li>
                <li>Écran de sous-toiture déchiré, liteau visible depuis les combles.</li>
                <li>Gouttière décrochée ou descente désolidarisée.</li>
              </ul>

              <h3 className={H3}>Contrôle sans attendre</h3>
              <ul className={UL}>
                <li>Jour visible depuis les combles, en plusieurs points ou près d&apos;une souche.</li>
                <li>Ruissellement pendant la pluie, goutte à goutte sur la charpente.</li>
                <li>Charpente humide au toucher, champignons, odeur de moisi persistante.</li>
                <li>Affaissement d&apos;un versant, déformation qui s&apos;accentue.</li>
                <li>Éléments arrachés après tempête, versant ouvert.</li>
              </ul>
              <p className={P}>
                Une précision qui a son importance : une mousse ou deux tuiles cassées{" "}
                <strong>n&apos;imposent pas une réfection complète</strong>. La très grande majorité
                des désordres décrits ci-dessus se réparent. Quand la réfection s&apos;impose,
                c&apos;est parce que les éléments sont poreux sur des versants entiers ou que le
                support ne tient plus — pas parce qu&apos;un raccord a lâché.
              </p>

              <h2 className={H2}>Ce qu&apos;il vaut mieux ne pas faire</h2>
              <ul className={UL}>
                <li>
                  <strong>Monter sur la couverture.</strong> Ni pour regarder, ni pour photographier.
                </li>
                <li>
                  <strong>Nettoyer au jet haute pression.</strong> Sur une couverture usée, le jet
                  décape l&apos;engobe, ouvre la porosité et pousse l&apos;eau sous les
                  recouvrements : il accélère exactement le vieillissement qu&apos;il prétend
                  combattre.
                </li>
                <li>
                  <strong>Attendre la prochaine pluie pour décider.</strong> Une infiltration qui a
                  mouillé un isolant continue de travailler par temps sec.
                </li>
              </ul>

              <h2 className={H2}>Après le constat</h2>
              <p className={P}>
                Si les signes relèvent des deux premiers niveaux, un entretien ou une reprise
                ponctuelle suffit le plus souvent — voir le détail de nos{" "}
                <Link href="/services" className={A}>
                  prestations
                </Link>{" "}
                et nos{" "}
                <Link href="/tarifs" className={A}>
                  bases de facturation
                </Link>
                . Pour comprendre ce qui use une couverture et à quel moment la réfection devient le
                bon calcul, lisez notre article sur{" "}
                <Link href="/conseils/duree-de-vie-toiture" className={A}>
                  la durée de vie d&apos;une toiture
                </Link>
                . Si les travaux peuvent attendre quelques mois, le moment de l&apos;année n&apos;est
                pas neutre :{" "}
                <Link href="/conseils/meilleure-periode-travaux-toiture" className={A}>
                  quel mois est le moins cher pour refaire sa toiture
                </Link>
                . Nous intervenons à Châlons-en-Champagne et dans un rayon de{" "}
                {BUSINESS.serviceRadius.value} km autour d&apos;{BUSINESS.address.city} :{" "}
                <Link href="/zone-intervention" className={A}>
                  voir la zone d&apos;intervention
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
                  (base Sycodés) et{" "}
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
                  France Assureurs —{" "}
                  <a
                    href="https://www.franceassureurs.fr/risques-climatiques-et-assurance/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={A}
                  >
                    bilan des sinistres climatiques 2025
                  </a>{" "}
                  (publié en mars 2026).
                </li>
                <li>
                  Terreal —{" "}
                  <a
                    href="https://terreal.com/fr/article/la-garantie-tuile-terreal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={A}
                  >
                    garantie 30 ans contre le gel
                  </a>{" "}
                  et norme NF EN 1304.
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
              </ul>

              {/* MAILLAGE */}
              <h2 className={H2}>À lire aussi</h2>
              <ul className="mb-8 grid gap-3 sm:grid-cols-2">
                <li>
                  <Link
                    href="/conseils/duree-de-vie-toiture"
                    className="flex h-full items-start gap-3 rounded-xl border border-gray-200 bg-white p-5 transition-colors hover:border-orange-400"
                  >
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-orange-700" aria-hidden="true" />
                    <span className="font-semibold text-gray-900">
                      Quelle est la durée de vie moyenne d&apos;une toiture ?
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
                    href="/conseils/meilleure-periode-travaux-toiture"
                    className="flex h-full items-start gap-3 rounded-xl border border-gray-200 bg-white p-5 transition-colors hover:border-orange-400"
                  >
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-orange-700" aria-hidden="true" />
                    <span className="font-semibold text-gray-900">
                      Quel mois est le moins cher pour refaire sa toiture ?
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
                  Vous avez repéré un de ces signes ?
                </h2>
                <p className="mb-5 leading-relaxed text-gray-700">
                  Décrivez-nous ce que vous voyez, et d&apos;où vous le voyez. Nous montons, nous
                  regardons les raccords et le support, et nous vous disons ce qui se répare et ce
                  qui se remplace. Le déplacement et le devis sont gratuits.
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
