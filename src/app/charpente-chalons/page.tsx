import type { Metadata } from "next";
import { ServiceCityTemplate } from "@/components/templates/ServiceCityTemplate";
import { seoPages } from "@/data/seo-pages";

export const metadata: Metadata = {
  title: "Charpente à Châlons-en-Champagne | Traitement & Rénovation",
  description:
    "Charpentier à Châlons-en-Champagne. Rénovation BT traite et rénove votre charpente. Traitement préventif et curatif insectes xylophages.",
  alternates: { canonical: "/charpente-chalons" },
};

const serviceDetails = {
  intro:
    "Notre entreprise de couverture à Châlons-en-Champagne prend en charge le traitement et la rénovation de votre charpente. Experts dans la détection et le traitement des insectes xylophages, nous protégeons la structure de votre maison.",
  benefits: [
    "Diagnostic charpente gratuit",
    "Traitement préventif anti-insectes",
    "Traitement curatif xylophages",
    "Consolidation de poutres",
    "Remplacement de bois abimé",
    "Mise en place de ventilation",
    "Diagnostic humidité",
    "Garantie décennale",
  ],
  process: [
    "Inspection complète de votre charpente par nos experts",
    "Détection des indices d'infestation (sciure, galeries, etc.)",
    "Devis détaillé avec notre diagnostic",
    "Application du traitement professionnel",
    "Consolidation ou remplacement si nécessaire",
    "Vérification de la ventilation",
    "Remise de la garantie",
  ],
};

export default function CharpenteChalonsPage() {
  const seoConfig = seoPages.find((p) => p.slug === "charpente-chalons");

  if (!seoConfig) return null;

  return (
    <ServiceCityTemplate
      seoConfig={seoConfig}
      cityName="Châlons-en-Champagne"
      serviceDetails={serviceDetails}
    />
  );
}
