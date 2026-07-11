import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { CheckCircle, Phone, MapPin, Clock, Shield, Award, Star, ChevronDown, FileText, Wrench, Home, Droplets, Hammer, Sun, AlertTriangle, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { cities, citiesWithPages } from "@/data/cities";
import { BUSINESS, SEO } from "@/lib/constants";

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
    ? `Couvreur ${city.name} | Artisan Toiture, Zinguerie Marne (51)`
    : `Couvreur ${city.name} (${city.postalCode}) | Artisan Toiture ${city.department}`;

  const description = isPrimary
    ? `Couvreur ${city.name} - Artisan couvreur Marne pour rénovation toiture, zinguerie, démoussage. Devis gratuit 24h. Intervention rapide en ${city.name}.`
    : `Couvreur ${city.name} (${city.postalCode}) - Artisan couvreur pour rénovation toiture, zinguerie, urgences. Devis gratuit, garantie décennale.`;

  return {
    title,
    description,
    alternates: { canonical: `/couvreur/${city.slug}` },
    openGraph: {
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
    image: `${SEO.siteUrl}/og-image.jpg`,
    telephone: BUSINESS.phoneInternational,
    email: BUSINESS.email,
    areaServed: { "@type": "City", name: city.name },
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      postalCode: BUSINESS.address.postalCode,
      addressRegion: city.department,
      addressCountry: "FR",
    },
    geo: { "@type": "GeoCoordinates", latitude: BUSINESS.geo.latitude, longitude: BUSINESS.geo.longitude },
    openingHours: "Mo-Su 00:00-23:59",
    priceRange: "€€",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.googleRating.toString(),
      reviewCount: BUSINESS.googleReviewCount.toString(),
      bestRating: "5",
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

function getNearbyCities(currentSlug: string) {
  const current = cities.find((c) => c.slug === currentSlug);
  if (!current) return [];
  return citiesWithPages
    .filter((c) => c.slug !== currentSlug)
    .map((c) => ({ ...c, distance: Math.sqrt(Math.pow(c.latitude - current.latitude, 2) + Math.pow(c.longitude - current.longitude, 2)) }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 8);
}

const services = [
  { name: "Couverture", icon: Home, features: ["Réfection complète", "Remplacement tuiles", "Bac acier", "Zinc"] },
  { name: "Zinguerie", icon: Wrench, features: ["Gouttières zinc/alu", "Solins & noues", "Chéneaux", "Habillage rive"] },
  { name: "Démoussage", icon: Droplets, features: ["Nettoyage haute pression", "Anti-mousse", "Hydrofuge", "Traitement préventif"] },
  { name: "Charpente", icon: Hammer, features: ["Traitement préventif", "Traitement curatif", "Renforcement", "Remplacement poutres"] },
  { name: "Velux", icon: Sun, features: ["Pose Velux", "Remplacement", "Étanchéité garantie", "Volets intégrés"] },
  { name: "Urgence", icon: AlertTriangle, features: ["Fuite toiture", "Infiltrations", "Intervention 24h/24", "Protection temporaire"] },
];

const faqItems = [
  { question: "Intervenez-vous rapidement dans la Marne ?", answer: "Oui, basés à Écury-sur-Coole, nous intervenons sous 2h à Châlons-en-Champagne pour les urgences. Notre ligne est ouverte 24h/24." },
  { question: "Quel est le prix d'une rénovation de toiture dans la Marne ?", answer: "Le prix varie selon la surface et les matériaux. Comptez entre 150€ et 280€/m² pour une rénovation complète. Nous fournissons un devis gratuit et détaillé." },
  { question: "Proposez-vous un devis gratuit ?", answer: "Oui, nous réalisons gratuitement et sans engagement un devis détaillé pour tous vos travaux de toiture. Devis sous 24h." },
  { question: "Êtes-vous couvert par la garantie décennale ?", answer: "Oui, tous nos travaux sont couverts par la garantie décennale, obligatoire pour les professionnels du bâtiment." },
  { question: "Combien de temps dure une rénovation de toiture ?", answer: "Pour une maison individuelle de 100m², comptez entre 5 et 10 jours ouvrés selon la complexité du chantier." },
  { question: "Faites-vous le démoussage et le nettoyage de toiture ?", answer: "Oui, nous proposons un service complet : nettoyage haute pression, traitement anti-mousse et hydrofuge pour protéger votre toiture." },
  { question: "Interventionnez-vous pour la pose de Velux ?", answer: "Oui, nous installons et remplaçons vos Velux avec une garantie d'étanchéité de 10 ans." },
  { question: "Quels matériaux utilisez-vous pour la zinguerie ?", answer: "Nous travaillons avec tous matériaux : zinc, aluminium, PVC. Le zinc reste le plus durable (30-50 ans)." },
  { question: "Réalisez-vous des travaux en hiver ?", answer: "Oui, nous intervenons toute l'année. Les hivers rigoureux de la Marne nécessitent parfois des interventions urgentes liées au gel." },
  { question: "Existe-t-il des aides financières pour les travaux de toiture ?", answer: "Oui : MaPrimeRénov', TVA réduite à 5,5%, éco-prêt à taux zéro. Nous vous accompagnons dans vos démarches." },
];

const testimonials = [
  { name: "Jean-Pierre M.", city: "Châlons-en-Champagne", text: "Intervention rapide pour une fuite après les pluies. Équipe professionnelle et résultat impeccable.", rating: 5 },
  { name: "Marie-Claire D.", city: "Saint-Memmie", text: "Réfection complète de notre toiture. Travail soigné, propre et dans les délais. Je recommande vivement.", rating: 5 },
  { name: "Philippe R.", city: "Fagnières", text: "Démoussage et hydrofuge réalisés avec soin. Notre toiture a retrouvé une seconde jeunesse.", rating: 5 },
];

export default async function CityPage({ params }: CityPageProps) {
  const { city: slug } = await params;
  const city = cities.find((c) => c.slug === slug);
  if (!city) notFound();

  const nearby = getNearbyCities(slug);
  const isPrimary = city.isPrimary || city.slug === "chalons-en-champagne";

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Accueil", url: "/" }, { name: `Couvreur ${city.name}`, url: `/couvreur/${city.slug}` }]} />
      <CityJsonLd city={city} />
      <FaqJsonLd items={faqItems} />

      {/* HERO avec NAP */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/hero-bg.webp" alt="" fill className="object-cover" sizes="100vw" />
        </div>
        <Container>
          <div className="relative z-10 mx-auto max-w-5xl">
            {isPrimary && (
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-500 px-4 py-1.5 text-sm font-medium">
                <MapPin className="h-4 w-4" /> Artisan couvreur Marne (51)
              </div>
            )}
            <h1 className="mb-4 text-4xl font-extrabold sm:text-5xl lg:text-6xl">
              Couvreur à <span className="text-orange-500">{city.name}</span>
              <span className="ml-2 text-xl text-white/70">({city.postalCode})</span>
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-gray-200">
              Artisan couvreur basé à Écury-sur-Coole, à quelques minutes de {city.name}.
              Rénovation BT intervient pour tous vos travaux de toiture, zinguerie et entretien dans la Marne.
            </p>

            {/* NAP */}
            <div className="mb-8 grid gap-4 rounded-xl bg-white/10 p-4 backdrop-blur sm:grid-cols-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-orange-400" />
                <div>
                  <div className="text-xs text-white/60">Téléphone</div>
                  <a href={BUSINESS.phoneHref} className="font-semibold hover:text-orange-400">{BUSINESS.phone}</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-orange-400" />
                <div>
                  <div className="text-xs text-white/60">Adresse</div>
                  <div className="font-semibold">{BUSINESS.address.street}, {city.postalCode}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-orange-400" />
                <div>
                  <div className="text-xs text-white/60">Horaires</div>
                  <div className="font-semibold">Ouvert 24h/24 - 7j/7</div>
                </div>
              </div>
            </div>

            {/* Trust */}
            <div className="mb-8 flex flex-wrap gap-4">
              {[
                { icon: Shield, text: "Garantie décennale" },
                { icon: Award, text: "+10 ans d'expérience" },
                { icon: Star, text: `${BUSINESS.googleReviewCount} avis 5/5` },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                  <item.icon className="h-5 w-5 text-orange-400" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button href="/contact" size="lg" className="shadow-lg shadow-orange-500/30">
                <FileText className="mr-2 h-5 w-5" /> Demander un devis gratuit
              </Button>
              <a href={BUSINESS.phoneHref} className="flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-8 py-4 font-semibold backdrop-blur transition-colors hover:bg-white hover:text-gray-900">
                <Phone className="h-5 w-5" /> {BUSINESS.phone}
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* SERVICES */}
      <section className="bg-gray-50 py-16">
        <Container>
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900">
            Nos prestations de couvreur à {city.name}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.name} className="group rounded-2xl bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 font-bold text-gray-900">{s.name}</h3>
                <ul className="space-y-1">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 shrink-0 text-orange-500" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* WHY US */}
      <section className="bg-white py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                Pourquoi choisir Rénovation BT à {city.name} ?
              </h2>
              <p className="mb-6 text-gray-600">
                Basés à Écury-sur-Coole, à quelques minutes de {city.name}, nous connaissons parfaitement
                les spécificités climatiques de la Marne : hivers rigoureux, étés orageux.
              </p>
              <div className="space-y-4">
                {[
                  { icon: MapPin, title: "Proximité", desc: `Intervention sous 2h à ${city.name} depuis Écury-sur-Coole` },
                  { icon: Award, title: "Expérience", desc: "+10 ans d'expertise en couverture dans la Marne" },
                  { icon: Shield, title: "Garantie", desc: "Garantie décennale sur tous nos travaux" },
                  { icon: FileText, title: "Devis gratuit", desc: "Étude gratuite, devis détaillé sous 24h" },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-100">
                      <item.icon className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative min-h-[320px]">
              <div className="flex h-[280px] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-orange-100 to-orange-50">
                <div className="text-center">
                  <div className="mb-4 text-6xl">🏗️</div>
                  <div className="text-4xl font-bold text-orange-600">+500</div>
                  <div className="text-gray-600">toitures rénovées</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 min-w-[160px] rounded-xl bg-white p-4 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-orange-400 text-orange-400" />)}</div>
                  <div>
                    <div className="font-bold text-gray-900">5.0</div>
                    <div className="text-xs text-gray-500">{BUSINESS.googleReviewCount} avis Google</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gray-50 py-16">
        <Container>
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900">
            Avis de nos clients à {city.name}
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="mb-3 flex">{[...Array(t.rating)].map((_, i) => <Star key={i} className="h-5 w-5 fill-orange-400 text-orange-400" />)}</div>
                <p className="mb-4 text-gray-600 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-600">{t.name.charAt(0)}</div>
                  <div>
                    <div className="font-semibold text-gray-900">{t.name}</div>
                    <div className="text-sm text-gray-500">{t.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16">
        <Container>
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900">
            Questions fréquentes à {city.name}
          </h2>
          <div className="mx-auto max-w-3xl space-y-4">
            {faqItems.map((item, i) => (
              <details key={i} className="group rounded-xl bg-gray-50 p-5 open:bg-white open:shadow-md">
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-900">
                  {item.question}
                  <ChevronDown className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-gray-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* GOOGLE MAPS */}
      <section className="bg-gray-100 py-8">
        <Container>
          <h2 className="mb-6 text-center text-xl font-bold text-gray-900">
            Nous trouver - Rénovation BT {city.name}
          </h2>
          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl shadow-lg">
            <div className="aspect-[16/9] w-full sm:aspect-[21/9]">
              <iframe
                className="h-full w-full"
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42595.7!2d${BUSINESS.geo.longitude}!3d${BUSINESS.geo.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zRMOpY3VyeS1zdXItQ29vbGUK!5e0!3m2!1sfr!2sfr!4v1`}
                style={{ border: 0 }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title={`Localisation Rénovation BT - ${city.name}`}
              />
            </div>
          </div>
          <p className="mt-4 text-center text-sm text-gray-500">
            Rénovation BT - {BUSINESS.address.street}, {BUSINESS.address.city} ({BUSINESS.address.postalCode})
          </p>
        </Container>
      </section>

      {/* NEARBY */}
      {nearby.length > 0 && (
        <section className="bg-white py-12">
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
                    c.isPrimary ? "border-orange-500 bg-orange-50 text-orange-600" : "border-gray-200 text-gray-700 hover:border-orange-300 hover:text-orange-600"
                  }`}
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* CTA */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-16 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Besoin d&apos;un devis pour {city.name} ?
            </h2>
            <p className="mb-8 text-lg text-white/90">
              Contactez-nous pour un devis gratuit et sans engagement.
              Nous intervenons rapidement à {city.name} et dans toute la Marne.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-bold text-orange-600 shadow-lg hover:bg-gray-100">
                <Phone className="h-6 w-6" /> {BUSINESS.phone}
              </a>
              <Button href="/contact" variant="secondary" size="lg" className="bg-white/20 text-white hover:bg-white/30">
                <MessageCircle className="mr-2 h-5 w-5" /> Formulaire de contact
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
