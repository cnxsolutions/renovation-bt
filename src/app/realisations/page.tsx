import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/sections/CTABanner";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Nos réalisations - Photos avant/après",
  description:
    "Photos avant/après de nos chantiers : toiture, ravalement de façade, gouttières. Rénovation BT, artisan couvreur Grand Est. Garantie décennale.",
  alternates: { canonical: "/realisations" },
};

const placeholderRealisations = [
  { id: 1, title: "Réfection toiture - Châlons-en-Champagne", category: "Toiture" },
  { id: 2, title: "Ravalement façade - Reims", category: "Façade" },
  { id: 3, title: "Pose gouttières alu - Épernay", category: "Gouttière" },
  { id: 4, title: "Démoussage toiture - Vitry-le-François", category: "Toiture" },
  { id: 5, title: "Peinture extérieure - Sézanne", category: "Façade" },
  { id: 6, title: "Zinguerie complète - Écury-sur-Coole", category: "Gouttière" },
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
            {placeholderRealisations.map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-100">
                  <div className="flex h-full items-center justify-center">
                    <span className="text-sm text-gray-400">Photo à venir</span>
                  </div>
                </div>
                <div className="p-4">
                  <span className="mb-1 inline-block rounded-full bg-orange-50 px-3 py-0.5 text-xs font-medium text-orange-600">
                    {item.category}
                  </span>
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
