import type { Metadata } from "next";
import { ServiceCityTemplate } from "@/components/templates/ServiceCityTemplate";
import { seoPages } from "@/data/seo-pages";

export const metadata: Metadata = {
  title: "Velux & Fenêtre de Toit à Châlons-en-Champagne | Pose & Remplacement",
  description:
    "Pose de Velux et fenêtres de toit à Châlons-en-Champagne. Rénovation BT installe et remplace vos velux avec garantie étanchéité.",
  alternates: { canonical: "/velux-chalons" },
};

const serviceDetails = {
  intro:
    "Rénovation BT, artisan couvreur à Châlons-en-Champagne, assure la pose et le remplacement de vos Velux et fenêtres de toit. Nous garantissons une étanchéité parfaite et un accompagnement dans le choix de vos fenêtres.",
  benefits: [
    "Pose de Velux et fenêtre de toit",
    "Remplacement de Velux existants",
    "Étanchéité garantie 10 ans",
    "Solutions pour combles aménagés",
    "Volets roulants intégrés",
    "Stores et rideaux",
    "Devis gratuit sous 24h",
    "Intervention rapide",
  ],
  process: [
    "Prise de mesure et conseil sur le modèle adapté",
    "Devis détaillé incluant la fenêtre et la pose",
    "Création de l'ouverture dans la charpente si nécessaire",
    "Mise en place de la fenêtre Velux",
    "Étanchéité complète avec habillage intérieur/extérieur",
    "Nettoyage et réception des travaux",
  ],
};

export default function VeluxChalonsPage() {
  const seoConfig = seoPages.find((p) => p.slug === "velux-chalons");

  if (!seoConfig) return null;

  return (
    <ServiceCityTemplate
      seoConfig={seoConfig}
      cityName="Châlons-en-Champagne"
      serviceDetails={serviceDetails}
    />
  );
}
