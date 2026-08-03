/**
 * Somme-Vesle (51460).
 *
 * Convention de redaction : voir ./types.ts, et ./chalons-en-champagne.ts
 * comme fichier de reference.
 */
import type { CityContent } from "./types";

const sommeVesle: CityContent = {
  slug: "somme-vesle",

  metaTitle: "Couvreur à Somme-Vesle (51460) — toiture",
  metaDescription:
    "Rénovation BT, couvreur établi à Écury-sur-Coole, intervient à Somme-Vesle : toiture de maison et de corps de ferme, tuile, hangar, zinguerie. Devis gratuit.",

  h1: "Couvreur à Somme-Vesle (51460)",

  intro: [
    "Somme-Vesle est un village de plein champ : 96,4 % de son territoire est en terres arables, moins de 1 % est bâti, et le village se prolonge en trois écarts — l'Étang, la Grande Romanie et Sébastopol.",
    "Rénovation BT est une entreprise artisanale de couverture installée à Écury-sur-Coole depuis 2010. Nous intervenons à Somme-Vesle sur la maison de village comme sur le corps de ferme : réfection et entretien de toiture, remplacement de tuiles, zinguerie, gouttières et descentes, démoussage et traitement hydrofuge.",
    "Ici, l'essentiel des mètres carrés couverts n'est pas sur les habitations mais sur les granges et les hangars. Le déplacement et le devis sont gratuits : c'est l'artisan qui monte sur le toit qui relève, chiffre et exécute.",
  ],

  sections: [
    {
      titre: "Le bâti de craie de Somme-Vesle et ce qu'il impose en couverture",
      paragraphes: [
        "Somme-Vesle est bâtie avec ce que le sol donne à cet endroit de la Champagne crayeuse : moellon de craie irrégulier tiré de petites carrières villageoises, complété de fragments de brique, de grès et de silex, hourdé au mortier de craie et enduit à la chaux. Les enduits clairs, beige à terre, qui donnent au village sa couleur, se sont généralisés au XIXe siècle.",
        "Contrairement aux villages du front situés vingt-cinq à trente kilomètres plus au nord, Somme-Vesle n'a pas été détruite en 1914-1918. Elle n'a pas été relevée en bloc dans les années 1920 : son bâti ancien est toujours en place, avec ses murs d'origine.",
        "Cela change la façon de travailler. La craie est tendre et gélive, le mortier de chaux est souple : un scellement de solin, une fixation en pied de souche ou un ancrage de crochet de gouttière ne se traitent pas comme dans une brique pleine. Nous regardons le support avant de choisir le mode de fixation.",
      ],
    },
    {
      titre: "Granges, hangars et longs rampants",
      paragraphes: [
        "La commune couvre 3 531 hectares, dont 96,4 % de terres arables. Les surfaces de toiture y sont d'abord agricoles : corps de ferme à cour, granges, hangars, bâtiments d'exploitation, auxquels s'ajoute le parc bâti du lycée de la Nature et du Vivant, au nord sur la RD 3.",
        "Ces toitures n'ont ni la pente ni la géométrie d'une maison. Les rampants sont longs, les rives filent sur plusieurs dizaines de mètres, et une plaque soulevée en bord de toit ouvre la ligne entière au vent suivant. La reprise commence donc par les points singuliers — rives, faîtage, fixations, recouvrements — et non par le milieu du versant.",
        "Les plaques fibres-ciment et les bacs acier y dominent. Ce sont des couvertures qui se réparent et se remplacent élément par élément tant que l'ossature reste saine : encore faut-il vérifier l'état des pannes avant de visser du neuf dessus.",
      ],
    },
    {
      titre: "Un village, trois écarts et 35 km²",
      paragraphes: [
        "Le territoire communal est éclaté. Outre le village, en retrait des grands axes et relié à la RD 994 par la RD 65a, Somme-Vesle compte l'Étang à l'ouest sur la Vesle, la Grande Romanie au nord-ouest au croisement de la RD 3 et de la RD 994, et Sébastopol à l'est sur la RD 65. Le lycée agricole forme un quatrième ensemble bâti, distinct des trois autres.",
        "Deux adresses de la même commune peuvent donc être séparées de plusieurs kilomètres de route. Précisez le lieu-dit quand vous nous appelez au 07 61 54 53 43 : cela évite de chercher, et le relevé sur place se prépare mieux.",
      ],
    },
  ],

  batiEtCouverture: {
    titre: "Ce que nous rencontrons sur les toits de Somme-Vesle",
    paragraphes: [
      "La couverture suit ici la géologie : la craie et le calcaire pour les murs, l'argile pour les tuiles, le sable pour les enduits. La terre cuite rouge domine — tuile plate de pays sur les parties les plus anciennes, tuile mécanique à emboîtement sur la majeure partie du village et des corps de ferme depuis la fin du XIXe siècle. L'ardoise reste marginale dans ce type de village de plaine.",
      "Le village est posé sur un plateau crayeux entre 146 et 209 mètres d'altitude, au milieu des savarts et des pinèdes, sans aucun écran à l'ouest. Le vent est la première cause de désordre sur ces toitures : tuiles soulevées en rive et en égout, faîtages descellés, plaques déclouées sur les hangars.",
      "Enfin, l'assainissement est non collectif sur toute la commune. L'eau de toiture ne part pas dans un réseau : elle se gère à la parcelle. Le dimensionnement des chéneaux, des descentes et de leur exutoire n'est donc pas un détail, surtout au pied d'une grande toiture de grange.",
    ],
    materiaux: [
      {
        nom: "Tuile mécanique à emboîtement",
        texte:
          "Couverture majoritaire du village et des corps de ferme depuis la fin du XIXe siècle. Remplacement à l'unité, reprise des rives et des faîtages, pose d'un écran de sous-toiture en réfection complète.",
      },
      {
        nom: "Tuile plate de pays",
        texte:
          "Sur les parties les plus anciennes du bâti, celles que le village a conservées faute d'avoir été détruit en 1914-1918. Petit format et nombreux recouvrements : on ouvre le versant plutôt que de remplacer depuis l'échelle.",
      },
      {
        nom: "Plaque fibres-ciment",
        texte:
          "Hangars agricoles et bâtiments d'exploitation, qui représentent ici l'essentiel des mètres carrés couverts. Posées avant 1997, ces plaques peuvent contenir de l'amiante : le repérage précède la dépose et détermine la filière d'évacuation.",
      },
      {
        nom: "Bac acier",
        texte:
          "Bâtiments agricoles récents, extensions et abris. La reprise porte sur les recouvrements, les closoirs, les rives et la boulonnerie, qui sont les points que le vent de plateau travaille en premier.",
      },
      {
        nom: "Zinguerie",
        texte:
          "Chéneaux, gouttières, descentes et exutoires. Sans réseau collectif, l'eau doit être conduite au bon endroit de la parcelle, à l'écart des maçonneries de craie.",
      },
    ],
  },

  contraintes: [
    {
      titre: "Aucun périmètre d'abords sur la commune",
      texte:
        "Somme-Vesle ne compte aucun immeuble protégé au titre des monuments historiques. Une réfection de toiture n'y passe donc pas par l'avis de l'Architecte des Bâtiments de France, et aucune servitude patrimoniale n'impose de matériau ni de teinte. Restent les règles d'aspect de l'urbanisme communal et la déclaration à déposer en mairie quand la couverture change d'aspect. Nous faisons le point avec vous avant de chiffrer.",
    },
    {
      titre: "Un plateau sans écran",
      texte:
        "Terrain totalement dégagé entre 146 et 209 mètres, aucun obstacle à l'ouest : une ferme isolée en plein champ ne bénéficie d'aucun effet de masque. Sur les longs rampants de grange, ce sont les rives et les débords qui prennent la charge en premier. Nous renforçons les fixations sur les lignes exposées plutôt que de reposer à l'identique.",
    },
    {
      titre: "Accès de cour, pas de mitoyenneté",
      texte:
        "L'habitat est dispersé, les maisons sont rarement accolées et les corps de ferme s'ouvrent sur des cours. L'échafaudage se monte le plus souvent sur la parcelle, sans emprise sur la voirie. En contrepartie, on accède par des chemins et des cours de ferme : la portance du sol pour un camion ou une nacelle se vérifie sur place, pas sur un plan.",
    },
    {
      titre: "L'eau pluviale reste chez vous",
      texte:
        "L'assainissement est non collectif sur toute la commune : les eaux de toiture s'infiltrent ou se stockent sur votre terrain. Une descente mal placée finit par déchausser un mur de craie ou saturer un pied de bâtiment. Le tracé des descentes et la position des exutoires font partie du relevé, au même titre que le versant.",
    },
  ],

  faq: [
    {
      question: "Faut-il l'avis de l'Architecte des Bâtiments de France à Somme-Vesle ?",
      reponse:
        "Non. La commune ne compte aucun immeuble protégé au titre des monuments historiques, donc aucun périmètre d'abords ne s'applique sur son territoire, ni au village ni aux écarts. Votre projet relève des seules règles d'urbanisme communales, et un changement d'aspect de la couverture se déclare en mairie. Nous faisons le point sur ce qui s'applique à votre adresse au moment du relevé, qui est gratuit.",
    },
    {
      question: "Intervenez-vous à la Grande Romanie, à Sébastopol et à l'Étang ?",
      reponse:
        "Oui, comme au village. Ces trois écarts font partie de la commune mais en sont éloignés : la Grande Romanie se trouve au croisement de la RD 3 et de la RD 994, Sébastopol à l'est sur la RD 65, l'Étang à l'ouest sur la Vesle. Indiquez le lieu-dit lors de votre appel au 07 61 54 53 43. Le déplacement reste gratuit quel que soit le point de la commune.",
    },
    {
      question: "Ma grange fait quarante mètres de long : par où commence une réfection ?",
      reponse:
        "Par les rives et le faîtage. Sur un bâtiment de cette longueur, posé sans écran au milieu du plateau, le vent n'attaque pas le milieu du versant mais les lignes de bord : une plaque ou une tuile soulevée en rive ouvre la file entière. Nous relevons l'état de l'ossature et des fixations avant de parler de la couverture elle-même, parce qu'une plaque neuve vissée dans une panne fatiguée ne tiendra pas mieux que l'ancienne.",
    },
  ],

  distanceKm: 20,

  communesVoisines: [
    "courtisols",
    "chalons-en-champagne",
    "suippes",
    "sainte-menehould",
  ],
};

export default sommeVesle;
