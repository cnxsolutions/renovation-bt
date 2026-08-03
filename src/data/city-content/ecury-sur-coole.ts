/**
 * Écury-sur-Coole (51240) — commune du siege.
 *
 * Page d'ancrage du NAP : l'adresse rendue ici est celle du siege, du registre
 * et de la fiche d'etablissement Google. Elle ne se recompose jamais.
 */
import type { CityContent } from "./types";

const ecurySurCoole: CityContent = {
  slug: "ecury-sur-coole",

  metaTitle: "Couvreur à Écury-sur-Coole (51240)",
  metaDescription:
    "Rénovation BT a son siège au 43 Bis Rue de Châlons-sur-Marne à Écury-sur-Coole (51240). Couverture, zinguerie, gouttières. Adresse, horaires, contact.",

  h1: "Couvreur à Écury-sur-Coole (51240)",

  intro: [
    "Écury-sur-Coole est la commune de notre siège : 43 Bis Rue de Châlons-sur-Marne, dans un village-rue de 492 habitants étiré le long de la Coole.",
    "Rénovation BT y exerce le métier de couvreur depuis 2010 : réfection et entretien de toitures, zinguerie, gouttières, démoussage et traitement hydrofuge, sur les maisons du bourg comme sur les corps de ferme et les dépendances de la vallée.",
    "Le déplacement et le devis sont gratuits. Vous parlez directement à l'artisan qui montera sur votre toit.",
  ],

  sections: [
    {
      titre: "Un couvreur installé dans le village",
      paragraphes: [
        "Le camion part d'ici. Écury-sur-Coole est un village-rue : le bâti s'étire le long de la RD 4, parallèlement à la rivière, sur des parcelles longues et profondes. Les maisons se voient depuis la route, les dépendances se cachent en fond de cour — et ce sont souvent elles qui prennent l'eau les premières.",
        "Remplacement de tuiles cassées, reprise de faîtage et de rives, réfection complète de couverture, gouttières, démoussage : le devis écrit est remis avant toute intervention, quel qu'en soit le montant, et il détaille les matériaux, les quantités et le prix.",
      ],
    },
    {
      titre: "L'église Saint-Alpin, le plus ancien toit du village",
      paragraphes: [
        "L'église Saint-Alpin a été bâtie d'un seul jet vers 1170-1180 : c'est la plus ancienne église gothique rurale du Châlonnais, apparentée dans son parti à Notre-Dame-en-Vaux de Châlons. Elle est montée en craie, en pierre de Faloise venue de Vertus et en pierre de Savonnières dans les reprises. Son clocher du XVIe siècle porte une flèche de bois dite flammée, qui s'affine fortement et vrille d'un huitième de tour, particularité rare dans la région.",
        "Une souscription a été ouverte en septembre 2025 pour traiter les infiltrations qui affectent le transept nord-est et le chœur au nord : examen de la charpente, protection provisoire, remplacement des tuiles dégradées. C'est très exactement la séquence que suit une couverture ancienne laissée sans surveillance.",
        "Sur le bâti du village, les mêmes causes produisent les mêmes effets. Une tuile fendue ou un solin ouvert laisse passer peu d'eau, mais il la laisse passer longtemps, et c'est la charpente qui finit par payer. Un contrôle après l'hiver reste l'intervention la moins coûteuse de toutes.",
      ],
    },
    {
      titre: "Dépendances, granges et bâtiments agricoles",
      paragraphes: [
        "Le territoire d'Écury-sur-Coole est agricole à près de 88 %, les zones urbanisées n'en occupant que 2,4 %. Le bâti ne se limite donc pas à la maison d'habitation : granges, appentis, hangars et abris de matériel ont eux aussi une couverture à entretenir, souvent de très grande surface d'un seul tenant, et rarement visitée avant qu'elle ne fuie.",
        "Ces toitures se traitent différemment d'une couverture en tuile : longues pannes, matériaux hétérogènes selon les campagnes de réfection successives, bacs acier et plaques ondulées, fixations à reprendre une à une, faîtages et rives à ré-étancher. L'accès et la sécurisation conditionnent le chiffrage autant que la surface, et se vérifient au relevé.",
      ],
    },
  ],

  batiEtCouverture: {
    titre: "Les toitures de la vallée de la Coole",
    paragraphes: [
      "Le village compte 210 logements, dont 99 % de maisons, et les deux tiers ont été construits après 1970. Le tiers restant est le bâti ancien : corps de ferme champenois, granges et dépendances, murs de craie et de pierre locale. Les deux parcs ne posent pas les mêmes questions — tuile mécanique et charpente récente d'un côté, petite tuile et charpente traditionnelle de l'autre.",
      "Le village est bâti en fond de vallée, sur des sols humides, entre 82 et 142 mètres d'altitude, et rien ne l'abrite : ni relief, ni bois. Le vent de la plaine crayeuse prend les toitures de plein fouet, et c'est lui qui fait l'essentiel de nos interventions ici — tuiles soulevées en rive, faîtages descellés, solins de souche ouverts.",
      "Les arbres qui bordent la Coole entretiennent par ailleurs l'humidité sur les versants nord, où la mousse s'installe vite et retient l'eau contre la tuile. Le démoussage, suivi d'un traitement hydrofuge, rétablit l'écoulement. C'est un entretien : il prolonge une couverture saine, il ne rattrape pas une toiture en fin de vie, et nous vous le disons quand c'est le cas.",
    ],
    materiaux: [
      {
        nom: "Tuile mécanique",
        texte:
          "Couverture dominante des maisons du village, bourg et périphérie. Remplacement à l'unité, reprise des rives et des faîtages, scellés ou posés à sec.",
      },
      {
        nom: "Tuile plate",
        texte:
          "Bâti ancien et dépendances du village. Petit format, forte pente, recouvrement important : la réparation demande d'ouvrir proprement le versant plutôt que d'y glisser une tuile.",
      },
      {
        nom: "Zinc",
        texte:
          "Gouttières pendantes, descentes, solins de cheminée. C'est le poste qui fuit en premier sur une maison de village, et le moins lourd à reprendre à temps.",
      },
      {
        nom: "Bac acier et plaques",
        texte:
          "Hangars, granges et abris de matériel. Reprise des fixations, remplacement de plaques, traitement des points de percement par où l'eau finit toujours par passer.",
      },
    ],
  },

  contraintes: [
    {
      titre: "Pas d'Architecte des Bâtiments de France à Écury-sur-Coole",
      texte:
        "La commune ne compte aucun immeuble classé ni inscrit au titre des monuments historiques. Le seul classement porte sur un objet, le Christ en croix du XIVe siècle conservé dans l'église, et un objet ne crée pas de périmètre d'abords. Les travaux de toiture ne passent donc pas par l'avis de l'Architecte des Bâtiments de France : une déclaration préalable en mairie suffit dès que l'aspect extérieur change.",
    },
    {
      titre: "Vent de plaine",
      texte:
        "Rien ne coupe le vent entre les champs et le village : ni relief, ni bois. Les rives, les faîtages et les tuiles de bordure sont les premiers points à contrôler après un coup de vent, et les premiers que nous renforçons en réfection. Un versant exposé plein ouest ne se traite pas comme un versant abrité.",
    },
    {
      titre: "Parcelles profondes et corps de ferme",
      texte:
        "Le village-rue a des parcelles longues, avec les dépendances en fond de cour et des accès parfois étroits ou encombrés. Nous vérifions au relevé où l'échafaudage peut se monter et où le camion peut se placer, avant de chiffrer. Sur une grange, c'est ce point qui pèse le plus sur le devis, avant même la surface à couvrir.",
    },
    {
      titre: "Eaux pluviales sur la parcelle",
      texte:
        "En fond de vallée, sur des sols déjà humides, les eaux de toiture sont le plus souvent infiltrées sur la parcelle plutôt que renvoyées au réseau. Le dimensionnement des gouttières et l'emplacement des descentes se règlent en conséquence, sinon c'est le pied de mur qui prend l'eau.",
    },
  ],

  faq: [
    {
      question: "Où se trouve exactement votre entreprise à Écury-sur-Coole ?",
      reponse:
        "Au 43 Bis Rue de Châlons-sur-Marne, 51240 Écury-sur-Coole. C'est l'adresse du siège, celle de notre fiche d'établissement Google et celle qui figure sur nos devis et nos factures. Le téléphone est le 07 61 54 53 43, du lundi au samedi.",
    },
    {
      question: "Faut-il une autorisation pour refaire une toiture à Écury-sur-Coole ?",
      reponse:
        "Une déclaration préalable se dépose en mairie dès que l'aspect extérieur change : matériau, teinte, forme, fenêtre de toit. En revanche, la commune ne comptant aucun immeuble classé ni inscrit, votre dossier ne passe pas par l'Architecte des Bâtiments de France, contrairement à ce qui s'applique sur une grande partie de Châlons. L'instruction en est d'autant plus simple. Nous vous indiquons au relevé ce qui s'applique à votre adresse.",
    },
    {
      question: "Intervenez-vous sur les bâtiments agricoles du village ?",
      reponse:
        "Oui : granges, dépendances, hangars et abris, en tuile comme en bac acier ou en plaques. Le relevé sur place précise la surface, l'état des fixations et les moyens d'accès nécessaires, et le devis en découle. Sur ces grandes couvertures d'un seul tenant, le dégagement et la sécurisation comptent autant que le matériau. Le déplacement pour établir ce devis est gratuit.",
    },
  ],

  distanceKm: 0,

  communesVoisines: [
    "coolus",
    "compertrix",
    "sarry",
    "saint-memmie",
    "chalons-en-champagne",
  ],
};

export default ecurySurCoole;
