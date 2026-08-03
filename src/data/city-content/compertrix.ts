/**
 * Compertrix (51510).
 *
 * Contenu redige pour cette commune. Convention : voir ./types.ts, et
 * ./chalons-en-champagne.ts comme fichier de reference.
 */
import type { CityContent } from "./types";

const compertrix: CityContent = {
  slug: "compertrix",

  metaTitle: "Couvreur à Compertrix (51510) — toiture",
  metaDescription:
    "Rénovation BT, couvreur à Écury-sur-Coole, intervient à Compertrix : réfection de toiture, zinguerie, gouttières et démoussage. Devis gratuit.",

  h1: "Couvreur à Compertrix (51510)",

  intro: [
    "La Coole, qui passe devant notre siège d'Écury, rejoint la Marne sur le territoire de Compertrix. Le village est bâti là, en fond de vallée, serré autour de son église Saint-Nicolas.",
    "Rénovation BT est une entreprise artisanale de couverture installée à Écury-sur-Coole depuis 2010, à 6 km de Compertrix — nous remontons la vallée de la Coole. Nous intervenons sur la réfection et l'entretien des toitures, la zinguerie, les gouttières, le démoussage et le traitement hydrofuge.",
    "Le déplacement et le devis sont gratuits. Le relevé se fait sur place, versant par versant, et le devis écrit vous est remis avant toute intervention.",
  ],

  sections: [
    {
      titre: "Le vieux village de Compertrix : toitures contiguës et rues étroites",
      paragraphes: [
        "Compertrix tient sur 4,76 km², la plus petite superficie communale du secteur, et compte environ 1 308 habitants. Le noyau ancien, groupé autour de l'église, en concentre l'essentiel sur des parcelles étroites. Les maisons se touchent, les toitures se raccordent, et les rues sont peu larges.",
        "Sur ce type de bâti, les points de fuite sont toujours les mêmes : noues entre deux versants voisins, solins de souche, raccords entre des bâtiments construits à cinquante ans d'écart, souches de cheminée mitoyennes. Nous partons de ces points singuliers pour le diagnostic, plutôt que du milieu du versant où l'eau passe rarement.",
        "L'accès conditionne le reste. Le positionnement du camion, de la benne et de l'échafaudage se prépare avant le chantier dans ces rues : c'est ce que nous vérifions au relevé, en même temps que l'état de la couverture. Une intervention bien organisée pèse moins sur vos voisins et moins sur le devis.",
      ],
    },
    {
      titre: "Les pavillons de Compertrix",
      paragraphes: [
        "Près de deux tiers du parc de Compertrix a été construit après 1970, et le logement y est individuel à plus de 97 % : c'est l'un des taux les plus élevés de l'agglomération châlonnaise. Les extensions pavillonnaires qui ceinturent le vieux village offrent des toitures simples, à deux pans, en tuile mécanique ou en tuile béton, sur des charpentes légères.",
        "Ces couvertures se traitent tout autrement que celles du bourg : parcelles ouvertes, aucun raccord complexe, échafaudage posé sans occuper la voirie. Les désordres relèvent surtout de l'âge — tuiles déplacées par le vent, tuiles béton qui s'altèrent en surface, liteaux affaiblis, écran de sous-toiture absent sur les constructions les plus anciennes de cette période.",
      ],
    },
    {
      titre: "Fond de vallée : humidité, mousse et eaux de toiture",
      paragraphes: [
        "Être bâti à la confluence de deux cours d'eau a des conséquences directes sur une couverture. Les brouillards de vallée entretiennent l'humidité, les versants nord sèchent lentement et la mousse s'y installe vite. Elle retient l'eau contre la tuile et finit par gêner l'écoulement dans les gouttières.",
        "Le démoussage suivi d'un traitement hydrofuge trouve tout son sens ici, à condition que la tuile soit encore saine : sur une couverture en fin de vie, il n'apporte rien de durable. Nous vérifions aussi le dimensionnement des gouttières et l'emplacement des descentes. Sur les maisons anciennes en craie du village, une descente mal placée mouille le pied de mur toute l'année, et la maçonnerie le paie avant la toiture.",
      ],
    },
  ],

  batiEtCouverture: {
    titre: "Ce que nous rencontrons sur les toits de Compertrix",
    paragraphes: [
      "Le bâti historique de Compertrix est en craie et en pierre de Savonnières, l'appareil que l'on retrouve dans l'église Saint-Nicolas, fondée en 1262 quand l'abbé de Saint-Pierre-aux-Monts donna aux habitants le terrain pour bâtir leur église. Ces maçonneries anciennes sont sensibles à l'humidité, et l'eau qui déborde d'un chéneau ou d'une descente les marque durablement.",
      "Deux terrains de travail cohabitent donc à quelques centaines de mètres l'un de l'autre : un noyau ancien mitoyen, aux accès étroits et aux raccords multiples, et une couronne pavillonnaire d'après 1970 sans aucune difficulté d'accès. C'est la particularité d'une commune très dense sur un très petit territoire.",
      "Le climat champenois s'exprime ici par l'humidité plus que par le vent : la position en fond de vallée abrite les versants, mais les fait sécher lentement. Les cycles de gel et de dégel de l'hiver s'attaquent ensuite aux tuiles qui ont pris l'eau.",
    ],
    materiaux: [
      {
        nom: "Terre cuite traditionnelle",
        texte:
          "Couverture du vieux village, sur les maisons de craie et de pierre de Savonnières. Réparation à l'identique, avec ouverture propre du versant plutôt qu'un simple remplacement glissé.",
      },
      {
        nom: "Tuile mécanique",
        texte:
          "Couverture des extensions pavillonnaires postérieures à 1970. Remplacement à l'unité, reprise des rives et du faîtage, écran de sous-toiture posé lors d'une réfection complète.",
      },
      {
        nom: "Tuile béton",
        texte:
          "Fréquente sur les pavillons des années 1970-1980. Sa surface s'altère, la tuile se gorge d'eau et la mousse s'y accroche d'autant plus vite en fond de vallée.",
      },
      {
        nom: "Zinc",
        texte:
          "Noues, chéneaux, solins et descentes du noyau ancien. Entre deux maisons mitoyennes, c'est la pièce la plus sollicitée du toit et la première à lâcher.",
      },
    ],
  },

  contraintes: [
    {
      titre: "Rues étroites autour de l'église",
      texte:
        "Compertrix est la commune la plus resserrée du secteur, avec environ 275 habitants au kilomètre carré. Autour de l'église Saint-Nicolas, les rues laissent peu de place à un camion, à une benne et à un échafaudage en même temps. Nous repérons les emplacements à la visite et, lorsque l'emprise déborde sur la chaussée, l'autorisation d'occupation du domaine public se demande avant le début des travaux.",
    },
    {
      titre: "Toitures mitoyennes et souches partagées",
      texte:
        "Dans le vieux village, refaire un toit veut souvent dire intervenir en limite de propriété : noue commune, souche de cheminée partagée, mur pignon voisin. L'accord du voisin et, parfois, un passage par sa parcelle se règlent en amont. Ce sont des points que nous soulevons au relevé, quand tout peut encore s'organiser sereinement.",
    },
    {
      titre: "Sol humide en fond de vallée",
      texte:
        "Le village est implanté au point de confluence de la Coole et de la Marne : la nappe est proche et les terrains sont souples par période. Cela pèse sur l'implantation des appuis d'échafaudage, qui doivent être calés sur des surfaces stables. Nous en tenons compte au moment de définir le montage, et cela oriente parfois le choix de la saison d'intervention.",
    },
    {
      titre: "Déclaration préalable en mairie",
      texte:
        "La commune ne porte pas de monument historique protégé ni de secteur patrimonial : votre projet ne passe pas devant l'Architecte des Bâtiments de France. Le cadre est celui du PLU, avec une déclaration préalable à déposer en mairie dès que le matériau, la teinte ou la forme du toit change. Nous fournissons les éléments techniques nécessaires au dossier.",
    },
  ],

  faq: [
    {
      question: "Comment accéder à un toit dans les rues étroites du vieux village de Compertrix ?",
      reponse:
        "Cela se prépare avant, jamais le jour de la livraison des matériaux. Nous repérons au relevé où l'échafaudage peut se monter, où la benne se pose et où le camion peut stationner sans bloquer la rue. Quand l'emprise déborde sur la chaussée, une autorisation d'occupation du domaine public se demande en mairie et le stationnement est neutralisé sur la durée du chantier.",
    },
    {
      question: "Faut-il l'avis de l'Architecte des Bâtiments de France à Compertrix ?",
      reponse:
        "Non. La commune ne compte pas de monument historique classé ou inscrit, ni de site patrimonial remarquable : aucun périmètre d'abords ne s'applique au bâti du village. Vos travaux relèvent du PLU communal et d'une déclaration préalable, à déposer en mairie dès que l'aspect extérieur de la toiture est modifié.",
    },
    {
      question: "Pourquoi la mousse revient-elle si vite sur les toits de Compertrix ?",
      reponse:
        "Parce que le village est bâti en fond de vallée, exactement là où la Coole se jette dans la Marne. L'humidité y stagne plus longtemps qu'en position haute, et les versants nord ne sèchent jamais complètement. Un démoussage suivi d'un traitement hydrofuge rétablit l'écoulement, mais il se renouvelle plus souvent ici que sur un plateau. Nous vous indiquons au relevé la fréquence adaptée à l'exposition de votre toiture.",
    },
  ],

  distanceKm: 6,

  communesVoisines: [
    "chalons-en-champagne",
    "fagnieres",
    "saint-memmie",
    "coolus",
    "ecury-sur-coole",
  ],
};

export default compertrix;
