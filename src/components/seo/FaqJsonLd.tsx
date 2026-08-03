import { WEBSITE_ID, absoluteUrl, serializeJsonLd } from "./serializeJsonLd";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqJsonLdProps {
  items: readonly FaqItem[] | FaqItem[];
  /**
   * Chemin (« /couvreur/chalons-en-champagne ») ou URL absolue de la page qui
   * porte cette FAQ. Optionnel, mais RECOMMANDE : sans lui, le noeud `FAQPage`
   * est anonyme et le meme balisage sur deux pages differentes est
   * indistinguable dans le graphe. Avec lui, la FAQ recoit un `@id` stable et
   * se rattache a la `WebPage` emise par `BreadcrumbJsonLd`.
   */
  pageUrl?: string;
}

/**
 * Balisage FAQPage.
 *
 * A LIRE AVANT DE COMPTER SUR CE COMPOSANT : il n'ouvre plus AUCUN affichage
 * dans Google. Le resultat enrichi FAQ a ete restreint aux sites
 * gouvernementaux et de sante en aout 2023, puis supprime pour tout le monde le
 * 7 mai 2026. Aucune page de ce site n'est eligible, et aucun reglage ne peut
 * l'y rendre. Si quelqu'un cherche un levier de visibilite, ce n'en est pas un :
 * ne pas l'inscrire dans un plan d'action, ne pas le presenter comme un gain.
 *
 * POURQUOI ON LE GARDE MALGRE TOUT : `FAQPage` reste un type schema.org
 * parfaitement valide, Google documente explicitement que des donnees
 * structurees qu'il n'utilise pas ne penalisent pas la page, et le balisage
 * decrit une structure question/reponse qui reste exploitable par d'autres
 * consommateurs que la recherche Google (moteurs de reponse, assistants,
 * agregateurs). Le retirer couterait un peu de semantique pour ne rien gagner.
 * Le supprimer n'est justifie que si le contenu de la FAQ disparait.
 */
export function FaqJsonLd({ items, pageUrl }: FaqJsonLdProps) {
  if (items.length === 0) return null;

  const page = pageUrl ? absoluteUrl(pageUrl) : null;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(page
      ? {
          "@id": `${page}#faq`,
          url: page,
          mainEntityOfPage: { "@id": `${page}#webpage` },
        }
      : {}),
    // Rattache la FAQ au site plutot que de la laisser flotter hors du graphe.
    isPartOf: { "@id": WEBSITE_ID },
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(structuredData) }}
    />
  );
}
