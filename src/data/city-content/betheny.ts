/**
 * Bétheny (51450).
 *
 * Convention de redaction : voir ./types.ts, et ./chalons-en-champagne.ts
 * comme fichier de reference.
 */
import type { CityContent } from "./types";

const betheny: CityContent = {
  slug: "betheny",

  metaTitle: "Couvreur à Bétheny (51450) — toiture",
  metaDescription:
    "Rénovation BT, couvreur établi à Écury-sur-Coole depuis 2010, intervient à Bétheny : réfection de toiture, zinguerie, gouttières, démoussage. Devis gratuit.",

  h1: "Couvreur à Bétheny (51450)",

  /** 2 a 3 paragraphes. intro[0] est rendu sous le H1, dans l'en-tete sombre. */
  intro: [
    "Bétheny se lit sur ses toits : la tuile mécanique centenaire du vieux bourg relevé après 1918 d'un côté, les couvertures isolées, zinguées et solarisées des quartiers neufs de l'autre.",
    "Rénovation BT est une entreprise artisanale de couverture installée à Écury-sur-Coole depuis 2010. Nous intervenons à Bétheny sur la réfection et l'entretien des toitures, la zinguerie, la pose et le remplacement des gouttières, le démoussage et le traitement hydrofuge.",
    "Peu de communes font cohabiter des chantiers aussi différents à quelques rues d'écart. La fermeture de la base aérienne 112 Reims-Champagne, le 30 juin 2012, a libéré 540 hectares, et les quartiers qui les occupent n'ont rien de commun avec les maisons de la Reconstruction du Grand-Bétheny. Le déplacement et le devis sont gratuits : nous relevons sur place avant de chiffrer.",
  ],

  /** { titre, paragraphes: string[] } — le corps redige. */
  sections: [
    {
      titre: "Le vieux bourg de Bétheny : des toitures de la Reconstruction",
      paragraphes: [
        "Le vieux bourg du Grand-Bétheny a été considéré comme détruit à la fin de la Première Guerre mondiale, et la commune a été décorée de la Croix de guerre le 23 septembre 1920. Ce qui s'y dresse aujourd'hui a donc été rebâti dans les années 1920 : la mairie de 1925 en est le repère le plus visible, sur la place requalifiée entre l'église et elle en 2008-2009.",
        "Sur ces maisons, la couverture est en tuile mécanique à emboîtement, posée sur des charpentes du même chantier de reconstruction. Elle a désormais un siècle, et c'est un âge où tout arrive en même temps : la tuile se délite en surface, les liteaux fatiguent, les fixations de rive et de faîtage lâchent, les solins de souche s'ouvrent, et il n'y a le plus souvent aucun écran de sous-toiture dessous.",
        "Remplacer une tuile ne règle rien quand c'est le support qui est en cause. Nous ouvrons le versant pour voir ce qui porte, et le devis distingue clairement ce qui relève de la reprise ponctuelle et ce qui relève de la réfection.",
      ],
    },
    {
      titre: "Les Aquarelles, la Couturelle, les Écavés : la toiture n'y est plus une simple peau",
      paragraphes: [
        "L'écoquartier des Aquarelles a été réalisé de 2000 à 2006 : 225 logements sur 6,3 hectares, dont des maisons bioclimatiques à ossature et façade bois, et un immeuble de treize logements, La Clairière, visant les certifications BBC Effinergie et Passivhaus. À la Couturelle, les semi-collectifs portent des panneaux solaires. Au domaine d'Henri et aux Écavés, le pavillonnaire se poursuit depuis 2015 en bordure des champs.",
        "Sur ces bâtiments, la couverture fait partie d'un ensemble : écran de sous-toiture, lame d'air ventilée, pare-vapeur, étanchéité à l'air, forte épaisseur d'isolant, et parfois faible pente traitée en zinc ou en membrane. On n'ouvre pas un versant sans traiter ce qui se trouve dessous.",
        "Cela change la structure du devis. La dépose et la repose des capteurs en intégration, le raccordement de l'écran, la continuité du pare-vapeur et la ventilation de la sous-toiture y sont des postes à part entière, pas des détails d'exécution.",
      ],
    },
    {
      titre: "Petit-Bétheny, cité-jardin et lotissements",
      paragraphes: [
        "Au sud du boulevard des Tondeurs, le Petit-Bétheny prolonge directement Reims et comprend une cité-jardin. Le reste de la commune s'est construit par lotissements successifs, des années 1960 aux années 2000, sur des terres agricoles converties en terrains à bâtir.",
        "On y rencontre la tuile mécanique, puis la tuile béton des décennies 1970-1990, et de l'ardoise en fibres-ciment par endroits. Ce sont des couvertures d'une seule époque par rue : les désordres s'y répètent d'une maison à l'autre, mêmes pentes, mêmes accessoires, mêmes points faibles en rive et en pénétration.",
        "Sur les emprises d'activité — anciens terrains de la base aérienne, plateformes logistiques, méthaniseur traitant 23 000 tonnes de déchets par an — on passe au bac acier de grande longueur, avec d'autres postes : fixations, recouvrements, plaques translucides et raccords de faîtage.",
      ],
    },
  ],

  batiEtCouverture: {
    titre: "Ce que nous rencontrons sur les toits de Bétheny",
    paragraphes: [
      "Bétheny couvre 19,9 km² et fait cohabiter quatre régimes de couverture, ce qui est rare sur un territoire de cette taille. La raison tient à son histoire : un bourg rasé puis rebâti après 1918, un terrain d'aviation devenu base aérienne jusqu'en 2012, et 540 hectares rendus d'un coup à l'urbanisation.",
      "Le vieux bourg et la mairie de 1925 forment un parc centenaire homogène. Le Petit-Bétheny et les lotissements de la seconde moitié du XXe siècle relèvent de la tuile mécanique puis de la tuile béton. Les quartiers livrés depuis 2000 relèvent de complexes isolés et étanches à l'air. Les zones d'activité relèvent du bac acier. Quatre façons de travailler sur une même commune.",
      "Le terrain, lui, est le même partout : une plaine sans écran, choisie au début du XXe siècle comme terrain d'aviation précisément parce que rien n'y coupe l'horizon. Le vent y prend les rives, les faîtages et les relevés en premier, et ce sont les points que nous renforçons en réfection.",
    ],
    materiaux: [
      {
        nom: "Tuile mécanique à emboîtement",
        texte:
          "Vieux bourg du Grand-Bétheny et bâti de la Reconstruction des années 1920. Liteaunage, fixations de rive et solins arrivent en fin de service en même temps que la tuile.",
      },
      {
        nom: "Tuile béton",
        texte:
          "Lotissements des années 1970 à 2000, au Petit-Bétheny comme en périphérie du bourg. Le remplacement à l'unité reste possible tant que le modèle se retrouve et que le support tient.",
      },
      {
        nom: "Ardoise en fibres-ciment",
        texte:
          "Présente ponctuellement sur les lotissements et la cité-jardin. Pose au crochet, remplacement pièce à pièce, vigilance sur les fixations en bas de versant.",
      },
      {
        nom: "Zinc et membrane d'étanchéité",
        texte:
          "Quartiers récents à faible pente : Aquarelles, Couturelle, domaine d'Henri. Les relevés, les noues et les évacuations comptent davantage que la surface courante.",
      },
      {
        nom: "Bac acier",
        texte:
          "Emprises d'activité issues des 540 hectares de l'ancienne base aérienne. Grandes longueurs, reprise des fixations et des recouvrements, traitement des percements.",
      },
    ],
  },

  /** { titre, texte } — contraintes concretes de chantier. */
  contraintes: [
    {
      titre: "Abords de l'église Saint-Sébastien",
      texte:
        "L'église Saint-Sébastien est classée au titre des monuments historiques depuis le 5 août 1920 — un classement obtenu alors qu'elle n'était plus qu'une ruine, avant sa reconstruction. Son périmètre d'abords de 500 mètres couvre le vieux bourg du Grand-Bétheny et la place entre l'église et la mairie. Les travaux qui modifient l'aspect d'une toiture visible depuis l'église, ou visible en même temps qu'elle, passent par l'avis de l'Architecte des Bâtiments de France. Nous vérifions ce point à l'adresse, avant le chiffrage.",
    },
    {
      titre: "Logements BBC et Passivhaus : l'étanchéité à l'air",
      texte:
        "Aux Aquarelles et à la Couturelle, ouvrir une toiture revient à ouvrir un système. Le pare-vapeur, la lame d'air ventilée et l'écran de sous-toiture portent des performances qui figurent au dossier du logement, et un raccord manqué se paie en condensation dans la charpente plutôt qu'en fuite visible au plafond. Ces raccords sont décrits dans le devis, ligne par ligne.",
    },
    {
      titre: "Panneaux solaires en intégration de toiture",
      texte:
        "Sur les semi-collectifs de la Couturelle et sur les maisons équipées des quartiers récents, les capteurs sont intégrés au plan de couverture, pas surimposés : ce sont eux qui font l'étanchéité sur leur emprise. Toute intervention sur le versant suppose de les déposer puis de les reposer en respectant le calepinage et les abergements d'origine. Ce poste se chiffre au relevé, avec le nombre de modules et leur mode de fixation.",
    },
    {
      titre: "Lotissements, PLU et bailleurs sociaux",
      texte:
        "Hors du périmètre de l'église, il n'y a pas de servitude patrimoniale, mais le plan local d'urbanisme validé en juillet 2009 et les règlements de lotissement encadrent la teinte et le matériau de couverture. Les bailleurs sociaux construisent par ailleurs l'essentiel du logement neuf de la commune : sur leur parc, la décision passe par un interlocuteur institutionnel, et le devis est établi pour être présenté tel quel.",
    },
  ],

  /** { question, reponse } — propre a la commune, jamais la FAQ generale. */
  faq: [
    {
      question: "Ma maison est-elle dans le périmètre de l'église Saint-Sébastien ?",
      reponse:
        "Le périmètre d'abords s'étend sur 500 mètres autour de l'église classée : il couvre le vieux bourg du Grand-Bétheny et la place entre l'église et la mairie. Le Petit-Bétheny, les Aquarelles, la Couturelle, le domaine d'Henri et les Écavés se trouvent au-delà. Si votre adresse est dans le rayon et que les travaux changent l'aspect de la toiture, l'avis de l'Architecte des Bâtiments de France est requis. La mairie renseigne l'adresse au cas par cas, et nous le vérifions au relevé.",
    },
    {
      question: "Peut-on refaire la couverture d'une maison des Aquarelles sans toucher à l'isolation ?",
      reponse:
        "Rarement. Ces logements ont été conçus comme des ensembles isolés et étanches à l'air, jusqu'à la certification Passivhaus visée pour l'immeuble La Clairière. Déposer la couverture met à nu l'écran de sous-toiture, la lame d'air ventilée et parfois le pare-vapeur : si l'un des trois est repris à moitié, le désordre se déplace vers la condensation et vers la charpente. Le relevé détermine jusqu'où il faut descendre dans le complexe, et le devis le dit.",
    },
    {
      question: "Que deviennent les panneaux solaires pendant une réfection de toiture à la Couturelle ?",
      reponse:
        "Ils sont déposés, stockés, puis reposés une fois le versant refait. Sur des capteurs intégrés au plan de couverture, ce sont les abergements et les raccords périphériques qui assurent l'étanchéité : ils se remontent à l'identique ou se remplacent, et le calepinage d'origine se respecte. Le raccordement électrique reste du ressort de votre installateur ; nous traitons le plan de couverture et son étanchéité.",
    },
  ],

  /** Distance approximative depuis le siege d'Écury-sur-Coole, arrondie. */
  distanceKm: 45,

  communesVoisines: [
    "reims",
    "tinqueux",
    "cormontreuil",
    "muizon",
  ],
};

export default betheny;
