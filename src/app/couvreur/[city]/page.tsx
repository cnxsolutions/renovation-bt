import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { citiesWithPages, cities } from "@/data/cities";
import { BUSINESS, SEO } from "@/lib/constants";
import { services } from "@/data/services";

interface CityPageProps {
  params: Promise<{ city: string }>;
}

export function generateStaticParams() {
  return citiesWithPages.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city: slug } = await params;
  const city = citiesWithPages.find((c) => c.slug === slug);
  if (!city) return {};

  return {
    title: `Couvreur ${city.name} (${city.postalCode}) - Toiture & Façade`,
    description: `Couvreur à ${city.name} (${city.postalCode}). Toiture, façade et gouttières. Devis gratuit sous 24h, garantie décennale. Rénovation BT.`,
    alternates: { canonical: `/couvreur/${city.slug}` },
    openGraph: {
      title: `Couvreur ${city.name} (${city.postalCode}) | Rénovation BT`,
      description: `Travaux de toiture, façade et gouttières à ${city.name}. Devis gratuit, garantie décennale, +10 ans d'expérience.`,
    },
    twitter: {
      card: "summary_large_image",
      title: `Couvreur ${city.name} (${city.postalCode}) | Rénovation BT`,
      description: `Travaux de toiture, façade et gouttières à ${city.name}. Devis gratuit, garantie décennale.`,
    },
  };
}

function CityJsonLd({ city }: { city: (typeof citiesWithPages)[number] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "@id": `${SEO.siteUrl}/couvreur/${city.slug}#business`,
    name: `Rénovation BT - Couvreur ${city.name}`,
    url: `${SEO.siteUrl}/couvreur/${city.slug}`,
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
    parentOrganization: { "@id": `${SEO.siteUrl}/#business` },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function getNearbyCities(currentSlug: string) {
  const current = cities.find((c) => c.slug === currentSlug);
  if (!current) return [];

  return cities
    .filter((c) => c.slug !== currentSlug && c.hasPage)
    .map((c) => ({
      ...c,
      distance: Math.sqrt(
        Math.pow(c.latitude - current.latitude, 2) + Math.pow(c.longitude - current.longitude, 2)
      ),
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 6);
}

export default async function CityPage({ params }: CityPageProps) {
  const { city: slug } = await params;
  const city = citiesWithPages.find((c) => c.slug === slug);
  if (!city) notFound();

  const nearby = getNearbyCities(slug);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: `Couvreur ${city.name}`, url: `/couvreur/${city.slug}` },
        ]}
      />
      <CityJsonLd city={city} />

      <section className="bg-gray-50 py-16">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-4xl font-bold text-gray-900">
              Couvreur à <span className="text-orange-500">{city.name}</span> ({city.postalCode})
            </h1>

            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              <strong>Rénovation BT</strong> est votre artisan couvreur de confiance à{" "}
              {city.name} et dans tout le département {city.department} ({city.departmentCode}).
              Basés à Écury-sur-Coole, nous intervenons rapidement à {city.name} pour tous vos
              travaux de toiture, ravalement de façade et gouttières. Bénéficiez d&apos;un devis
              gratuit sous 24h et d&apos;une garantie décennale sur l&apos;ensemble de nos prestations.
            </p>

            <div className="mb-12 grid gap-4 sm:grid-cols-2">
              {[
                "Devis gratuit et sans engagement",
                `Intervention rapide à ${city.name}`,
                "Garantie décennale",
                "+10 ans d'expérience",
                "Tarifs compétitifs",
                "Travail soigné et propre",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-orange-500" aria-hidden="true" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="mb-16 flex flex-col gap-4 sm:flex-row">
              <Button href="/contact" variant="primary" size="lg">
                Demander un devis gratuit
              </Button>
              <Button href={BUSINESS.phoneHref} variant="secondary" size="lg">
                <Phone className="h-5 w-5" aria-hidden="true" />
                {BUSINESS.phone}
              </Button>
            </div>

            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              Nos services à {city.name}
            </h2>
            <div className="mb-16 grid gap-6 sm:grid-cols-3">
              {services.map((service) => (
                <div key={service.id} className="rounded-xl bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-lg font-bold text-gray-900">{service.title}</h3>
                  <ul className="mb-4 space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="text-sm text-gray-600">{f}</li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-orange-500 hover:text-orange-600"
                  >
                    En savoir plus <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>

            {nearby.length > 0 && (
              <>
                <h2 className="mb-6 text-2xl font-bold text-gray-900">
                  Nous intervenons aussi près de {city.name}
                </h2>
                <div className="flex flex-wrap gap-3">
                  {nearby.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/couvreur/${c.slug}`}
                      className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-orange-300 hover:text-orange-600"
                    >
                      Couvreur {c.name}
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
