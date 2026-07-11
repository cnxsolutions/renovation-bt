import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/templates/CityPageTemplate";
import { cities } from "@/data/cities";
import { seoPages } from "@/data/seo-pages";

export const metadata: Metadata = {
  title: "Couvreur à Châlons-en-Champagne | Toiture, Zinguerie, Démoussage",
  description:
    "Artisan couvreur à Châlons-en-Champagne (51000). Rénovation BT intervient pour tous vos travaux de toiture, zinguerie et démoussage. Devis gratuit sous 24h, garantie décennale.",
  alternates: { canonical: "/couvreur-chalons-en-champagne" },
  openGraph: {
    title: "Couvreur à Châlons-en-Champagne | Rénovation BT",
    description:
      "Votre artisan couvreur à Châlons-en-Champagne. Toiture, zinguerie, démoussage. Intervention rapide, devis gratuit.",
  },
};

export default function CouvreurChalonsPage() {
  const chalonsCity = cities.find((c) => c.slug === "chalons-en-champagne");

  if (!chalonsCity) {
    return null;
  }

  const seoConfig = seoPages.find((p) => p.slug === "couvreur-chalons-en-champagne");

  return (
    <CityPageTemplate
      city={chalonsCity}
      seoConfig={seoConfig}
      breadcrumbName="Couvreur Châlons-en-Champagne"
    />
  );
}
