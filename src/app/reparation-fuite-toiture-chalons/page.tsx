import type { Metadata } from "next";
import { ServiceCityTemplate } from "@/components/templates/ServiceCityTemplate";
import { seoPages } from "@/data/seo-pages";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Réparation Fuite Toiture à Châlons-en-Champagne | Urgence 24h/24",
  description:
    "Réparation fuite toiture à Châlons-en-Champagne. Intervention rapide 24h/24 pour stopper les infiltrations. Rénovation BT intervient en urgence.",
  alternates: { canonical: "/reparation-fuite-toiture-chalons" },
};

const serviceDetails = {
  intro:
    "En cas de fuite de toiture, chaque minute compte. Rénovation BT intervient en urgence à Châlons-en-Champagne 24h/24 et 7j/7 pour stopper les infiltrations et protéger votre habitat. Appelez-nous immédiatement !",
  benefits: [
    "Intervention d'urgence 24h/24",
    "Délai d'intervention < 2h à Châlons",
    "Arrêt immédiat de l'infiltration",
    "Protection temporaire si nécessaire",
    "Diagnostic complet de la cause",
    "Réparation définitive",
    "Couverture par la garantie décennale",
    "Service disponible week-end et jours fériés",
  ],
  process: [
    "Votre appel : nous localisons la fuite ensemble par téléphone",
    "Déplacement rapide sur place (< 2h à Châlons)",
    "Diagnostic et identification de la cause de la fuite",
    "Intervention d'urgence pour stopper l'infiltration",
    "Solution temporaire de protection si besoin",
    "Devis pour la réparation définitive",
    "Planning des travaux si non urgent",
  ],
};

export default function ReparationUrgenceChalonsPage() {
  const seoConfig = seoPages.find((p) => p.slug === "reparation-fuite-toiture-chalons");

  if (!seoConfig) return null;

  return (
    <>
      <ServiceCityTemplate
        seoConfig={seoConfig}
        cityName="Châlons-en-Champagne"
        serviceDetails={serviceDetails}
      />

      {/* Bannière d'urgence en plus */}
      <div className="bg-red-600 py-4 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="mb-2 font-bold">🚨 FUITE DE TOITURE ?</p>
          <p className="mb-4 text-sm">Appelez-nous immédiatement : nous intervenons sous 2h à Châlons-en-Champagne</p>
          <a
            href="tel:+33761545343"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-bold text-red-600 transition-colors hover:bg-gray-100"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            07 61 54 53 43
          </a>
        </div>
      </div>
    </>
  );
}
