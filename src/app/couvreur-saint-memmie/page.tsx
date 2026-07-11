import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/templates/CityPageTemplate";
import { cities } from "@/data/cities";
import { seoPages } from "@/data/seo-pages";

export const metadata: Metadata = {
  title: "Couvreur à Saint-Memmie | Artisan Toiture & Zinguerie",
  description:
    "Couvreur à Saint-Memmie (51470). Intervention rapide pour rénovation toiture, gouttières et démoussage. Basé à Écury-sur-Coole, près de Saint-Memmie.",
  alternates: { canonical: "/couvreur-saint-memmie" },
};

export default function CouvreurSaintMemmiePage() {
  const city = cities.find((c) => c.slug === "saint-memmie");
  if (!city) return null;
  const seoConfig = seoPages.find((p) => p.slug === "couvreur-saint-memmie");

  return (
    <CityPageTemplate city={city} seoConfig={seoConfig} breadcrumbName="Couvreur Saint-Memmie" />
  );
}
