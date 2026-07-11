import type { Metadata } from "next";
import { ServiceCityTemplate } from "@/components/templates/ServiceCityTemplate";
import { seoPages } from "@/data/seo-pages";

export const metadata: Metadata = {
  title: "Zingueur à Châlons-en-Champagne | Gouttières, Solins, Noues",
  description:
    "Zingueur à Châlons-en-Champagne. Rénovation BT pose et répare gouttières zinc, aluminium, PVC. Solins, chéneaux, habillage de rive.",
  alternates: { canonical: "/zingueur-chalons-en-champagne" },
};

const serviceDetails = {
  intro:
    "Artisan zingueur à Châlons-en-Champagne, Rénovation BT vous accompagne dans tous vos travaux de zinguerie. Nous posons, rénovons et réparons gouttières, solins, chéneaux et habillages de rive avec des matériaux de qualité.",
  benefits: [
    "Gouttières zinc, aluminium et PVC",
    "Solins et noues étanches",
    "Chéneaux sur mesure",
    "Habillage de rive et bandeau",
    "Descentes EP (eaux pluviales)",
    "Intervention rapide à Châlons",
    "Garantie décennale",
    "Devis gratuit sous 24h",
  ],
  process: [
    "Prise de contact et diagnostic gratuit de votre zinguerie",
    "Devis détaillé avec les matériaux adaptés à votre habitation",
    "Intervention professionnelle par nos artisans zingueurs qualifiés",
    "Nettoyage complet du chantier après travaux",
    "Remise de la garantie décennale",
  ],
};

export default function ZingueurChalonsPage() {
  const seoConfig = seoPages.find((p) => p.slug === "zingueur-chalons-en-champagne");

  if (!seoConfig) return null;

  return (
    <ServiceCityTemplate
      seoConfig={seoConfig}
      cityName="Châlons-en-Champagne"
      serviceDetails={serviceDetails}
    />
  );
}
