/**
 * ARTICLE — « Comment savoir si un couvreur est bon ? »
 *
 * Cluster /conseils. Cet article sert a JUGER un interlocuteur qu'on a deja ;
 * /conseils/trouver-artisan-couvreur sert a EN CHERCHER un. La distinction est
 * posee des l'introduction et les deux articles se lient : sans cela, les deux
 * pages se cannibalisent sur la meme intention.
 *
 * Aucun concurrent n'est nomme, decrit ni rendu identifiable, y compris par
 * allusion geographique (art. 1240 du code civil : meme exacte, une
 * information qui discredite un concurrent identifiable est fautive). Aucun
 * label maison, aucune charte, aucun score, aucun nombre de chantiers.
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

const PATH = "/conseils/reconnaitre-bon-couvreur";
const PAGE_URL = `${SEO.siteUrl}${PATH}`;
const TITLE = "Comment reconnaître un bon couvreur";
const DESCRIPTION =
  "Les couvertures sont le 1er poste de désordres décennaux en maison individuelle. Voici où ça rate, et comment le vérifier sur un devis avant de signer.";

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
  headline: "Comment savoir si un couvreur est bon ?",
  description: DESCRIPTION,
  mainEntityOfPage: { "@id": `${PAGE_URL}#webpage` },
  isPartOf: { "@id": WEBSITE_ID },
  author: { "@id": BUSINESS_ID },
  publisher: { "@id": BUSINESS_ID },
  inLanguage: "fr-FR",
  about: [
    { "@type": "Thing", name: "Choix d'une entreprise de couverture" },
    { "@type": "Thing", name: "Garantie décennale" },
  ],
  citation: [
    {
      "@type": "CreativeWork",
      name: "Agence Qualité Construction, Flop 10 de la sinistralité française, 2026",
      url: "https://qualiteconstruction.com/actualite/desordres-decennaux-aqc-2026-flop-10-sinistralite-francaise-06-2026/",
    },
    {
      "@type": "CreativeWork",
      name: "Code civil, article 1792 — responsabilité décennale",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006443552",
    },
    {
      "@type": "CreativeWork",
      name: "Décret n° 98-246 du 2 avril 1998 relatif à la qualification professionnelle exigée pour certaines activités",
      url: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000388449",
    },
  ],
};

const H2 = "mt-12 mb-4 text-2xl font-bold text-gray-900";
const H3 = "mt-8 mb-3 text-xl font-semibold text-gray-900";
const P = "mb-4 leading-relaxed text-gray-700";
const UL = "mb-6 list-disc space-y-2 pl-6 leading-relaxed text-gray-700";
const A = "font-medium text-orange-700 hover:underline";

const sources = [
  {
    label:
      "Agence Qualité Construction — Flop 10 de la sinistralité française, juin 2026 (base Sycodés, désordres 1996-2025)",
    url: "https://qualiteconstruction.com/actualite/desordres-decennaux-aqc-2026-flop-10-sinistralite-francaise-06-2026/",
  },
  {
    label:
      "Agence Qualité Construction — Flop 10 des maisons individuelles, juin 2025",
    url: "https://qualiteconstruction.com/actualite/desordres-decennaux-aqc-2025-flop-10-maisons-individuelles-couvertures-petits-elements-06-2025/",
  },
  {
    label: "Code civil, article 1792 — responsabilité décennale",
    url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006443552",
  },
  {
    label:
      "Décret n° 98-246 du 2 avril 1998 relatif à la qualification professionnelle exigée pour l'exercice des activités artisanales",
    url: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000388449",
  },
  {
    label:
      "Arrêté du 24 janvier 2017 relatif à la publicité des prix dans le secteur du bâtiment",
    url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000033935513",
  },
  {
    label: "Annuaire des Entreprises (données INSEE / Sirene)",
    url: "https://annuaire-entreprises.data.gouv.fr/",
  },
  {
    label: "Batirama — NF DTU 40.11, couvertures en ardoises naturelles",
    url: "https://www.batirama.com/article/41653-nf-dtu-40.11-couvertures-en-ardoises-naturelles.html",
  },
  {
    label: "DGCCRF — Avis en ligne : attention aux faux commentaires",
    url: "https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/avis-en-ligne-attention-aux-faux-commentaires",
  },
];

export default function ReconnaitreBonCouvreurPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Conseils", url: "/conseils" },
          { name: "Comment savoir si un couvreur est bon ?", url: PATH },
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
              Comment savoir si un couvreur est bon ?
            </h1>

            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Trois choses se vérifient avant le premier coup de marteau, et elles suffisent à
              trier :{" "}
              <strong>
                ce que le devis dit des points singuliers de la toiture, ce que
                l&apos;attestation d&apos;assurance couvre exactement, et ce que les registres
                publics disent de l&apos;entreprise
              </strong>
              . Dans cet ordre. Les avis en ligne viennent après, et ils ne remplacent aucun des
              trois.
            </p>

            <p className={P}>
              Cet article s&apos;adresse à qui a déjà un ou plusieurs interlocuteurs, et parfois
              un devis en main. Si vous cherchez encore par où commencer, la méthode de recherche
              est traitée à part dans{" "}
              <Link href="/conseils/trouver-artisan-couvreur" className={A}>
                comment trouver un bon artisan couvreur
              </Link>
              .
            </p>

            {/* ------------------------------------------------------------ */}
            <h2 className={H2}>D&apos;abord, savoir ce qui rate réellement</h2>
            <p className={P}>
              Les conseils habituels — demandez plusieurs devis, regardez les avis, fiez-vous au
              bouche-à-oreille — ont un défaut commun : ils ne disent pas ce qui échoue sur une
              toiture. Les statistiques d&apos;expertise, elles, le disent précisément.
            </p>
            <p className={P}>
              Dans son Flop 10 de la sinistralité publié en 2026 à partir de la base Sycodés
              (désordres relevés de 1996 à 2025), l&apos;Agence Qualité Construction place{" "}
              <strong>
                les couvertures en petits éléments — tuiles et ardoises — au premier rang des
                désordres décennaux en maison individuelle, avec 9,6 % des cas
              </strong>
              . Elles occupaient déjà la première place dans l&apos;édition 2025 avec 9,7 %,
              passant pour la première fois devant les revêtements de sol intérieurs. Tous
              bâtiments confondus, sur la période 2023-2025, <strong>67 % des désordres
              décennaux se manifestent par un défaut d&apos;étanchéité à l&apos;eau</strong>,
              11 % par un défaut de stabilité et 2 % par de la condensation.
            </p>
            <p className={P}>
              Et l&apos;AQC nomme la cause. Ses experts relèvent des «&nbsp;problèmes de mise en
              œuvre au niveau des points singuliers, avec des noues souvent non conformes au NF
              DTU&nbsp;». <strong>Ce n&apos;est donc pas la grande surface plane du toit qui
              pose problème, ce sont ses jonctions.</strong> Toute la suite en découle.
            </p>

            {/* ------------------------------------------------------------ */}
            <h2 className={H2}>Lire un devis de couverture : les points singuliers</h2>
            <p className={P}>
              Un devis qui ne mentionne que la surface et le modèle de tuile ne vous engage sur
              rien de ce qui décidera de l&apos;étanchéité. Cherchez-y ces éléments, nommés un
              par un, avec leur quantité et leur mode de traitement.
            </p>
            <ul className={UL}>
              <li>
                <strong>Les noues</strong> — les jonctions en creux entre deux pans. C&apos;est
                le point que les experts citent en premier. Noue métallique façonnée ou noue
                fermée, largeur, matériau : le devis doit trancher.
              </li>
              <li>
                <strong>Les solins</strong>, à la jonction entre la couverture et un mur ou une
                souche de cheminée. Solin zinc, bande porte-solin, engravure : là aussi, une
                ligne dédiée.
              </li>
              <li>
                <strong>Les rives et le faîtage</strong> : scellement au mortier ou pose à sec
                sur closoir ventilé. Ce n&apos;est ni le même prix, ni la même durée de vie, ni
                le même entretien.
              </li>
              <li>
                <strong>Les sorties de toit</strong> : conduits, ventilations, châssis de toit.
                Chaque percement est une entrée d&apos;eau potentielle.
              </li>
              <li>
                <strong>L&apos;écran de sous-toiture</strong> : présence, type, et surtout mode
                de pose. Un écran mal posé aggrave le problème qu&apos;il est censé prévenir.
              </li>
              <li>
                <strong>La ventilation de la couverture</strong> : c&apos;est elle qui évite la
                condensation sous les tuiles et la dégradation de la charpente.
              </li>
            </ul>

            <h3 className={H3}>Les référentiels que le devis peut citer</h3>
            <p className={P}>
              Les règles de l&apos;art sont écrites, et un professionnel qui les connaît n&apos;a
              aucune raison de ne pas les nommer : NF DTU 40.11 pour les ardoises naturelles
              (révisé en décembre 2020), NF DTU 40.21 et 40.211 pour les tuiles de terre cuite à
              emboîtement, la série NF DTU 40.2x pour les tuiles béton, NF DTU 40.41 pour le
              zinc.
            </p>
            <p className={P}>
              Ces textes imposent une <strong>pente minimale</strong> et un{" "}
              <strong>recouvrement</strong> qui varient selon la zone climatique (1, 2 ou 3) et
              selon la situation du bâtiment (protégée, normale, exposée). La Marne relève de la
              zone 1, qui couvre l&apos;intérieur des terres à moins de 200 mètres
              d&apos;altitude. Un devis sérieux mentionne l&apos;une et l&apos;autre : c&apos;est
              ce couple qui détermine si le modèle de tuile proposé convient à votre toit,
              particulièrement sur les pentes faibles et les maisons isolées en plaine.
            </p>

            {/* ------------------------------------------------------------ */}
            <h2 className={H2}>L&apos;attestation d&apos;assurance : trois lignes à lire</h2>
            <p className={P}>
              La mention de l&apos;assurance sur les devis et les factures est obligatoire depuis
              la loi du 18 juin 2014, et l&apos;attestation de responsabilité décennale suit un
              modèle standardisé, imposé par l&apos;arrêté du 5 janvier 2016. Une fois le
              document en main, trois vérifications suffisent :
            </p>
            <ul className={UL}>
              <li>
                <strong>«&nbsp;Couverture&nbsp;» figure-t-elle dans les activités garanties ?</strong>{" "}
                Une attestation valable pour la maçonnerie ne couvre pas une toiture.
              </li>
              <li>
                <strong>La zone géographique couvre-t-elle votre chantier ?</strong> Le contrat
                délimite un territoire.
              </li>
              <li>
                <strong>La période de validité couvre-t-elle la date d&apos;ouverture du
                chantier ?</strong> C&apos;est cette date qui compte pour la décennale, pas celle
                de la signature du devis.
              </li>
            </ul>

            {/* ------------------------------------------------------------ */}
            <h2 className={H2}>Les trois garanties, et ce qu&apos;elles couvrent</h2>
            <p className={P}>
              Elles ne se ressemblent pas, elles se cumulent, et elles partent toutes de la même
              date : la réception des travaux, constatée par un procès-verbal signé, avec ou sans
              réserves.
            </p>
            <ul className={UL}>
              <li>
                <strong>La garantie de parfait achèvement</strong> : un an, due par le seul
                entrepreneur, elle couvre l&apos;ensemble des désordres signalés à la réception ou
                dans l&apos;année qui suit (art. 1792-6 du code civil).
              </li>
              <li>
                <strong>La garantie de bon fonctionnement</strong> : deux ans, sur les éléments
                d&apos;équipement dissociables (art. 1792-3).
              </li>
              <li>
                <strong>La responsabilité décennale</strong> : dix ans, sur les dommages qui
                compromettent la solidité de l&apos;ouvrage ou le rendent impropre à sa
                destination (art. 1792). <strong>Un défaut d&apos;étanchéité affectant la
                couverture en relève.</strong>
              </li>
            </ul>
            <p className={P}>
              À ne pas confondre avec la garantie du fabricant sur les tuiles ou les ardoises :
              ce n&apos;est ni le même débiteur, ni le même objet, ni la même durée. Un matériau
              garanti trente ans posé hors des règles de l&apos;art reste un désordre imputable à
              l&apos;entreprise.
            </p>

            {/* ------------------------------------------------------------ */}
            <h2 className={H2}>La vérification administrative, en dix minutes</h2>
            <p className={P}>
              Elle est gratuite et se fait depuis un téléphone, pendant que vous relisez le
              devis.
            </p>
            <ul className={UL}>
              <li>
                <strong>L&apos;existence et l&apos;activité de l&apos;entreprise</strong> sur
                l&apos;
                <a
                  href="https://annuaire-entreprises.data.gouv.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={A}
                >
                  Annuaire des Entreprises
                </a>{" "}
                (données INSEE / Sirene) : SIREN, SIRET, état actif ou cessé, date de création,
                dirigeants, code NAF. Les codes cohérents avec ce métier sont le{" "}
                <strong>43.91B, «&nbsp;Travaux de couverture par éléments&nbsp;»</strong>, et le
                43.91A pour la charpente. Un code NAF ne prouve pas une compétence, mais une
                incohérence est un signal.
              </li>
              <li>
                <strong>La qualification.</strong> La couverture est une activité artisanale
                réglementée : elle ne peut être exercée que par une personne titulaire d&apos;un
                CAP, d&apos;un BEP ou d&apos;un diplôme équivalent ou supérieur dans le métier, ou
                sous le contrôle effectif d&apos;une telle personne (loi du 5 juillet 1996, décret
                du 2 avril 1998).
              </li>
              <li>
                <strong>L&apos;écrit.</strong> En couverture, le devis écrit est obligatoire quel
                que soit le montant depuis le 1er avril 2017. Un professionnel qui refuse
                d&apos;écrire est déjà en infraction — ce seul test élimine une partie du
                problème.
              </li>
            </ul>
            <p className={P}>
              Un point que ces vérifications ne diront pas : <strong>la taille de
              l&apos;entreprise n&apos;est pas un indicateur de qualité.</strong> La France compte
              environ 18 500 entreprises de couverture pour quelque 45 000 salariés (FFB), très
              majoritairement de moins de dix salariés. Le métier est artisanal par structure.
            </p>

            {/* ------------------------------------------------------------ */}
            <h2 className={H2}>Rendre trois devis réellement comparables</h2>
            <p className={P}>
              «&nbsp;Demandez trois devis&nbsp;» ne sert à rien si les trois ne décrivent pas le
              même chantier. Avant de les mettre côte à côte, alignez six paramètres :
            </p>
            <ul className={UL}>
              <li>la même surface de rampant — surface inclinée, pas surface au sol ;</li>
              <li>le même matériau et le même modèle, référence fabricant à l&apos;appui ;</li>
              <li>le même traitement des points singuliers, noues en tête ;</li>
              <li>le même écran de sous-toiture, ou son absence assumée dans les trois ;</li>
              <li>le même sort pour l&apos;échafaudage : inclus, en option, ou absent ;</li>
              <li>
                la même prise en charge de la dépose et de l&apos;évacuation en déchèterie
                professionnelle.
              </li>
            </ul>
            <p className={P}>
              Sur la façon de décomposer un montant et sur ce que la TVA change au total, voir{" "}
              <Link href="/conseils/tarif-horaire-couvreur" className={A}>
                quel est le tarif moyen d&apos;un couvreur
              </Link>{" "}
              et la page{" "}
              <Link href="/tarifs" className={A}>
                tarifs
              </Link>
              .
            </p>

            {/* ------------------------------------------------------------ */}
            <h2 className={H2}>Ce que les avis en ligne disent, et ce qu&apos;ils ne disent pas</h2>
            <p className={P}>
              Ils comptent — ils renseignent sur la ponctualité, la propreté du chantier, la
              tenue des engagements. Deux limites, cependant, méritent d&apos;être connues.
            </p>
            <p className={P}>
              La première est technique : <strong>un avis ne dit rien du traitement d&apos;une
              noue.</strong> Un client satisfait juge ce qu&apos;il voit ; les désordres de
              couverture se déclarent souvent plusieurs années après, une fois les avis publiés
              depuis longtemps.
            </p>
            <p className={P}>
              La seconde est juridique. La collecte, la modération et la restitution des avis en
              ligne sont encadrées par la norme NF ISO 20488, qui a remplacé la norme française NF
              Z74-501 en septembre 2018 et sert de référence aux juridictions. Publier ou faire
              publier de faux avis constitue une pratique commerciale trompeuse (articles L121-2
              et L121-4 du code de la consommation). Un profil dont les avis sont tous récents,
              tous élogieux et tous rédigés dans le même registre mérite au moins d&apos;être
              recoupé avec les vérifications ci-dessus.
            </p>
            <p className={P}>
              Dernier repère, souvent mal interprété : <strong>une qualification RGE conditionne
              l&apos;accès à certaines aides à la rénovation énergétique</strong> — elle ne
              certifie pas la qualité d&apos;une pose de tuiles, qui relève des NF DTU et de
              l&apos;assurance décennale.
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
            <h2 className={H2}>Poser vos questions avant de signer</h2>
            <p className={P}>
              Si un devis en main soulève une question — un poste absent, une noue non détaillée,
              une attestation à lire — la visite est le meilleur moment pour en parler. Le devis
              et le déplacement sont gratuits. Appelez le{" "}
              <a href={BUSINESS.phoneHref} className={A}>
                {BUSINESS.phone}
              </a>{" "}
              ou écrivez via le{" "}
              <Link href="/contact" className={A}>
                formulaire de contact
              </Link>
              .
            </p>

            <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
              <h2 className="mb-3 text-lg font-bold text-gray-900">À lire ensuite</h2>
              <ul className="space-y-2 leading-relaxed text-gray-700">
                <li>
                  <Link href="/conseils/trouver-artisan-couvreur" className={A}>
                    Comment trouver un bon artisan couvreur ?
                  </Link>{" "}
                  — les annuaires publics gratuits, et ce qui change pour le démarchage.
                </li>
                <li>
                  <Link href="/conseils/tarif-horaire-couvreur" className={A}>
                    Quel est le tarif moyen d&apos;un couvreur ?
                  </Link>{" "}
                  — ce que recouvre un taux horaire, et ce qu&apos;il ne recouvre pas.
                </li>
                <li>
                  <Link href="/couvreur/chalons-en-champagne" className={A}>
                    Couvreur à Châlons-en-Champagne
                  </Link>{" "}
                  — le bâti et les contraintes de chantier localement.
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
