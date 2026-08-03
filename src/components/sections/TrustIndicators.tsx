import { Users, Shield, FileText, MapPin } from "lucide-react";
import { trustIndicators } from "@/data/trust-indicators";

const iconMap = {
  users: Users,
  shield: Shield,
  "file-text": FileText,
  "map-pin": MapPin,
} as const;

/**
 * Bandeau de reassurance.
 *
 * DEUX CHANGEMENTS, ET ILS PORTENT SUR LA PLACE, PAS SUR LE CONTENU — les
 * quatre faits de `src/data/trust-indicators.ts` sont irreprochables et
 * verifiables un par un.
 *
 *  1. Le `-mt-16` disparait. Il faisait chevaucher ce bandeau sur le hero, donc
 *     entrer en concurrence avec les appels a l'action pour la ligne de
 *     flottaison. Or « est-ce une vraie entreprise ? » est un doute qui surgit
 *     au moment de l'engagement, pas au premier coup d'oeil.
 *  2. Ce n'est plus une `<section>` autonome montee directement par la page :
 *     c'est une bande, montee A L'INTERIEUR de la section qui presente
 *     l'artisan, dont elle est l'argument chiffre. Un bandeau sans titre entre
 *     deux sections titrees cassait la hierarchie de lecture.
 */
export function TrustIndicators() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-6 py-8 shadow-sm lg:px-10">
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
        {trustIndicators.map((item) => {
          const Icon = iconMap[item.icon];
          return (
            <div key={item.title} className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-50">
                <Icon className="h-6 w-6 text-orange-700" aria-hidden="true" />
              </div>
              <div>
                <p className="text-base font-bold text-gray-900">{item.title}</p>
                <p className="text-sm text-gray-700">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
