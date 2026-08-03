/**
 * Coolus (51510).
 *
 * Convention de redaction : voir ./types.ts, et ./chalons-en-champagne.ts
 * comme fichier de reference.
 */
import type { CityContent } from "./types";

const coolus: CityContent = {
  slug: "coolus",

  metaTitle: "Couvreur à Coolus (51510) — toiture",
  metaDescription:
    "Rénovation BT, couvreur établi à Écury-sur-Coole, intervient à Coolus : toitures de fermes et de domaines, zinguerie, gouttières, démoussage. Devis gratuit.",

  h1: "Couvreur à Coolus (51510)",

  intro: [
    "Coolus est la commune la plus proche de notre siège : moins de cinq kilomètres de route, et la même rivière, la Coole, qui traverse les deux villages.",
    "Rénovation BT est une entreprise artisanale de couverture installée à Écury-sur-Coole depuis 2010. À Coolus, nous intervenons aussi bien sur les maisons du village que sur les corps de ferme et les bâtiments isolés : réfection et entretien de toiture, zinguerie, pose et remplacement de gouttières, démoussage et traitement hydrofuge.",
    "Le déplacement et le devis sont gratuits. C'est l'artisan qui montera sur le toit qui relève, qui chiffre et qui exécute les travaux — et pour Coolus, il vient de la commune voisine.",
  ],

  sections: [
    {
      titre: "Toitures de fermes et de bâtiments isolés à Coolus",
      paragraphes: [
        "L'INSEE classe Coolus en habitat dispersé : le bâti ne se resserre pas autour d'un centre-bourg dense, il se répartit entre le village, les fermes et les domaines. Une intervention à Coolus porte donc rarement sur un petit versant coincé entre deux voisins. Elle porte sur des toitures d'un seul tenant qui couvrent le logis, la grange et les écuries.",
        "Ces grandes couvertures ont leurs désordres propres. Les pannes sont longues et portent depuis des décennies une charge que personne n'a réévaluée : nous cherchons d'abord le fléchissement, les assemblages ouverts et les têtes de panne altérées en about de mur. Les égouts, très développés, débordent souvent au premier orage parce que la gouttière n'a jamais été redimensionnée après un agrandissement.",
        "Les réfections successives ont laissé sur un même toit des matériaux d'époques différentes. Avant de chiffrer, nous relevons versant par versant ce qui peut rester en place et ce qui doit partir : sur des surfaces pareilles, la frontière entre reprise partielle et dépose complète est la décision qui pèse le plus lourd dans le devis.",
      ],
    },
    {
      titre: "Écoulement des eaux et démoussage dans la vallée de la Coole",
      paragraphes: [
        "Coolus est un bâti de fond de vallée. La Coole traverse la commune avant d'aller rejoindre la Marne à Compertrix, et les sols restent humides une grande partie de l'année. Cela se lit sur les versants nord : mousse épaisse, tuiles qui ne sèchent plus entre deux pluies, joints gorgés d'eau au moment des premières gelées.",
        "L'évacuation compte donc plus qu'ailleurs. Sur un corps de ferme, une seule ligne d'égout peut faire plusieurs dizaines de mètres : nous reprenons les gouttières et les chéneaux en longueur, les crapaudines, les descentes et les rejets au pied des murs, qui renvoient l'eau contre les fondations quand ils sont trop courts.",
        "Le démoussage se planifie hors gel et hors forte chaleur. Sur ces surfaces, l'accès au faîtage se prépare autant que le traitement lui-même : une nacelle passe rarement là où le versant donne sur une cour encombrée ou sur un bâtiment agricole en activité. Nous en parlons au relevé, avant d'annoncer un prix.",
      ],
    },
  ],

  batiEtCouverture: {
    titre: "Ce que nous voyons sur les toits de Coolus",
    paragraphes: [
      "Le territoire communal est agricole à près de 87 %, pour 235 habitants répartis sur plus de treize kilomètres carrés. Le patrimoine bâti tient dans quelques ensembles : le village, le domaine de Beauregard, de la fin du XVIIe siècle, la ferme du Val d'Essai, et l'église Saint-Martin, dont le chœur remonte au XVe siècle et la nef à la Renaissance.",
      "La terre cuite y domine, comme partout dans le Châlonnais, mais elle couvre des volumes sans commune mesure avec un pavillon. Les charpentes sont anciennes, dimensionnées pour du stockage, parfois reprises dans l'urgence après une tempête. Le vent de plaine, que rien n'arrête sur ce plateau, s'attaque d'abord aux rives, aux faîtages et aux tuiles scellées au mortier.",
      "Le parc du château, cinquante hectares dont le château lui-même a disparu en 2009, fait le reste : des arbres de haute tige à proximité des toitures, donc des feuilles dans les gouttières et de l'ombre permanente sur les versants qu'ils dominent.",
    ],
    materiaux: [
      {
        nom: "Tuile de terre cuite",
        texte:
          "Elle couvre le village et les corps de ferme. Sur ces grands versants, le remplacement à l'unité suppose de retrouver un modèle compatible : les réfections successives ont mélangé les moules.",
      },
      {
        nom: "Tuile mécanique",
        texte:
          "Sur les constructions et les extensions plus récentes. Remplacement à l'unité, reprise de faîtage, pose d'un écran de sous-toiture quand le versant est entièrement déposé.",
      },
      {
        nom: "Couvertures de bâtiments d'exploitation",
        texte:
          "Granges et hangars ont été recouverts au fil des campagnes de réfection, souvent en plaques. Les fuites viennent des recouvrements, des fixations fatiguées et du raccord avec la partie restée en tuile.",
      },
      {
        nom: "Zinc",
        texte:
          "Gouttières, descentes et solins de souche. Sur un corps de ferme, la longueur développée est telle qu'une réparation ponctuelle se juge toujours par rapport à la reprise de la ligne entière.",
      },
    ],
  },

  contraintes: [
    {
      titre: "Accès par les chemins",
      texte:
        "Les fermes et les domaines de Coolus se desservent par des chemins agricoles. Nous vérifions au relevé ce qui passe réellement : camion de livraison, échafaudage, engin de levage. C'est cette visite qui détermine si les matériaux se déposent au pied du bâtiment ou plus loin, et l'organisation du chantier en découle.",
    },
    {
      titre: "Un chantier sans voisinage immédiat",
      texte:
        "Sur un bâtiment isolé, personne ne réclame l'échafaudage sur son trottoir et il n'y a pas d'autorisation d'occupation de voirie à demander. En contrepartie, tout ce dont le chantier a besoin doit arriver avec lui : approvisionnement, benne, moyens d'accès. Cela se prépare avant, pas le matin de la première livraison.",
    },
    {
      titre: "Aucun périmètre d'abords sur la commune",
      texte:
        "L'église Saint-Martin n'est pas protégée au titre des immeubles : seul son vitrail du XVIe siècle, qui figure la charité de saint Martin, est classé au titre des objets, et cette protection ne crée pas de périmètre autour du bâtiment. Refaire une toiture à Coolus ne passe donc pas par l'avis de l'Architecte des Bâtiments de France. Une déclaration préalable reste à déposer en mairie dès que le matériau, la teinte ou la forme du toit change.",
    },
  ],

  faq: [
    {
      question: "Faut-il l'avis des Bâtiments de France pour refaire un toit à Coolus ?",
      reponse:
        "Non. La commune ne compte aucun immeuble protégé générant un périmètre d'abords : la seule protection au titre des monuments historiques porte sur un vitrail de l'église, classé au titre des objets, et elle n'emporte aucune contrainte sur les bâtiments voisins. Il reste à déposer une déclaration préalable en mairie dès que l'aspect extérieur du toit évolue. Nous vous indiquons au relevé ce qui s'applique à votre adresse.",
    },
    {
      question: "Une toiture de grange à Coolus se traite-t-elle comme un toit de maison ?",
      reponse:
        "Non, et l'écart est net. La surface se compte en centaines de mètres carrés d'un seul tenant, la charpente est celle d'un bâtiment d'exploitation, et les matériaux se sont accumulés au fil des réfections. Le relevé prend plus de temps, l'accès se prépare, et le devis distingue les versants qu'on peut conserver de ceux qu'il faut déposer.",
    },
    {
      question: "Pourquoi la mousse revient-elle si vite sur les toits de Coolus ?",
      reponse:
        "Le bâti est en fond de vallée, le long de la Coole, sur des sols qui restent humides. Les cinquante hectares boisés du parc et les arbres des cours de ferme ajoutent de l'ombre permanente sur certains versants, qui ne sèchent plus. Un démoussage suivi d'un traitement hydrofuge rétablit l'écoulement ; selon l'exposition du versant, l'opération se renouvelle tous les cinq à dix ans.",
    },
  ],

  distanceKm: 5,

  communesVoisines: [
    "ecury-sur-coole",
    "compertrix",
    "sarry",
    "saint-memmie",
    "chalons-en-champagne",
  ],
};

export default coolus;
