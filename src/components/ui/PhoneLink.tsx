import { BUSINESS } from "@/lib/constants";
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";

interface PhoneLinkProps {
  variant?: "default" | "button" | "white";
  showIcon?: boolean;
  className?: string;
}

/**
 * Contrastes WCAG AA (texte normal, seuil 4,5:1) :
 *
 *   default : orange-500 #F97316 sur blanc .. 2,80:1 ECHEC -> orange-700 5,18:1
 *   button  : blanc sur orange-500 ......... 2,80:1 ECHEC -> orange-700 5,18:1
 *   white   : orange-500 sur blanc ......... 2,80:1 ECHEC -> orange-700 5,18:1
 *
 * C'est le premier appel a l'action du site : il doit se lire, pas seulement
 * se voir. La teinte de marque est conservee, seule la nuance change.
 */
const variantClasses = {
  default: "text-gray-900 hover:text-orange-700",
  button:
    "bg-orange-700 text-white hover:bg-orange-800 px-6 py-3 rounded-lg font-semibold shadow-sm",
  white:
    "bg-white text-orange-700 hover:bg-orange-50 px-6 py-3 rounded-lg font-semibold border-2 border-orange-700",
} as const;

/**
 * `displayName` et non `name` : cette chaine est lue a voix haute par un lecteur
 * d'ecran. `BUSINESS.name` porte desormais le titre exact de la fiche Google,
 * « BOISSON Teddy | RENOVATIONBT », qui est fait pour le JSON-LD et ne
 * s'enonce pas.
 */
export function PhoneLink({ variant = "default", showIcon = true, className }: PhoneLinkProps) {
  const ariaLabel = `Appeler ${BUSINESS.displayName} au ${BUSINESS.phone}`;

  return (
    <a
      href={BUSINESS.phoneHref}
      className={cn(
        "inline-flex items-center gap-2 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-700 focus-visible:ring-offset-2",
        variantClasses[variant],
        className
      )}
      aria-label={ariaLabel}
    >
      {showIcon && <Phone className="h-5 w-5" aria-hidden="true" />}
      <span className="font-semibold">{BUSINESS.phone}</span>
    </a>
  );
}
