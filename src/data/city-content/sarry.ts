/**
 * Sarry (51520).
 *
 * Contenu redige pour cette commune. Convention : voir ./types.ts, et
 * ./chalons-en-champagne.ts comme fichier de reference.
 */
import type { CityContent } from "./types";

const sarry: CityContent = {
  slug: "sarry",

  metaTitle: "Couvreur toiture à Sarry (51520)",
  metaDescription:
    "Rénovation BT, couvreur établi à Écury-sur-Coole, intervient à Sarry : toiture, zinguerie, gouttières, démoussage. Bâti ancien et lotissements. Devis gratuit.",

  h1: "Couvreur à Sarry (51520)",

  intro: [
    "Sarry serre son vieux village autour de l'église Saint-Julien, classée monument historique depuis 1911, puis s'étire vers des lotissements bâtis sur la hauteur : 71 mètres séparent le point bas du point haut de la commune.",
    "Rénovation BT est une entreprise artisanale de couverture installée à Écury-sur-Coole depuis 2010, à 7 km de Sarry. Nous intervenons chez les Sarrysiens sur la réfection et l'entretien des toitures, la zinguerie, les gouttières, le démoussage et le traitement hydrofuge.",
    "Le déplacement et le devis sont gratuits. Une toiture du centre ancien et une toiture de lotissement ne se traitent pas de la même manière ici : c'est ce que le relevé sur place permet d'établir avant tout chiffrage.",
  ],

  sections: [
    {
      titre: "Toiture dans le centre ancien de Sarry",
      paragraphes: [
        "L'église Saint-Julien, bâtie vers 1200 et classée monument historique par arrêté du 15 décembre 1911, génère autour d'elle un périmètre de protection. Dans ce périmètre, les travaux qui modifient l'aspect extérieur d'une construction passent par l'Architecte des Bâtiments de France. Pour une toiture, cela vise très concrètement le matériau, la teinte, le mode de pose, les fenêtres de toit et la zinguerie visible depuis l'espace public.",
        "Nous intégrons cette étape au chiffrage plutôt qu'à la découverte de l'échafaudage. Le relevé précise si votre adresse est concernée, quel matériau a des chances d'être retenu, et ce que cela change sur la commande. Un projet préparé dans ce sens s'instruit sans allers-retours inutiles.",
        "Le bâti ancien du village est en craie et en pierre locale, avec des pentes franches et des couvertures en terre cuite. Les maisons sont proches les unes des autres : les infiltrations viennent le plus souvent d'un solin de souche, d'une noue ou d'un raccord entre deux bâtiments d'époques différentes, rarement du milieu du versant.",
      ],
    },
    {
      titre: "Les lotissements de Sarry, de 1975 à 2000",
      paragraphes: [
        "La population de Sarry est passée de 1 060 habitants en 1975 à plus de 2 000 à la fin des années 1990. Ce doublement a laissé une couronne pavillonnaire construite sur un quart de siècle, avec des toitures à deux pans en tuile mécanique ou en tuile béton, sur charpentes légères.",
        "Ces maisons sont hors du périmètre de l'église : aucun avis de l'Architecte des Bâtiments de France n'est requis, l'instruction se limite au PLU et à la déclaration préalable en mairie. Les parcelles sont dégagées, la benne et l'échafaudage se posent sans occupation de la voirie. C'est le même métier qu'à trois cents mètres de là, mais pas le même chantier.",
      ],
    },
    {
      titre: "Zinguerie, gouttières et entretien sur les hauteurs de Sarry",
      paragraphes: [
        "Le territoire de Sarry monte de 81 à 152 mètres — le dénivelé le plus marqué du secteur châlonnais. Sur les points hauts, les versants prennent le vent d'ouest sans obstacle : rives soulevées, faîtages descellés, tuiles de bordure déplacées après un coup de vent. Ce sont les premiers points que nous contrôlons, et les premiers que nous renforçons en réfection.",
        "En bas, la Blaise traverse la commune et la Marne la borde. Les toitures y restent humides plus longtemps, la mousse s'installe sur les faces nord et retient l'eau contre la tuile. Le démoussage suivi d'un traitement hydrofuge se justifie pleinement sur ces versants, à condition que la couverture soit encore saine. Les gouttières et les descentes se traitent au passage : un tronçon déboîté ou un crochet lâché suffit à mouiller un pied de mur en craie tout un hiver.",
      ],
    },
  ],

  batiEtCouverture: {
    titre: "Ce que nous rencontrons sur les toits de Sarry",
    paragraphes: [
      "Sarry est un village de charpentiers autant que de maçons. Le clocher octogonal de l'église, entièrement charpenté en bois, a été construit en 1779 pour remplacer une tour de pierre : c'est la tradition champenoise de la flèche en charpente couverte, un parti constructif qui ne pardonne aucun défaut d'entretien sur la couverture et sur les ouvrages de raccord. Le même goût du bois se retrouve dans les charpentes des maisons anciennes du bourg.",
      "Le territoire est agricole à plus de neuf dixièmes, et le bâti se concentre sur une bande étroite entre la Marne et les coteaux. Cette position expose les toitures à deux régimes opposés : humidité persistante et brouillards de vallée en bas, vent soutenu sur les parcelles hautes. Une même commune, deux façons de vieillir pour une couverture.",
      "Les hivers champenois ajoutent leur part. L'eau entrée dans une tuile poreuse ou dans un joint ouvert gèle, se dilate et fend le matériau ; une visite après l'hiver coûte toujours moins cher qu'une charpente à reprendre.",
    ],
    materiaux: [
      {
        nom: "Terre cuite traditionnelle",
        texte:
          "Couverture du vieux village, autour de l'église Saint-Julien. Forte pente, recouvrement important, et une teinte qui n'est pas libre dans le périmètre de protection : la réparation se fait à l'identique.",
      },
      {
        nom: "Tuile mécanique",
        texte:
          "Couverture dominante des lotissements bâtis entre 1975 et 2000. Remplacement à l'unité, reprise du faîtage et des rives, pose d'un écran de sous-toiture lorsque le versant est déposé.",
      },
      {
        nom: "Tuile béton",
        texte:
          "Fréquente sur les constructions des années 1980. Elle se charge en eau quand sa surface s'altère, et gèle de l'intérieur : c'est ce qui décide d'une réfection plutôt que d'un entretien.",
      },
      {
        nom: "Zinc",
        texte:
          "Chéneaux, noues, solins de souche et descentes du bourg. Dans le périmètre de l'église, ces ouvrages sont visibles depuis la rue : leur aspect compte autant que leur étanchéité.",
      },
    ],
  },

  contraintes: [
    {
      titre: "Abords de l'église Saint-Julien",
      texte:
        "Sarry est l'un des rares villages du secteur à porter un monument historique classé au titre des immeubles. Autour de l'édifice, les travaux modifiant l'aspect extérieur des constructions sont soumis à l'Architecte des Bâtiments de France. Concrètement, la teinte de la tuile, le modèle, la pose d'un châssis de toit et la zinguerie apparente peuvent être encadrés. Ce point se vérifie au relevé, avant la commande des matériaux.",
    },
    {
      titre: "Deux régimes à quelques rues d'écart",
      texte:
        "Une maison du bourg et un pavillon de la couronne pavillonnaire ne relèvent pas des mêmes règles, alors qu'ils sont parfois séparés de trois cents mètres. Dans le premier cas, l'instruction est plus longue et le choix des matériaux plus contraint ; dans le second, une déclaration préalable en mairie suffit. Nous vous disons dès la visite dans quel cas vous êtes.",
    },
    {
      titre: "Dénivelé et accès des moyens de levage",
      texte:
        "Avec 71 mètres d'écart entre son point bas et son point haut, Sarry est la commune la plus accidentée du secteur. Sur les parcelles en pente, l'échafaudage se cale, le camion se positionne différemment et l'accès d'une nacelle n'est pas toujours possible. Ces conditions se relèvent sur place et se traduisent dans le devis, pas en cours de chantier.",
    },
    {
      titre: "Vent sur les parcelles hautes",
      texte:
        "Les secteurs situés sur les hauteurs sont exposés bien plus franchement que le fond de vallée. Après une tempête, les rives, les faîtages et les tuiles de bordure sont à contrôler en priorité. En réfection, nous renforçons ces zones plutôt que de traiter le versant de façon uniforme.",
    },
  ],

  faq: [
    {
      question: "Ma maison est proche de l'église Saint-Julien : mon projet de toiture passe-t-il par l'Architecte des Bâtiments de France ?",
      reponse:
        "Très probablement, oui. L'église est classée monument historique depuis le 15 décembre 1911 et un périmètre de protection s'étend autour d'elle. À l'intérieur de ce périmètre, tout ce qui modifie l'aspect extérieur du bâtiment — matériau de couverture, teinte, fenêtre de toit, zinguerie visible — relève de son avis. La mairie confirme si votre parcelle est concernée, et nous préparons le dossier avec vous à partir du relevé.",
    },
    {
      question: "Puis-je poser une fenêtre de toit dans le centre de Sarry ?",
      reponse:
        "C'est possible, mais le châssis visible depuis l'espace public est précisément le type d'élément qui est examiné dans les abords d'un monument classé. Le nombre, la dimension, l'implantation sur le versant et parfois le modèle peuvent être ajustés. Nous étudions le versant le moins exposé au regard et nous chiffrons ensuite, plutôt que l'inverse.",
    },
    {
      question: "J'habite un lotissement de Sarry : suis-je soumis aux mêmes contraintes que le bourg ?",
      reponse:
        "Non, dès lors que votre parcelle se situe hors du périmètre de protection de l'église. Votre projet relève alors du PLU et d'une déclaration préalable déposée en mairie quand l'aspect du toit change. C'est le cas de la plus grande partie des maisons construites entre 1975 et 2000 sur la commune.",
    },
  ],

  distanceKm: 7,

  communesVoisines: [
    "chalons-en-champagne",
    "saint-memmie",
    "coolus",
    "ecury-sur-coole",
  ],
};

export default sarry;
