import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/sections/CTABanner";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { AvantApres, SingleImage } from "@/components/ui/AvantApres";

export const metadata: Metadata = {
  title: "Nos réalisations - Photos avant/après",
  description:
    "Photos avant/après de nos chantiers : toiture, ravalement de façade, gouttières. Rénovation BT, artisan couvreur Grand Est. Garantie décennale.",
  alternates: { canonical: "/realisations" },
};

const realisations = [
  {
    id: 1,
    title: "Réfection toiture complète - Châlons-en-Champagne",
    category: "Toiture",
    location: "Châlons-en-Champagne",
    avant: "/images/maison-toiture-avant-chalonsenchampagne.webp",
    apres: "/images/maison-toiture-apres-chalonsenchampagne.webp",
  },
  {
    id: 2,
    title: "Toiture terre-plein rénové - Châlons-en-Champagne",
    category: "Toiture",
    location: "Châlons-en-Champagne",
    avant: "/images/toiture-terreplein-renove-avant-chalonsenchampagne.webp",
    apres: "/images/toiture-terreplein-renove-apres-chalonsenchampagne.webp",
  },
  {
    id: 3,
    title: "Zinguerie complète - Châlons-en-Champagne",
    category: "Zinguerie",
    location: "Châlons-en-Champagne",
    avant: "/images/zinguerie-avant-chalonsenchampagne.webp",
    apres: "/images/zinguerie-apres-chalonsenchampagne.webp",
  },
  {
    id: 4,
    title: "Toiture rénovée - Châlons-en-Champagne",
    category: "Toiture",
    location: "Châlons-en-Champagne",
    image: "/images/toiture-renove-chalonsenchampagne.webp",
  },
  {
    id: 5,
    title: "Toiture et zinguerie - Châlons-en-Champagne",
    category: "Zinguerie",
    location: "Châlons-en-Champagne",
    image: "/images/toiture-zinguerie-renove-chalonsenchampagne.webp",
  },
];

export default function RealisationsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Réalisations", url: "/realisations" },
        ]}
      />
      <section className="bg-gray-50 py-16">
        <Container>
          <SectionHeading
            title="Nos réalisations"
            subtitle="Découvrez quelques-uns de nos chantiers récents dans le Grand Est."
            as="h1"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {realisations.map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                {item.avant && item.apres ? (
                  <AvantApres
                    avantSrc={item.avant}
                    apresSrc={item.apres}
                    alt={item.title}
                  />
                ) : item.image ? (
                  <SingleImage src={item.image} alt={item.title} />
                ) : (
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-100">
                    <div className="flex h-full items-center justify-center">
                      <span className="text-sm text-gray-400">Photo à venir</span>
                    </div>
                  </div>
                )}
                <div className="p-4">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-orange-50 px-3 py-0.5 text-xs font-medium text-orange-600">
                      {item.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {item.location}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <CTABanner />
    </>
  );
}
