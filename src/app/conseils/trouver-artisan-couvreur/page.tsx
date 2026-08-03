/**
 * ARTICLE — « Comment trouver un bon artisan couvreur ? »
 *
 * Cluster /conseils. Cet article donne la METHODE de recherche ;
 * /conseils/reconnaitre-bon-couvreur donne la grille de JUGEMENT une fois
 * l'interlocuteur trouve ; /zone-intervention et les pages commune donnent le
 * territoire. Les trois ne doivent pas se recouvrir.
 *
 * Aucune plateforme de mise en relation payante n'est citee comme methode :
 * les annuaires publics font le meme travail gratuitement et donnent des
 * donnees opposables (Sirene, Qualibat, France Renov').
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CTABanner } from "@/components/sections/CTABanner";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import {
  BUSINESS_ID,
  WEBSITE_ID,
  serializeJsonLd,
} from "@/components/seo/serializeJsonLd";
import { BUSINESS, SEO } from "@/lib/constants";

const PATH = "/conseils/trouver-artisan-couvreur";
const PAGE_URL = `${SEO.siteUrl}${PATH}`;
const TITLE = "Comment trouver un bon artisan couvreur";
const DESCRIPTION =
  "Les annuaires publics gratuits pour vérifier une entreprise de couverture, ce qu'il faut préparer avant d'appeler, et ce qui change pour le démarchage.";

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
  "@id": `${PAGE_URL}#article`,
  headline: "Comment trouver un bon artisan couvreur ?",
  description: DESCRIPTION,
  mainEntityOfPage: { "@id": `${PAGE_URL}#webpage` },
  isPartOf: { "@id": WEBSITE_ID },
  author: { "@id": BUSINESS_ID },
  publisher: { "@id": BUSINESS_ID },
  inLanguage: "fr-FR",
  about: [
    { "@type": "Thing", name: "Recherche d'une entreprise de couverture" },
    { "@type": "Thing", name: "Droits du consommateur dans le bâtiment" },
  ],
  citation: [
    {
      "@type": "CreativeWork",
      name: "Annuaire des Entreprises (INSEE / Sirene)",
      url: "https://annuaire-entreprises.data.gouv.fr/",
    },
    {
      "@type": "CreativeWork",
      name: "Code de la consommation, article L221-18 — délai de rétractation",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032226864",
    },
    {
      "@type": "CreativeWork",
      name: "Code de l'urbanisme, article R421-17 — déclaration préalable",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000024197683",
    },
  ],
};

const H2 = "mt-12 mb-4 text-2xl font-bold text-gray-900";
const P = "mb-4 leading-relaxed text-gray-700";
const UL = "mb-6 list-disc space-y-2 pl-6 leading-relaxed text-gray-700";
const A = "font-medium text-orange-700 hover:underline";

const annuaires = [
  {
    nom: "Annuaire des Entreprises",
    url: "https://annuaire-entreprises.data.gouv.fr/",
    texte:
      "Le service public bâti sur les données INSEE / Sirene. Il donne le SIREN, le SIRET, l'état actif ou cessé, la date de création, les dirigeants, le code NAF, et une rubrique « labels et certificats » qui remonte les certifications RGE, Qualibat ou Certibat quand elles existent.",
  },
  {
    nom: "Annuaire Qualibat",
    url: "https://www.qualibat.com/trouvez-une-entreprise-qualifiee-qualibat",
    texte:
      "L'annuaire des entreprises qualifiées, interrogeable par SIRET, par nom ou par qualification. Utile pour confirmer une qualification affichée sur un devis ou un camion.",
  },
  {
    nom: "France Rénov'",
    url: "https://france-renov.gouv.fr/",
    texte:
      "L'annuaire officiel des professionnels RGE, et le service public de conseil gratuit et indépendant sur la rénovation énergétique.",
  },
  {
    nom: "Chambre de métiers et de l'artisanat",
    url: "https://www.artisanat.fr/",
    texte:
      "L'organisme d'immatriculation des entreprises artisanales, qui recense les professionnels du bâtiment de votre département.",
  },
];

const sources = [
  {
    label: "Annuaire des Entreprises (données INSEE / Sirene)",
    url: "https://annuaire-entreprises.data.gouv.fr/",
  },
  {
    label: "Qualibat — Trouver une entreprise qualifiée",
    url: "https://www.qualibat.com/trouvez-une-entreprise-qualifiee-qualibat",
  },
  {
    label: "France Rénov' — Service public de la rénovation de l'habitat",
    url: "https://france-renov.gouv.fr/",
  },
  {
    label:
      "ANIL — Loi n° 2025-594 du 30 juin 2025 contre toutes les fraudes aux aides publiques",
    url: "https://www.anil.org/aj-loi-lutte-fraude-aides-publiqus-renovation-energetique/",
  },
  {
    label:
      "Ministère de l'Économie — Réglementation du démarchage téléphonique pour les professionnels",
    url: "https://www.economie.gouv.fr/entreprises/developper-son-entreprise/innover-et-numeriser-son-entreprise/professionnels-comment-respecter-la-reglementation-sur-le-demarchage",
  },
  {
    label:
      "Code de la consommation, article L221-18 — délai de rétractation de quatorze jours",
    url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032226864",
  },
  {
    label:
      "Code de la consommation, article L221-10 — interdiction de paiement avant sept jours",
    url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000028678429/2014-04-01",
  },
  {
    label: "Code de l'urbanisme, article R421-17 — travaux soumis à déclaration préalable",
    url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000024197683",
  },
  {
    label: "SignalConso — Signaler un problème à la DGCCRF",
    url: "https://signal.conso.gouv.fr/",
  },
  {
    label: "CAPEB — Note de conjoncture, 1er trimestre 2026",
    url: "https://www.capeb.fr/www/capeb/media/national/cp-capeb-note-de-conjoncture-t1-2026-29-04-2026.pdf",
  },
];

export default function TrouverArtisanCouvreurPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Conseils", url: "/conseils" },
          { name: "Comment trouver un bon artisan couvreur ?", url: PATH },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(articleJsonLd) }}
      />

      <article className="bg-white py-14">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-orange-700">
              <Link href="/conseils" className="hover:underline">
                Conseils
              </Link>
            </p>

            <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900">
              Comment trouver un bon artisan couvreur ?
            </h1>

            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              En passant par les <strong>annuaires publics et gratuits</strong> plutôt que par
              les plateformes de mise en relation : l&apos;Annuaire des Entreprises de
              l&apos;INSEE, l&apos;annuaire Qualibat, l&apos;annuaire France Rénov&apos; et la
              chambre de métiers permettent de vérifier en quelques minutes qu&apos;une
              entreprise existe, qu&apos;elle est active, depuis quand, et que la couverture fait
              bien partie de son activité déclarée. Ensuite seulement viennent les critères de
              proximité et de disponibilité.
            </p>

            <p className={P}>
              Cet article donne la méthode de recherche. Une fois un ou plusieurs interlocuteurs
              identifiés, la grille de tri — devis, points singuliers, attestation d&apos;assurance
              — est détaillée dans{" "}
              <Link href="/conseils/reconnaitre-bon-couvreur" className={A}>
                comment savoir si un couvreur est bon
              </Link>
              .
            </p>

            {/* ------------------------------------------------------------ */}
            <h2 className={H2}>Quatre annuaires publics, gratuits, et rarement cités</h2>
            <div className="mb-6 space-y-4">
              {annuaires.map((annuaire) => (
                <div
                  key={annuaire.url}
                  className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                >
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    <a
                      href={annuaire.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-700 hover:underline"
                    >
                      {annuaire.nom}
                    </a>
                  </h3>
                  <p className="leading-relaxed text-gray-700">{annuaire.texte}</p>
                </div>
              ))}
            </div>
            <p className={P}>
              Deux codes d&apos;activité méritent d&apos;être connus au moment de cette
              vérification : <strong>43.91B, «&nbsp;Travaux de couverture par
              éléments&nbsp;»</strong>, et 43.91A pour la charpente. Un code NAF ne prouve aucune
              compétence, mais une incohérence entre l&apos;activité déclarée et les travaux
              proposés est un signal qu&apos;il faut lever avant d&apos;aller plus loin.
            </p>
            <p className={P}>
              La couverture est par ailleurs une <strong>activité artisanale
              réglementée</strong> : elle ne peut être exercée que par une personne titulaire
              d&apos;un CAP, d&apos;un BEP ou d&apos;un diplôme équivalent ou supérieur dans le
              métier, ou sous le contrôle effectif d&apos;une telle personne (loi du 5 juillet
              1996, décret du 2 avril 1998). Et sur le devis comme sur les factures doivent
              figurer l&apos;assurance souscrite, les coordonnées de l&apos;assureur et la
              couverture géographique du contrat, en application de la loi du 18 juin 2014.
            </p>

            {/* ------------------------------------------------------------ */}
            <h2 className={H2}>La proximité n&apos;est pas un argument, c&apos;est une contrainte</h2>
            <p className={P}>
              Sur une réfection programmée, la distance ne change pas grand-chose : le chantier
              s&apos;organise, l&apos;échafaudage se monte, quelques kilomètres de plus ne pèsent
              rien. <strong>Sur une fuite, elle décide de tout.</strong> Une bâche posée le jour
              même sur une toiture percée évite un plafond effondré ; la même bâche posée trois
              jours plus tard ne l&apos;évite pas.
            </p>
            <p className={P}>
              Regardez donc où l&apos;entreprise est réellement établie — l&apos;adresse
              d&apos;immatriculation figure sur l&apos;Annuaire des Entreprises — et non le rayon
              d&apos;intervention qu&apos;elle affiche. Une entreprise sans salarié qui annonce
              couvrir trois départements dans toutes les directions décrit une intention, pas une
              organisation. Les communes réellement desservies depuis Écury-sur-Coole sont listées
              sur la page{" "}
              <Link href="/zone-intervention" className={A}>
                zone d&apos;intervention
              </Link>
              .
            </p>

            {/* ------------------------------------------------------------ */}
            <h2 className={H2}>
              Le 11 août 2026, le sens du démarchage s&apos;inverse
            </h2>
            <p className={P}>
              C&apos;est le changement le plus utile à connaître pour ce métier, et il est
              récent. <strong>À compter du 11 août 2026, le démarchage téléphonique est interdit
              sans consentement préalable du consommateur.</strong> La loi n° 2025-594 du 30 juin
              2025 contre toutes les fraudes aux aides publiques supprime la logique
              d&apos;opposition — celle de Bloctel — au profit d&apos;une logique d&apos;accord
              préalable.
            </p>
            <p className={P}>
              Ce consentement doit être «&nbsp;libre, spécifique, éclairé, univoque et
              révocable&nbsp;». Il vaut un an au maximum, se révoque à tout moment, y compris
              oralement, et c&apos;est au professionnel de pouvoir en apporter la preuve.
            </p>
            <p className={P}>
              Conséquence pratique : <strong>une entreprise de couverture qui vous appelle sans
              que vous l&apos;ayez sollicitée n&apos;en a pas le droit.</strong> Ce n&apos;est
              plus une question d&apos;agacement, c&apos;est une question de légalité — et cela
              vaut aussi pour l&apos;appel qui suit une tempête, qui est le moment où ces
              sollicitations se multiplient.
            </p>

            {/* ------------------------------------------------------------ */}
            <h2 className={H2}>Si vous signez à domicile, vous avez deux protections</h2>
            <p className={P}>
              Un contrat conclu chez vous est un <strong>contrat hors établissement</strong>, ce
              qui déclenche deux règles :
            </p>
            <ul className={UL}>
              <li>
                <strong>quatorze jours de rétractation</strong> sans motif ni pénalité (article
                L221-18 du code de la consommation) ;
              </li>
              <li>
                <strong>aucun paiement ni aucune contrepartie ne peut vous être demandé avant
                l&apos;expiration d&apos;un délai de sept jours</strong> (article L221-10). Un
                acompte réclamé sur le pas de la porte n&apos;est pas régulier.
              </li>
            </ul>
            <p className={P}>
              Une exception existe, et elle est légitime : les travaux d&apos;entretien ou de
              réparation à réaliser en urgence à votre domicile, lorsque vous les avez
              expressément sollicités. C&apos;est exactement le cas d&apos;une fuite un samedi
              soir — vous appelez, l&apos;intervention se fait, et le délai de sept jours ne
              s&apos;applique pas à cette prestation d&apos;urgence.
            </p>
            <p className={P}>
              En cas de pratique douteuse, le signalement se fait sur{" "}
              <a
                href="https://signal.conso.gouv.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className={A}
              >
                SignalConso
              </a>
              , le service de la DGCCRF.
            </p>

            {/* ------------------------------------------------------------ */}
            <h2 className={H2}>Ce qu&apos;il faut préparer avant d&apos;appeler</h2>
            <p className={P}>
              Un devis exploitable dépend autant de ce que vous décrivez que de qui vous appelez.
              Réunir ces éléments avant le premier appel change la qualité de la réponse — et
              permet à un professionnel de vous dire tout de suite si le chantier relève ou non de
              son métier.
            </p>
            <ul className={UL}>
              <li>La <strong>surface au sol</strong> de la maison et la pente approximative du toit.</li>
              <li>Le <strong>matériau actuel</strong> : tuile mécanique, tuile plate, ardoise, fibrociment, bac acier.</li>
              <li>
                L&apos;<strong>année de construction</strong> — et particulièrement si elle est
                antérieure au 1er juillet 1997, date au-delà de laquelle la question de
                l&apos;amiante dans le fibrociment ne se pose plus.
              </li>
              <li>
                L&apos;<strong>accès</strong> : un échafaudage et une benne doivent pouvoir être
                installés, un camion doit pouvoir approcher.
              </li>
              <li>La présence de <strong>combles aménagés ou perdus</strong>, et d&apos;une isolation existante.</li>
              <li>
                Quelques <strong>photos prises depuis le sol</strong>, y compris des traces
                d&apos;infiltration à l&apos;intérieur s&apos;il y en a. Ne montez jamais sur le
                toit pour les prendre.
              </li>
            </ul>

            {/* ------------------------------------------------------------ */}
            <h2 className={H2}>Anticiper l&apos;urbanisme, avant même le premier appel</h2>
            <p className={P}>
              Une réfection <strong>à l&apos;identique</strong> — mêmes matériaux, même teinte,
              même aspect — est dispensée de formalité. En revanche, dès que la réfection change
              le matériau, la teinte, ou ajoute une ouverture comme une fenêtre de toit, elle est
              soumise à <strong>déclaration préalable</strong> en mairie (article R421-17 du code
              de l&apos;urbanisme).
            </p>
            <p className={P}>
              Le point qui surprend le plus concerne les secteurs protégés. En abords de monument
              historique ou en site patrimonial remarquable,{" "}
              <strong>l&apos;architecte des Bâtiments de France rend un avis qui lie la
              commune</strong>, et le délai d&apos;instruction passe à deux mois. Ce n&apos;est
              pas théorique dans la Marne : Châlons-en-Champagne compte plusieurs monuments
              protégés, dont la cathédrale Saint-Étienne et la collégiale Notre-Dame-en-Vaux —
              inscrite en 1998 au patrimoine mondial de l&apos;UNESCO au titre des chemins de
              Saint-Jacques-de-Compostelle en France, et dotée d&apos;un carillon de 56 cloches,
              l&apos;un des plus importants d&apos;Europe. Les périmètres d&apos;abords y sont
              donc actifs.
            </p>
            <p className={P}>
              Savoir cela avant de monter un échafaudage est un vrai critère de choix : demandez à
              votre interlocuteur si votre adresse est concernée, et ce qu&apos;il en déduit sur
              les matériaux possibles. Le détail du bâti local est traité sur la page{" "}
              <Link href="/couvreur/chalons-en-champagne" className={A}>
                couvreur à Châlons-en-Champagne
              </Link>
              .
            </p>

            {/* ------------------------------------------------------------ */}
            <h2 className={H2}>Disponibilité : ce que dit la conjoncture</h2>
            <p className={P}>
              Au premier trimestre 2026, les carnets de commandes de l&apos;artisanat du bâtiment
              représentent <strong>80 jours de travail, soit dix jours de plus qu&apos;un an
              auparavant</strong> (CAPEB, note de conjoncture). Corollaire à garder en tête :{" "}
              <strong>une entreprise entièrement disponible immédiatement pour une réfection
              complète est l&apos;exception, pas la règle.</strong> Une réparation urgente
              s&apos;organise, un chantier de couverture se planifie.
            </p>

            {/* ------------------------------------------------------------ */}
            <h2 className={H2}>Ce que vous n&apos;êtes pas obligé de demander</h2>
            <p className={P}>
              L&apos;attestation de vigilance URSSAF revient souvent dans les listes de
              vérifications. L&apos;obligation qui la fonde — l&apos;article L8222-1 du code du
              travail, pour les contrats d&apos;au moins 5 000 € hors taxes —{" "}
              <strong>ne s&apos;applique pas au particulier qui contracte pour son usage
              personnel</strong>, celui de son conjoint, partenaire de PACS, concubin, ascendants
              ou descendants. Vous pouvez la demander, personne ne vous le reprochera, mais vous
              n&apos;y êtes pas tenu et son absence ne prouve rien.
            </p>

            {/* ------------------------------------------------------------ */}
            <h2 className={H2}>Sources</h2>
            <ul className="mb-8 list-disc space-y-2 pl-6 text-sm leading-relaxed text-gray-600">
              {sources.map((source) => (
                <li key={source.url}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-700 underline underline-offset-2"
                  >
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* ------------------------------------------------------------ */}
            <h2 className={H2}>Prendre contact</h2>
            <p className={P}>
              Rénovation BT est une entreprise individuelle établie à Écury-sur-Coole, dans la
              Marne, immatriculée depuis 2010 sous le SIREN 524 754 280 — vérifiable sur
              l&apos;Annuaire des Entreprises. Le devis et le déplacement sont gratuits. Vous
              pouvez appeler le{" "}
              <a href={BUSINESS.phoneHref} className={A}>
                {BUSINESS.phone}
              </a>{" "}
              ou décrire votre toiture via le{" "}
              <Link href="/contact" className={A}>
                formulaire de contact
              </Link>
              .
            </p>

            <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
              <h2 className="mb-3 text-lg font-bold text-gray-900">À lire ensuite</h2>
              <ul className="space-y-2 leading-relaxed text-gray-700">
                <li>
                  <Link href="/conseils/reconnaitre-bon-couvreur" className={A}>
                    Comment savoir si un couvreur est bon ?
                  </Link>{" "}
                  — la grille de lecture d&apos;un devis, point singulier par point singulier.
                </li>
                <li>
                  <Link href="/conseils/tarif-horaire-couvreur" className={A}>
                    Quel est le tarif moyen d&apos;un couvreur ?
                  </Link>{" "}
                  — d&apos;où viennent les fourchettes, et ce que mesurent les index INSEE.
                </li>
                <li>
                  <Link href="/tarifs" className={A}>
                    Tarifs
                  </Link>{" "}
                  — bases de facturation, frais de déplacement et conditions de devis.
                </li>
                <li>
                  <Link href="/conseils" className={A}>
                    Tous les conseils
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </article>

      <CTABanner />
    </>
  );
}
