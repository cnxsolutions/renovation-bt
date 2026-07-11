// Configuration des pages SEO
// Chaque entrée définit une page optimisée pour le référencement

export interface SeoPageConfig {
  slug: string;
  type: "city" | "service-city" | "main-city";
  citySlug?: string;
  serviceSlug?: string;
  title: string;
  description: string;
  h1: string;
  subtitle?: string;
  keywords: string[];
  priority: number; // Pour le sitemap (1.0 =最高)
}

export const seoPages: SeoPageConfig[] = [
  // ============================================
  // PAGES VILLES PRIMAIRES (Marne 51)
  // ============================================
  {
    slug: "couvreur-chalons-en-champagne",
    type: "main-city",
    citySlug: "chalons-en-champagne",
    title: "Couvreur à Châlons-en-Champagne | Toiture, Zinguerie, Démoussage",
    description:
      "Artisan couvreur à Châlons-en-Champagne (51000). Rénovation BT intervient pour tous vos travaux de toiture, zinguerie et démoussage. Devis gratuit sous 24h.",
    h1: "Couvreur à Châlons-en-Champagne",
    subtitle: "Toiture, Zinguerie, Démoussage",
    keywords: [
      "couvreur Châlons-en-Champagne",
      "couvreur 51000",
      "toiture Châlons",
      "zingueur Marne",
      "démoussage toiture Marne",
    ],
    priority: 1.0,
  },
  {
    slug: "couvreur-saint-memmie",
    type: "city",
    citySlug: "saint-memmie",
    title: "Couvreur à Saint-Memmie | Artisan Toiture & Zinguerie",
    description:
      "Couvreur à Saint-Memmie (51470). Intervention rapide pour rénovation toiture, gouttières et démoussage. Basé à Écury-sur-Coole, près de Saint-Memmie.",
    h1: "Couvreur à Saint-Memmie",
    subtitle: "Toiture, Zinguerie, Démoussage",
    keywords: ["couvreur Saint-Memmie", "toiture Saint-Memmie", "zingueur Saint-Memmie"],
    priority: 0.8,
  },
  {
    slug: "couvreur-fagnieres",
    type: "city",
    citySlug: "fagnieres",
    title: "Couvreur à Fagnières | Artisan Couverture Marne",
    description:
      "Artisan couvreur à Fagnières (51510). Rénovation BT intervient pour vos travaux de toiture, zinguerie et entretien. Devis gratuit.",
    h1: "Couvreur à Fagnières",
    subtitle: "Toiture, Zinguerie, Démoussage",
    keywords: ["couvreur Fagnières", "toiture Fagnières", "charpentier Marne"],
    priority: 0.8,
  },
  {
    slug: "couvreur-sarry",
    type: "city",
    citySlug: "sarry",
    title: "Couvreur à Sarry | Artisan Toiture Marne (51)",
    description:
      "Couvreur à Sarry (51520). Rénovation BT, artisan couvreur près de Châlons-en-Champagne. Toiture, gouttières, démoussage.",
    h1: "Couvreur à Sarry",
    subtitle: "Toiture, Zinguerie, Démoussage",
    keywords: ["couvreur Sarry", "toiture Sarry Marne", "zingueur Marne"],
    priority: 0.8,
  },
  {
    slug: "couvreur-courtisols",
    type: "city",
    citySlug: "courtisols",
    title: "Couvreur à Courtisols | Artisan Toiture Marne",
    description:
      "Couvreur à Courtisols (51460). Intervention pour rénovation toiture, gouttières et entretien. Basé à Écury-sur-Coole.",
    h1: "Couvreur à Courtisols",
    subtitle: "Toiture, Zinguerie, Démoussage",
    keywords: ["couvreur Courtisols", "toiture Marne", "démoussage Courtisols"],
    priority: 0.7,
  },
  {
    slug: "couvreur-suippes",
    type: "city",
    citySlug: "suippes",
    title: "Couvreur à Suippes | Artisan Couverture Marne",
    description:
      "Couvreur à Suippes (51600). Rénovation BT intervient pour vos travaux de toiture, charpente et zinguerie.",
    h1: "Couvreur à Suippes",
    subtitle: "Toiture, Zinguerie, Charpente",
    keywords: ["couvreur Suippes", "toiture Suippes", "charpentier Marne"],
    priority: 0.7,
  },
  {
    slug: "couvreur-mourmelon-le-grand",
    type: "city",
    citySlug: "mourmelon-le-grand",
    title: "Couvreur à Mourmelon-le-Grand | Artisan Toiture Marne",
    description:
      "Couvreur à Mourmelon-le-Grand (51400). Rénovation BT - artisan couvreur près de Châlons. Rénovation, entretien, réparation.",
    h1: "Couvreur à Mourmelon-le-Grand",
    subtitle: "Toiture, Zinguerie, Démoussage",
    keywords: ["couvreur Mourmelon", "toiture Mourmelon", "zingueur 51"],
    priority: 0.7,
  },
  {
    slug: "couvreur-reims",
    type: "city",
    citySlug: "reims",
    title: "Couvreur à Reims | Artisan Toiture Marne (51)",
    description:
      "Couvreur à Reims (51100). Rénovation BT intervient pour tous travaux de toiture, ravalement façade et gouttières.",
    h1: "Couvreur à Reims",
    subtitle: "Toiture, Façade, Gouttières",
    keywords: ["couvreur Reims", "toiture Reims", "zingueur Reims", "charpentier Reims"],
    priority: 0.9,
  },
  {
    slug: "couvreur-epernay",
    type: "city",
    citySlug: "epernay",
    title: "Couvreur à Épernay | Artisan Couverture Marne",
    description:
      "Couvreur à Épernay (51200). Rénovation BT pour rénovation toiture, démoussage et zinguerie. Devis gratuit.",
    h1: "Couvreur à Épernay",
    subtitle: "Toiture, Zinguerie, Démoussage",
    keywords: ["couvreur Épernay", "toiture Épernay", "zingueur Champagne"],
    priority: 0.8,
  },
  {
    slug: "couvreur-vitry-le-francois",
    type: "city",
    citySlug: "vitry-le-francois",
    title: "Couvreur à Vitry-le-François | Artisan Toiture Marne",
    description:
      "Couvreur à Vitry-le-François (51300). Intervention rapide pour toiture, gouttières, démoussage. Devis gratuit.",
    h1: "Couvreur à Vitry-le-François",
    subtitle: "Toiture, Zinguerie, Démoussage",
    keywords: ["couvreur Vitry-le-François", "toiture Vitry", "zingueur Marne"],
    priority: 0.8,
  },

  // ============================================
  // PAGES SERVICES + VILLE (Châlons)
  // ============================================
  {
    slug: "zingueur-chalons-en-champagne",
    type: "service-city",
    citySlug: "chalons-en-champagne",
    serviceSlug: "zingueur",
    title: "Zingueur à Châlons-en-Champagne | Gouttières, Solins, Noues",
    description:
      "Zingueur à Châlons-en-Champagne. Rénovation BT pose et répare gouttières zinc, aluminium, PVC. Solins, chéneaux, habillage de rive.",
    h1: "Zingueur à Châlons-en-Champagne",
    subtitle: "Gouttières, Solins, Noues",
    keywords: [
      "zingueur Châlons",
      "gouttières Châlons",
      "pose gouttière zinc Marne",
      "solins toiture",
    ],
    priority: 0.9,
  },
  {
    slug: "demoussage-toiture-chalons",
    type: "service-city",
    citySlug: "chalons-en-champagne",
    serviceSlug: "demoussage",
    title: "Démoussage Toiture à Châlons-en-Champagne | Traitement Anti-Mousse",
    description:
      "Démoussage toiture à Châlons-en-Champagne. Rénovation BT nettoie et traite votre toiture. Anti-mousse, hydrofuge, nettoyage professionnel.",
    h1: "Démoussage Toiture à Châlons-en-Champagne",
    subtitle: "Nettoyage & Traitement Anti-Mousse",
    keywords: [
      "démoussage toiture Châlons",
      "nettoyage toiture Marne",
      "anti mousse toiture",
      "hydrofuge tuiles",
    ],
    priority: 0.8,
  },
  {
    slug: "nettoyage-toiture-chalons",
    type: "service-city",
    citySlug: "chalons-en-champagne",
    serviceSlug: "nettoyage",
    title: "Nettoyage Toiture à Châlons-en-Champagne | Professionnel",
    description:
      "Nettoyage toiture professionnel à Châlons-en-Champagne. Rénovation BT utilise des techniques douces et efficaces pour nettoyer votre toiture.",
    h1: "Nettoyage Toiture à Châlons-en-Champagne",
    subtitle: "Nettoyage Professionnel & Durable",
    keywords: ["nettoyage toiture Châlons", "nettoyeur toiture Marne", "entretien toiture"],
    priority: 0.8,
  },
  {
    slug: "gouttieres-chalons",
    type: "service-city",
    citySlug: "chalons-en-champagne",
    serviceSlug: "gouttieres",
    title: "Gouttières à Châlons-en-Champagne | Pose, Remplacement, Réparation",
    description:
      "Pose et réparation gouttières à Châlons-en-Champagne. Zinc, aluminium, PVC. Rénovation BT - artisan zingueur certifié.",
    h1: "Gouttières à Châlons-en-Champagne",
    subtitle: "Pose, Remplacement, Réparation",
    keywords: [
      "pose gouttière Châlons",
      "réparation gouttière Marne",
      "gouttière zinc alu",
      "descente EP",
    ],
    priority: 0.8,
  },
  {
    slug: "charpente-chalons",
    type: "service-city",
    citySlug: "chalons-en-champagne",
    serviceSlug: "charpente",
    title: "Charpente à Châlons-en-Champagne | Traitement & Rénovation",
    description:
      "Charpentier à Châlons-en-Champagne. Rénovation BT traite et rénove votre charpente. Traitement préventif et curatif insectes xylophages.",
    h1: "Charpente à Châlons-en-Champagne",
    subtitle: "Traitement, Rénovation, Création",
    keywords: [
      "charpentier Châlons",
      "traitement charpente Marne",
      "rénovation charpente",
      "charpente bois",
    ],
    priority: 0.8,
  },
  {
    slug: "hydrofuge-toiture-chalons",
    type: "service-city",
    citySlug: "chalons-en-champagne",
    serviceSlug: "hydrofuge",
    title: "Hydrofuge Toiture à Châlons | Traitement Imperméabilisant",
    description:
      "Traitement hydrofuge toiture à Châlons-en-Champagne. Rénovation BT applique un hydrofuge coloré ou incolore pour protéger votre toiture.",
    h1: "Hydrofuge Toiture à Châlons-en-Champagne",
    subtitle: "Traitement Imperméabilisant & Protecteur",
    keywords: [
      "hydrofuge toiture Châlons",
      "traitement hydrofuge Marne",
      "imperméabiliser toiture",
      "hydrofuge coloré",
    ],
    priority: 0.7,
  },
  {
    slug: "velux-chalons",
    type: "service-city",
    citySlug: "chalons-en-champagne",
    serviceSlug: "velux",
    title: "Velux & Fenêtre de Toit à Châlons-en-Champagne | Pose & Remplacement",
    description:
      "Pose de Velux et fenêtres de toit à Châlons-en-Champagne. Rénovation BT installe et remplace vos velux avec garantie étanchéité.",
    h1: "Velux & Fenêtre de Toit à Châlons-en-Champagne",
    subtitle: "Pose, Remplacement, Rénovation",
    keywords: [
      "pose velux Châlons",
      "fenêtre de toit Marne",
      "installation velux",
      "remplacement velux",
    ],
    priority: 0.7,
  },
  {
    slug: "reparation-fuite-toiture-chalons",
    type: "service-city",
    citySlug: "chalons-en-champagne",
    serviceSlug: "reparation",
    title: "Réparation Fuite Toiture à Châlons-en-Champagne | Urgence 24h/24",
    description:
      "Réparation fuite toiture à Châlons-en-Champagne. Intervention rapide 24h/24 pour stopper les infiltrations. Rénovation BT intervient en urgence.",
    h1: "Réparation Fuite Toiture à Châlons-en-Champagne",
    subtitle: "Intervention Urgente 24h/24",
    keywords: [
      "réparation fuite toiture Châlons",
      "urgence couvreur Marne",
      "infiltration toit",
      "réparation urgente",
    ],
    priority: 0.8,
  },
  {
    slug: "ravalement-facade-chalons",
    type: "service-city",
    citySlug: "chalons-en-champagne",
    serviceSlug: "ravalement",
    title: "Ravalement Façade à Châlons-en-Champagne | Peinture & Nettoyage",
    description:
      "Ravalement de façade à Châlons-en-Champagne. Rénovation BT nettoie, peint et rénove vos façades. Traitement hydrofuge façade inclus.",
    h1: "Ravalement Façade à Châlons-en-Champagne",
    subtitle: "Peinture, Nettoyage, Traitement",
    keywords: [
      "ravalement façade Châlons",
      "peinture extérieure Marne",
      "nettoyage façade",
      "traitement façade",
    ],
    priority: 0.7,
  },
  {
    slug: "isolation-combles-chalons",
    type: "service-city",
    citySlug: "chalons-en-champagne",
    serviceSlug: "isolation",
    title: "Isolation Combles à Châlons-en-Champagne | Laine de Verre, Rohacell",
    description:
      "Isolation des combles à Châlons-en-Champagne. Rénovation BT isole vos combles perdus ou aménageables. Économies d'énergie garanties.",
    h1: "Isolation Combles à Châlons-en-Champagne",
    subtitle: "Isolation Thermique & Acoustique",
    keywords: [
      "isolation combles Châlons",
      "isolation toiture Marne",
      "laine de verre combles",
      "isolation grenier",
    ],
    priority: 0.7,
  },
];

// Fonction pour récupérer une page SEO par slug
export function getSeoPage(slug: string): SeoPageConfig | undefined {
  return seoPages.find((page) => page.slug === slug);
}

// Fonction pour récupérer les pages par type
export function getSeoPagesByType(type: SeoPageConfig["type"]): SeoPageConfig[] {
  return seoPages.filter((page) => page.type === type);
}

// Fonction pour récupérer les pages principales (priorité >= 0.9)
export function getMainSeoPages(): SeoPageConfig[] {
  return seoPages.filter((page) => page.priority >= 0.9);
}
