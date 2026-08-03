import { WEBSITE_ID, absoluteUrl, serializeJsonLd } from "./serializeJsonLd";

interface BreadcrumbItem {
  name: string;
  /**
   * Chemin relatif (« /contact ») OU URL absolue. Les deux fonctionnent : voir
   * `absoluteUrl`. Preferer le chemin relatif, plus court a lire en revue.
   */
  url: string;
}

interface BreadcrumbJsonLdProps {
  items: readonly BreadcrumbItem[] | BreadcrumbItem[];
}

/**
 * Fil d'Ariane balise, rattache au graphe d'entites du site.
 *
 * `BreadcrumbList` est l'un des rares types qui ouvre encore un affichage
 * reellement visible : Google remplace l'URL affichee sous le titre par le
 * chemin de navigation. Encore faut-il que les URL soient correctes — d'ou
 * `absoluteUrl`, qui remplace une concatenation qui produisait des URL du type
 * `https://…fr/https://…fr/couvreur/x` des qu'un appelant passait sa
 * canonique. Google ignore alors le fil entier.
 *
 * Le composant emet DEUX noeuds plutot qu'un :
 *  - la `WebPage` courante, qui declare `isPartOf` le `WebSite` du site et
 *    `breadcrumb` le fil ci-dessous ;
 *  - la `BreadcrumbList` elle-meme, avec un `@id` stable.
 * Sans ces liens, le fil d'Ariane flotte : rien dans le JSON-LD ne dit de
 * QUELLE page il est le chemin, ni a quel site cette page appartient. Les
 * `@id` permettent en outre a Google de fusionner ce `<script>` avec celui du
 * layout au lieu d'y voir deux documents sans rapport.
 */
export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  if (items.length === 0) return null;

  const itemListElement = items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.url),
  }));

  // La derniere entree d'un fil d'Ariane est, par definition, la page courante.
  // On en derive les identifiants de page plutot que d'ajouter une prop que
  // chaque appelant devrait penser a renseigner correctement.
  const current = itemListElement[itemListElement.length - 1];
  const pageUrl = current.item;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: current.name,
        isPartOf: { "@id": WEBSITE_ID },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        inLanguage: "fr-FR",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(graph) }}
    />
  );
}
