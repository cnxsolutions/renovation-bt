/**
 * ARTICLE — « Quel est le tarif moyen d'un couvreur ? »
 *
 * Cluster /conseils. Cet article traite le MARCHE ; la page /tarifs traite
 * l'entreprise. Aucun taux horaire de Renovation BT ne doit apparaitre ici :
 * il vit dans /tarifs, et le lien va de l'article vers la page, jamais
 * l'inverse. C'est ce qui evite la cannibalisation entre une page
 * reglementaire indexable et un article de fond.
 *
 * Toutes les fourchettes citees sont attribuees a leur source dans la phrase
 * meme : ce sont des estimations de comparateurs commerciaux, aucune
 * administration ne publie de prix moyen du couvreur. Les seules references
 * officielles de cet article sont les index INSEE BT01, BT30 et BT32.
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

const PATH = "/conseils/tarif-horaire-couvreur";
const PAGE_URL = `${SEO.siteUrl}${PATH}`;
const TITLE = "Tarif horaire d'un couvreur en 2026";
const DESCRIPTION =
  "40 à 60 €/h HT : d'où vient ce chiffre, ce qu'il ne couvre pas, ce que disent les index INSEE BT30 et BT32, et les mentions à vérifier sur un devis.";

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

/*
 * Pas de `datePublished` : aucune date de publication reelle n'est disponible.
 * Une date inventee dans un balisage Article est une donnee fausse publiee,
 * pas un gain de referencement.
 */
const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${PAGE_URL}#article`,
  headline: "Quel est le tarif moyen d'un couvreur ?",
  description: DESCRIPTION,
  mainEntityOfPage: { "@id": `${PAGE_URL}#webpage` },
  isPartOf: { "@id": WEBSITE_ID },
  author: { "@id": BUSINESS_ID },
  publisher: { "@id": BUSINESS_ID },
  inLanguage: "fr-FR",
  about: [
    { "@type": "Thing", name: "Prix des travaux de couverture" },
    { "@type": "Thing", name: "Devis de travaux du bâtiment" },
  ],
  citation: [
    {
      "@type": "CreativeWork",
      name: "INSEE, Index BT01, BT30 et BT32 du coût de la construction",
      url: "https://www.insee.fr/fr/statistiques/9022817",
    },
    {
      "@type": "CreativeWork",
      name: "Arrêté du 24 janvier 2017 relatif à la publicité des prix des prestations de dépannage, de réparation et d'entretien dans le secteur du bâtiment",
      url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000033935513",
    },
    {
      "@type": "CreativeWork",
      name: "Agence Qualité Construction, Flop 10 de la sinistralité française, 2026",
      url: "https://qualiteconstruction.com/actualite/desordres-decennaux-aqc-2026-flop-10-sinistralite-francaise-06-2026/",
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
      "INSEE — Index bâtiment, travaux publics et divers de la construction (BT01, BT30, BT32)",
    url: "https://www.insee.fr/fr/statistiques/9022817",
  },
  {
    label: "INSEE — Informations rapides n° 61, janvier 2026",
    url: "https://www.insee.fr/fr/statistiques/8897485",
  },
  {
    label:
      "Arrêté du 24 janvier 2017 relatif à la publicité des prix des prestations de dépannage, de réparation et d'entretien dans le secteur du bâtiment",
    url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000033935513",
  },
  {
    label:
      "Décret n° 2020-1817 du 29 décembre 2020 relatif à la mention des modalités d'enlèvement et de gestion des déchets sur les devis de travaux",
    url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000042841880",
  },
  {
    label: "Service-public.fr — Devis de travaux : obligations du professionnel",
    url: "https://entreprendre.service-public.gouv.fr/vosdroits/F23568",
  },
  {
    label:
      "Fédération française du bâtiment — Suppression de l'attestation TVA et remplacement par une mention sur le devis et la facture",
    url: "https://www.ffbatiment.fr/actualites-batiment/actualite-ba/attestation-tva-suppression-remplacement-mention-devis-facture",
  },
  {
    label:
      "Agence Qualité Construction — Flop 10 de la sinistralité française, juin 2026 (base Sycodés)",
    url: "https://qualiteconstruction.com/actualite/desordres-decennaux-aqc-2026-flop-10-sinistralite-francaise-06-2026/",
  },
  {
    label: "CAPEB — Note de conjoncture, 1er trimestre 2026",
    url: "https://www.capeb.fr/www/capeb/media/national/cp-capeb-note-de-conjoncture-t1-2026-29-04-2026.pdf",
  },
];

export default function TarifHoraireCouvreurPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Conseils", url: "/conseils" },
          { name: "Quel est le tarif moyen d'un couvreur ?", url: PATH },
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
              Quel est le tarif moyen d&apos;un couvreur ?
            </h1>

            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Les guides de travaux situent la main-d&apos;œuvre d&apos;un couvreur entre{" "}
              <strong>40 et 60 € de l&apos;heure hors taxes</strong> en 2026, avec un ordre de
              grandeur de 45 €/h HT en province contre 55 €/h HT en Île-de-France. Ce
              n&apos;est pas un tarif officiel : aucune administration ne publie de prix moyen
              du couvreur, ces fourchettes proviennent de comparateurs commerciaux. Et surtout,
              elles ne permettent pas de chiffrer une toiture, parce que le taux horaire
              n&apos;est presque jamais l&apos;unité de facturation d&apos;un chantier de
              couverture.
            </p>

            <p className={P}>
              Ce qui suit explique d&apos;où sortent ces chiffres, ce que la statistique
              publique mesure réellement sur la couverture, et sur quoi regarder à la place
              quand un devis arrive.
            </p>

            {/* ------------------------------------------------------------ */}
            <h2 className={H2}>D&apos;où sort la fourchette de 40 à 60 € de l&apos;heure</h2>
            <p className={P}>
              Elle circule à l&apos;identique sur les principaux guides de travaux — Travaux.com,
              Ootravaux, Obat — qui l&apos;établissent à partir des devis transitant par leurs
              propres plateformes de mise en relation. C&apos;est une photographie commerciale,
              utile pour se situer, mais qui n&apos;a ni la valeur ni la méthode d&apos;une
              statistique publique. Ces mêmes sources relèvent une majoration de 25 à 35 % à
              Paris et dans les grandes métropoles, l&apos;écart tenant surtout au coût du
              stationnement, de l&apos;accès et de la logistique de chantier.
            </p>
            <p className={P}>
              Premier réflexe avant toute comparaison :{" "}
              <strong>vérifier si le chiffre est hors taxes ou toutes taxes comprises</strong>.
              C&apos;est la première source de malentendu sur ce sujet. Un taux de 40 €/h HT
              devient 44 €/h TTC à 10 % de TVA, et 48 €/h TTC à 20 %. Deux devis qui affichent
              «&nbsp;45 €/h&nbsp;» ne disent pas forcément la même chose.
            </p>

            {/* ------------------------------------------------------------ */}
            <h2 className={H2}>
              Ce que mesure vraiment la statistique publique : les index BT30 et BT32
            </h2>
            <p className={P}>
              L&apos;INSEE publie chaque mois des index de coût du bâtiment, et deux
              d&apos;entre eux portent exactement sur ce métier :{" "}
              <strong>BT30, «&nbsp;Couverture en ardoises de schiste&nbsp;»</strong>, et{" "}
              <strong>BT32, «&nbsp;Couverture en tuiles en terre cuite&nbsp;»</strong>. Ils
              sont en base 100 en 2010 et servent de référence pour actualiser ou réviser un
              prix dans un marché de travaux. Aucun comparateur ne les cite, alors qu&apos;ils
              sont la seule mesure officielle de l&apos;évolution des coûts de couverture.
            </p>
            <p className={P}>
              Valeurs relevées dans les Informations rapides n° 169 de mai 2026 :
            </p>
            <ul className={UL}>
              <li>
                <strong>BT01</strong>, index tous corps d&apos;état : <strong>137,9</strong> —
                soit +37,9 % depuis 2010 pour l&apos;ensemble du bâtiment ;
              </li>
              <li>
                <strong>BT30</strong>, couverture en ardoises : <strong>152,5</strong> — soit{" "}
                <strong>+52,5 %</strong> depuis 2010 ;
              </li>
              <li>
                <strong>BT32</strong>, couverture en tuiles de terre cuite :{" "}
                <strong>146,4</strong> — soit <strong>+46,4 %</strong> depuis 2010.
              </li>
            </ul>
            <p className={P}>
              La lecture est sans ambiguïté : <strong>en quinze ans, la couverture a augmenté
              nettement plus vite que la moyenne du bâtiment</strong>, de près de quinze points
              pour l&apos;ardoise et de huit points et demi pour la tuile. Le mouvement se
              poursuit : quatre mois plus tôt, dans les Informations rapides n° 61 de janvier
              2026, le BT01 valait 134,7, le BT30 149,9 et le BT32 143,9.
            </p>
            <p className={P}>
              Concrètement, si vous comparez un devis d&apos;aujourd&apos;hui à un chiffrage
              obtenu il y a deux ou trois ans, l&apos;écart n&apos;est pas nécessairement le
              signe d&apos;un prix gonflé : ces index disent qu&apos;une partie de la hausse est
              structurelle, portée par le coût des matériaux et de la main-d&apos;œuvre du
              métier lui-même.
            </p>

            {/* ------------------------------------------------------------ */}
            <h2 className={H2}>Le taux horaire ne chiffre pas une toiture</h2>
            <p className={P}>
              C&apos;est le point que les simulateurs passent sous silence. En couverture, la
              main-d&apos;œuvre se facture rarement à l&apos;heure : elle est intégrée dans des
              unités d&apos;œuvre qui correspondent à la réalité du chantier.
            </p>
            <ul className={UL}>
              <li>
                <strong>Au mètre carré de rampant</strong> — c&apos;est-à-dire de surface de toit
                inclinée, et non de surface au sol : réfection de couverture, démoussage,
                application d&apos;hydrofuge, isolation.
              </li>
              <li>
                <strong>Au mètre linéaire</strong> : gouttière, descente, noue, solin, rive,
                faîtage.
              </li>
              <li>
                <strong>Au forfait</strong> : recherche de fuite, remplacement de quelques
                tuiles, pose d&apos;une fenêtre de toit.
              </li>
            </ul>
            <p className={P}>
              Multiplier un taux horaire par un nombre d&apos;heures supposé ne donne donc rien
              d&apos;exploitable. L&apos;échafaudage, la benne, l&apos;évacuation en déchèterie
              professionnelle, la sécurisation des abords et l&apos;accès au chantier sont des
              coûts qui existent indépendamment du temps passé sur le toit — et ce sont eux qui
              expliquent qu&apos;une petite toiture coûte proportionnellement plus cher au mètre
              carré qu&apos;une grande.
            </p>
            <p className={P}>
              Les bases de facturation appliquées par l&apos;entreprise — taux horaire,
              décompte du temps, prix forfaitaires, frais de déplacement, gratuité du devis —
              sont détaillées sur la page{" "}
              <Link href="/tarifs" className={A}>
                tarifs
              </Link>
              .
            </p>

            {/* ------------------------------------------------------------ */}
            <h2 className={H2}>Ce qu&apos;un devis de couverture contient, poste par poste</h2>
            <p className={P}>
              Un devis lisible sépare six familles de coûts. Si l&apos;un de ces postes manque
              alors que le chantier l&apos;impose, ce n&apos;est pas une économie : c&apos;est un
              supplément à venir.
            </p>
            <ul className={UL}>
              <li>
                <strong>La main-d&apos;œuvre</strong>, dépose de l&apos;ancienne couverture
                comprise le cas échéant.
              </li>
              <li>
                <strong>Les matériaux</strong> : tuiles ou ardoises, mais aussi liteaux, écran de
                sous-toiture, closoirs de ventilation, zinc de noue et de solin, crochets et
                fixations. Le prix d&apos;une tuile ne fait pas le prix d&apos;une toiture.
              </li>
              <li>
                <strong>L&apos;accès et la sécurité</strong> : échafaudage, nacelle, protections.
                Un coût fixe, quelle que soit la surface.
              </li>
              <li>
                <strong>La dépose et l&apos;évacuation des déchets.</strong> Depuis le 1er
                juillet 2021, le devis doit indiquer les modalités d&apos;enlèvement et de gestion
                des déchets ainsi que l&apos;installation où ils seront déposés (décret n°
                2020-1817). C&apos;est un poste réel et coûteux, absent de tous les simulateurs.
              </li>
              <li>
                <strong>Les travaux annexes</strong> : reprise de charpente, maçonnerie de souche
                de cheminée, raccordement électrique. Ils ne se découvrent parfois qu&apos;une
                fois la couverture déposée, et le devis doit dire comment ils seront traités.
              </li>
              <li>
                <strong>La TVA</strong>, dont le taux dépend du logement et de la nature des
                travaux.
              </li>
            </ul>

            {/* ------------------------------------------------------------ */}
            <h2 className={H2}>La TVA peut changer le montant final de dix points</h2>
            <p className={P}>
              Trois taux coexistent sur les travaux de toiture, et l&apos;écart entre le premier
              et le dernier représente 10 % de la facture :
            </p>
            <ul className={UL}>
              <li>
                <strong>10 %</strong> pour les travaux d&apos;amélioration, de transformation,
                d&apos;aménagement et d&apos;entretien portant sur un logement achevé depuis plus
                de deux ans (article 279-0 bis du code général des impôts). C&apos;est le cas le
                plus courant en rénovation de couverture.
              </li>
              <li>
                <strong>5,5 %</strong> pour les travaux d&apos;amélioration de la qualité
                énergétique, dont l&apos;isolation thermique de toiture (article 278-0 bis A).
              </li>
              <li>
                <strong>20 %</strong> pour un local qui n&apos;est pas affecté à l&apos;habitation
                ou pour un logement achevé depuis moins de deux ans.
              </li>
            </ul>
            <p className={P}>
              Une simplification récente vous concerne directement :{" "}
              <strong>depuis le 1er janvier 2025, l&apos;attestation TVA à remplir et à signer
              (formulaires 1300-SD et 1301-SD) est supprimée.</strong> Elle est remplacée par une
              mention portée sur le devis et sur la facture, l&apos;entreprise conservant les
              justificatifs. Si on vous réclame encore ce formulaire, l&apos;information est
              simplement périmée.
            </p>
            <p className={P}>
              Enfin, le taux réduit de TVA ne dépend pas d&apos;une qualification particulière de
              l&apos;entreprise : il dépend du logement et de la nature des travaux. Ce sont les
              aides à la rénovation énergétique qui obéissent, elles, à d&apos;autres conditions.
            </p>

            {/* ------------------------------------------------------------ */}
            <h2 className={H2}>Le devis écrit est obligatoire, quel que soit le montant</h2>
            <p className={P}>
              Pour la couverture, la toiture — application d&apos;hydrofuge et démoussage compris
              — et l&apos;étanchéité, un devis écrit doit vous être remis avant les travaux, sans
              seuil de montant. L&apos;arrêté du 24 janvier 2017, entré en vigueur le 1er avril
              2017, vise nommément ces activités. Le seuil de 150 € que l&apos;on rencontre encore
              sur beaucoup de pages venait de l&apos;arrêté du 2 mars 1990 : il n&apos;existe plus.
            </p>
            <p className={P}>
              Ce devis vous donne un outil de contrôle immédiat, parce que son contenu est
              imposé. Doivent y figurer :
            </p>
            <ul className={UL}>
              <li>la date, l&apos;identité et les coordonnées de l&apos;entreprise et les vôtres ;</li>
              <li>le lieu d&apos;exécution et la nature exacte des travaux ;</li>
              <li>
                le <strong>décompte détaillé de chaque prestation et produit</strong>, en quantité
                et en prix unitaire ;
              </li>
              <li>le taux horaire de main-d&apos;œuvre ;</li>
              <li>les frais de déplacement, le cas échéant ;</li>
              <li>
                les montants hors taxes et toutes taxes comprises, avec le taux de TVA appliqué ;
              </li>
              <li>la durée de validité de l&apos;offre ;</li>
              <li>le caractère gratuit ou payant du devis.</li>
            </ul>
            <p className={P}>
              S&apos;y ajoutent, depuis la loi du 18 juin 2014, la mention de l&apos;assurance
              souscrite, les coordonnées de l&apos;assureur et la couverture géographique du
              contrat, sur le devis comme sur les factures. L&apos;attestation de responsabilité
              décennale elle-même suit un modèle standardisé fixé par l&apos;arrêté du 5 janvier
              2016 — savoir la lire est un sujet à part entière, traité dans{" "}
              <Link href="/conseils/reconnaitre-bon-couvreur" className={A}>
                comment savoir si un couvreur est bon
              </Link>
              .
            </p>

            {/* ------------------------------------------------------------ */}
            <h2 className={H2}>Deux leviers que les clients laissent passer</h2>

            <h3 className={H3}>La retenue de garantie de 5 %</h3>
            <p className={P}>
              La loi du 16 juillet 1971 vous permet de retenir jusqu&apos;à{" "}
              <strong>5 % du montant TTC pendant un an après la réception</strong> des travaux,
              en garantie de la levée des réserves. Une condition : la clause doit être prévue
              par le devis ou le contrat. Elle se négocie donc avant la signature, pas au moment
              de payer.
            </p>

            <h3 className={H3}>Le calendrier</h3>
            <p className={P}>
              Au premier trimestre 2026, les carnets de commandes de l&apos;artisanat du bâtiment
              représentent <strong>80 jours de travail</strong>, soit dix jours de plus qu&apos;un
              an auparavant, selon la note de conjoncture de la CAPEB. Un chantier de réfection
              se prépare : plus la demande de devis est anticipée, plus vous avez le temps de
              comparer sur le fond plutôt que dans l&apos;urgence.
            </p>

            {/* ------------------------------------------------------------ */}
            <h2 className={H2}>Le devis le moins cher est rarement le moins coûteux</h2>
            <p className={P}>
              Un chiffre mérite d&apos;être connu avant d&apos;arbitrer sur le seul prix. Dans son
              Flop 10 de la sinistralité publié en 2026 à partir de la base Sycodés (désordres
              relevés de 1996 à 2025), l&apos;Agence Qualité Construction classe{" "}
              <strong>les couvertures en petits éléments — tuiles et ardoises — au premier rang
              des désordres décennaux en maison individuelle, avec 9,6 % des cas</strong>. Devant
              tous les autres lots.
            </p>
            <p className={P}>
              Autrement dit, l&apos;écart de quelques centaines d&apos;euros entre deux devis pèse
              peu face au coût d&apos;une reprise d&apos;étanchéité trois ans plus tard. La bonne
              question n&apos;est pas «&nbsp;combien&nbsp;», mais «&nbsp;combien pour quoi
              exactement&nbsp;» : même surface de rampant, même matériau, même traitement des
              points singuliers, même écran de sous-toiture, même sort réservé à
              l&apos;échafaudage et à l&apos;évacuation.
            </p>

            {/* ------------------------------------------------------------ */}
            <h2 className={H2}>Sources</h2>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-sm leading-relaxed text-gray-600">
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
            <p className="mb-8 text-sm leading-relaxed text-gray-600">
              Les fourchettes de prix citées en début d&apos;article proviennent des guides
              Travaux.com, Ootravaux et Obat, consultés en 2026. Ce sont des estimations
              commerciales, à distinguer des index INSEE.
            </p>

            {/* ------------------------------------------------------------ */}
            <h2 className={H2}>Faire chiffrer votre toiture</h2>
            <p className={P}>
              Un prix ferme suppose une visite : la pente, l&apos;accès, l&apos;état du support et
              la nature des matériaux existants décident du montant bien plus que le nombre de
              mètres carrés. Le devis et le déplacement sont gratuits. Vous pouvez appeler le{" "}
              <a href={BUSINESS.phoneHref} className={A}>
                {BUSINESS.phone}
              </a>{" "}
              ou passer par le{" "}
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
                  — la grille de lecture d&apos;un devis et d&apos;une attestation d&apos;assurance.
                </li>
                <li>
                  <Link href="/conseils/trouver-artisan-couvreur" className={A}>
                    Comment trouver un bon artisan couvreur ?
                  </Link>{" "}
                  — les annuaires publics gratuits et ce qu&apos;il faut préparer avant
                  d&apos;appeler.
                </li>
                <li>
                  <Link href="/zone-intervention" className={A}>
                    Zone d&apos;intervention
                  </Link>{" "}
                  — les communes desservies depuis Écury-sur-Coole.
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
