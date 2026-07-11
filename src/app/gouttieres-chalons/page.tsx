import type { Metadata } from "next";
import { ServiceCityTemplate } from "@/components/templates/ServiceCityTemplate";
import { seoPages } from "@/data/seo-pages";

export const metadata: Metadata = {
  title: "Gouttières à Châlons-en-Champagne | Pose, Remplacement, Réparation",
  description:
    "Pose et réparation gouttières à Châlons-en-Champagne. Zinc, aluminium, PVC. Rénovation BT - artisan zingueur certifié.",
  alternates: { canonical: "/gouttieres-chalons" },
};

const serviceDetails = {
  intro:
    "Rénovation BT, artisan zingueur à Châlons-en-Champagne, assure la pose, le remplacement et la réparation de vos gouttières. Nous travaillons tous matériaux : zinc, aluminium, PVC pour une évacuation optimale des eaux pluviales.",
  benefits: [
    "Pose de gouttières neuves",
    "Remplacement de gouttières existantes",
    "Réparation de fuites et joints",
    "Gouttières zinc, alu et PVC",
    "Descentes EP et crapaudines",
    "Habillage de planche de rive",
    "Intervention rapide",
    "Garantie décennale",
  ],
  process: [
    "Diagnostic gratuit de l'état de vos gouttières",
    "Conseils sur le matériau adapté à votre habitation",
    "Devis détaillé gratuit sous 24h",
    "Pose ou remplacement par nos artisans",
    "Vérification de l'étanchéité complète",
    "Nettoyage du chantier",
  ],
};

export default function GouttieresChalonsPage() {
  const seoConfig = seoPages.find((p) => p.slug === "gouttieres-chalons");

  if (!seoConfig) return null;

  return (
    <ServiceCityTemplate
      seoConfig={seoConfig}
      cityName="Châlons-en-Champagne"
      serviceDetails={serviceDetails}
    />
  );
}
