/**
 * ARTICLE — « Les couvreurs sont-ils dignes de confiance ? »
 *
 * SUJET SENSIBLE. Trois regles de tenue, non negociables :
 *
 *  1. On repond par la VERIFICATION, jamais par le plaidoyer. Aucune phrase du
 *     type « nous, nous sommes honnetes » ni « contrairement a d'autres ». La
 *     demonstration doit tenir entierement sans que l'entreprise se cite.
 *  2. Aucun concurrent n'est nomme, decrit ni rendu identifiable, meme
 *     indirectement (art. 1240 du code civil : une information exacte qui jette
 *     le discredit sur un concurrent identifiable reste fautive). Aucune
 *     designation ethnique ou communautaire, qui saturent ce sujet en ligne et
 *     exposent penalement.
 *  3. Aucun chiffre non sourcable. Les statistiques de fraude qui circulent sur
 *     les blogs du metier (« 4 200 plaintes DGCCRF dont 15 % pour le nettoyage
 *     de toiture ») sont introuvables dans les publications de la DGCCRF : elles
 *     ne figurent pas ici. Le taux d'anomalie des enquetes DGCCRF est presente
 *     comme ce qu'il est — un resultat de controles CIBLES — et jamais comme un
 *     taux de fraude du secteur.
 *
 * ATTENTION A LA DATE du 11 aout 2026 (interdiction du demarchage telephonique
 * sans consentement) : ecrite « a compter du », formulation qui reste vraie
 * avant comme apres l'entree en vigueur.
 *
 * PAS de `datePublished` dans le JSON-LD : aucune date reelle disponible.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText, Phone, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { BUSINESS_ID, serializeJsonLd } from "@/components/seo/serializeJsonLd";
import { BUSINESS, LEGAL, SEO } from "@/lib/constants";

const PATH = "/conseils/couvreurs-sont-ils-fiables";
const TITLE = "Couvreurs : ce que vous pouvez vérifier avant de signer";
const DESCRIPTION =
  "Qualification obligatoire, assurance décennale, devis écrit, rétractation de 14 jours : les vérifications gratuites à faire avant de confier une toiture.";

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
  headline: "Les couvreurs sont-ils dignes de confiance ?",
  description: DESCRIPTION,
  inLanguage: "fr-FR",
  mainEntityOfPage: { "@id": `${SEO.siteUrl}${PATH}#webpage` },
  isPartOf: { "@id": `${SEO.siteUrl}${PATH}#webpage` },
  author: { "@id": BUSINESS_ID },
  publisher: { "@id": BUSINESS_ID },
  about: [
    { "@type": "Thing", name: "Assurance décennale" },
    { "@type": "Thing", name: "Devis de travaux" },
    { "@type": "Thing", name: "Démarchage à domicile" },
  ],
  citation: [
    {
      "@type": "CreativeWork",
      name: "Loi n° 96-603 du 5 juillet 1996, article 16 — qualification professionnelle",
      url: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000388449",
    },
    {
      "@type": "CreativeWork",
      name: "Arrêté du 24 janvier 2017 — publicité des prix et devis obligatoire dans le bâtiment",
      url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000033935513",
    },
    {
      "@type": "CreativeWork",
      name: "Article L221-18 du code de la consommation — droit de rétractation",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032226864",
    },
  ],
};

const H2 = "mt-12 mb-4 text-2xl font-bold text-gray-900 sm:text-3xl";
const H3 = "mt-8 mb-3 text-xl font-bold text-gray-900";
const P = "mb-4 leading-relaxed text-gray-700";
const UL = "mb-4 ml-5 list-disc space-y-2 leading-relaxed text-gray-700 marker:text-orange-700";
const OL = "mb-4 ml-5 list-decimal space-y-3 leading-relaxed text-gray-700 marker:font-bold marker:text-orange-700";
const A = "font-semibold text-orange-700 underline underline-offset-2 hover:text-orange-800";

export default function CouvreursFiablesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Conseils", url: "/conseils" },
          { name: "Vérifier un couvreur avant de signer", url: PATH },
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
                Les couvreurs sont-ils dignes de confiance ?
              </h1>
              <p className="text-lg leading-relaxed text-gray-700">
                <strong>
                  La question ne se règle pas par la confiance, elle se règle par la vérification.
                </strong>{" "}
                La couverture est une activité artisanale réglementée, l&apos;assurance décennale y
                est obligatoire, le devis écrit est dû dès le premier euro — et
                l&apos;immatriculation, l&apos;ancienneté, l&apos;activité déclarée et les
                qualifications d&apos;une entreprise se contrôlent gratuitement en ligne, en une
                dizaine de minutes. Voici ce que la loi impose, et ce que vous pouvez constater
                vous-même avant de signer quoi que ce soit.
              </p>
            </div>
          </Container>
        </header>

        {/* CORPS */}
        <div className="bg-white py-12">
          <Container>
            <div className="mx-auto max-w-3xl">
              <h2 className={H2}>Ce que la loi impose à toute entreprise de couverture</h2>

              <h3 className={H3}>Une qualification professionnelle, pas seulement une envie</h3>
              <p className={P}>
                Contrairement à une idée répandue, on ne s&apos;installe pas couvreur librement.
                L&apos;activité figure parmi les métiers dont l&apos;exercice est subordonné à une
                qualification : elle ne peut être exercée que par une personne titulaire d&apos;un
                CAP, d&apos;un BEP ou d&apos;un diplôme ou titre équivalent ou supérieur pour le
                métier, <strong>ou sous le contrôle effectif d&apos;une telle personne</strong>{" "}
                (article 16 de la loi n° 96-603 du 5 juillet 1996 ; décret n° 98-246 du 2 avril
                1998, dont l&apos;article 2 a été adapté par le décret n° 2022-1169 du 22 août
                2022).
              </p>

              <h3 className={H3}>Une assurance décennale, et sa mention sur le devis</h3>
              <p className={P}>
                Tout professionnel qui réalise des travaux de bâtiment doit être couvert par une
                assurance de responsabilité décennale (article 1792 du code civil, article L241-1 du
                code des assurances). Depuis la loi n° 2014-626 du 18 juin 2014, cette assurance
                doit être <strong>mentionnée sur les devis et sur les factures</strong> : nom et
                coordonnées de l&apos;assureur, et couverture géographique du contrat. Un devis
                muet sur ce point ne respecte pas la loi.
              </p>
              <p className={P}>
                L&apos;attestation elle-même suit un modèle standardisé imposé par l&apos;arrêté du
                5 janvier 2016 (articles A243-2 à A243-5 du code des assurances). Elle se demande,
                elle se lit, et deux choses s&apos;y vérifient en trente secondes : la{" "}
                <strong>période de validité</strong>, qui doit couvrir la date d&apos;ouverture de
                votre chantier, et la <strong>liste des activités garanties</strong>, qui doit
                inclure celles que l&apos;on va réaliser chez vous. Une attestation valable pour la
                maçonnerie ne couvre pas une couverture.
              </p>

              <h2 className={H2}>Quatre vérifications gratuites, avant tout versement</h2>
              <ol className={OL}>
                <li>
                  <strong>L&apos;immatriculation, sur l&apos;Annuaire des Entreprises.</strong>{" "}
                  <a
                    href="https://annuaire-entreprises.data.gouv.fr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={A}
                  >
                    annuaire-entreprises.data.gouv.fr
                  </a>{" "}
                  est le service public qui expose les données INSEE / Sirene. Avec le nom ou le
                  SIREN, vous obtenez l&apos;état de l&apos;entreprise (active ou cessée), sa date
                  de création, son code d&apos;activité, ses dirigeants, ses établissements, et une
                  rubrique « labels et certificats ». Une entreprise qui refuse de donner son SIREN
                  s&apos;écarte d&apos;elle-même.
                </li>
                <li>
                  <strong>Les qualifications annoncées.</strong> Si une qualification Qualibat est
                  mise en avant, elle se vérifie dans l&apos;annuaire des entreprises qualifiées de
                  l&apos;organisme. Si une qualification RGE est annoncée, l&apos;annuaire officiel
                  se trouve sur{" "}
                  <a
                    href="https://france-renov.gouv.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={A}
                  >
                    france-renov.gouv.fr
                  </a>
                  . Une qualification se prouve par une fiche à jour dans l&apos;annuaire, pas par
                  un logo sur un dépliant.
                </li>
                <li>
                  <strong>L&apos;attestation d&apos;assurance décennale.</strong> Elle vous est due
                  avec le devis. Vérifiez-y les dates et les activités garanties, comme indiqué
                  plus haut.
                </li>
                <li>
                  <strong>La cohérence de l&apos;ensemble.</strong> Le nom, l&apos;adresse et le
                  numéro de téléphone du devis doivent correspondre à ceux du registre et du site
                  internet. Une adresse qui n&apos;existe pas, un numéro qui change d&apos;un
                  document à l&apos;autre : ce sont les incohérences les plus faciles à repérer et
                  les plus parlantes.
                </li>
              </ol>

              <h2 className={H2}>Le devis écrit est obligatoire dès le premier euro</h2>
              <p className={P}>
                Pour les prestations de dépannage, de réparation et d&apos;entretien en couverture
                et toiture, un devis écrit doit être remis avant l&apos;exécution des travaux,{" "}
                <strong>quel qu&apos;en soit le montant</strong>. C&apos;est l&apos;arrêté du 24
                janvier 2017, entré en vigueur le 1er avril 2017, qui a supprimé le seuil de 150 €
                que l&apos;on rencontre encore souvent : ce seuil venait de l&apos;arrêté du 2 mars
                1990 et n&apos;existe plus.
              </p>
              <p className={P}>
                Un devis complet porte la date, la durée de validité de l&apos;offre,
                l&apos;identité et les coordonnées de l&apos;entreprise, le décompte détaillé de
                chaque prestation et produit en quantité et en prix unitaire, la mention de
                l&apos;assurance, le caractère gratuit ou payant du devis, et le total hors taxes
                comme toutes taxes comprises. Refuser d&apos;écrire, c&apos;est déjà être en
                infraction — et le professionnel doit également rendre ses bases de facturation
                accessibles en ligne, ce que fait notre page{" "}
                <Link href="/tarifs" className={A}>
                  tarifs
                </Link>
                .
              </p>

              <h2 className={H2}>Si l&apos;on vient sonner chez vous</h2>
              <p className={P}>
                Le contrat conclu à votre domicile — le code de la consommation parle de{" "}
                <em>contrat hors établissement</em> — vous donne deux protections que beaucoup
                ignorent.
              </p>
              <ul className={UL}>
                <li>
                  <strong>14 jours pour vous rétracter</strong>, sans motif et sans pénalité
                  (article L221-18 du code de la consommation).
                </li>
                <li>
                  <strong>Aucun paiement avant sept jours.</strong> Le professionnel ne peut
                  recevoir aucun paiement ni aucune contrepartie, sous quelque forme que ce soit,
                  avant l&apos;expiration d&apos;un délai de sept jours à compter de la conclusion
                  du contrat (article L221-10). Une demande d&apos;acompte immédiat, en espèces ou
                  par chèque, sur le pas de la porte, est donc irrégulière.
                </li>
              </ul>
              <p className={P}>
                Une exception existe, et elle est logique : les travaux d&apos;entretien ou de
                réparation à réaliser en urgence au domicile, lorsque c&apos;est vous qui les avez
                expressément sollicités. Un dégât d&apos;eau un soir de tempête n&apos;entre pas
                dans le même cadre qu&apos;une proposition faite spontanément à votre portail.
              </p>
              <p className={P}>
                Une règle change par ailleurs le démarchage téléphonique.{" "}
                <strong>À compter du 11 août 2026</strong>, il est interdit sans consentement
                préalable du consommateur — un consentement libre, spécifique, éclairé et
                univoque, valable un an au maximum, révocable à tout moment, y compris oralement.
                Le dispositif Bloctel, fondé sur l&apos;opposition, disparaît au profit de cette
                logique inverse. Le texte est la loi n° 2025-594 du 30 juin 2025 contre toutes les
                fraudes aux aides publiques ; c&apos;est au professionnel qu&apos;il revient de
                pouvoir prouver votre consentement et d&apos;en conserver la preuve.
              </p>

              <h2 className={H2}>Ce que disent réellement les contrôles</h2>
              <p className={P}>
                Il existe des chiffres publics, et ils méritent d&apos;être lus correctement. Sur
                le champ voisin de la rénovation énergétique, les enquêtes successives de la{" "}
                <strong>DGCCRF</strong> (répression des fraudes) relèvent des taux d&apos;anomalie
                de l&apos;ordre de <strong>54 à 57 % des établissements contrôlés</strong>{" "}
                (enquêtes 2015, 2018, puis 2019-2020). La même administration souligne que la
                détention d&apos;un label RGE ne prémunit pas contre les manquements.
              </p>
              <p className={P}>
                Ce taux ne dit pas que la moitié des entreprises fraudent. Il dit ce que trouve un
                contrôle <strong>ciblé</strong> : la DGCCRF oriente ses enquêtes vers les
                signalements et les secteurs à risque, elle ne tire pas au sort. Le chiffre mesure
                la densité d&apos;anomalies là où l&apos;on cherche, et la plupart de ces anomalies
                sont des manquements à l&apos;information précontractuelle, pas des escroqueries.
              </p>
              <p className={P}>
                À côté, l&apos;ordre de grandeur du métier : la Fédération française du bâtiment
                dénombre environ <strong>18 500 entreprises de couverture</strong> en France pour
                environ 45 000 salariés, très majoritairement de moins de dix salariés. La quasi
                totalité travaille normalement, déclare son activité et paie son assurance — et
                tout cela se vérifie en ligne, gratuitement, avant de s&apos;engager.
              </p>
              <p className={P}>
                Reste une question distincte de l&apos;honnêteté : la qualité d&apos;exécution.
                Les données de l&apos;<strong>Agence qualité construction</strong> (rapport 2026,
                base Sycodés, désordres 1996-2025) placent les couvertures en petits éléments au
                premier rang des désordres décennaux en maison individuelle, avec 9,6 % du
                « Flop 10 », et 67 % des désordres se manifestent par un défaut d&apos;étanchéité à
                l&apos;eau. L&apos;AQC relie une part de ces désordres à la tension sur les
                compétences dans le métier. C&apos;est une raison de regarder qui exécute les
                travaux, et comment il traite les points singuliers — pas de renoncer à les faire
                faire. Les critères concrets d&apos;un travail bien exécuté sont détaillés dans
                notre article{" "}
                <Link href="/conseils/reconnaitre-bon-couvreur" className={A}>
                  comment reconnaître un bon couvreur
                </Link>
                , et la recherche d&apos;une entreprise dans{" "}
                <Link href="/conseils/trouver-artisan-couvreur" className={A}>
                  comment trouver un bon artisan couvreur
                </Link>
                .
              </p>

              <h2 className={H2}>Vos sécurités une fois les travaux engagés</h2>
              <ul className={UL}>
                <li>
                  <strong>La réception des travaux.</strong> C&apos;est l&apos;acte qui déclenche
                  les garanties. Elle se constate par un procès-verbal, et les réserves que vous y
                  portez engagent l&apos;entreprise à les lever.
                </li>
                <li>
                  <strong>La garantie de parfait achèvement, un an</strong> (article 1792-6 du code
                  civil) : elle couvre les désordres signalés à la réception et ceux qui
                  apparaissent dans l&apos;année.
                </li>
                <li>
                  <strong>La retenue de garantie, 5 % au maximum.</strong> Si le contrat la prévoit,
                  5 % TTC du montant peuvent être retenus pendant un an après la réception, pour
                  garantir la levée des réserves (loi n° 71-584 du 16 juillet 1971).
                </li>
                <li>
                  <strong>La responsabilité décennale, dix ans</strong> (article 1792) : elle joue
                  pour les désordres qui compromettent la solidité de l&apos;ouvrage ou le rendent
                  impropre à sa destination — une infiltration de couverture en fait partie.
                </li>
              </ul>
              <p className={P}>
                Et si les choses tournent mal, le signalement passe par{" "}
                <a
                  href="https://signal.conso.gouv.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={A}
                >
                  SignalConso
                </a>
                , le service gratuit de la DGCCRF : le signalement est transmis au professionnel et
                alimente le ciblage des contrôles.
              </p>

              <h2 className={H2}>Trois réflexes qui suffisent presque toujours</h2>
              <ol className={OL}>
                <li>
                  <strong>Ne rien signer le jour d&apos;une visite que vous n&apos;avez pas
                  sollicitée.</strong> Un artisan sérieux accepte que vous preniez le temps de lire.
                </li>
                <li>
                  <strong>Exiger un devis écrit</strong> portant le SIRET, le détail des postes et
                  la mention de l&apos;assurance décennale.
                </li>
                <li>
                  <strong>Vérifier le SIREN sur l&apos;Annuaire des Entreprises</strong> avant tout
                  versement. Deux minutes, gratuit, sans inscription.
                </li>
              </ol>
              <p className={P}>
                Un dernier point, souvent négligé : les avis en ligne sont encadrés. Publier de faux
                avis ou une note fabriquée est une pratique commerciale trompeuse (articles L121-2
                et L121-4 du code de la consommation), passible d&apos;une amende pouvant atteindre
                300 000 € et deux ans d&apos;emprisonnement, le montant pouvant être porté à 10 %
                du chiffre d&apos;affaires. Un avis utile est daté, détaillé, et décrit un chantier
                reconnaissable ; une série de commentaires courts publiés le même jour ne dit rien.
              </p>

              {/* SOURCES */}
              <h2 className={H2}>Sources</h2>
              <ul className="mb-4 ml-5 list-disc space-y-2 leading-relaxed text-gray-700 marker:text-gray-400">
                <li>
                  Légifrance —{" "}
                  <a
                    href="https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000388449"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={A}
                  >
                    loi n° 96-603 du 5 juillet 1996
                  </a>{" "}
                  (article 16, qualification professionnelle) ;{" "}
                  <a
                    href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000033935513"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={A}
                  >
                    arrêté du 24 janvier 2017
                  </a>{" "}
                  (devis et publicité des prix) ;{" "}
                  <a
                    href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032226864"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={A}
                  >
                    article L221-18 du code de la consommation
                  </a>{" "}
                  (rétractation) ;{" "}
                  <a
                    href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006443552"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={A}
                  >
                    article 1792 du code civil
                  </a>{" "}
                  (décennale).
                </li>
                <li>
                  ANIL —{" "}
                  <a
                    href="https://www.anil.org/aj-loi-lutte-fraude-aides-publiqus-renovation-energetique/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={A}
                  >
                    loi n° 2025-594 du 30 juin 2025
                  </a>{" "}
                  contre les fraudes aux aides publiques (démarchage téléphonique).
                </li>
                <li>
                  DGCCRF —{" "}
                  <a
                    href="https://www.economie.gouv.fr/dgccrf/laction-de-la-dgccrf/les-enquetes/renovation-energetique-focus-sur-lisolation-1-euro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={A}
                  >
                    enquêtes rénovation énergétique
                  </a>{" "}
                  et{" "}
                  <a
                    href="https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/avis-en-ligne-attention-aux-faux-commentaires"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={A}
                  >
                    fiche pratique sur les avis en ligne
                  </a>
                  .
                </li>
                <li>
                  <a
                    href="https://annuaire-entreprises.data.gouv.fr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={A}
                  >
                    Annuaire des Entreprises
                  </a>{" "}
                  (INSEE / Sirene) et{" "}
                  <a
                    href="https://signal.conso.gouv.fr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={A}
                  >
                    SignalConso
                  </a>
                  .
                </li>
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
                  (base Sycodés).
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
                    href="/conseils/reconnaitre-bon-couvreur"
                    className="flex h-full items-start gap-3 rounded-xl border border-gray-200 bg-white p-5 transition-colors hover:border-orange-400"
                  >
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-orange-700" aria-hidden="true" />
                    <span className="font-semibold text-gray-900">
                      Comment reconnaître un bon couvreur
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/conseils/trouver-artisan-couvreur"
                    className="flex h-full items-start gap-3 rounded-xl border border-gray-200 bg-white p-5 transition-colors hover:border-orange-400"
                  >
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-orange-700" aria-hidden="true" />
                    <span className="font-semibold text-gray-900">
                      Comment trouver un bon artisan couvreur
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

              {/* APPEL À L'ACTION — application de la méthode de l'article */}
              <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
                <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-gray-900">
                  <ShieldCheck className="h-5 w-5 text-orange-700" aria-hidden="true" />
                  Nos informations, à vérifier comme les autres
                </h2>
                <p className="mb-4 leading-relaxed text-gray-700">
                  {BUSINESS.name} est une entreprise artisanale de couverture immatriculée sous le
                  SIREN <strong>{LEGAL.siren}</strong>, établie {BUSINESS.address.street},{" "}
                  {BUSINESS.address.postalCode} {BUSINESS.address.city}, en activité{" "}
                  {BUSINESS.experience}. Ces éléments se contrôlent sur{" "}
                  <a
                    href="https://annuaire-entreprises.data.gouv.fr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={A}
                  >
                    annuaire-entreprises.data.gouv.fr
                  </a>
                  , et figurent dans nos{" "}
                  <Link href="/mentions-legales" className={A}>
                    mentions légales
                  </Link>
                  . L&apos;attestation d&apos;assurance décennale est jointe à chaque devis et à
                  chaque facture. Le déplacement et le devis sont gratuits.
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
