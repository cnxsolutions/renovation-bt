/**
 * Vitry-le-François (51300).
 *
 * Fichier redige. Convention : voir ./types.ts, et ./chalons-en-champagne.ts
 * comme fichier de reference.
 */
import type { CityContent } from "./types";

const vitryLeFrancois: CityContent = {
  slug: "vitry-le-francois",

  metaTitle: "Couvreur à Vitry-le-François (51300)",
  metaDescription:
    "Rénovation BT, couvreur établi à Écury-sur-Coole depuis 2010. Toiture, tuile, zinguerie, gouttières et démoussage à Vitry-le-François. Devis gratuit.",

  h1: "Couvreur à Vitry-le-François (51300)",

  intro: [
    "Vitry-le-François a le plan d'une ville de 1545 et les toitures d'une ville de 1950 : un damier tracé à la Renaissance, rebâti après les destructions de 1940.",
    "Rénovation BT est une entreprise artisanale de couverture installée à Écury-sur-Coole depuis 2010. Nous intervenons à Vitry-le-François sur la réfection et l'entretien des toitures, la zinguerie, la pose et le remplacement des gouttières, le démoussage et le traitement hydrofuge.",
    "Le déplacement et le devis sont gratuits. Dans le centre vitryat, une toiture se relève rarement seule : les chéneaux, les noues et les souches sont partagés avec les immeubles voisins, et le relevé en tient compte dès le premier passage.",
  ],

  sections: [
    {
      titre: "Les toitures de la Reconstruction, au cœur du damier",
      paragraphes: [
        "Le centre de Vitry-le-François a été rebâti entre 1945 et 1960 sous la direction de l'architecte Maurice Clauzier, sur le plan orthogonal dessiné en 1545 par l'ingénieur Girolamo Marini. Les immeubles y sont alignés à l'îlot, du R+2 au R+4, sous des combles à deux pans de pente moyenne couverts en tuile de terre cuite.",
        "Ces couvertures ont toutes le même âge. Elles ont été posées en quelques années, avec les mêmes charpentes, les mêmes tuiles et les mêmes ouvrages de zinc — et elles vieillissent ensemble. Ce que l'on constate sur un immeuble se retrouve souvent sur son voisin : tuiles gélives sur les versants nord, chéneaux fatigués sur toute la longueur d'un îlot, souches maçonnées dont les solins s'ouvrent.",
        "D'où l'intérêt d'un relevé qui ne s'arrête pas au point qui fuit. Nous regardons le versant entier, les rives, les noues et le raccord avec le bâtiment mitoyen, puis nous vous disons ce qui doit être repris maintenant et ce qui peut attendre. Le devis écrit détaille les matériaux, les quantités et le prix à payer avant le démarrage.",
      ],
    },
    {
      titre: "Toitures mitoyennes et ouvrages partagés",
      paragraphes: [
        "Le plan de 1545 découpe la ville en îlots bâtis sur tout leur pourtour, à l'intérieur d'un carré de 612 mètres de côté. Concrètement, votre couverture touche celle du voisin : souche de cheminée en limite, chéneau qui court d'un immeuble à l'autre, noue commune, égout continu sur toute la longueur d'un îlot.",
        "Cela change l'organisation du chantier. L'accès se fait souvent par la cour arrière, l'échafaudage doit parfois prendre appui au-delà de votre propriété, et la reprise d'un chéneau partagé se décide à deux. Nous identifions ces points au relevé et nous vous indiquons ce qui doit être réglé avec le voisin avant le démarrage : c'est ce qui évite l'arrêt de chantier.",
      ],
    },
    {
      titre: "Hors du damier : quartiers d'après-guerre et pavillonnaire",
      paragraphes: [
        "La population de Vitry-le-François a doublé entre 1946 et 1968 et la ville s'est étendue par quartiers entiers : La Fauvarge, Le Désert, Rome Saint-Charles, Le Hamois, La Haute Borne, sortis de terre des années 1950 aux années 1970. Les immeubles de ces ensembles relèvent de la toiture-terrasse et de la faible pente ; les maisons construites autour, après 1970, sont couvertes en tuile mécanique de terre cuite ou de béton.",
        "Sur ce pavillonnaire, les désordres sont d'un autre ordre que dans le centre : tuiles déplacées par le vent de plaine, faîtages descellés, mousse sur les versants nord, écran de sous-toiture absent sur les constructions les plus anciennes. La reprise ponctuelle suffit souvent. Quand elle ne suffit plus, nous vous le disons au lieu de la répéter chaque année.",
      ],
    },
  ],

  batiEtCouverture: {
    titre: "Ce que nous rencontrons sur les toits vitryats",
    paragraphes: [
      "Vitry-le-François est une ville neuve de la Renaissance. François Ier la fonde en 1545, après la destruction de Vitry-en-Perthois l'année précédente, et Girolamo Marini la dessine : un carré de 612 mètres de côté, découpé en îlots réguliers par des rues orthogonales, autour d'une place d'Armes centrale. Ce plan est toujours là. Les murs, eux, datent de la reconstruction d'après 1940.",
      "Un centre rebâti d'un seul mouvement, c'est un parc de couvertures du même âge, arrivé globalement au terme de son premier cycle. Les désordres y sont sériels plutôt qu'isolés. S'y ajoute le climat champenois : gel et dégel alternés qui fendent les tuiles poreuses, et vent de plaine — la ville est en pays ouvert, au bord de la Marne — qui travaille les rives et les faîtages.",
      "La commune a perdu près d'un habitant sur dix depuis 2017, et cela se voit sur les toits. Un logement peu occupé est un logement dont personne ne monte vérifier la couverture : une infiltration y court plus longtemps avant d'être repérée, et la reprise ponctuelle d'hier devient la dépose d'un versant.",
    ],
    materiaux: [
      {
        nom: "Tuile de terre cuite",
        texte:
          "Couverture des immeubles de la Reconstruction, dans tout le damier central. Pente moyenne, versants longs, égout continu d'un immeuble à l'autre : la reprise se pense à l'échelle de l'îlot, pas de la seule façade.",
      },
      {
        nom: "Zinc",
        texte:
          "Chéneaux, noues, descentes et solins de souche, très souvent partagés entre deux immeubles mitoyens. C'est le poste qui fuit en premier dans le centre, et le moins cher à reprendre à temps.",
      },
      {
        nom: "Tuile mécanique",
        texte:
          "Pavillonnaire postérieur à 1970, en terre cuite ou en béton. Remplacement à l'unité, reprise des faîtages et des rives, écran de sous-toiture posé en réfection complète.",
      },
      {
        nom: "Ardoise",
        texte:
          "Bâti ancien épargné par les destructions de 1940 et abords de la collégiale. Réparation au crochet, reprise des solins et des noues, remplacement à l'identique de format et de teinte.",
      },
    ],
  },

  contraintes: [
    {
      titre: "Abords de la collégiale Notre-Dame",
      texte:
        "La collégiale Notre-Dame-de-l'Assomption est classée monument historique depuis 1920 — elle fut le seul édifice épargné lorsque la ville a été détruite en 1940. Son périmètre de protection couvre une large part du damier central : dans ce secteur, l'Architecte des Bâtiments de France se prononce sur les travaux visibles, et le matériau comme la teinte peuvent être imposés. Cela se sait avant le chiffrage, pas après le montage de l'échafaudage.",
    },
    {
      titre: "Toitures en continuité",
      texte:
        "Les îlots du plan de 1545 sont bâtis en rangs continus. Souches partagées, chéneaux communs, noues en limite : intervenir sur une couverture, c'est presque toujours toucher à un ouvrage qui ne vous appartient pas seul. L'accord du voisin et l'accès éventuel par sa parcelle se règlent en amont, jamais le jour de la pose.",
    },
    {
      titre: "Rues droites, mais étroites",
      texte:
        "Le damier donne des rues rectilignes et commerçantes, dont beaucoup sont trop étroites pour qu'un échafaudage tienne sur le seul trottoir. Une autorisation d'occupation du domaine public est alors à demander et le stationnement à neutraliser. Quand la cour arrière permet l'accès, nous privilégions cette solution : moins de démarches, moins de gêne pour les commerces.",
    },
  ],

  faq: [
    {
      question: "Mon immeuble est près de la collégiale : faut-il l'avis de l'Architecte des Bâtiments de France ?",
      reponse:
        "Très probablement. La collégiale Notre-Dame-de-l'Assomption est classée et son périmètre de protection englobe une grande partie du centre reconstruit. Dès que les travaux modifient l'aspect extérieur — matériau, teinte, forme —, la déclaration préalable déposée en mairie est transmise pour avis, et l'instruction est plus longue que dans un quartier ordinaire. Nous vérifions votre adresse au relevé et nous chiffrons ce qui est réellement autorisable.",
    },
    {
      question: "Le chéneau est commun avec l'immeuble voisin : comment se passe la réfection ?",
      reponse:
        "La question revient souvent dans le centre, où les immeubles reconstruits se touchent sur toute la longueur d'un îlot. Un ouvrage commun se répare à frais partagés entre les propriétaires concernés, et cette répartition se règle entre vous avant le chantier. De notre côté, le devis distingue clairement ce qui relève de votre seule toiture et ce qui relève de l'ouvrage partagé, pour que chacun sache ce qu'il paie.",
    },
    {
      question: "Toutes les toitures du centre datent-elles de la Reconstruction ?",
      reponse:
        "Presque toutes. La ville a été rasée en 1940 puis rebâtie entre 1945 et 1960 : à quelques exceptions près, dont la collégiale, les couvertures du damier ont le même âge et la même conception. C'est utile à savoir. Si les immeubles de votre rue commencent à refaire leur toiture, la vôtre est vraisemblablement au même point, et un contrôle après l'hiver coûte toujours moins cher qu'une charpente à reprendre.",
    },
  ],

  distanceKm: 25,

  communesVoisines: [
    "chalons-en-champagne",
    "fere-champenoise",
    "sezanne",
    "ecury-sur-coole",
  ],
};

export default vitryLeFrancois;
