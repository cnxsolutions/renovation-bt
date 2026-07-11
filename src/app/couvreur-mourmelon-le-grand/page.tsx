import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/templates/CityPageTemplate";
import { cities } from "@/data/cities";
import { seoPages } from "@/data/seo-pages";

export const metadata: Metadata = {
  title: "Couvreur à Mourmelon-le-Grand | Artisan Toiture Marne",
  description:
    "Couvreur à Mourmelon-le-Grand (51400). Rénovation BT - artisan couvreur près de Châlons. Rénovation, entretien, réparation.",
  alternates: { canonical: "/couvreur-mourmelon-le-grand" },
};

export default function CouvreurMourmelonPage() {
  const city = cities.find((c) => c.slug === "mourmelon-le-grand");
  if (!city) return null;
  const seoConfig = seoPages.find((p) => p.slug === "couvreur-mourmelon-le-grand");

  return (
    <CityPageTemplate city={city} seoConfig={seoConfig} breadcrumbName="Couvreur Mourmelon-le-Grand" />
  );
}
