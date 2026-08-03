import { SEO } from "@/lib/constants";

/**
 * Helpers partages par les trois composants JSON-LD du site.
 *
 * Ils existent pour une seule raison : les trois composants faisaient chacun
 * leur propre `JSON.stringify` et leur propre concatenation d'URL, donc chacun
 * avait sa propre facon de se tromper. Une seule implementation, un seul bug
 * possible, un seul endroit ou le corriger.
 */

/**
 * Serialise un objet JSON-LD pour injection dans `dangerouslySetInnerHTML`.
 *
 * `JSON.stringify` seul est UNSAFE dans un `<script>` : le parseur HTML ne
 * comprend pas le JSON, il cherche la premiere sequence `</script`. Le jour ou
 * une question de FAQ, un nom de ville ou une description de service contiendra
 * `</script>` — saisi par erreur, colle depuis un CMS, ou injecte — la balise se
 * fermera au milieu du JSON : le reste du JSON devient du texte dans le
 * document, les donnees structurees de la page sont perdues, et le HTML est
 * casse a partir de ce point.
 *
 * Echapper `<` en sa forme unicode suffit et est sans effet de bord : c'est un
 * echappement JSON standard, tout parseur JSON le relit comme `<`, donc Google
 * lit exactement la meme donnee. Cela neutralise du meme coup `</script`,
 * `<!--` et `<script`, les trois sequences que le parseur HTML intercepte a
 * l'interieur d'un element `script`.
 */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

/** Origine du site, sans slash final, quelle que soit la graphie dans les constantes. */
const ORIGIN = SEO.siteUrl.replace(/\/+$/, "");

/**
 * Rend une URL absolue — et ne fait RIEN si elle l'est deja.
 *
 * Prefixer aveuglement `SEO.siteUrl` produisait des `item` du type
 * `https://artisan-boisson-teddy.fr/https://artisan-boisson-teddy.fr/couvreur/x`
 * des qu'un appelant passait une URL absolue (c'etait le cas des templates, qui
 * passaient leur `canonicalUrl`). Google traite alors l'element de fil d'Ariane
 * comme une URL hors-domaine et le fil entier est ignore.
 */
export function absoluteUrl(url: string): string {
  if (/^[a-z][a-z0-9+.-]*:/i.test(url) || url.startsWith("//")) return url;
  return `${ORIGIN}${url.startsWith("/") ? "" : "/"}${url}`;
}

/**
 * Identifiants stables du graphe d'entites du site.
 *
 * Un `@id` n'a d'interet que s'il est identique dans TOUS les blocs qui
 * designent la meme entite : c'est ce qui permet a Google de fusionner des
 * `<script>` separes en un seul graphe au lieu d'y voir trois entreprises
 * distinctes. Les redefinir a la main dans chaque fichier revenait a parier sur
 * le fait que personne n'oublierait le slash avant le `#`.
 */
export const WEBSITE_ID = `${ORIGIN}/#website`;
export const BUSINESS_ID = `${ORIGIN}/#business`;
export const LOGO_ID = `${ORIGIN}/#logo`;
