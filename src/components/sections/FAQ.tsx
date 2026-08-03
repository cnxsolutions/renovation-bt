import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqItems, type FaqItem } from "@/data/faq";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";

/** Un item de FAQ, avec un lien de sortie facultatif rendu sous la reponse. */
type FaqSectionItem = FaqItem & {
  lien?: { href: string; libelle: string };
};

interface FAQProps {
  /** Liste affichee. Par defaut `faqItems`, pour ne rien changer aux appelants existants. */
  items?: readonly FaqSectionItem[];
  title?: string;
  subtitle?: string;
  /**
   * Chemin de la page qui porte cette FAQ. RECOMMANDE : sans lui, le noeud
   * `FAQPage` est anonyme et ne se rattache a aucune `WebPage` du graphe.
   * A ne pas vendre comme un gain de visibilite : le resultat enrichi FAQ est
   * supprime depuis le 7 mai 2026. C'est de l'hygiene de graphe, rien de plus.
   */
  pageUrl?: string;
}

/**
 * Les `<details>/<summary>` natifs sont conserves tels quels : cibles a ~62 px,
 * ouverture sans JavaScript, accessibles par defaut. Il n'y avait rien a y
 * corriger — seulement a rendre le composant parametrable, pour que l'accueil
 * puisse porter une FAQ qui lui soit propre plutot que de republier `faqItems`,
 * deja servie sur les pages ville et service.
 */
export function FAQ({ items = faqItems, title, subtitle, pageUrl }: FAQProps) {
  if (items.length === 0) return null;

  return (
    <section className="bg-gray-50 py-16 lg:py-20" id="faq">
      <FaqJsonLd items={items} pageUrl={pageUrl} />
      <Container>
        <SectionHeading
          title={title ?? "Questions fréquentes"}
          subtitle={subtitle ?? "Retrouvez les réponses aux questions les plus posées par nos clients."}
        />

        <div className="mx-auto max-w-3xl space-y-6">
          {items.map((item) => (
            <details
              key={item.question}
              className="group rounded-xl border border-gray-200 bg-white shadow-sm"
            >
              <summary className="flex cursor-pointer items-center justify-between px-6 py-5 text-left font-semibold text-gray-900 transition-colors hover:text-orange-700 [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <span
                  className="ml-4 shrink-0 text-orange-700 transition-transform group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <div className="border-t border-gray-100 px-6 pb-5 pt-4">
                <p className="leading-relaxed text-gray-700">{item.answer}</p>
                {item.lien && (
                  <p className="mt-3">
                    <Link
                      href={item.lien.href}
                      className="inline-flex py-2 text-sm font-semibold text-orange-700 underline-offset-4 hover:underline"
                    >
                      {item.lien.libelle}
                    </Link>
                  </p>
                )}
              </div>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
