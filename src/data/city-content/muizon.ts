/**
 * Muizon (51140).
 *
 * Convention de redaction : voir ./types.ts, et ./chalons-en-champagne.ts
 * comme fichier de reference.
 */
import type { CityContent } from "./types";

const muizon: CityContent = {
  slug: "muizon",

  metaTitle: "Couvreur à Muizon (51140) — toiture",
  metaDescription:
    "Rénovation BT, couvreur établi à Écury-sur-Coole depuis 2010 : réfection de toiture, tuile, zinguerie, gouttières et démoussage à Muizon. Devis gratuit.",

  h1: "Couvreur à Muizon (51140)",

  /** 2 a 3 paragraphes. intro[0] est rendu sous le H1, dans l'en-tete sombre. */
  intro: [
    "Muizon a été relevé après 1918, dans la vallée de la Vesle. Un siècle plus tard, le centre du village porte toujours la tuile mécanique de sa reconstruction.",
    "Rénovation BT est une entreprise artisanale de couverture installée à Écury-sur-Coole depuis 2010. Nous intervenons à Muizon sur la réfection et l'entretien des toitures, la zinguerie, les gouttières, le démoussage et le traitement hydrofuge.",
    "Le parc bâti y est d'une homogénéité rare : 927 logements en 2020, dont 92,3 % de maisons individuelles, et 70,4 % d'habitants propriétaires de leur logement contre 51,8 % dans la Marne. Ce sont des chantiers de particuliers, sans syndic ni bailleur. Le déplacement et le devis sont gratuits.",
  ],

  /** { titre, paragraphes: string[] } — le corps redige. */
  sections: [
    {
      titre: "Une couverture centenaire : la tuile de la Reconstruction",
      paragraphes: [
        "Le village a été considéré comme détruit à la fin de la Première Guerre mondiale et décoré de la Croix de guerre le 30 mai 1921. Le bâti ancien du centre procède donc, pour l'essentiel, de la reconstruction des années 1920 ; la gare de 1862, dont le bâtiment avait été détruit, a elle aussi été relevée à ce moment-là.",
        "La couverture de cette période, c'est la tuile mécanique à emboîtement, standard de la Marne rebâtie après 1918. Elle arrive aujourd'hui au bout de son service, et surtout elle y arrive partout en même temps : liteaux, fixations, solins, rives et faîtages ont le même âge que la tuile, à la rue près.",
        "C'est ce qui sépare une réparation d'une réfection sur ces maisons. Remplacer quelques tuiles gélives sur un support en fin de vie ne fait que déplacer le problème d'un versant à l'autre. Nous ouvrons une partie du versant pour voir l'état des liteaux et de la charpente avant de proposer l'un ou l'autre, et le devis dit clairement lequel.",
      ],
    },
    {
      titre: "Les lotissements des années 1970 à 1990",
      paragraphes: [
        "Autour du centre, les lotissements portent l'essentiel des 92,3 % de maisons individuelles de la commune. On y trouve la tuile béton et l'ardoise en fibres-ciment, sur des charpentes industrialisées à fermettes, plus légères et moins tolérantes que les charpentes traditionnelles du bourg.",
        "Ces maisons occupent des positions plus dégagées que le fond de vallée, sur les hauts du village — le territoire s'étage entre 67 et 111 mètres d'altitude. Les rives, les tuiles de bordure et les faîtages y prennent le vent de plein fouet, et ce sont les premiers points à contrôler après un coup de vent.",
        "Les désordres s'y répètent d'une maison à l'autre, parce que les pentes, les accessoires et les modèles de tuile sont les mêmes sur toute une rue. C'est aussi ce qui rend le remplacement à l'unité possible tant que le support est sain.",
      ],
    },
    {
      titre: "Zone d'activité et anciens bâtiments d'usine",
      paragraphes: [
        "Muizon n'est pas seulement résidentiel : 6,4 % du territoire est occupé par des zones d'activité. La zone industrielle a été créée dans les années 1970 sur des emprises ferroviaires abandonnées — la gare, inaugurée le 16 avril 1862 sur la ligne de Soissons à Givet, avait aligné des kilomètres de quais qui servirent au transbordement vers le front. Une filature de laine bâtie en 1923-1924, plus tard convertie en usine de récupération du caoutchouc, complète cet héritage industriel.",
        "Sur ces bâtiments, la couverture est en bac acier ou en plaques ondulées, en grandes longueurs d'un seul tenant. Les postes n'ont rien à voir avec ceux d'une maison : fixations à reprendre une à une, recouvrements, plaques translucides, faîtages et rives à ré-étancher, points de percement à traiter.",
        "L'accès y pèse autant que la surface. Le trafic lourd de la zone et la proximité de l'A4, qui traverse le territoire, conditionnent le placement du camion, de la benne et des moyens d'élévation. Ces points se règlent au relevé, avant le chiffrage.",
      ],
    },
  ],

  batiEtCouverture: {
    titre: "Les toits de Muizon, entre Vesle et forêt",
    paragraphes: [
      "Muizon occupe 7,15 km² en vallée de la Vesle, entre 67 et 111 mètres d'altitude. L'occupation du sol est parlante pour un couvreur : 46,6 % de terres arables, 20,7 % de forêt, 11,7 % de zones urbanisées et 6,4 % de zones d'activité.",
      "Fond de vallée humide et bois à proximité, c'est la combinaison qui fait la mousse. Elle s'installe d'abord sur les versants nord, retient l'eau contre la tuile, et charge les gouttières de feuilles à chaque automne. Le démoussage suivi d'un traitement hydrofuge rétablit l'écoulement : c'est un entretien, il prolonge une couverture saine, il ne rattrape pas une toiture en fin de vie, et nous vous le disons quand c'est le cas.",
      "Le parc est presque entièrement en toiture inclinée à deux pentes : 92,3 % de maisons contre 7,4 % d'appartements, 95,9 % de résidences principales et seulement 0,3 % de résidences secondaires, dix fois moins que la moyenne nationale. Peu d'ardoise naturelle, peu de collectif : les travaux se décident directement avec le propriétaire occupant.",
    ],
    materiaux: [
      {
        nom: "Tuile mécanique à emboîtement",
        texte:
          "Couverture du centre reconstruit dans les années 1920, aujourd'hui centenaire. Support et accessoires ont le même âge que la tuile : la reprise ponctuelle ne se justifie que si les liteaux tiennent encore.",
      },
      {
        nom: "Tuile béton",
        texte:
          "Lotissements des années 1970 à 1990, sur charpentes à fermettes. Remplacement à l'unité tant que le modèle se retrouve, puis reprise des rives et des faîtages exposés au vent.",
      },
      {
        nom: "Ardoise en fibres-ciment",
        texte:
          "Présente sur une partie des pavillons de la même période. Pose au crochet, remplacement pièce à pièce, vigilance sur les fixations en bas de versant.",
      },
      {
        nom: "Bac acier et plaques ondulées",
        texte:
          "Zone industrielle des années 1970 et anciens bâtiments d'usine. Grandes longueurs, fixations et recouvrements à reprendre, percements à ré-étancher.",
      },
    ],
  },

  /** { titre, texte } — contraintes concretes de chantier. */
  contraintes: [
    {
      titre: "Aucun périmètre de monument historique à Muizon",
      texte:
        "La commune ne compte aucun immeuble protégé au titre des monuments historiques : elle ne figure pas dans la liste des immeubles protégés de la Marne. Il n'y a donc ni périmètre d'abords ni avis d'Architecte des Bâtiments de France à obtenir pour une toiture. Restent les règles d'urbanisme communales et la déclaration préalable en mairie, à déposer dès que l'aspect extérieur change : matériau, teinte, forme, fenêtre de toit.",
    },
    {
      titre: "Le clocher-mur de l'église",
      texte:
        "L'église conserve des éléments du XIIIe siècle et une particularité rare dans la région : au lieu de la tour en bâtière prévue à la croisée du transept, elle porte un clocher-mur, sur le pignon qui sépare la nef du transept. Un pignon ajouré de ce type commande des solins, des rives et des raccords propres à lui. La même logique vaut sur les pignons découverts du bourg : c'est au raccord entre la maçonnerie et le versant que l'eau entre en premier.",
    },
    {
      titre: "Fond de vallée humide",
      texte:
        "Le village est bâti dans la vallée de la Vesle, sur des terrains humides, et le territoire comporte des zones humides intérieures. L'humidité entretient la mousse sur les versants nord et accélère la corrosion des accessoires métalliques et des fixations. La ventilation de la sous-toiture et l'état des gouttières se contrôlent au même titre que la tuile elle-même.",
    },
    {
      titre: "Accès : A4, trafic de zone et rues du bourg",
      texte:
        "L'autoroute A4 traverse le territoire et la zone d'activité génère du trafic lourd : sur ces secteurs, le placement du camion, de la benne et des moyens d'élévation se prépare à l'avance. Dans le centre reconstruit, ce sont plutôt les rues étroites et le stationnement qui commandent le montage de l'échafaudage. Le relevé sur place tranche ces points avant le chiffrage.",
    },
  ],

  /** { question, reponse } — propre a la commune, jamais la FAQ generale. */
  faq: [
    {
      question: "Faut-il l'avis de l'Architecte des Bâtiments de France pour refaire un toit à Muizon ?",
      reponse:
        "Non. Aucun immeuble de la commune n'est protégé au titre des monuments historiques, l'église comprise : il n'existe donc pas de périmètre d'abords sur le territoire, contrairement à Bezannes ou à Bétheny, où le village ancien est entièrement couvert par celui d'une église classée. À Muizon, une déclaration préalable en mairie suffit dès que l'aspect extérieur de la toiture change, et ce sont les règles d'urbanisme communales qui s'appliquent. L'instruction en est d'autant plus simple.",
    },
    {
      question: "Ma maison date de la reconstruction des années 1920 : réparation ou réfection ?",
      reponse:
        "La question se pose dans tout le centre de Muizon, parce que le village a été relevé d'un bloc après 1918 : la tuile mécanique, les liteaux, les solins et les fixations ont tous à peu près cent ans. Tant que le support est sain, le remplacement de tuiles et la reprise des points singuliers tiennent. Quand les liteaux cèdent sous le pied ou que les fixations n'ont plus de prise, une réparation ne passe pas l'hiver. Nous ouvrons une partie du versant au relevé pour trancher, et le devis distingue les deux solutions.",
    },
    {
      question: "Pourquoi mes gouttières se remplissent-elles si vite à Muizon ?",
      reponse:
        "Parce que la forêt occupe 20,7 % du territoire communal et que le village est bâti en fond de vallée. Feuilles à l'automne, humidité toute l'année : les gouttières se chargent, la mousse s'installe sur les versants nord, et l'eau stagne au lieu de s'évacuer. Un nettoyage des gouttières et des descentes, complété si nécessaire par un démoussage et un traitement hydrofuge, rétablit l'écoulement. Des crapaudines en tête de descente et un dimensionnement correct des sections espacent nettement les interventions.",
    },
  ],

  /** Distance approximative depuis le siege d'Écury-sur-Coole, arrondie. */
  distanceKm: 45,

  communesVoisines: [
    "tinqueux",
    "reims",
    "betheny",
    "bezannes",
  ],
};

export default muizon;
