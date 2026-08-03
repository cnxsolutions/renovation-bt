/**
 * ARTICLE — « Quel était l'ancien nom de Châlons-en-Champagne ? »
 *
 * Article informationnel, sans intention commerciale. Sa valeur est d'ancrage
 * territorial : le siege de l'entreprise est situe rue de Chalons-sur-Marne, a
 * Ecury-sur-Coole, et l'ancien nom survit dans la voirie de la campagne
 * chalonnaise.
 *
 * REGLE DE TENUE : chaque date affirmee ici est adossee a un texte publie
 * (Legifrance) ou a une source nommee. La faute repandue — dater le changement
 * de 1995 ou de 1997 — vient de ce que personne ne lit les textes. Ne pas
 * ajouter un fait sans sa source, et ne pas ajouter d'argumentaire commercial
 * dans le corps historique.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { BUSINESS_ID, absoluteUrl, serializeJsonLd } from "@/components/seo/serializeJsonLd";
import { BUSINESS } from "@/lib/constants";

const PATH = "/conseils/ancien-nom-chalons-en-champagne";

const TITLE = "Ancien nom de Châlons-en-Champagne : la vraie date";
const DESCRIPTION =
  "Châlons-en-Champagne s'appelait Châlons-sur-Marne jusqu'au 3 janvier 1998. Chronologie sourcée : décret annulé de 1995, Conseil d'État, décret de 1997.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
};

/** Sources publiques citees dans le corps de l'article ET dans le JSON-LD. */
const SOURCES = [
  {
    label:
      "Décret n° 97-1331 du 26 décembre 1997 portant changement de nom d'une commune — Légifrance",
    url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000000203944",
  },
  {
    label:
      "Conseil d'État, 3e et 5e sous-sections réunies, 4 avril 1997, n° 177987, publié au recueil Lebon — Légifrance",
    url: "https://www.legifrance.gouv.fr/ceta/id/CETATEXT000007945972/",
  },
  {
    label:
      "Code général des collectivités territoriales, article L2111-1 (changement de nom d'une commune) — Légifrance",
    url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037273289",
  },
  {
    label: "Le changement de nom d'une commune — collectivites-locales.gouv.fr",
    url: "https://www.collectivites-locales.gouv.fr/institutions/le-changement-de-nom-dune-commune",
  },
  {
    label: "Histoire de Châlons — Ville de Châlons-en-Champagne",
    url: "https://www.chalonsenchampagne.fr/ville/services/culture-tourisme/culturez-vous/histoire-de-chalons",
  },
  {
    label: "Durocatalaunum / Catalaunum — Encyclopédie de l'Arbre celtique",
    url: "https://encyclopedie.arbre-celtique.com/durocatalaunum-catalaunorum-catalaunum-chalons-en-champagne-8014.htm",
  },
] as const;

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${absoluteUrl(PATH)}#article`,
  headline: "Quel était l'ancien nom de Châlons-en-Champagne ?",
  description: DESCRIPTION,
  inLanguage: "fr-FR",
  mainEntityOfPage: { "@id": `${absoluteUrl(PATH)}#webpage` },
  isPartOf: { "@id": `${absoluteUrl(PATH)}#webpage` },
  /* L'entreprise est l'auteur ET l'editeur : elle est deja decrite une seule
     fois, dans le layout racine, sous l'identifiant `/#business`. On la
     reference, on ne la redecrit pas. */
  author: { "@id": BUSINESS_ID },
  publisher: { "@id": BUSINESS_ID },
  about: [
    { "@type": "Place", name: "Châlons-en-Champagne" },
    { "@type": "Thing", name: "Toponymie" },
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

export default function AncienNomChalonsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Conseils", url: "/conseils" },
          { name: "Ancien nom de Châlons-en-Champagne", url: PATH },
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
                Quel était l&apos;ancien nom de Châlons-en-Champagne ?
              </h1>
              <p className="text-lg leading-relaxed text-gray-700">
                <strong>Châlons-sur-Marne.</strong> La préfecture de la Marne a porté ce nom
                jusqu&apos;au <strong>3 janvier 1998</strong>, jour où le décret qui lui rend son
                nom d&apos;Ancien Régime est publié au Journal officiel. Ni 1995, ni 1997 : la
                plupart des pages qui répondent à cette question se trompent de date, et le motif
                de cette confusion est lui-même intéressant.
              </p>
            </div>
          </Container>
        </header>

        <Container>
          <div className="mx-auto max-w-3xl py-12">
            {/* ----------------------------------------------- RÉPONSE COURTE */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-bold text-gray-900">L&apos;essentiel</h2>
              <dl className="space-y-3 text-gray-700">
                <div>
                  <dt className="font-semibold text-gray-900">Ancien nom</dt>
                  <dd>Châlons-sur-Marne, forme officielle jusqu&apos;au 3 janvier 1998.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">Nom actuel</dt>
                  <dd>
                    Châlons-en-Champagne, en vertu du décret n° 97-1331 du 26 décembre 1997, publié
                    au Journal officiel n° 2 du 3 janvier 1998.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">Noms antérieurs</dt>
                  <dd>
                    Durocatalaunum à l&apos;époque gallo-romaine, puis Catalaunum, puis Chaalons à
                    partir du XIII<sup>e</sup> siècle.
                  </dd>
                </div>
              </dl>
            </div>

            {/* ------------------------------------------------ CHRONOLOGIE */}
            <h2 className={H2}>1995, 1997, 1998 : trois dates, une seule est la bonne</h2>
            <p className={P}>
              Le changement de nom de Châlons a mis dix ans à aboutir, et il a fallu deux décrets
              pour y parvenir. Le premier a été annulé par le Conseil d&apos;État. C&apos;est ce
              qui explique que l&apos;on rencontre trois dates différentes selon les sources, et
              pourquoi deux d&apos;entre elles sont inexactes.
            </p>

            <h3 className={H3}>Le décret du 6 novembre 1995, première tentative</h3>
            <p className={P}>
              Le décret du 6 novembre 1995 portant changement de nom de communes accorde à
              Châlons-sur-Marne le retour au nom de Châlons-en-Champagne. C&apos;est ce texte que
              citent, aujourd&apos;hui encore, la plupart des pages qui datent le changement de
              1995. Il n&apos;a jamais produit d&apos;effet durable.
            </p>

            <h3 className={H3}>L&apos;annulation par le Conseil d&apos;État, le 4 avril 1997</h3>
            <p className={P}>
              Par une décision du 4 avril 1997 (3<sup>e</sup> et 5<sup>e</sup> sous-sections
              réunies, requête n° 177987, publiée au recueil Lebon), le Conseil d&apos;État annule
              le décret pour vice de procédure. Le motif est purement formel, et il est instructif :
              le changement de nom ne figurait ni dans le projet de décret qui lui avait été soumis,
              ni dans le texte adopté par sa section de l&apos;intérieur. Le décret ne pouvait donc
              pas être regardé comme ayant été pris «&nbsp;le Conseil d&apos;État entendu&nbsp;»,
              mention pourtant portée dans ses visas.
            </p>
            <p className={P}>
              L&apos;annulation d&apos;un acte administratif est rétroactive : le décret de 1995 est
              réputé n&apos;avoir jamais existé. En droit, la commune n&apos;a donc jamais cessé de
              s&apos;appeler Châlons-sur-Marne avant 1998.
            </p>

            <h3 className={H3}>Le décret du 26 décembre 1997, effectif le 3 janvier 1998</h3>
            <p className={P}>
              Le décret n° 97-1331 du 26 décembre 1997 portant changement de nom d&apos;une commune
              reprend la procédure depuis le début. Son article 1<sup>er</sup> tient en une phrase :
            </p>
            <blockquote className="mb-4 border-l-4 border-orange-700 bg-gray-50 px-6 py-4 text-lg italic leading-relaxed text-gray-800">
              «&nbsp;La commune de Châlons-sur-Marne prend le nom de Châlons-en-Champagne.&nbsp;»
            </blockquote>
            <p className={P}>
              Le texte est signé par Lionel Jospin, Premier ministre, et Jean-Pierre Chevènement,
              ministre de l&apos;Intérieur. Il paraît au Journal officiel n° 2 du{" "}
              <strong>3 janvier 1998</strong>, et c&apos;est cette publication qui le rend
              opposable. Répondre «&nbsp;depuis 1997&nbsp;» revient à confondre la date de
              signature d&apos;un décret avec sa date d&apos;entrée en vigueur.
            </p>

            {/* ---------------------------------------------------- LE DROIT */}
            <h2 className={H2}>Comment une commune française change de nom</h2>
            <p className={P}>
              La procédure est fixée par l&apos;article L2111-1 du code général des collectivités
              territoriales : le changement de nom d&apos;une commune est décidé par décret, sur
              demande du conseil municipal et après consultation du conseil départemental. Une
              commune ne se rebaptise donc pas elle-même, quelle que soit l&apos;unanimité de son
              conseil.
            </p>
            <p className={P}>
              Détail qui explique l&apos;annulation de 1995 : l&apos;avis du Conseil d&apos;État
              était alors requis, et c&apos;est précisément sur ce point que la procédure a
              trébuché. Cette exigence a été supprimée par le décret de simplification du 30 juillet
              2018 — la même erreur ne serait donc plus possible aujourd&apos;hui.
            </p>

            {/* ------------------------------------------------- POURQUOI ? */}
            <h2 className={H2}>Pourquoi la ville a voulu quitter «&nbsp;sur-Marne&nbsp;»</h2>
            <p className={P}>
              «&nbsp;Châlons-en-Champagne&nbsp;» n&apos;est pas une invention des années 1990 :
              c&apos;est la forme d&apos;Ancien Régime, employée pour distinguer la ville de
              Chalon-sur-Saône. Après la Révolution, elle devient encombrante : sa connotation
              provinciale et féodale la fait juger dangereuse, et la référence au fleuve lui est
              préférée.
            </p>
            <p className={P}>
              «&nbsp;Châlons-sur-Marne&nbsp;» s&apos;impose au XVIII<sup>e</sup> siècle chez les
              géographes et les auteurs de dictionnaires, puis comme forme d&apos;usage officiel à
              partir des années 1850. Il faudra attendre 1987 pour que la question soit reposée aux
              habitants : consultés, <strong>78&nbsp;% d&apos;entre eux</strong> se prononcent pour
              le retour au nom historique. Le dossier administratif mettra ensuite dix ans à
              aboutir.
            </p>

            {/* ------------------------------------------------ ANTIQUITÉ */}
            <h2 className={H2}>Durocatalaunum, le nom d&apos;avant le nom</h2>
            <p className={P}>
              Avant Châlons, il y a Durocatalaunum. Le nom est attesté sous la forme
              <em> Durocatelaunos</em> dans l&apos;Itinéraire d&apos;Antonin, et sous les formes{" "}
              <em>Catelauni</em> et <em>Cautelaunos</em> chez l&apos;historien Ammien Marcellin. Le
              préfixe gaulois <em>duro-</em> désigne une place forte, un marché fortifié : on le
              retrouve dans quantité de toponymes de la Gaule.
            </p>
            <p className={P}>
              La seconde partie du nom vient du peuple gaulois — belge — des Catalaunes, installé
              dans la Champagne actuelle. La racine renvoie au combat : les <em>Catalauni</em> sont
              interprétés comme les chefs de guerre, ou ceux qui sont vaillants au combat.
            </p>
            <p className={P}>
              Vers 20 avant J.-C., une garnison romaine s&apos;implante sur une île de la Marne,
              étape sur la voie d&apos;Agrippa qui relie Lyon à la Manche. À la fin du III
              <sup>e</sup> siècle, la ville devient chef-lieu de la <em>civitas</em> des Catalaunes.
              Comme souvent en Gaule, le nom du peuple finit par supplanter celui de la ville :
              Durocatalaunum devient Catalaunum. C&apos;est aussi de ce peuple que les champs
              Catalauniques tirent leur nom, où l&apos;avancée d&apos;Attila est arrêtée en 451 —
              la localisation exacte du champ de bataille reste débattue par les historiens et
              n&apos;est pas établie à Châlons même.
            </p>
            <p className={P}>
              Au XIII<sup>e</sup> siècle, le latin Catalaunum cède progressivement la place à la
              forme française <em>Chaalons</em>, dont dérive la graphie actuelle. La ville de
              Châlons-en-Champagne retrace elle-même cette filiation dans sa page consacrée à son
              histoire.
            </p>

            {/* -------------------------------------------- HOMONYMES */}
            <h2 className={H2}>Quatre communes à ne pas confondre</h2>
            <ul className="mb-4 space-y-2 text-gray-700">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-700" />
                <span>
                  <strong>Châlons-en-Champagne</strong> (Marne, 51000), préfecture de la Marne,
                  anciennement Châlons-sur-Marne.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-700" />
                <span>
                  <strong>Chalon-sur-Saône</strong> (Saône-et-Loire, 71100), sans accent
                  circonflexe et sans «&nbsp;s&nbsp;» final au premier mot. C&apos;est de cette
                  ville que le nom «&nbsp;en Champagne&nbsp;» servait justement à distinguer
                  Châlons.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-700" />
                <span>
                  <strong>Châlons-du-Maine</strong> (Mayenne, 53470).
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-700" />
                <span>
                  <strong>Châlons-sur-Vesle</strong> (Marne, 51140), au nord-ouest de Reims — même
                  département, autre commune.
                </span>
              </li>
            </ul>

            {/* ------------------------------------------- TRACE VIVANTE */}
            <h2 className={H2}>L&apos;ancien nom n&apos;a pas disparu du paysage</h2>
            <p className={P}>
              Un nom de commune change par décret ; une adresse, non. Dans la campagne
              châlonnaise, le toponyme «&nbsp;Châlons-sur-Marne&nbsp;» subsiste dans la voirie des
              villages : les rues qui portaient jadis la direction du chef-lieu ont gardé leur
              libellé. La rue de Châlons-sur-Marne, à Écury-sur-Coole — celle où notre entreprise
              est installée, au 43 Bis — en est un exemple parmi d&apos;autres.
            </p>
            <p className={P}>
              Ce décalage n&apos;a rien d&apos;anormal : la dénomination des voies relève du conseil
              municipal de chaque commune, indépendamment du nom porté par la ville voisine. Un
              document notarié, un acte de propriété ou un vieux plan cadastral peuvent donc citer
              l&apos;ancien nom sans être erronés pour autant.
            </p>

            {/* ------------------------------------------------- REPÈRES */}
            <h2 className={H2}>Quelques repères sur la ville</h2>
            <p className={P}>
              Châlons a gardé son cœur médiéval dans son enceinte, et son patrimoine porte la trace
              de chaque époque traversée : la cathédrale Saint-Étienne, la collégiale
              Notre-Dame-en-Vaux — inscrite au patrimoine mondial de l&apos;UNESCO en 1998 au titre
              des chemins de Saint-Jacques-de-Compostelle en France, l&apos;année même du changement
              de nom —, un carillon de 56 cloches qui compte parmi les plus importants
              d&apos;Europe, les maisons à pans de bois du centre et la porte Sainte-Croix.
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

            {/* --------------------------------------------- MAILLAGE */}
            <h2 className={H2}>À lire aussi</h2>
            <div className="grid gap-4 sm:grid-cols-2">
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
            </div>

            {/* ------------------------------------------------------ CTA */}
            <div className="mt-12 rounded-xl border border-gray-200 bg-gray-50 p-6">
              <p className="mb-4 leading-relaxed text-gray-700">
                Ce site est celui d&apos;un artisan couvreur installé à Écury-sur-Coole, qui
                intervient sur les toitures de Châlons-en-Champagne et des communes alentour. Si
                vous avez un projet de couverture, de zinguerie ou d&apos;entretien de toit, la page
                qui vous concerne est{" "}
                <Link href="/couvreur/chalons-en-champagne" className={A}>
                  couvreur à Châlons-en-Champagne
                </Link>
                , et le reste de nos articles se trouve dans les{" "}
                <Link href="/conseils" className={A}>
                  conseils
                </Link>
                .
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
                  Demander un devis
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </article>
    </>
  );
}
