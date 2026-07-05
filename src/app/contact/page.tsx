import type { Metadata } from "next";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { BUSINESS } from "@/lib/constants";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Contact - Devis gratuit sous 24h",
  description:
    "Demandez un devis gratuit à Rénovation BT. Artisan couvreur à Écury-sur-Coole (51240). Intervention rapide dans tout le Grand Est. Appelez le 07 61 54 53 43.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Contact", url: "/contact" },
        ]}
      />
      <section className="bg-gray-50 py-16">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h1 className="mb-4 text-4xl font-bold text-gray-900">Contactez-nous</h1>
              <p className="text-lg text-gray-600">
                Demandez votre devis gratuit ou posez-nous vos questions. Nous répondons sous 24h.
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-3">
              <div className="space-y-6 lg:col-span-1">
                <div className="rounded-xl bg-white p-6 shadow-sm">
                  <h2 className="mb-4 text-lg font-bold text-gray-900">Nos coordonnées</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Phone className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" aria-hidden="true" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Téléphone</p>
                        <a href={BUSINESS.phoneHref} className="text-sm text-orange-500 hover:underline">
                          {BUSINESS.phone}
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Mail className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" aria-hidden="true" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Email</p>
                        <a href={`mailto:${BUSINESS.email}`} className="text-sm text-orange-500 hover:underline">
                          {BUSINESS.email}
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" aria-hidden="true" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Adresse</p>
                        <p className="text-sm text-gray-600">
                          {BUSINESS.address.city}, {BUSINESS.address.postalCode}
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" aria-hidden="true" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Horaires</p>
                        <p className="text-sm text-gray-600">{BUSINESS.hours}</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="rounded-xl bg-white p-8 shadow-sm">
                  <h2 className="mb-6 text-lg font-bold text-gray-900">Envoyez-nous un message</h2>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
