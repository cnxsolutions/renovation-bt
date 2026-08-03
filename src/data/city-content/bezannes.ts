/**
 * Bezannes (51430).
 *
 * Convention de redaction : voir ./types.ts, et ./chalons-en-champagne.ts
 * comme fichier de reference.
 */
import type { CityContent } from "./types";

const bezannes: CityContent = {
  slug: "bezannes",

  metaTitle: "Couvreur à Bezannes (51430) — étanchéité",
  metaDescription:
    "Rénovation BT, couvreur depuis 2010 : toiture, toiture-terrasse, zinguerie et gouttières à Bezannes, du village ancien au quartier de la gare. Devis gratuit.",

  h1: "Couvreur à Bezannes (51430)",

  /** 2 a 3 paragraphes. intro[0] est rendu sous le H1, dans l'en-tete sombre. */
  intro: [
    "Bezannes a plus que doublé de population en six ans. D'un côté un village groupé autour de son église romane classée ; de l'autre, depuis 2007, un parc d'affaires programmé sur 172 hectares autour de la gare Champagne-Ardenne TGV.",
    "Rénovation BT est une entreprise artisanale de couverture installée à Écury-sur-Coole depuis 2010. Nous intervenons à Bezannes sur la réfection et l'entretien des toitures, la zinguerie, les gouttières et les descentes, le démoussage et le traitement hydrofuge.",
    "C'est la commune où le métier change le plus d'une adresse à l'autre : la tuile de terre cuite et le moellon calcaire dans le vieux village, l'étanchéité, le zinc et le bac acier au nord, sur des immeubles qui ont tous moins de vingt ans. Le déplacement et le devis sont gratuits.",
  ],

  /** { titre, paragraphes: string[] } — le corps redige. */
  sections: [
    {
      titre: "Le village ancien de Bezannes : tuile de terre cuite et moellon calcaire",
      paragraphes: [
        "Le noyau villageois s'est groupé autour de l'église Saint-Martin, romane, des XIe-XVIe siècles, classée au titre des monuments historiques. Autour d'elle, le vocabulaire est celui des villages de la couronne rémoise : murs de moellon calcaire enduits à la chaux, toitures à deux pentes couvertes en tuile plate puis en tuile mécanique de terre cuite.",
        "Le calcaire local est tendre et sensible au gel. Les scellements de solin, les fixations en pied de souche et les ancrages d'échafaudage ne se traitent pas comme dans une brique pleine : un appui mal choisi épaufre le parement, et un enduit à la chaux se raccorde rarement de façon invisible.",
        "Sur ces maisons, l'essentiel des interventions porte sur les rives, les faîtages, les solins de cheminée et les gouttières, c'est-à-dire sur les points où l'eau quitte la couverture pour rejoindre le mur.",
      ],
    },
    {
      titre: "Le quartier de la gare : un parc de toitures-terrasses",
      paragraphes: [
        "La ZAC du quartier de la gare est programmée sur 172 hectares, autour de la gare de Champagne-Ardenne ouverte en 2007 et du terminus de la ligne B du tramway de Reims mis en service en 2011. Le premier ensemble de quatre immeubles de bureaux est sorti de terre en février 2010 ; bureaux, cliniques, résidences et logements collectifs ont suivi. Les terres agricoles, qui occupaient 92,2 % du territoire en 1990, n'en représentaient plus que 58,5 % en 2018.",
        "Ce qui couvre ces bâtiments n'a rien de la tuile : étanchéité membranaire sur isolant support, relevés d'acrotère, évacuations d'eaux pluviales intérieures, zinc à joint debout, bacs acier, toitures végétalisées. Le parc est jeune, mais une terrasse vieillit par ses points singuliers, pas par sa surface courante.",
        "Une fuite s'y cherche donc au relevé d'acrotère, à la platine d'une traversée, à la crapaudine d'une entrée d'eau ou au raccord entre deux ouvrages — presque jamais au milieu du support.",
      ],
    },
    {
      titre: "Deux façons de mener un chantier sur 8 km²",
      paragraphes: [
        "L'autoroute A4 et la LGV Est coupent le territoire d'est en ouest, et l'essentiel de l'urbanisation se trouve au nord de ces deux tracés. Selon que l'adresse est dans le village ou dans le quartier de la gare, l'interlocuteur, l'accès et la nature du travail changent complètement.",
        "Dans le village, on travaille pour un propriétaire, avec un échafaudage de pied et des rues de gabarit ordinaire. Sur la ZAC, on travaille pour un gestionnaire d'immeuble ou une copropriété tertiaire, sur des bâtiments en exploitation : accès par nacelle ou plateforme, horaires convenus, plan de prévention lorsque plusieurs entreprises se croisent.",
        "Le devis n'a donc pas la même structure dans les deux cas. Sur une maison du village, ce sont les mètres carrés de couverture qui pèsent. Sur un immeuble du parc d'affaires, ce sont les moyens d'accès, les protections et les points singuliers.",
      ],
    },
  ],

  batiEtCouverture: {
    titre: "Deux parcs de toitures sur une même commune",
    paragraphes: [
      "Bezannes comptait 2 117 habitants en 2017 et 5 039 en 2023. Cette bascule s'est faite au nord, sur des terres agricoles : les zones industrielles, commerciales et d'infrastructures occupent aujourd'hui 24,9 % du territoire, les zones urbanisées 16,3 %, et il reste 2,8 % de cultures permanentes, c'est-à-dire de la vigne.",
      "La conséquence est directe pour un couvreur : la majorité des mètres carrés couverts de la commune sont des toitures-terrasses et des couvertures métalliques de moins de vingt ans, pendant que le bâti en tuile se concentre sur quelques rues autour de l'église.",
      "Sur la ZAC, les immeubles sont hauts et dégagés, sans masque au vent. Les relevés d'acrotère, les fixations mécaniques de l'étanchéité et les rives de bac acier sont les premiers points à contrôler après un coup de vent, et les premiers à renforcer en réfection.",
    ],
    materiaux: [
      {
        nom: "Tuile de terre cuite",
        texte:
          "Village ancien : tuile plate puis tuile mécanique, sur charpentes traditionnelles à deux pentes. Rives, faîtages et solins de cheminée avant tout.",
      },
      {
        nom: "Étanchéité membranaire",
        texte:
          "Toitures-terrasses des bureaux, cliniques et logements collectifs du quartier de la gare. Le travail porte sur les relevés, les acrotères et les entrées d'eaux pluviales.",
      },
      {
        nom: "Zinc à joint debout",
        texte:
          "Couvertures et habillages des immeubles de la ZAC. Faible pente, support continu, points sensibles aux pénétrations et aux rives.",
      },
      {
        nom: "Bac acier",
        texte:
          "Bâtiments tertiaires et d'activité du parc d'affaires. Reprise des fixations, des recouvrements et des raccords de faîtage, traitement des percements.",
      },
      {
        nom: "Toiture végétalisée",
        texte:
          "Présente sur plusieurs immeubles récents du quartier de la gare. Le complexe se dépose par zones pour atteindre l'étanchéité ; évacuations et bandes stériles de rive demandent un entretien régulier.",
      },
    ],
  },

  /** { titre, texte } — contraintes concretes de chantier. */
  contraintes: [
    {
      titre: "Abords de l'église Saint-Martin",
      texte:
        "L'église Saint-Martin, romane, est classée au titre des monuments historiques, et son périmètre d'abords de 500 mètres enveloppe la totalité du village ancien. Toute intervention qui modifie l'aspect d'une toiture visible depuis l'église, ou en covisibilité avec elle, passe par l'avis de l'Architecte des Bâtiments de France. L'édifice lui-même a fait l'objet d'une restauration lourde de l'automne 2020 à la mi-2024. Nous vérifions le régime applicable à votre adresse avant de chiffrer.",
    },
    {
      titre: "Règlement de ZAC et copropriétés tertiaires",
      texte:
        "Le quartier de la gare, à plus d'un kilomètre au nord de l'église, échappe à la servitude patrimoniale mais relève du règlement de la ZAC et des règlements de copropriété. La décision passe par un gestionnaire ou une assemblée, et les interventions se programment plutôt qu'elles ne s'improvisent. Le devis est établi pour être présenté tel quel au conseil syndical ou au propriétaire bailleur.",
    },
    {
      titre: "Bâtiments en exploitation",
      texte:
        "Bureaux, cliniques et résidences continuent de fonctionner pendant les travaux. Cela impose un accès défini à l'avance — nacelle, plateforme, cheminement protégé —, des horaires convenus avec le gestionnaire, et la coordination avec les autres entreprises présentes sur site. Ces points se règlent au relevé : sur une terrasse d'immeuble tertiaire, ils pèsent sur le devis autant que la surface.",
    },
    {
      titre: "A4 et LGV : un territoire coupé en deux",
      texte:
        "L'autoroute A4 et la ligne à grande vitesse traversent la commune d'est en ouest, et les liaisons entre le village et le quartier de la gare passent par un nombre limité de franchissements. À proximité de ces emprises, le stationnement du camion et les opérations de levage demandent d'être préparés. Le repérage des accès fait partie du relevé, avant le chiffrage.",
    },
  ],

  /** { question, reponse } — propre a la commune, jamais la FAQ generale. */
  faq: [
    {
      question: "Faut-il l'avis de l'Architecte des Bâtiments de France à Bezannes ?",
      reponse:
        "Cela dépend du quartier. Le village ancien est entièrement compris dans le périmètre d'abords de 500 mètres de l'église Saint-Martin, classée au titre des monuments historiques : une réfection qui modifie l'aspect de la toiture y passe par l'avis de l'Architecte des Bâtiments de France. Le quartier de la gare, situé à plus d'un kilomètre au nord, n'est pas concerné par cette servitude, mais le règlement de la ZAC et celui de la copropriété s'y appliquent. La mairie confirme le régime à l'adresse, et nous le vérifions au relevé.",
    },
    {
      question: "Ma toiture-terrasse fuit dans le quartier de la gare : par où commence la recherche ?",
      reponse:
        "Par les points singuliers, pas par la surface. Sur ces immeubles, l'eau entre presque toujours par un relevé d'acrotère décollé, une platine de traversée, une entrée d'eau pluviale obstruée ou un raccord entre deux ouvrages. Comme les évacuations sont intérieures, une crapaudine bouchée met la terrasse en charge et la fuite se déclare loin de sa cause, souvent plusieurs mètres plus bas. Le relevé commence donc par le pourtour, les traversées et les évacuations.",
    },
    {
      question: "Comment se prépare une intervention sur un immeuble occupé du parc d'affaires ?",
      reponse:
        "Par une visite préalable avec le gestionnaire : moyens d'accès en toiture, zone de stockage et de levage, cheminement des occupants, horaires, et coordination avec les autres entreprises présentes. Sur un immeuble de bureaux ou une clinique en exploitation, cette organisation compte autant que l'ouvrage lui-même, et elle figure au devis. Le déplacement pour cette visite est gratuit.",
    },
  ],

  /** Distance approximative depuis le siege d'Écury-sur-Coole, arrondie. */
  distanceKm: 40,

  communesVoisines: [
    "reims",
    "tinqueux",
    "cormontreuil",
    "muizon",
  ],
};

export default bezannes;
