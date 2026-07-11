export interface FaqItem {
  question: string;
  answer: string;
}

// FAQ générales pour la Marne
export const faqItems: FaqItem[] = [
  {
    question: "Proposez-vous un devis gratuit ?",
    answer:
      "Oui, nous proposons un devis 100% gratuit et sans engagement. Nous nous déplaçons gratuitement à Châlons-en-Champagne et dans toute la Marne pour évaluer vos besoins et vous fournir un devis détaillé sous 24h.",
  },
  {
    question: "Quelle est votre zone d'intervention ?",
    answer:
      "Nous intervenons principalement dans la Marne (51), avec Châlons-en-Champagne comme zone prioritaire. Nous couvrons également les communes proches : Saint-Memmie, Fagnières, Sarry, Courtisols, Suippes, Mourmelon-le-Grand, Reims, Épernay, Vitry-le-François et toute la Marne.",
  },
  {
    question: "Êtes-vous couvert par une garantie décennale ?",
    answer:
      "Oui, nous disposons d'une assurance garantie décennale qui couvre tous nos travaux pendant 10 ans. Cette garantie est obligatoire pour tous les travaux de couverture et protège votre investissement.",
  },
  {
    question: "Quel est le prix moyen d'une réfection de toiture dans la Marne ?",
    answer:
      "Le prix dépend de la surface, du type de couverture et de l'état de la charpente. À Châlons-en-Champagne et dans la Marne, comptez entre 150€ et 280€/m² pour une rénovation complète. Nous établissons un devis précis et gratuit après visite sur place.",
  },
  {
    question: "Quels sont vos délais d'intervention ?",
    answer:
      "Pour les urgences (fuite, dégât des eaux), nous intervenons sous 2h à Châlons-en-Champagne. Pour les travaux planifiés, le délai moyen est de 1 à 3 semaines selon la saison et l'ampleur du chantier.",
  },
  {
    question: "Réalisez-vous des travaux en hiver ?",
    answer:
      "Oui, nous intervenons toute l'année. Les hivers dans la Marne peuvent être rigoureux, c'est pourquoi nous sommes disponibles pour les interventions d'urgence liées aux tempêtes ou au gel. Certains travaux de rénovation sont idéalement réalisés au printemps ou en automne.",
  },
  {
    question: "Existe-t-il des aides financières pour les travaux de toiture ?",
    answer:
      "Oui, plusieurs aides existent : MaPrimeRénov' pour l'isolation de toiture, l'éco-prêt à taux zéro, la TVA réduite à 5,5% pour les travaux d'amélioration énergétique. Nous vous accompagnons dans vos démarches pour bénéficier des aides auxquelles vous êtes éligible.",
  },
  {
    question: "Comment se déroule un chantier de toiture à Châlons-en-Champagne ?",
    answer:
      "Un chantier type se déroule en 4 étapes : 1) Visite technique gratuite et devis détaillé, 2) Préparation du chantier avec protection de votre propriété, 3) Réalisation des travaux par notre équipe qualifiée, 4) Nettoyage complet et réception des travaux avec vous.",
  },
];

// FAQ spécifiques par ville (localisées Marne)
export const faqChalons: FaqItem[] = [
  {
    question: "Intervenez-vous rapidement à Châlons-en-Champagne ?",
    answer:
      "Oui, depuis notre base à Écury-sur-Coole (à 10 km de Châlons), nous pouvons intervenir sous 2h pour les urgences. Pour les travaux planifiés, nous organisons le chantier selon vos disponibilités, généralement sous 1 semaine.",
  },
  {
    question: "Connaissez-vous les spécificités climatiques de la Marne ?",
    answer:
      "Absolument. La Marne connaît des hivers rigoureux avec des gelées fréquentes et des étés parfois orageux. Ces conditions imposent des toitures robustes avec une bonne étanchéité. Nous adaptons nos techniques et matériaux aux spécificités régionales pour garantir des toitures durables.",
  },
  {
    question: "Êtes-vous disponible le week-end ?",
    answer:
      "Pour les interventions urgentes, nous sommes disponibles 7j/7. Pour les chantiers planifiés, nous pouvons organiser des interventions le samedi matin sur demande. Contactez-nous pour discuter de vos besoins.",
  },
];

// FAQ spécifiques par service
export const faqZinguerie: FaqItem[] = [
  {
    question: "Quand faut-il rénover sa zinguerie dans la Marne ?",
    answer:
      "Une zinguerie doit être rénovée tous les 20-30 ans selon le matériau. Les signes d'alerte : gouttières rouillées, fuites au niveau des solins, eau qui stagne. Les hivers rigoureux de la Marne accélèrent parfois l'usure.",
  },
  {
    question: "Gouttières zinc ou aluminium : que choisir ?",
    answer:
      "Le zinc offre une excellente durabilité (30-50 ans) et s'adapte à tous les styles architecturaux de la Marne. L'aluminium est plus léger et ne rouille jamais. Nous vous conseillions selon votre configuration et votre budget.",
  },
  {
    question: "Qu'est-ce qu'un solin et pourquoi est-il important ?",
    answer:
      "Le solin est la pièce de zinguerie qui assure l'étanchéité entre la toiture et les éléments maçonnés (cheminée, mur). Un solin défaillant cause des infiltrations. Nous utilisons des solins en zinc ou en plomb pour une étanchéité parfaite.",
  },
];

export const faqDemoussage: FaqItem[] = [
  {
    question: "À quelle fréquence nettoyer sa toiture dans la Marne ?",
    answer:
      "Nous recommandons un nettoyage de toiture tous les 5-10 ans selon l'exposition et la végétation environnante. Les mousses et lichens se développent plus facilement dans notre climat humide. Un démoussage régulier préserve l'étanchéité et prolonge la durée de vie de votre couverture.",
  },
  {
    question: "Le démoussage risque-t-il d'abîmer ma toiture ?",
    answer:
      "Non, si c'est fait correctement par des professionnels. Nous utilisons des produits professionnels doux et une pression adaptée à chaque matériau (tuiles, ardoises). Un démoussage mal fait peut endommager les tuiles, c'est pourquoi il faut faire appel à des couvreurs qualifiés.",
  },
  {
    question: "Qu'est-ce que le traitement hydrofuge ?",
    answer:
      "L'hydrofuge est un produit qui protège la toiture contre l'humidité en laissant respirer le matériau. Il empêche la pénétration de l'eau tout en conservant l'aspect naturel de vos tuiles ou ardoises. C'est un complément idéal au démoussage pour une protection durable.",
  },
];

export const faqCharpente: FaqItem[] = [
  {
    question: "Comment savoir si ma charpente a besoin d'un traitement ?",
    answer:
      "Les signes d'une charpente à traiter : bois qui sonne creux, sciure au sol, poutres déformées, traces d'humidité ou de moisissures. Un traitement préventif est recommandé tous les 10-15 ans pour protéger votre structure.",
  },
  {
    question: "Traitement préventif ou curatif pour la charpente ?",
    answer:
      "Le préventif est recommandé pour les charpentes saines. Le curatif s'applique en présence d'insectes à larves xylophages (vrillettes, capricornes). Nous diagnostiiquons votre charpente et vous préconisons le traitement le plus adapté.",
  },
];

export const faqVelux: FaqItem[] = [
  {
    question: "Peut-on installer un Velux sur une toiture existante à Châlons ?",
    answer:
      "Oui, l'installation d'un Velux est possible sur la plupart des toitures en pente. Nous créons l'ouverture, renforçons si nécessaire la charpente et assurons une étanchéité parfaite. Nous nous occupons également des démarches administratives si besoin.",
  },
  {
    question: "Combien coûte la pose d'un Velux dans la Marne ?",
    answer:
      "Le prix d'un Velux pose comprise varie selon la taille et le modèle (standard, confort, ENERGY). Comptez entre 800€ et 2500€ selon les options. Nous vous accompagnons dans le choix du modèle adapté à vos besoins et à votre budget.",
  },
];

// Fonction pour récupérer les FAQ selon le contexte
export function getFaqForPage(type: "general" | "city" | "service", citySlug?: string, serviceSlug?: string): FaqItem[] {
  const baseFaq = [...faqItems];

  if (type === "city" && citySlug) {
    if (citySlug.includes("chalons") || citySlug.includes("ecury")) {
      baseFaq.push(...faqChalons);
    }
  }

  if (type === "service" && serviceSlug) {
    if (serviceSlug.includes("zingueur") || serviceSlug.includes("gouttiere")) {
      baseFaq.push(...faqZinguerie);
    }
    if (serviceSlug.includes("demoussage") || serviceSlug.includes("nettoyage")) {
      baseFaq.push(...faqDemoussage);
    }
    if (serviceSlug.includes("charpente")) {
      baseFaq.push(...faqCharpente);
    }
    if (serviceSlug.includes("velux") || serviceSlug.includes("fenetre")) {
      baseFaq.push(...faqVelux);
    }
  }

  return baseFaq;
}
