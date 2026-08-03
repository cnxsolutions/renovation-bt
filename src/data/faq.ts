import { BUSINESS } from "@/lib/constants";

/**
 * Questions frequentes.
 *
 * Ces reponses sont republiees en JSON-LD `FAQPage` et reprises sur toutes les
 * pages ville et service : une phrase fausse ecrite ici est une phrase fausse
 * publiee des dizaines de fois. Trois regles, verifiees le 2026-08-03 :
 *
 *  1. AUCUNE aide financiere promise. `LEGAL.isRGE` vaut `false` (verifie a
 *     l'API ADEME sur le SIREN 524754280). MaPrimeRenov', les CEE et
 *     l'eco-PTZ exigent tous une entreprise RGE : promettre ces aides est une
 *     pratique commerciale trompeuse (C. conso. art. L121-2). Si l'entreprise
 *     obtient un jour une qualification RGE, c'est cette reponse qu'il faudra
 *     reecrire, apres avoir bascule `LEGAL.isRGE`.
 *  2. AUCUN delai garanti (« sous 2h », « sous 24h », « sous 1 semaine ») :
 *     rien ne les mesure et rien ne les tient.
 *  3. AUCUNE fourchette de prix non sourcee. Le devis ecrit est de toute
 *     facon obligatoire des le premier euro pour la couverture, la toiture et
 *     le demoussage (arrete du 24 janvier 2017) : c'est lui qui fait foi.
 *
 * Les horaires proviennent de `BUSINESS.hours`, aligne sur la fiche Google
 * (ferme le dimanche). Ne jamais reecrire « 7j/7 » : c'est faux.
 */

export interface FaqItem {
  question: string;
  answer: string;
}

const HOURS = BUSINESS.hours.toLowerCase();

// FAQ générales pour la Marne
export const faqItems: FaqItem[] = [
  {
    question: "Proposez-vous un devis gratuit ?",
    answer:
      "Oui, le devis est gratuit et sans engagement, et le déplacement pour l'établir l'est aussi. Pour les travaux de couverture, de toiture et de démoussage, un devis écrit vous est remis avant le début du chantier quel que soit le montant : c'est une obligation légale (arrêté du 24 janvier 2017). Il détaille les prestations, les matériaux et le prix à payer, et c'est ce document qui fait foi.",
  },
  {
    question: "Quelle est votre zone d'intervention ?",
    answer:
      "Nous intervenons principalement dans la Marne (51), avec Châlons-en-Champagne comme zone prioritaire. Nous couvrons également les communes proches : Saint-Memmie, Fagnières, Sarry, Courtisols, Suippes, Mourmelon-le-Grand, Reims, Épernay, Vitry-le-François et toute la Marne.",
  },
  {
    question: "Êtes-vous couvert par une garantie décennale ?",
    answer:
      "L'assurance décennale est obligatoire pour les travaux de couverture (article L241-1 du code des assurances) et l'attestation vous est remise avec le devis puis avec la facture, comme la loi l'impose (article L243-2). C'est ce document, et lui seul, qui prouve la couverture : il nomme l'assureur, le numéro de contrat, les activités garanties et la période de validité. Demandez-le, lisez-le, et vérifiez que l'activité prévue chez vous y figure. Nous ne publions pas d'attestation sur ce site : une attestation se vérifie sur l'original, auprès de l'assureur qui l'a émise.",
  },
  {
    question: "Quel est le prix moyen d'une réfection de toiture dans la Marne ?",
    answer:
      "Il n'y a pas de prix moyen honnête à annoncer avant d'avoir vu la toiture. Le montant dépend de la surface et de la pente, du type de couverture (tuile, ardoise, bac acier), de l'état de la charpente, de l'accès au chantier et de l'échafaudage nécessaire. Une fourchette au mètre carré affichée sans visite se révèle presque toujours fausse dans un sens ou dans l'autre. Nous venons voir la toiture, puis nous remettons un devis écrit, gratuit et détaillé poste par poste : c'est le seul chiffre qui engage les deux parties.",
  },
  {
    question: "Quels sont vos délais d'intervention ?",
    answer: `Nous n'annonçons pas de délai avant de connaître votre situation : il dépend des chantiers en cours, de la météo et de la nature de la demande. En revanche, la ligne est ouverte largement — nos horaires sont ceux affichés sur notre fiche Google : ${HOURS}, fermé le dimanche. Appelez, décrivez le problème, et nous vous dirons de vive voix quand nous pouvons passer. Pour un chantier planifié, le délai convenu est écrit sur le devis.`,
  },
  {
    question: "Réalisez-vous des travaux en hiver ?",
    answer:
      "Oui, nous intervenons toute l'année. Les hivers dans la Marne peuvent être rigoureux, c'est pourquoi nous répondons aussi aux demandes urgentes liées aux tempêtes ou au gel. Certains travaux de rénovation sont en revanche plus faciles à mener au printemps ou en automne, et nous vous le dirons franchement si votre chantier peut attendre.",
  },
  {
    question: "Comment se déroule un chantier de toiture à Châlons-en-Champagne ?",
    answer:
      "Un chantier type se déroule en quatre étapes : 1) visite de la toiture et remise d'un devis écrit et détaillé, 2) préparation du chantier et protection des abords, 3) réalisation des travaux, 4) nettoyage du chantier puis réception avec vous avant facturation. L'entreprise est artisanale : c'est le même interlocuteur du premier appel à la réception des travaux.",
  },
];

// FAQ spécifiques par ville (localisées Marne)
export const faqChalons: FaqItem[] = [
  {
    question: "Intervenez-vous rapidement à Châlons-en-Champagne ?",
    answer:
      "Nous sommes installés à Écury-sur-Coole, à une dizaine de kilomètres de Châlons-en-Champagne : le déplacement est court et ne mange pas la journée de travail. Nous préférons toutefois ne pas promettre de délai avant d'avoir entendu votre situation. Appelez-nous, décrivez ce qui se passe sur votre toiture, et nous vous dirons quand nous pouvons passer.",
  },
  {
    question: "Connaissez-vous les spécificités climatiques de la Marne ?",
    answer:
      "Absolument. La Marne connaît des hivers rigoureux avec des gelées fréquentes et des étés parfois orageux. Ces conditions imposent des toitures robustes et bien étanches. Nous adaptons nos techniques et nos matériaux à ces contraintes régionales, pour des toitures qui durent.",
  },
  {
    question: "Êtes-vous disponible le week-end ?",
    answer: `Le samedi, oui. Nos horaires sont ceux affichés sur notre fiche Google : ${HOURS}. Le dimanche, l'entreprise est fermée. Pour organiser une intervention le samedi, appelez-nous : nous conviendrons ensemble d'un créneau.`,
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
      "Le zinc offre une excellente durabilité (30-50 ans) et s'adapte à tous les styles architecturaux de la Marne. L'aluminium est plus léger et ne rouille jamais. Nous vous conseillons selon votre configuration et votre budget.",
  },
  {
    question: "Qu'est-ce qu'un solin et pourquoi est-il important ?",
    answer:
      "Le solin est la pièce de zinguerie qui assure l'étanchéité entre la toiture et les éléments maçonnés (cheminée, mur). Un solin défaillant cause des infiltrations. Nous posons des solins en zinc ou en plomb, adaptés au support et à la couverture.",
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
      "L'hydrofuge est un produit qui protège la toiture contre l'humidité en laissant respirer le matériau. Il empêche la pénétration de l'eau tout en conservant l'aspect naturel de vos tuiles ou ardoises. C'est un complément utile au démoussage pour une protection durable.",
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
      "Le préventif est recommandé pour les charpentes saines. Le curatif s'applique en présence d'insectes à larves xylophages (vrillettes, capricornes). Nous examinons votre charpente et vous préconisons le traitement le plus adapté.",
  },
];

export const faqVelux: FaqItem[] = [
  {
    question: "Peut-on installer un Velux sur une toiture existante à Châlons ?",
    answer:
      "Oui, l'installation d'un Velux est possible sur la plupart des toitures en pente. Nous créons l'ouverture, renforçons si nécessaire la charpente et traitons l'étanchéité au raccord avec la couverture. Créer une ouverture en toiture modifie l'aspect extérieur du bâtiment : une déclaration préalable de travaux en mairie est en général nécessaire, et nous pouvons vous aider à la préparer.",
  },
  {
    question: "Combien coûte la pose d'un Velux dans la Marne ?",
    answer:
      "Le prix dépend du modèle retenu (dimensions, type de vitrage, motorisation, volet), de la nature de la couverture et du travail de charpente et d'étanchéité que l'ouverture demande. Plutôt qu'une fourchette qui ne correspondrait pas à votre toiture, nous chiffrons le modèle choisi et sa pose dans un devis écrit et gratuit.",
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
