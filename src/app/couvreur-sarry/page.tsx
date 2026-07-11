import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/templates/CityPageTemplate";
import { cities } from "@/data/cities";
import { seoPages } from "@/data/seo-pages";

export const metadata: Metadata = {
  title: "Couvreur à Sarry | Artisan Toiture Marne (51)",
  description:
    "Couvreur à Sarry (51520). Rénovation BT, artisan couvreur près de Châlons-en-Champagne. Toiture, gouttières, démoussage.",
  alternates: { canonical: "/couvreur-sarry" },
};

export default function CouvreurSarryPage() {
  const city = cities.find((c) => c.slug === "sarry");
  if (!city) return null;
  const seoConfig = seoPages.find((p) => p.slug === "couvreur-sarry");

  return (
    <CityPageTemplate city={city} seoConfig={seoConfig} breadcrumbName="Couvreur Sarry" />
  );
}
