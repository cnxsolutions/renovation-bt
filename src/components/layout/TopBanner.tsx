import { MapPin } from "lucide-react";

export function TopBanner() {
  return (
    <div className="bg-orange-500 py-2 text-center text-sm font-medium text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4">
        <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
        <span>Intervention rapide dans tout le Grand Est – Devis et déplacement gratuits</span>
      </div>
    </div>
  );
}
