export const services = [
  {
    id: "toitures",
    title: "Toitures",
    features: ["Couverture", "Zinguerie", "Nettoyage hydrofuge", "Démoussage"],
    href: "/services#toitures",
    icon: "roof" as const,
  },
  {
    id: "facades",
    title: "Façades",
    features: ["Peinture", "Nettoyage", "Décapage", "Ravalement"],
    href: "/services#facades",
    icon: "facade" as const,
  },
  {
    id: "gouttieres",
    title: "Gouttières",
    features: ["Habillage PVC / Alu", "Nettoyage", "Réparation", "Remplacement"],
    href: "/services#gouttieres",
    icon: "gutter" as const,
  },
] as const;
