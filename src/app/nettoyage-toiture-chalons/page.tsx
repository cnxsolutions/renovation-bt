import type { Metadata } from "next";
import { ServiceCityTemplate } from "@/components/templates/ServiceCityTemplate";
import { seoPages } from "@/data/seo-pages";

export const metadata: Metadata = {
  title: "Nettoyage Toiture à Châlons-en-Champagne | Professionnel",
  description:
    "Nettoyage toiture professionnel à Châlons-en-Champagne. Rénovation BT utilise des techniques douces et efficaces pour nettoyer votre toiture.",
  alternates: { canonical: "/nettoyage-toiture-chalons" },
};

const serviceDetails = {
  intro:
    "Le nettoyage professionnel de votre toiture à Châlons-en-Champagne prolonge sa durée de vie et préserve l'étanchéité de votre habitat. Rénovation BT utilise des techniques adaptées à chaque type de couverture.",
  benefits: [
    "Nettoyage haute et basse pression",
    "Produits professionnels non agressifs",
    "Traitement anti-mousse préventif",
    "Contrôle de l'étanchéité",
    "Nettoyage des gouttières inclus",
    "Intervention sécurisée",
    "Devis gratuit sous 24h",
    "Garantie sur les travaux",
  ],
  process: [
    "Inspection de votre toiture et identification des zones à nettoyer",
    "Mise en place des protections (gouttières, plantes, etc.)",
    "Nettoyage haute pression adapté à votre type de couverture",
    "Application d'un traitement anti-mousse préventif",
    "Rinçage et vérification de l'étanchéité",
    "Nettoyage complet du chantier",
  ],
};

export default function NettoyageChalonsPage() {
  const seoConfig = seoPages.find((p) => p.slug === "nettoyage-toiture-chalons");

  if (!seoConfig) return null;

  return (
    <ServiceCityTemplate
      seoConfig={seoConfig}
      cityName="Châlons-en-Champagne"
      serviceDetails={serviceDetails}
    />
  );
}
