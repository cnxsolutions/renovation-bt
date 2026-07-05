import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqItems } from "@/data/faq";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";

export function FAQ() {
  return (
    <section className="bg-gray-50 py-20" id="faq">
      <FaqJsonLd items={faqItems} />
      <Container>
        <SectionHeading
          title="Questions fréquentes"
          subtitle="Retrouvez les réponses aux questions les plus posées par nos clients."
        />

        <div className="mx-auto max-w-3xl space-y-6">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group rounded-xl border border-gray-200 bg-white shadow-sm"
            >
              <summary className="flex cursor-pointer items-center justify-between px-6 py-5 text-left font-semibold text-gray-900 transition-colors hover:text-orange-500 [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <span className="ml-4 shrink-0 text-orange-500 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="border-t border-gray-100 px-6 pb-5 pt-4">
                <p className="leading-relaxed text-gray-600">{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
