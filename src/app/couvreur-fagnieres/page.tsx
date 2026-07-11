import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/templates/CityPageTemplate";
import { cities } from "@/data/cities";
import { seoPages } from "@/data/seo-pages";

export const metadata: Metadata = {
  title: "Couvreur à Fagnières | Artisan Couverture Marne",
  description:
    "Artisan couvreur à Fagnières (51510). Rénovation BT intervient pour vos travaux de toiture, zinguerie et entretien. Devis gratuit.",
  alternates: { canonical: "/couvreur-fagnieres" },
};

export default function CouvreurFagnieresPage() {
  const city = cities.find((c) => c.slug === "fagnieres");
  if (!city) return null;
  const seoConfig = seoPages.find((p) => p.slug === "couvreur-fagnieres");

  return (
    <CityPageTemplate city={city} seoConfig={seoConfig} breadcrumbName="Couvreur Fagnières" />
  );
}
