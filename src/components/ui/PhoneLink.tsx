import { BUSINESS } from "@/lib/constants";
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";

interface PhoneLinkProps {
  variant?: "default" | "button" | "white";
  showIcon?: boolean;
  className?: string;
}

export function PhoneLink({ variant = "default", showIcon = true, className }: PhoneLinkProps) {
  const variantClasses = {
    default: "text-gray-900 hover:text-orange-500",
    button: "bg-orange-500 text-white hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold shadow-sm",
    white: "bg-white text-orange-500 hover:bg-gray-50 px-6 py-3 rounded-lg font-semibold border-2 border-orange-500",
  };

  return (
    <a
      href={BUSINESS.phoneHref}
      className={cn(
        "inline-flex items-center gap-2 transition-colors duration-200",
        variantClasses[variant],
        className
      )}
      aria-label={`Appeler ${BUSINESS.name} au ${BUSINESS.phone}`}
    >
      {showIcon && <Phone className="h-5 w-5" aria-hidden="true" />}
      <span className="font-semibold">{BUSINESS.phone}</span>
    </a>
  );
}
