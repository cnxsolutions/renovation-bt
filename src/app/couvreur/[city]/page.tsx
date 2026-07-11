import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle, Phone, MapPin, Clock, Shield, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { cities, citiesWithPages } from "@/data/cities";
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
  const city = cities.find((c) => c.slug === slug);
  if (!city) return {};

  const isPrimary = city.isPrimary || city.slug === "chalons-en-champagne";
  const title = isPrimary
    ? `Couvreur ${city.name} | Artisan Toiture, Zinguerie Marne`
    : `Couvreur ${city.name} | Artisan Toiture ${city.department}`;

  const description = isPrimary
    ? `Couvreur ${city.name} - Artisan couvreur Marne pour rénovation toiture, zinguerie, démoussage. Devis gratuit 24h.`
    : `Couvreur ${city.name} (${city.postalCode}) - Artisan couvreur pour tous travaux de toiture. Devis gratuit, garantie décennale.`;

  return {
    title,
    description,
    alternates: { canonical: `/couvreur/${city.slug}` },
    openGraph: {
      title: `Couvreur ${city.name} | Rénovation BT`,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: `Couvreur ${city.name} | Rénovation BT`,
      description,
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
      streetAddress: BUSINESS.address.street,
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

  return citiesWithPages
    .filter((c) => c.slug !== currentSlug)
    .map((c) => ({
      ...c,
      distance: Math.sqrt(
        Math.pow(c.latitude - current.latitude, 2) + Math.pow(c.longitude - current.longitude, 2)
      ),
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 8);
}

export default async function CityPage({ params }: CityPageProps) {
  const { city: slug } = await params;
  const city = cities.find((c) => c.slug === slug);

  if (!city) notFound();

  const nearby = getNearbyCities(slug);
  const isPrimary = city.isPrimary || city.slug === "chalons-en-champagne";

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: `Couvreur ${city.name}`, url: `/couvreur/${city.slug}` },
        ]}
      />
      <CityJsonLd city={city} />
      <FaqJsonLd items={[]} />

      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 text-white">
        <Container>
          <div className="mx-auto max-w-4xl">
            {isPrimary && (
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-500/20 px-4 py-1 text-sm font-medium text-orange-300">
                <MapPin className="h-4 w-4" />
                Artisan couvreur Marne (51)
              </div>
            )}

            <h1 className="mb-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              Couvreur à <span className="text-orange-500">{city.name}</span>
              {city.postalCode && <span className="text-xl text-white/70"> ({city.postalCode})</span>}
            </h1>

            <p className="mb-8 text-lg leading-relaxed text-gray-200">
              Artisan couvreur basé à Écury-sur-Coole, à quelques minutes de {city.name}.
              Rénovation BT intervient pour tous vos travaux de toiture, zinguerie et entretien.
            </p>

            <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Shield, text: "Garantie décennale" },
                { icon: Clock, text: "Devis sous 24h" },
                { icon: MapPin, text: `Intervention ${city.name}` },
                { icon: CheckCircle, text: "+10 ans d'expérience" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <item.icon className="h-5 w-5 shrink-0 text-green-400" />
                  <span className="text-gray-200">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button href="/contact" variant="primary" size="lg">
                Demander un devis gratuit
              </Button>
              <Button href={BUSINESS.phoneHref} variant="secondary" size="lg">
                <Phone className="h-5 w-5" />
                {BUSINESS.phone}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-gray-50 py-16">
        <Container>
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900">
            Nos services à {city.name}
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.id} className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-2 text-lg font-bold text-gray-900">{service.title}</h3>
                <ul className="mb-4 space-y-1">
                  {service.features.slice(0, 4).map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 shrink-0 text-orange-500" />
                      {f}
                    </li>
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
        </Container>
      </section>

      {nearby.length > 0 && (
        <section className="bg-white py-16">
          <Container>
            <h2 className="mb-6 text-center text-xl font-bold text-gray-900">
              Nous intervenons aussi près de {city.name}
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {nearby.map((c) => (
                <Link
                  key={c.slug}
                  href={`/couvreur/${c.slug}`}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    c.isPrimary
                      ? "border-orange-500 bg-orange-50 text-orange-600"
                      : "border-gray-200 text-gray-700 hover:border-orange-300 hover:text-orange-600"
                  }`}
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-12 text-white">
        <Container>
          <div className="text-center">
            <h2 className="mb-4 text-2xl font-bold">
              Besoin d&apos;un devis pour {city.name} ?
            </h2>
            <p className="mb-6 text-white/90">
              Contactez-nous, nous vous répondons sous 24h
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-bold text-orange-600 shadow-lg hover:bg-gray-100"
              >
                <Phone className="h-5 w-5" />
                {BUSINESS.phone}
              </a>
              <Button href="/contact" variant="secondary" size="lg" className="bg-white/20 text-white hover:bg-white/30">
                Formulaire de contact
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
