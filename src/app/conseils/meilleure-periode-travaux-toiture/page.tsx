/**
 * ARTICLE — « Quel est le mois le moins cher pour les travaux de toiture ? »
 *
 * REGLES DE TENUE :
 *  - AUCUN mois n'est designe comme moins cher : aucune source publique ne
 *    l'etablit. L'article assume ce constat au lieu de recopier la promesse de
 *    remise hivernale que reprennent toutes les pages concurrentes.
 *  - Aucune remise, aucun delai, aucune disponibilite ne sont annonces.
 *  - La saisonnalite technique (gel, temperature d'application des produits)
 *    est distinguee de la saisonnalite tarifaire, qui n'existe pas.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { BUSINESS_ID, absoluteUrl, serializeJsonLd } from "@/components/seo/serializeJsonLd";
import { BUSINESS } from "@/lib/constants";

const PATH = "/conseils/meilleure-periode-travaux-toiture";

const TITLE = "Quel mois est le moins cher pour refaire sa toiture ?";
const DESCRIPTION =
  "Aucun mois n'est officiellement moins cher : il n'existe aucun barème public. Ce qui pèse vraiment sur le prix, c'est l'urgence, la météo et l'anticipation.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
};

const SAISONS = [
  {
    periode: "Décembre à février",
    faisable: "Diagnostic, chiffrage, démarches d'urbanisme, dépannage et bâchage.",
    difficile:
      "Scellements au mortier, hydrofuge, traitement anti-mousse, travail en hauteur les jours de vent ou de verglas.",
  },
  {
    periode: "Mars à mai",
    faisable:
      "Réfection, zinguerie, démoussage dès que les températures se stabilisent au-dessus de 5 °C.",
    difficile: "Les gelées tardives, qui reviennent régulièrement dans la Marne jusqu'en avril.",
  },
  {
    periode: "Juin à août",
    faisable: "Réfection complète, pose de fenêtre de toit, isolation sous rampants.",
    difficile:
      "Les produits anti-mousse s'évaporent trop vite au-delà de 25 °C ; les fortes chaleurs limitent aussi le temps de travail sur un versant exposé.",
  },
  {
    periode: "Septembre à novembre",
    faisable:
      "Dernière bonne fenêtre de pose, hydrofuge encore applicable, nettoyage des gouttières une fois les feuilles tombées.",
    difficile: "Les premières pluies durables, qui ferment progressivement la fenêtre de chantier.",
  },
] as const;

const SOURCES = [
  {
    label: "Note de conjoncture de l'artisanat du bâtiment, 1er trimestre 2026 — CAPEB",
    url: "https://www.capeb.fr/www/capeb/media/national/cp-capeb-note-de-conjoncture-t1-2026-29-04-2026.pdf",
  },
  {
    label:
      "Index INSEE du bâtiment BT01, BT30 et BT32, base 100 en 2010 — Informations rapides n° 169",
    url: "https://www.insee.fr/fr/statistiques/9022817",
  },
  {
    label: "Risques climatiques et assurance — France Assureurs",
    url: "https://www.franceassureurs.fr/risques-climatiques-et-assurance/",
  },
  {
    label:
      "Arrêté du 24 janvier 2017 relatif à la publicité des prix des prestations de dépannage, réparation et entretien dans le secteur du bâtiment — Légifrance",
    url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000033935513",
  },
  {
    label: "Code de l'urbanisme, article R421-17 (travaux soumis à déclaration préalable) — Légifrance",
    url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000028678429/2014-04-01",
  },
] as const;

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${absoluteUrl(PATH)}#article`,
  headline: "Quel est le mois le moins cher pour les travaux de toiture ?",
  description: DESCRIPTION,
  inLanguage: "fr-FR",
  mainEntityOfPage: { "@id": `${absoluteUrl(PATH)}#webpage` },
  isPartOf: { "@id": `${absoluteUrl(PATH)}#webpage` },
  author: { "@id": BUSINESS_ID },
  publisher: { "@id": BUSINESS_ID },
  about: [
    { "@type": "Thing", name: "Travaux de toiture" },
    { "@type": "Thing", name: "Saisonnalité des chantiers" },
  ],
  citation: SOURCES.map((source) => ({
    "@type": "WebPage",
    name: source.label,
    url: source.url,
  })),
};

const H2 = "mt-12 mb-4 text-2xl font-bold text-gray-900 sm:text-3xl";
const P = "mb-4 leading-relaxed text-gray-700";
const A = "font-medium text-orange-700 hover:underline";

export default function MeilleurePeriodeToiturePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Conseils", url: "/conseils" },
          { name: "Meilleure période pour les travaux de toiture", url: PATH },
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
                Quel est le mois le moins cher pour les travaux de toiture ?
              </h1>
              <p className="text-lg leading-relaxed text-gray-700">
                <strong>Aucun mois n&apos;est officiellement moins cher.</strong> Aucun organisme
                public ne publie de barème de prix de couverture par mois, et les index de coût de
                l&apos;INSEE, pourtant mensuels, ne présentent aucun creux saisonnier. Ce qui fait
                varier le prix d&apos;une toiture, ce n&apos;est pas la case du calendrier :
                c&apos;est la charge des entreprises, l&apos;état du toit le jour où vous appelez,
                et surtout le degré d&apos;urgence.
              </p>
            </div>
          </Container>
        </header>

        <Container>
          <div className="mx-auto max-w-3xl py-12">
            {/* -------------------------------------------- LA DONNÉE */}
            <h2 className={H2}>Ce que dit — et ne dit pas — la donnée publique</h2>
            <p className={P}>
              La réponse que l&apos;on lit partout est «&nbsp;l&apos;hiver, parce que les couvreurs
              ont moins de travail&nbsp;». Elle est répétée sans jamais être étayée. Nous avons
              cherché la source : elle n&apos;existe pas.
            </p>
            <p className={P}>
              Ni l&apos;INSEE, ni la DGCCRF, ni la Fédération française du bâtiment, ni la CAPEB ne
              publient de barème de prix de couverture par mois. Les index INSEE BT30 (couverture en
              ardoises) et BT32 (couverture en tuiles de terre cuite) sont bien mensuels, mais ils
              mesurent des <strong>coûts de production</strong> — matériaux, salaires, énergie — et
              non des remises commerciales. Ils ne présentent pas de creux saisonnier.
            </p>
            <p className={P}>
              Une page qui vous annonce «&nbsp;15 % de moins en janvier&nbsp;» avance donc un
              chiffre que rien ne mesure. Mieux vaut savoir ce qui agit réellement sur ce que vous
              paierez.
            </p>

            {/* ------------------------------------------ CHARGE DES ENTREPRISES */}
            <h2 className={H2}>Ce qui fait varier le prix : la charge des entreprises</h2>
            <p className={P}>
              Un artisan chiffre en fonction de son plan de charge, pas du mois affiché sur le
              calendrier. Or ce plan de charge se mesure. Au 1<sup>er</sup> trimestre 2026, la
              CAPEB relève des carnets de commandes de <strong>80 jours de travail</strong> dans
              l&apos;artisanat du bâtiment, soit dix jours de plus qu&apos;un an plus tôt. Sur la
              même période, l&apos;activité des entreprises artisanales du bâtiment recule de 1,5 %
              sur un an, et la rénovation énergétique baisse pour le sixième trimestre consécutif.
            </p>
            <p className={P}>
              Ces deux mouvements se compensent, et c&apos;est précisément pour cela qu&apos;aucune
              règle saisonnière simple ne tient : la disponibilité d&apos;une entreprise dépend
              davantage de son carnet du moment que du mois de l&apos;année.
            </p>

            {/* ---------------------------------------------- SINISTRES */}
            <h2 className={H2}>La saison qui compte est celle des sinistres</h2>
            <p className={P}>
              Il existe bien une saisonnalité forte dans le métier, mais ce n&apos;est pas celle des
              devis : c&apos;est celle des dégâts. D&apos;après le bilan publié par France Assureurs
              en mars 2026, le coût des sinistres climatiques en France a atteint{" "}
              <strong>5,2 milliards d&apos;euros en 2025</strong>, contre 3,9 milliards en 2024. La
              grêle à elle seule pèse 2,2 milliards, et les épisodes de grêle ont touché deux tiers
              des communes françaises.
            </p>
            <p className={P}>
              Après un épisode de ce type, tout le monde appelle la même semaine. C&apos;est là que
              se joue le vrai mécanisme de prix : non pas une remise consentie en janvier, mais un
              surcoût subi quand on n&apos;a plus le choix. À noter, pour la déclaration : la
              tempête et la grêle relèvent des garanties de votre contrat dommages, tandis que
              l&apos;inondation et la sécheresse relèvent du régime des catastrophes naturelles.
            </p>

            {/* ------------------------------------------------- LE FROID */}
            <h2 className={H2}>Ce que le froid interdit vraiment</h2>
            <p className={P}>
              Un couvreur ne s&apos;arrête pas l&apos;hiver — le dépannage et la mise hors
              d&apos;eau se pratiquent toute l&apos;année, y compris quand il gèle. En revanche,
              certaines opérations sont techniquement impossibles ou déconseillées par temps froid,
              et il faut les distinguer :
            </p>
            <ul className="mb-4 space-y-2 text-gray-700">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-700" />
                <span>
                  Le gel interdit les travaux au mortier, donc les scellements de faîtage et de rive
                  réalisés à l&apos;ancienne.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-700" />
                <span>
                  Les produits filmogènes — hydrofuges, traitements de surface — n&apos;adhèrent
                  plus correctement en dessous d&apos;environ 5 °C.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-700" />
                <span>
                  Les produits anti-mousse perdent en efficacité sous 5 °C et s&apos;évaporent trop
                  vite au-delà de 25 °C : leur fenêtre d&apos;application est étroite aux deux
                  extrémités.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-700" />
                <span>
                  Une tuile gorgée d&apos;eau puis gelée devient cassante : la manipuler coûte de la
                  casse.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-700" />
                <span>
                  Le vent et le verglas rendent le travail en hauteur dangereux, ce qui suspend le
                  chantier quel que soit le prix convenu.
                </span>
              </li>
            </ul>
            <p className={P}>
              Il faut donc séparer deux familles de travaux que la plupart des articles confondent.
              Le <strong>démoussage et l&apos;hydrofuge</strong> dépendent étroitement de la
              température et de l&apos;humidité. Une <strong>réfection</strong> l&apos;est beaucoup
              moins : la pose à sec sur closoir ventilé s&apos;accommode d&apos;un temps froid et
              sec bien mieux que d&apos;un temps doux et pluvieux.
            </p>

            {/* ---------------------------------------------- CLIMAT LOCAL */}
            <h2 className={H2}>Le climat de la campagne châlonnaise, en chiffres</h2>
            <p className={P}>
              Les normales climatiques 1991-2020 relevées à la station de Fagnières-INRAE, à
              proximité immédiate de Châlons-en-Champagne, donnent une température moyenne annuelle
              de <strong>11,2 °C</strong> et des précipitations d&apos;environ{" "}
              <strong>632 mm par an</strong>. Le climat y est océanique dégradé (Cfb dans la
              classification de Köppen-Geiger).
            </p>
            <p className={P}>
              Le point important tient en une phrase : les précipitations sont réparties sur toute
              l&apos;année. Il n&apos;existe pas, dans la Marne, de saison sèche qui rendrait un
              mois structurellement plus propice qu&apos;un autre. La contrainte locale est le
              nombre de journées consécutives exploitables, pas la saison.
            </p>

            {/* ------------------------------------------------ CALENDRIER */}
            <h2 className={H2}>Ce que chaque période permet réellement</h2>
            <p className={P}>
              Voici, non pas un classement de prix, mais un classement de faisabilité — le seul qui
              soit défendable.
            </p>
            <div className="mb-4 grid gap-4 sm:grid-cols-2">
              {SAISONS.map((saison) => (
                <div
                  key={saison.periode}
                  className="rounded-xl border-l-4 border-orange-700 bg-gray-50 p-5"
                >
                  <h3 className="mb-2 font-bold text-gray-900">{saison.periode}</h3>
                  <p className="mb-2 text-sm leading-relaxed text-gray-700">
                    <span className="font-semibold text-gray-900">Praticable : </span>
                    {saison.faisable}
                  </p>
                  <p className="text-sm leading-relaxed text-gray-700">
                    <span className="font-semibold text-gray-900">À surveiller : </span>
                    {saison.difficile}
                  </p>
                </div>
              ))}
            </div>
            <p className={P}>
              Les meilleures fenêtres de pose restent donc le printemps et la fin d&apos;été-début
              d&apos;automne, <strong>pour des raisons techniques et non tarifaires</strong>.
              L&apos;hiver, lui, est une excellente période pour faire diagnostiquer, chiffrer et
              planifier — pas nécessairement pour poser. C&apos;est aussi la saison où les défauts
              se voient le mieux :{" "}
              <Link href="/conseils/toiture-en-mauvais-etat-signes" className={A}>
                les signes d&apos;une toiture en mauvais état
              </Link>{" "}
              se lisent surtout par temps de pluie et de vent.
            </p>

            {/* --------------------------------------------- ANTICIPATION */}
            <h2 className={H2}>Le vrai gisement d&apos;économie : anticiper</h2>
            <p className={P}>
              Une intervention d&apos;urgence après tempête cumule tout ce qui coûte cher : un
              bâchage provisoire qu&apos;il faudra déposer, un déplacement immédiat, un échafaudage
              monté dans l&apos;urgence, et des matériaux pris là où ils sont disponibles plutôt que
              là où ils sont au meilleur prix. À toiture identique, le même chantier programmé trois
              mois à l&apos;avance ne se chiffre pas de la même façon.
            </p>
            <p className={P}>
              Deux leviers calendaires existent, et ils sont vérifiables. Le premier : tout devis
              doit indiquer sa <strong>durée de validité</strong> (arrêté du 24 janvier 2017). Un
              devis signé hors saison fige donc un prix pour une exécution ultérieure, dans la
              limite de ce délai. C&apos;est le seul mécanisme par lequel le calendrier agit
              réellement sur le prix payé. Le second : le délai d&apos;instruction d&apos;une
              déclaration préalable est d&apos;un mois, porté à deux mois en abords de monument
              historique ou en site patrimonial remarquable, où l&apos;architecte des Bâtiments de
              France rend un avis. Ce délai se purge en hiver sans rien coûter, et libère la belle
              saison pour le chantier.
            </p>
            <p className={P}>
              Les bases de facturation applicables toute l&apos;année — taux horaire, déplacement,
              caractère gratuit du devis — figurent sur notre page{" "}
              <Link href="/tarifs" className={A}>
                tarifs
              </Link>
              , et les communes où nous intervenons sur la page{" "}
              <Link href="/zone-intervention" className={A}>
                zone d&apos;intervention
              </Link>
              .
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
              Normales climatiques 1991-2020 de la station de Fagnières-INRAE, relevé de référence
              pour l&apos;agglomération de Châlons-en-Champagne.
            </p>

            {/* --------------------------------------------- MAILLAGE */}
            <h2 className={H2}>À lire aussi</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Link
                href="/conseils/toiture-en-mauvais-etat-signes"
                className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-orange-700">
                  Diagnostic
                </span>
                <span className="block font-bold text-gray-900 group-hover:text-orange-700">
                  Toiture en mauvais état : les signes qui alertent
                </span>
              </Link>
              <Link
                href="/conseils/prix-refaire-toiture-100m2"
                className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-orange-700">
                  Budget
                </span>
                <span className="block font-bold text-gray-900 group-hover:text-orange-700">
                  Quel est le prix pour refaire une toiture de 100 m² ?
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
                Le meilleur moment pour faire regarder votre toiture est celui où rien ne presse
                encore. Le déplacement et le devis sont gratuits. {BUSINESS.hours}, fermé le
                dimanche.
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
                Tous nos articles sont regroupés dans les{" "}
                <Link href="/conseils" className={A}>
                  conseils
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
