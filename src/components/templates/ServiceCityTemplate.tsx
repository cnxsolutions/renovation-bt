import { CheckCircle, Phone, MapPin, Clock, Shield, Wrench, Droplets, Home, Hammer, Layers, Wind, Sun } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { BUSINESS, SEO } from "@/lib/constants";
import { getFaqForPage } from "@/data/faq";
import { SeoPageConfig } from "@/data/seo-pages";

interface ServiceCityTemplateProps {
  seoConfig: SeoPageConfig;
  cityName: string;
  serviceDetails: {
    icon?: React.ComponentType<{ className?: string }>;
    intro: string;
    benefits: string[];
    process?: string[];
  };
}

const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  zingueur: Wrench,
  demoussage: Droplets,
  nettoyage: Layers,
  gouttieres: Home,
  charpente: Hammer,
  hydrofuge: Wind,
  velux: Sun,
  reparation: Shield,
  ravalement: Home,
  isolation: Wind,
};

export function ServiceCityTemplate({ seoConfig, cityName, serviceDetails }: ServiceCityTemplateProps) {
  const { citySlug, serviceSlug, h1, subtitle, title, description, keywords } = seoConfig;
  const canonicalUrl = `${SEO.siteUrl}/${seoConfig.slug}`;
  const IconComponent = serviceDetails.icon || (serviceSlug ? serviceIcons[serviceSlug] || Wrench : Wrench);

  const faqItems = getFaqForPage("service", citySlug, serviceSlug);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Services", url: "/services" },
          { name: h1, url: canonicalUrl },
        ]}
      />
      <FaqJsonLd items={faqItems} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 text-white">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-500">
              <IconComponent className="h-8 w-8 text-white" aria-hidden="true" />
            </div>

            <h1 className="mb-4 text-4xl font-extrabold leading-tight sm:text-5xl">
              {h1}
            </h1>
            {subtitle && (
              <p className="mb-2 text-xl font-semibold text-orange-400">{subtitle}</p>
            )}

            <p className="mb-8 text-lg leading-relaxed text-gray-200">
              {serviceDetails.intro}
            </p>

            <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {serviceDetails.benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-green-400" aria-hidden="true" />
                  <span className="text-gray-200">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button href="/contact" variant="primary" size="lg">
                Demander un devis gratuit
              </Button>
              <Button href={BUSINESS.phoneHref} variant="secondary" size="lg">
                <Phone className="h-5 w-5" aria-hidden="true" />
                {BUSINESS.phone}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16">
        <Container>
          <SectionHeading
            title="Pourquoi choisir notre service ?"
            subtitle={`${serviceDetails.benefits.length} raisons de nous faire confiance à ${cityName}.`}
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {serviceDetails.benefits.map((benefit, index) => (
              <div key={index} className="rounded-xl bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                  <span className="text-lg font-bold text-orange-500">{index + 1}</span>
                </div>
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      {serviceDetails.process && serviceDetails.process.length > 0 && (
        <section className="bg-white py-16">
          <Container>
            <SectionHeading
              title="Notre méthode de travail"
              subtitle="Un service professionnel et efficace."
            />

            <div className="mx-auto max-w-3xl">
              <div className="relative border-l-2 border-orange-200 pl-8">
                {serviceDetails.process.map((step, index) => (
                  <div key={index} className="mb-8 last:mb-0">
                    <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-orange-500">
                      <span className="text-xs font-bold text-white">{index + 1}</span>
                    </div>
                    <p className="text-gray-700">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Related Services */}
      <section className="bg-gray-50 py-16">
        <Container>
          <SectionHeading
            title="Nos autres services"
            subtitle="Découvrez toutes nos prestations pour votre toiture."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Couverture", href: "/services" },
              { name: "Zinguerie", href: "/zingueur-chalons-en-champagne" },
              { name: "Démoussage", href: "/demoussage-toiture-chalons" },
              { name: "Charpente", href: "/charpente-chalons" },
            ].map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="rounded-xl bg-white p-4 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="font-semibold text-gray-900">{service.name}</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16">
        <Container>
          <SectionHeading
            title="Questions fréquentes"
            subtitle="Tout ce que vous devez savoir sur ce service."
          />

          <div className="mx-auto max-w-3xl space-y-4">
            {faqItems.slice(0, 5).map((faq, index) => (
              <details
                key={index}
                className="group rounded-xl bg-gray-50 p-4 open:bg-white open:shadow-sm"
              >
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-900">
                  {faq.question}
                  <span className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-500 group-open:rotate-180">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-16 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Besoin d&apos;un devis pour votre projet à {cityName} ?
            </h2>
            <p className="mb-8 text-lg text-white/90">
              Contactez-nous pour un devis gratuit et sans engagement. Nous intervenons
              rapidement à {cityName} et dans toute la Marne.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100"
              >
                Demander un devis gratuit
              </Button>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/50 bg-transparent px-8 py-4 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                {BUSINESS.phone}
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
