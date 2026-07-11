import type { Metadata } from "next";
import { ServiceCityTemplate } from "@/components/templates/ServiceCityTemplate";
import { seoPages } from "@/data/seo-pages";

export const metadata: Metadata = {
  title: "Hydrofuge Toiture à Châlons | Traitement Imperméabilisant",
  description:
    "Traitement hydrofuge toiture à Châlons-en-Champagne. Rénovation BT applique un hydrofuge coloré ou incolore pour protéger votre toiture.",
  alternates: { canonical: "/hydrofuge-toiture-chalons" },
};

const serviceDetails = {
  intro:
    "Protégez votre toiture contre les infiltrations et les dégradations avec notre traitement hydrofuge à Châlons-en-Champagne. Rénovation BT applique des produits professionnels qui imperméabilisent tout en laissant respirer vos matériaux.",
  benefits: [
    "Imperméabilisation longue durée",
    "Traitement anti-mousse intégré",
    "Conserve l'aspect naturel des tuiles",
    "Hydrofuge coloré possible",
    "Protège contre les gelées",
    "Prolonge la durée de vie",
    "Traitement professionnel",
    "Devis gratuit",
  ],
  process: [
    "Diagnostic de l'état de votre toiture",
    "Nettoyage complet préalable si nécessaire",
    "Application de l'hydrofuge professionnel",
    "Séchage et durcissement",
    "Contrôle de l'efficacité",
    "Remise de la garantie",
  ],
};

export default function HydrofugeChalonsPage() {
  const seoConfig = seoPages.find((p) => p.slug === "hydrofuge-toiture-chalons");

  if (!seoConfig) return null;

  return (
    <ServiceCityTemplate
      seoConfig={seoConfig}
      cityName="Châlons-en-Champagne"
      serviceDetails={serviceDetails}
    />
  );
}
