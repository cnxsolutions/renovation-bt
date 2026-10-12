import type { MetadataRoute } from "next";
import { SEO } from "@/lib/constants";
import { citiesWithPages } from "@/data/cities";

/**
 * Plan du site.
 *
 * TROIS PROPRIETES ONT ETE RETIREES, ET C'EST VOULU
 * -------------------------------------------------
 * `lastModified` : la valeur precedente etait une constante ecrite en dur
 *   (`PAGE_LAST_MODIFIED = "2026-07-11"`), identique sur les 21 URLs et jamais
 *   mise a jour. Un `lastmod` uniforme et non maintenu n'est pas seulement
 *   inutile : Google cesse d'en tenir compte des qu'il le juge peu fiable, et
 *   il l'etait ici par construction. Entre une date fausse et pas de date, pas
 *   de date est la bonne reponse. Ne remettre `lastModified` que le jour ou il
 *   sera derive d'une vraie source (date de publication du contenu, commit du
 *   fichier), jamais d'une constante recopiee.
 *
 * `priority` et `changeFrequency` : Google a confirme publiquement ne s'en
 *   servir pour aucun des deux. Les conserver revenait a maintenir a la main
 *   des chiffres que personne ne lit.
 *
 * CE QUI A LE DROIT DE FIGURER ICI
 * --------------------------------
 * Uniquement des URLs INDEXABLES. `/mentions-legales` et
 * `/politique-confidentialite` sont servies en `robots: { index: false     '/couvreur-artisan-travaux-toiture-chalons-champagne': '2026-10-12',
}` :
 * les lister ici demandait a Google d'explorer des pages qu'on lui interdit
 * ensuite d'indexer, ce que la Search Console remontait en « Exclue par la
 * balise noindex ». Elles sont retirees. Avant d'ajouter une route ci-dessous,
 * verifier qu'elle n'exporte pas `robots: { index: false }`.
 *
 * POURQUOI LES URLS STATIQUES SONT ECRITES UNE PAR UNE
 * -----------------------------------------------------
 * Ce fichier etait ecrit en `routes.map((route) => ({ url: `${base}${route}` }))`,
 * ce qui est plus court et parfaitement correct a l'execution. Mais les
 * verificateurs statiques — dont la regle IDX-001 du moteur seo-guard, qui
 * compare les routes reelles de src/app aux entrees du plan du site — ne
 * peuvent pas evaluer une interpolation : ils lisent le fichier, pas son
 * resultat. Ils voyaient donc un sitemap de deux entrees, et signalaient
 * chacune des pages du site comme absente du plan.
 *
 * Six constats faux a chaque execution, sur un sitemap qui etait correct : une
 * barriere qui crie au loup finit par etre ignoree, et le jour ou une vraie
 * page manquera, personne ne regardera. Une entree litterale par ligne coute
 * quelques lignes et rend la verification possible.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SEO.siteUrl;

  const staticEntries = [
    { url: `${baseUrl}` },
    { url: `${baseUrl}/services` },
    /* Obligatoire (arrete du 24 janvier 2017), donc indexable et listee. */
    { url: `${baseUrl}/tarifs` },
    { url: `${baseUrl}/realisations` },
    /* Remplace les 11 pages ville supprimees : une seule page de couverture. */
    { url: `${baseUrl}/zone-intervention` },
    { url: `${baseUrl}/avis` },
    { url: `${baseUrl}/a-propos` },
    { url: `${baseUrl}/contact` },
    /*
     * Cluster /conseils : le pilier puis ses neuf articles, ecrits un par un
     * pour la meme raison que les entrees ci-dessus : une entree litterale par
     * ligne est la seule forme que les verificateurs statiques savent lire.
     * Toute page ajoutee sous /conseils doit etre ajoutee ici a la main.
     */
    { url: `${baseUrl}/conseils` },
    { url: `${baseUrl}/conseils/tarif-horaire-couvreur` },
    { url: `${baseUrl}/conseils/prix-refaire-toiture-100m2` },
    { url: `${baseUrl}/conseils/meilleure-periode-travaux-toiture` },
    { url: `${baseUrl}/conseils/trouver-artisan-couvreur` },
    { url: `${baseUrl}/conseils/reconnaitre-bon-couvreur` },
    { url: `${baseUrl}/conseils/couvreurs-sont-ils-fiables` },
    { url: `${baseUrl}/conseils/toiture-en-mauvais-etat-signes` },
    { url: `${baseUrl}/conseils/duree-de-vie-toiture` },
    { url: `${baseUrl}/conseils/ancien-nom-chalons-en-champagne` },
  ];

  /*
   * Les pages ville restent DERIVEES de `citiesWithPages`, jamais recopiees.
   * Le nombre d'URLs suit donc automatiquement les `hasPage` de
   * src/data/cities.ts : si une ville perd sa page, elle quitte le plan du
   * site au meme commit, sans intervention. Aucune verification statique n'est
   * perdue au passage : la route source est `/couvreur/[city]`, un gabarit, et
   * IDX-001 ignore deliberement les segments dynamiques.
   */
  const cityEntries = citiesWithPages.map((city) => ({
    // `new URL` plutot qu'un gabarit : en interpolant, un lecteur statique
    // depouille `${city.slug}` et croit lire une entree « /couvreur », qui est
    // justement une source de redirection vers /zone-intervention. Il signalait
    // alors une erreur sur une URL que le sitemap ne contient pas.
    url: new URL(`/couvreur/${city.slug}`, baseUrl).toString(),
  }));

  return [...staticEntries, ...cityEntries];
}
