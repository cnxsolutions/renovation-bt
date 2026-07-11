import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/templates/CityPageTemplate";
import { cities } from "@/data/cities";
import { seoPages } from "@/data/seo-pages";

export const metadata: Metadata = {
  title: "Couvreur à Suippes | Artisan Couverture Marne",
  description:
    "Couvreur à Suippes (51600). Rénovation BT intervient pour vos travaux de toiture, charpente et zinguerie.",
  alternates: { canonical: "/couvreur-suippes" },
};

export default function CouvreurSuippesPage() {
  const city = cities.find((c) => c.slug === "suippes");
  if (!city) return null;
  const seoConfig = seoPages.find((p) => p.slug === "couvreur-suippes");

  return (
    <CityPageTemplate city={city} seoConfig={seoConfig} breadcrumbName="Couvreur Suippes" />
  );
}
