import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/templates/CityPageTemplate";
import { cities } from "@/data/cities";
import { seoPages } from "@/data/seo-pages";

export const metadata: Metadata = {
  title: "Couvreur à Courtisols | Artisan Toiture Marne",
  description:
    "Couvreur à Courtisols (51460). Intervention pour rénovation toiture, gouttières et entretien. Basé à Écury-sur-Coole.",
  alternates: { canonical: "/couvreur-courtisols" },
};

export default function CouvreurCourtisolsPage() {
  const city = cities.find((c) => c.slug === "courtisols");
  if (!city) return null;
  const seoConfig = seoPages.find((p) => p.slug === "couvreur-courtisols");

  return (
    <CityPageTemplate city={city} seoConfig={seoConfig} breadcrumbName="Couvreur Courtisols" />
  );
}
