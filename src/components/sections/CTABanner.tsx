import { Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BUSINESS } from "@/lib/constants";

export function CTABanner() {
  return (
    <section className="py-12">
      <Container>
        <div className="rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-12 text-center shadow-lg sm:px-16">
          <h2 className="mb-2 text-2xl font-bold text-white sm:text-3xl">
            Besoin d&apos;un devis ou d&apos;une intervention ?
          </h2>
          <p className="mb-8 text-orange-100">
            Contactez-nous dès maintenant, nous vous répondons rapidement !
          </p>
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-2 rounded-lg border-2 border-white bg-white px-8 py-4 text-lg font-bold text-orange-500 transition-colors hover:bg-orange-50"
            aria-label={`Appeler au ${BUSINESS.phone}`}
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            {BUSINESS.phone}
          </a>
        </div>
      </Container>
    </section>
  );
}
