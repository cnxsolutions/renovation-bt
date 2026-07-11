import { CheckCircle, Phone, MapPin, Clock, Shield, Award } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { City, citiesWithPages, mainCities } from "@/data/cities";
import { BUSINESS, SEO } from "@/lib/constants";
import { FaqItem, getFaqForPage } from "@/data/faq";
import { SeoPageConfig } from "@/data/seo-pages";

interface CityPageTemplateProps {
  city: City;
  seoConfig?: SeoPageConfig;
  breadcrumbName?: string;
}

const services = [
  {
    title: "Couverture",
    description: "Tuiles, ardoises, bac acier, zinc",
    features: ["Réfection complète", "Remplacement tuiles", "Étanchéité", "Isolation"],
    href: "/services",
  },
  {
    title: "Zinguerie",
    description: "Gouttières, solins, chéneaux",
    features: ["Pose gouttières zinc/alu/PVC", "Solins et noues", "Habillage de rive", "Descentes EP"],
    href: "/services",
  },
  {
    title: "Nettoyage & Démoussage",
    description: "Nettoyage professionnel et traitement",
    features: ["Démoussage toiture", "Traitement hydrofuge", "Nettoyage haute pression", "Anti-mousse"],
    href: "/services",
  },
  {
    title: "Charpente",
    description: "Traitement et rénovation",
    features: ["Traitement préventif", "Traitement curatif", "Remplacement poutres", "Renforcement"],
    href: "/services",
  },
  {
    title: "Velux & Fenêtres",
    description: "Pose et remplacement",
    features: ["Installation Velux", "Remplacement fenêtre toit", "Étanchéité parfaite", "Volets roulants"],
    href: "/services",
  },
  {
    title: "Réparation Urgence",
    description: "Intervention rapide 24h/24",
    features: ["Fuite toiture", "Bardeaux arrachés", "Infiltrations", "Protection temporaire"],
    href: "/services",
  },
];

const whyChooseUs = [
  {
    icon: MapPin,
    title: "Proche de chez vous",
    description: "Basés à Écury-sur-Coole, à quelques minutes de Châlons-en-Champagne. Intervention rapide garantie.",
  },
  {
    icon: Clock,
    title: "Rapidité d'intervention",
    description: "En cas d'urgence, nous intervenons sous 2h à Châlons et dans un rayon de 30 km.",
  },
  {
    icon: Shield,
    title: "Garantie décennale",
    description: "Tous nos travaux sont couverts par la garantie décennale pour votre tranquillité.",
  },
  {
    icon: Award,
    title: "+10 ans d'expérience",
    description: "Plus de 10 ans d'expérience dans la toiture et la couverture dans la Marne.",
  },
];

function CityJsonLd({ city, canonicalUrl }: { city: City; canonicalUrl: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "@id": `${canonicalUrl}#business`,
    name: `Rénovation BT - Couvreur ${city.name}`,
    url: canonicalUrl,
    telephone: BUSINESS.phoneInternational,
    areaServed: {
      "@type": "City",
      name: city.name,
      geo: {
        "@type": "GeoCoordinates",
        latitude: city.latitude,
        longitude: city.longitude,
      },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS.address.city,
      postalCode: BUSINESS.address.postalCode,
      addressRegion: city.department,
      addressCountry: "FR",
    },
    priceRange: "€€",
    openingHours: "Mo-Su 00:00-23:59",
    parentOrganization: { "@id": `${SEO.siteUrl}/#business` },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function getNearbyCities(currentSlug: string, limit: number = 6): City[] {
  const current = citiesWithPages.find((c) => c.slug === currentSlug);
  if (!current) return [];

  return citiesWithPages
    .filter((c) => c.slug !== currentSlug)
    .map((c) => ({
      ...c,
      distance: Math.sqrt(
        Math.pow(c.latitude - current.latitude, 2) + Math.pow(c.longitude - current.longitude, 2)
      ),
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, limit);
}

export function CityPageTemplate({ city, seoConfig, breadcrumbName }: CityPageTemplateProps) {
  const canonicalUrl = `${SEO.siteUrl}/couvreur/${city.slug}`;
  const nearbyCities = getNearbyCities(city.slug);
  const faqItems = getFaqForPage("city", city.slug);
  const h1 = seoConfig?.h1 || `Couvreur à ${city.name}`;
  const subtitle = seoConfig?.subtitle || "Toiture, Zinguerie, Démoussage";

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: breadcrumbName || `Couvreur ${city.name}`, url: canonicalUrl },
        ]}
      />
      <CityJsonLd city={city} canonicalUrl={canonicalUrl} />
      <FaqJsonLd items={faqItems} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 text-white">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-4 text-4xl font-extrabold leading-tight sm:text-5xl">
              {h1}
              <br />
              <span className="text-orange-500">{subtitle}</span>
            </h1>

            <p className="mb-8 text-lg leading-relaxed text-gray-200">
              Artisan couvreur basé à Écury-sur-Coole, à quelques minutes de {city.name}.
              Rénovation BT intervient pour tous vos travaux de toiture, zinguerie et entretien.
              <strong> Devis gratuit sous 24h</strong>.
            </p>

            <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Devis gratuit et sans engagement",
                `Intervention rapide à ${city.name}`,
                "Garantie décennale sur tous travaux",
                "+10 ans d'expérience",
                "Artisan local de confiance",
                "Paiement facilité",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-green-400" aria-hidden="true" />
                  <span className="text-gray-200">{item}</span>
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

      {/* Services Section */}
      <section className="bg-gray-50 py-16">
        <Container>
          <SectionHeading
            title={`Nos services à ${city.name}`}
            subtitle="Une gamme complète de services pour votre toiture et votre habitat."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="mb-2 text-lg font-bold text-gray-900">{service.title}</h3>
                <p className="mb-4 text-sm text-gray-600">{service.description}</p>
                <ul className="mb-4 space-y-1">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 shrink-0 text-orange-500" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="text-sm font-semibold text-orange-500 hover:text-orange-600"
                >
                  En savoir plus →
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16">
        <Container>
          <SectionHeading
            title="Pourquoi choisir Rénovation BT ?"
            subtitle="Votre artisan couvreur de confiance dans la Marne."
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                  <item.icon className="h-8 w-8 text-orange-500" aria-hidden="true" />
                </div>
                <h3 className="mb-2 font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <Container>
          <SectionHeading
            title={`Questions fréquentes à ${city.name}`}
            subtitle="Tout ce que vous devez savoir sur nos services."
          />

          <div className="mx-auto max-w-3xl space-y-4">
            {faqItems.slice(0, 6).map((faq, index) => (
              <details
                key={index}
                className="group rounded-xl bg-white p-4 shadow-sm open:shadow-md"
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

      {/* Nearby Cities */}
      {nearbyCities.length > 0 && (
        <section className="bg-white py-16">
          <Container>
            <SectionHeading
              title={`Nous intervenons aussi près de ${city.name}`}
              subtitle="Nos couvreurs se déplacent dans toute la Marne."
            />

            <div className="flex flex-wrap justify-center gap-3">
              {nearbyCities.map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={`/couvreur/${nearby.slug}`}
                  className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-orange-300 hover:text-orange-600"
                >
                  Couvreur {nearby.name}
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-16 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Besoin d&apos;un devis pour vos travaux à {city.name} ?
            </h2>
            <p className="mb-8 text-lg text-white/90">
              Contactez-nous dès maintenant. Nous vous répondrons sous 24h avec un devis gratuit
              et détaillé pour vos travaux de toiture.
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
