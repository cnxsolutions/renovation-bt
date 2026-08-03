import { cn } from "@/lib/utils";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

/**
 * Contrastes WCAG AA (texte normal, seuil 4,5:1) — mesures sur les hex reels
 * declares dans src/app/globals.css :
 *
 *   blanc sur orange-500 #F97316 ... 2,80:1  ECHEC  (etat precedent)
 *   blanc sur orange-600 #EA580C ... 3,56:1  ECHEC
 *   blanc sur orange-700 #C2410C ... 5,18:1  OK     (retenu)
 *   blanc sur orange-800 #9A3412 ... 7,31:1  OK     (survol)
 *   orange-700 sur blanc ......... 5,18:1  OK     (variante outline orange)
 *
 * L'orange de marque n'est pas abandonne : c'est la meme teinte, une nuance
 * plus profonde. orange-500 reste utilise pour les icones decoratives, les
 * bordures et l'orange sur fond sombre (6,33:1 sur gray-900).
 */
const variants: Record<ButtonVariant, string> = {
  primary: "bg-orange-700 text-white hover:bg-orange-800 shadow-sm",
  secondary: "bg-gray-900 text-white hover:bg-gray-800",
  outline: "border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white",
  ghost: "text-gray-700 hover:bg-gray-100",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  target,
  rel,
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-700 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} target={target} rel={rel} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
