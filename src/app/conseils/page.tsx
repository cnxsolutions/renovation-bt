/**
 * PILIER DU CLUSTER /conseils.
 *
 * Cette page ne traite aucun sujet elle-meme : elle distribue les neuf articles
 * et leur donne un parent commun. C'est la seule page du cluster liee depuis la
 * navigation et le pied de page ; les articles se rejoignent entre eux et
 * remontent tous ici.
 *
 * Deux regles de tenue :
 *  1. Les resumes decrivent l'ANGLE de chaque article, pas son sujet. « Prix
 *     d'une toiture » n'aide personne a choisir ; « 100 m² au sol ne font pas
 *     100 m² de toiture » fait cliquer, et tient sa promesse une fois clique.
 *  2. Aucun chiffre ici qui ne soit deja dans l'article cible et sourcé la-bas.
 *     Un resume qui avance un chiffre absent de l'article devient un mensonge
 *     par avance de vente.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CTABanner } from "@/components/sections/CTABanner";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { BUSINESS, SEO } from "@/lib/constants";

const PATH = "/conseils";
/*
 * 43 caracteres. Le layout ajoute « | Rénovation BT » (16) : 59 en pleine
 * longueur, sous la borne de 60 au-dela de laquelle Google tronque.
 */
const TITLE = "Conseils toiture : prix, entretien, couvreur";
const DESCRIPTION =
  "Prix des travaux, choix de l'artisan, durée de vie et entretien d'une toiture : neuf réponses sourcées aux questions que l'on nous pose le plus souvent.";

/*
 * La fusion des metadonnees de Next est SUPERFICIELLE : l'`openGraph` ci-dessous
 * REMPLACE entierement celui du layout racine. Tout ce qui n'y est pas repete
 * est perdu — type, locale, siteName et l'image par defaut. On les redeclare
 * donc, comme le font /zone-intervention et les pages ville.
 */
export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: BUSINESS.displayName,
    title: `${TITLE} | ${BUSINESS.displayName}`,
    description: DESCRIPTION,
    url: PATH,
    images: [{ url: SEO.ogImage, width: 1200, height: 630 }],
  },
};

interface ArticleLink {
  href: string;
  question: string;
  summary: string;
}

interface ArticleGroup {
  id: string;
  title: string;
  intro: string;
  articles: readonly ArticleLink[];
}

const groups: readonly ArticleGroup[] = [
  {
    id: "prix-et-budget",
    title: "Prix et budget",
    intro:
      "Trois questions de chiffrage, et le même piège à chaque fois : un prix unique donné en réponse à une question qui n'en admet pas.",
    articles: [
      {
        href: "/conseils/tarif-horaire-couvreur",
        question: "Quel est le tarif moyen d'un couvreur ?",
        summary:
          "La fourchette de 40 à 60 € de l'heure circule partout sans que personne dise ce qu'elle recouvre. En couverture, la main-d'œuvre se facture au mètre carré de rampant, au mètre linéaire ou au forfait : voici ce qu'il faut regarder à la place, et ce que la loi vous garantit de trouver sur un devis.",
      },
      {
        href: "/conseils/prix-refaire-toiture-100m2",
        question: "Quel est le prix pour refaire une toiture de 100 m² ?",
        summary:
          "100 m² au sol ne font pas 100 m² de toiture : la pente ajoute une surface que les simulateurs oublient, et l'écart se voit immédiatement sur le budget. Décomposition poste par poste, et les trois variables qui font vraiment exploser une facture.",
      },
      {
        href: "/conseils/meilleure-periode-travaux-toiture",
        question: "Quel est le mois le moins cher pour les travaux de toiture ?",
        summary:
          "Personne ne peut vous garantir une remise en janvier, et aucune statistique publique ne montre de creux saisonnier. Ce qui pèse réellement sur le prix, c'est le délai dont vous disposez — et les contraintes techniques, elles, sont bien saisonnières.",
      },
    ],
  },
  {
    id: "choisir-son-couvreur",
    title: "Choisir son couvreur",
    intro:
      "Chercher, juger, vérifier : trois opérations distinctes, dans cet ordre. Chacune a son article.",
    articles: [
      {
        href: "/conseils/trouver-artisan-couvreur",
        question: "Comment trouver un bon artisan couvreur ?",
        summary:
          "Les annuaires publics et gratuits que les plateformes de mise en relation ne citent jamais, ce qu'il faut préparer avant d'appeler, et pourquoi la proximité n'est pas un argument commercial mais une contrainte physique dès qu'il y a une fuite.",
      },
      {
        href: "/conseils/reconnaitre-bon-couvreur",
        question: "Comment savoir si un couvreur est bon ?",
        summary:
          "Vous avez un devis en main : reste à le lire. Les couvertures en petits éléments sont le premier poste de désordres décennaux en maison individuelle, et ça ne rate presque jamais en pleine pente. La grille de lecture part de là — noues, solins, rives, faîtage, écran de sous-toiture, ventilation.",
      },
      {
        href: "/conseils/couvreurs-sont-ils-fiables",
        question: "Les couvreurs sont-ils dignes de confiance ?",
        summary:
          "La question mérite mieux qu'un plaidoyer. Ce que la loi impose à tout couvreur, ce que vous pouvez contrôler gratuitement en dix minutes, et où signaler un problème. Sources officielles uniquement.",
      },
    ],
  },
  {
    id: "entretien-et-duree-de-vie",
    title: "Entretien et durée de vie",
    intro:
      "Ce que vous pouvez observer vous-même, ce que cela vous laisse comme délai, et ce qui vieillit réellement dans une couverture.",
    articles: [
      {
        href: "/conseils/toiture-en-mauvais-etat-signes",
        question: "À quoi ressemble une toiture en mauvais état ?",
        summary:
          "Le diagnostic classé par lieu et par moment d'observation : depuis le sol, depuis les combles, après une pluie, après un gel. Ce qui peut attendre, ce qui se traite dans l'année, ce qui justifie un appel tout de suite. Et pourquoi la tache au plafond n'indique jamais l'endroit du trou.",
      },
      {
        href: "/conseils/duree-de-vie-toiture",
        question: "Quelle est la durée de vie moyenne d'une toiture ?",
        summary:
          "Durée de vie du matériau, durée de la garantie du fabricant, durée de vie de l'ouvrage : trois choses que tout le monde confond. Une couverture vieillit à la vitesse de son maillon faible, et ce maillon n'est presque jamais la tuile.",
      },
    ],
  },
  {
    id: "patrimoine-local",
    title: "Patrimoine local",
    intro:
      "Le siège de l'entreprise se trouve rue de Châlons-sur-Marne, à Écury-sur-Coole. Ce nom de rue est le dernier état civil d'une ville qui en a changé — et la date que l'on lit partout est fausse.",
    articles: [
      {
        href: "/conseils/ancien-nom-chalons-en-champagne",
        question: "Quel était l'ancien nom de Châlons-en-Champagne ?",
        summary:
          "Châlons-sur-Marne, jusqu'au 3 janvier 1998 — ni 1995, ni 1997. Le premier décret a été annulé par le Conseil d'État, et il a fallu le reprendre. La chronologie complète, décret par décret, avec les références Légifrance.",
      },
    ],
  },
];

const H2 = "text-2xl font-bold text-gray-900 sm:text-3xl";
const A = "font-medium text-orange-700 hover:underline";

export default function ConseilsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Conseils", url: PATH },
        ]}
      />

      <section className="bg-white py-14">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900">
              Conseils toiture : prix, entretien et choix du couvreur
            </h1>

            <p className="mb-5 text-lg leading-relaxed text-gray-700">
              Avant un chantier de couverture, les mêmes questions reviennent : combien
              ça coûte, à qui confier le travail, quand s&apos;y prendre, et jusqu&apos;où
              on peut attendre. Les réponses qui circulent sur ces sujets sont le plus
              souvent recopiées d&apos;un site à l&apos;autre, sans chiffre et sans source.
            </p>
            <p className="mb-5 leading-relaxed text-gray-700">
              Les neuf articles ci-dessous répondent autrement. Chaque affirmation
              s&apos;appuie sur un texte publié ou sur une donnée publique — index INSEE du
              coût de la couverture, statistiques de sinistralité de l&apos;Agence Qualité
              Construction, code de la consommation, Légifrance. Vous pouvez les vérifier,
              et les opposer à n&apos;importe quel professionnel, nous compris.
            </p>
            <p className="mb-10 leading-relaxed text-gray-700">
              Deux pages complètent cette lecture : les{" "}
              <Link href="/tarifs" className={A}>
                bases de facturation de l&apos;entreprise
              </Link>{" "}
              et la{" "}
              <Link href="/zone-intervention" className={A}>
                zone d&apos;intervention
              </Link>{" "}
              depuis Écury-sur-Coole.
            </p>

            {groups.map((group) => (
              <section key={group.id} id={group.id} className="mb-14 scroll-mt-24">
                <h2 className={H2}>{group.title}</h2>
                <p className="mt-3 mb-6 leading-relaxed text-gray-700">{group.intro}</p>

                <ul className="space-y-5">
                  {group.articles.map((article) => (
                    <li
                      key={article.href}
                      className="rounded-xl border border-gray-200 bg-gray-50 p-6 transition-colors hover:border-orange-300"
                    >
                      <h3 className="text-lg font-semibold text-gray-900">
                        <Link href={article.href} className="hover:text-orange-700">
                          {article.question}
                        </Link>
                      </h3>
                      <p className="mt-2 leading-relaxed text-gray-700">{article.summary}</p>
                      <Link
                        href={article.href}
                        className="mt-3 inline-block text-sm font-semibold text-orange-700 hover:underline"
                      >
                        Lire l&apos;article
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}

            <div className="rounded-xl border border-orange-200 bg-orange-50 p-6">
              <h2 className="mb-3 text-lg font-bold text-gray-900">
                Votre question n&apos;est pas là ?
              </h2>
              <p className="mb-4 leading-relaxed text-gray-700">
                Une toiture se juge sur place : la pente, l&apos;accès, l&apos;état du
                support et la nature des matériaux existants décident de tout. Le devis et
                le déplacement sont gratuits. Appelez le{" "}
                <a href={BUSINESS.phoneHref} className={A}>
                  {BUSINESS.phone}
                </a>{" "}
                ou passez par le{" "}
                <Link href="/contact" className={A}>
                  formulaire de contact
                </Link>
                .
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                {BUSINESS.displayName} — {BUSINESS.operatorName}, artisan couvreur à{" "}
                {BUSINESS.address.city}, {BUSINESS.experience}.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
