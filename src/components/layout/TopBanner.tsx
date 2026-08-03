import { MapPin } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

/**
 * « dans tout le Grand Est » promettait une couverture que l'entreprise ne
 * revendique plus : BUSINESS.serviceRadius vaut 60 km et BUSINESS.departments
 * se limite a la Marne et aux quatre departements limitrophes. Le Grand Est
 * s'etend jusqu'a l'Alsace, a plus de 300 km d'Ecury-sur-Coole.
 *
 * Fond orange-700 et non orange-500 : blanc sur #F97316 ne donne que 2,80:1,
 * sous le seuil WCAG AA. #C2410C donne 5,18:1.
 */
export function TopBanner() {
  return (
    <div className="bg-orange-700 py-2 text-center text-sm font-medium text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4">
        <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
        <span>
          Intervention dans la Marne et les départements limitrophes (rayon{" "}
          {BUSINESS.serviceRadius.value} km) – Devis et déplacement gratuits
        </span>
      </div>
    </div>
  );
}
