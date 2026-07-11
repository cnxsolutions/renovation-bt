import type { Metadata } from "next";
import { ServiceCityTemplate } from "@/components/templates/ServiceCityTemplate";
import { seoPages } from "@/data/seo-pages";

export const metadata: Metadata = {
  title: "Démoussage Toiture à Châlons-en-Champagne | Traitement Anti-Mousse",
  description:
    "Démoussage toiture à Châlons-en-Champagne. Rénovation BT nettoie et traite votre toiture. Anti-mousse, hydrofuge, nettoyage professionnel.",
  alternates: { canonical: "/demoussage-toiture-chalons" },
};

const serviceDetails = {
  intro:
    "Spécialiste du démoussage de toiture à Châlons-en-Champagne, Rénovation BT redonne vie à votre couverture. Nous utilisons des produits professionnels doux pour nettoyer et traiter votre toiture sans l'abîmer.",
  benefits: [
    "Nettoyage haute pression adapté",
    "Traitement anti-mousse professionnel",
    "Application d'hydrofuge protecteur",
    "Suppression des lichens et algues",
    "Préservation de vos tuiles et ardoises",
    "Traitement préventif anti-reprise",
    "Intervention dans toute la Marne",
    "Devis gratuit et sans engagement",
  ],
  process: [
    "Diagnostic de l'état de votre toiture et du type de mousse",
    "Préparation du chantier et protection de vos gouttières",
    "Nettoyage haute pression douce pour décoller les mousses",
    "Application du traitement anti-mousse professionnel",
    "Rinçage et contrôle de l'étanchéité",
    "Option : application d'un hydrofuge coloré ou incolore",
  ],
};

export default function DemoussageChalonsPage() {
  const seoConfig = seoPages.find((p) => p.slug === "demoussage-toiture-chalons");

  if (!seoConfig) return null;

  return (
    <ServiceCityTemplate
      seoConfig={seoConfig}
      cityName="Châlons-en-Champagne"
      serviceDetails={serviceDetails}
    />
  );
}
