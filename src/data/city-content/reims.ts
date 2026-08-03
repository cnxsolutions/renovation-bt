/**
 * Reims (51100).
 *
 * Convention de redaction : voir ./types.ts, et ./chalons-en-champagne.ts
 * comme fichier de reference.
 */
import type { CityContent } from "./types";

const reims: CityContent = {
  slug: "reims",

  metaTitle: "Couvreur à Reims (51100) — toiture, zinc",
  metaDescription:
    "Rénovation BT, artisan couvreur dans la Marne, intervient à Reims : ardoise, zinc, réfection de toiture, zinguerie, gouttières. Devis gratuit.",

  h1: "Couvreur à Reims (51100)",

  intro: [
    "Reims a été relevée en une décennie après 1918 : 6 500 permis de construire déposés entre 1920 et 1930. Ses toits racontent cette décennie-là — ardoise sur comble brisé, zinc travaillé, lucarnes alignées.",
    "Rénovation BT est une entreprise artisanale de couverture installée à Écury-sur-Coole depuis 2010, à 45 km au sud de Reims. Nous y intervenons sur la réfection et l'entretien des toitures, la zinguerie, la pose et le remplacement des gouttières, le démoussage et le traitement hydrofuge.",
    "Le déplacement et le devis sont gratuits, y compris à cette distance. Le relevé est fait sur place par l'artisan qui exécutera les travaux, et le devis écrit détaille les matériaux, les quantités et le prix avant tout démarrage.",
  ],

  sections: [
    {
      titre: "Réfection de toiture dans le centre reconstruit de Reims",
      paragraphes: [
        "Le centre de Reims est un tissu continu d'immeubles de rapport des années 1920, de trois à cinq étages, mitoyens sur des rangs entiers : soubassement en moellon calcaire, étages en brique, encadrements en pierre de taille. Au-dessus, la règle est le comble brisé à la Mansart — brisis en ardoise, terrasson en zinc, lucarnes en série.",
        "Ces couvertures ont cent ans, et elles arrivent en fin de premier cycle presque toutes en même temps, rue par rue. Les désordres que nous cherchons d'abord sont ceux de cet âge-là : clous et crochets d'ardoise corrodés qui lâchent par plaques sur le brisis, zinc du terrasson aminci et percé aux points de stagnation, soudures ouvertes en fond de chéneau, solins de souche qui ont travaillé.",
        "Sur un comble brisé, c'est la ligne de bris qui concentre les ennuis : l'ardoise s'y arrête, le zinc y commence, et une reprise mal faite à cet endroit se lit au plafond du dernier étage. C'est le premier point que nous regardons quand une fuite est signalée dans un immeuble rémois.",
      ],
    },
    {
      titre: "Zinguerie et ornements Art déco sur les immeubles rémois",
      paragraphes: [
        "La Reconstruction a fait du zinc un matériau d'écriture autant que de couverture : habillages de lucarne, épis, ornements de faîtage, corniches saillantes, chéneaux encaissés dissimulés derrière l'acrotère. Remplacer une pièce sur ces immeubles, c'est refaire une forme, pas seulement poser une longueur de développé.",
        "Le chéneau encaissé est le point faible du dispositif. Il ne déborde pas vers l'extérieur : quand il se bouche ou qu'une soudure cède, l'eau part dans le mur et dans le plancher, et le désordre se voit à l'étage avant de se voir sur le toit. Nous reprenons les fonds, les naissances et les trop-pleins, et nous contrôlons les descentes, souvent encastrées donc invisibles jusqu'à la tache d'humidité.",
        "Dans le périmètre protégé du centre, ces pièces se refont dans le matériau et la forme d'origine. Cette contrainte est intégrée au chiffrage, avant le montage de l'échafaudage, pas une fois le versant ouvert.",
      ],
    },
    {
      titre: "Hors du centre : cités-jardins, faubourgs et grands ensembles rémois",
      paragraphes: [
        "La cité-jardin du Chemin-Vert, lancée dès 1919, et les faubourgs pavillonnaires de l'entre-deux-guerres relèvent d'un tout autre registre : maisons individuelles et petits collectifs couverts en tuile mécanique de terre cuite. L'accès y est simple, les interventions souvent partielles — remplacement de tuiles, reprise de faîtage, gouttières et descentes.",
        "Les grands ensembles des années 1960 et 1970, à Croix-Rouge comme aux Châtillons, sont couverts en toiture-terrasse ou en très faible pente avec une étanchéité bitumineuse. Ce sont les relevés, les entourages d'émergence et les évacuations qui y font l'essentiel des désordres, et non la surface courante.",
      ],
    },
  ],

  batiEtCouverture: {
    titre: "Ce que nous rencontrons sur les toits rémois",
    paragraphes: [
      "Reims est la seule ville du secteur dont l'essentiel du parc bâti date d'une seule décennie. Détruite en très grande partie pendant la Première Guerre mondiale, elle a été reconstruite entre 1919 et 1929 par plus de quatre cents architectes, avec un usage précoce du béton armé dont les Halles du Boulingrin restent l'emblème. Les toitures y ont donc une homogénéité rare : mêmes volumes, mêmes matériaux, mêmes détails d'un immeuble au suivant.",
      "Cette homogénéité a une conséquence pratique. Les couvertures vieillissent ensemble. Un immeuble dont le voisin vient de refaire son brisis est rarement en meilleur état que lui : il a le même âge, la même exposition, et souvent le même charpentier d'origine.",
      "Enfin, tout se passe en hauteur et en mitoyenneté. Un immeuble rémois de quatre étages n'offre ni recul pour une nacelle ni cour intérieure accessible autrement que par un porche. L'état d'un toit s'y constate en montant, et l'organisation du chantier pèse autant que la couverture elle-même.",
    ],
    materiaux: [
      {
        nom: "Ardoise",
        texte:
          "Matériau dominant des combles brisés du centre reconstruit. Réparation au crochet ou au clou, reprise des noues et des solins, dépose par pans entiers lorsque la fixation d'origine est arrivée en bout de course.",
      },
      {
        nom: "Zinc",
        texte:
          "Terrassons, chéneaux encaissés, habillages de lucarne, épis et ornements de faîtage. C'est la partie qui lâche en premier sur un immeuble des années 1920, et celle qui demande le plus de façonnage.",
      },
      {
        nom: "Tuile mécanique de terre cuite",
        texte:
          "Cité-jardin du Chemin-Vert, faubourgs pavillonnaires de l'entre-deux-guerres et lotissements de périphérie. Remplacement à l'unité, reprise de faîtage, écran de sous-toiture en réfection complète.",
      },
      {
        nom: "Étanchéité bitumineuse",
        texte:
          "Toitures-terrasses et faibles pentes des grands ensembles des années 1960 et 1970. Les reprises portent sur les relevés, les évacuations et les entourages d'émergence.",
      },
      {
        nom: "Plomb",
        texte:
          "Solins, raccords de souche et pénétrations sur les édifices les plus travaillés du centre. Il se façonne sur place, au plus près de la maçonnerie existante.",
      },
    ],
  },

  contraintes: [
    {
      titre: "Site patrimonial remarquable du centre-ville",
      texte:
        "Le centre-ville de Reims est classé site patrimonial remarquable depuis juin 2020. Son plan de valorisation de l'architecture et du patrimoine, arrêté en conseil communautaire le 26 septembre 2024 après l'inventaire de près de 3 800 parcelles, encadre l'aspect des toitures. Une réfection visible depuis l'espace public passe par une déclaration préalable et l'avis de l'Architecte des Bâtiments de France, qui peut prescrire le matériau, la teinte, le mode de pose et le traitement des points singuliers.",
    },
    {
      titre: "Abords des monuments et colline Saint-Nicaise",
      texte:
        "La cathédrale Notre-Dame, l'ancienne abbaye Saint-Rémi et le palais du Tau sont inscrits au patrimoine mondial depuis 1991 ; la colline Saint-Nicaise l'est depuis 2015 au titre des coteaux, maisons et caves de Champagne, et relève de son propre dispositif. S'y ajoutent les périmètres de protection de nombreux autres monuments, de la Porte de Mars aux Halles du Boulingrin. Beaucoup d'adresses du centre en dépendent sans que leurs occupants le sachent : cela se vérifie au relevé.",
    },
    {
      titre: "Échafaudage, rue étroite et domaine public",
      texte:
        "Dans le centre, l'échafaudage empiète presque toujours sur le trottoir ou la chaussée, ce qui suppose une autorisation d'occupation du domaine public et la neutralisation du stationnement. Le recul manque pour installer une nacelle, et l'accès aux versants sur cour se fait par le porche de l'immeuble. Ces points se règlent avant le démarrage, pas le matin de la première livraison.",
    },
    {
      titre: "Mitoyenneté et ouvrages partagés",
      texte:
        "Les immeubles rémois sont accolés sur des rangs entiers. Chéneaux communs, souches de cheminée partagées, versants qui se rejoignent en limite : une réfection engage le voisin, et le plus souvent une copropriété. Le devis distingue alors ce qui relève de votre lot de ce qui relève des parties communes, pour que la décision puisse être prise en assemblée.",
    },
  ],

  faq: [
    {
      question: "Faut-il l'avis de l'Architecte des Bâtiments de France pour refaire une toiture à Reims ?",
      reponse:
        "Dans le centre-ville, oui : il est classé site patrimonial remarquable depuis 2020, et son plan de valorisation encadre l'aspect des toitures visibles depuis l'espace public. L'avis accompagne alors l'instruction de la déclaration préalable et peut fixer le matériau, la teinte et le mode de pose. En dehors de ce périmètre et des abords de monuments, la déclaration préalable en mairie suffit. La mairie situe votre parcelle, et nous vérifions le régime applicable avant de chiffrer.",
    },
    {
      question: "Puis-je remplacer l'ardoise de mon comble par de la tuile à Reims ?",
      reponse:
        "Dans le centre reconstruit, c'est très rarement accepté : l'ardoise sur comble brisé fait partie de l'écriture de la Reconstruction, et le plan de valorisation du site patrimonial remarquable peut refuser un matériau au seul motif de l'aspect. Hors périmètre, la question se règle au regard du règlement d'urbanisme applicable à votre secteur. Dans les deux cas, le changement de matériau passe par une déclaration préalable, et il faut vérifier que la charpente accepte la nouvelle charge.",
    },
    {
      question: "Comment accède-t-on à un toit dans une rue étroite du centre de Reims ?",
      reponse:
        "Par un échafaudage de pied, avec une autorisation d'occupation du domaine public et la neutralisation des places de stationnement concernées. La nacelle est rarement praticable faute de recul devant des façades de trois à cinq étages. Quand le versant donne sur cour, le passage se fait par le porche de l'immeuble, ce qui suppose l'accord de la copropriété. Nous tranchons ce point sur place, avant de remettre le devis.",
    },
  ],

  distanceKm: 45,

  communesVoisines: [
    "tinqueux",
    "cormontreuil",
    "betheny",
    "bezannes",
    "muizon",
  ],
};

export default reims;
