/**
 * Châlons-en-Champagne (51000).
 *
 * Fichier de reference : il sert de modele de redaction aux autres communes.
 * Voir `./types.ts` pour la convention complete.
 */
import type { CityContent } from "./types";

const chalonsEnChampagne: CityContent = {
  slug: "chalons-en-champagne",

  metaTitle: "Couvreur à Châlons-en-Champagne (51000)",
  metaDescription:
    "Rénovation BT, couvreur établi à Écury-sur-Coole, intervient à Châlons-en-Champagne : toiture, ardoise, tuile plate, zinguerie, gouttières. Devis gratuit.",

  h1: "Couvreur à Châlons-en-Champagne (51000)",

  intro: [
    "Préfecture de la Marne, Châlons a gardé son cœur médiéval dans son enceinte : près de 80 % de son bâti ancien est à pan de bois, sur un plateau de craie.",
    "Rénovation BT est une entreprise artisanale de couverture installée à Écury-sur-Coole depuis 2010, à 8 km du centre de Châlons. Nous y intervenons sur la réfection et l'entretien des toitures, la zinguerie, la pose et le remplacement des gouttières, le démoussage et le traitement hydrofuge.",
    "Le déplacement et le devis sont gratuits. Vous êtes reçu par l'artisan qui montera sur votre toit : c'est lui qui relève, qui chiffre et qui exécute les travaux.",
  ],

  sections: [
    {
      titre: "Réfection de toiture sur le bâti à pan de bois de Châlons",
      paragraphes: [
        "Le bois est resté le matériau de construction dominant en Champagne jusqu'à la fin du XIXe siècle, et Châlons en garde la marque : près de 80 % de son bâti ancien est à pan de bois, alors même que la ville est posée sur la craie. Place de la République, à la maison de la Petite Juiverie ou à la maison Clémangis, les étages débordent en encorbellement au-dessus de la rue.",
        "Sur ces maisons, la couverture ne se lit pas seule. La charpente a travaillé pendant des siècles, les pans se sont déformés, et les murs ne reprennent pas les charges comme une maçonnerie. Un versant qui ondule n'est pas forcément un problème de tuiles : nous regardons d'abord ce qui porte.",
        "Les toitures y sont à forte pente et couvertes en tuile plate de terre cuite de petit moule, le format employé au nord de la Loire. Petit format veut dire beaucoup de pièces au mètre carré et beaucoup de recouvrements : la réparation consiste à ouvrir proprement le versant, pas à glisser une tuile depuis l'échelle.",
      ],
    },
    {
      titre: "Zinguerie et couvertures du centre de Châlons",
      paragraphes: [
        "Sur ses édifices majeurs, Châlons emploie l'ardoise et le plomb. Les deux flèches de la collégiale Notre-Dame-en-Vaux, inscrite au patrimoine mondial depuis 1998 au titre des chemins de Saint-Jacques-de-Compostelle, sont couvertes de plomb ; celle de la tour nord-ouest a été refaite en 1852. Elles rappellent que la ville a toujours mêlé les matériaux de couverture au lieu d'en imposer un seul.",
        "Ce vocabulaire descend jusqu'au bâti courant. Les immeubles de rapport du XIXe siècle et les façades Art nouveau et Art déco — celle du 7 cours d'Ormesson mêle brique jaune, pierre calcaire et béton — portent du zinc en couverture, en habillage de lucarne et en ornement. Ces pièces façonnées sont celles qui s'ouvrent en premier.",
        "Nous reprenons les chéneaux encaissés, les noues, les solins de souche, les descentes et les habillages, en zinc comme en PVC ou en aluminium sur les constructions récentes. Sur une maison de ville châlonnaise, c'est presque toujours la zinguerie qui lâche avant le versant.",
      ],
    },
    {
      titre: "Faubourgs, immeubles et collectifs : trois régimes de toiture",
      paragraphes: [
        "Châlons est une ville de logement collectif : 68,7 % de son parc est constitué d'appartements contre 31,3 % de maisons, et un logement sur deux est antérieur à 1971. Un couvreur y travaille donc autant sur des toits d'immeuble que sur des pavillons.",
        "Dans les faubourgs bâtis à la fin du XIXe et au début du XXe siècle, la tuile mécanique domine, sur des charpentes plus légères que celles du centre. Les désordres y sont d'une autre nature : tuiles déplacées par le vent, liteaux affaiblis, absence d'écran de sous-toiture sur les constructions les plus anciennes.",
        "Sur les grands ensembles des années 1960 et 1970, la couverture devient une étanchéité de faible pente ou une toiture-terrasse. La fuite ne vient alors ni d'une tuile ni d'un faîtage, mais d'un relevé décollé, d'une évacuation obstruée ou d'un acrotère fissuré — et la décision de travaux passe par un syndic ou un bailleur.",
      ],
    },
  ],

  batiEtCouverture: {
    titre: "Ce que nous rencontrons sur les toits châlonnais",
    paragraphes: [
      "Châlons n'a jamais été reconstruite en bloc. Son cœur médiéval est resté dans son enceinte de 106 hectares, et la ville a empilé les époques au lieu de les remplacer. Le résultat se lit sur les toits : à quelques rues d'intervalle, on trouve de la tuile plate, de l'ardoise, du plomb, du zinc et de la toiture-terrasse. Aucune autre commune du secteur ne réunit ces cinq familles.",
      "L'autre signature locale est la maçonnerie champenoise, apparue au XVIe siècle : une alternance de brique et de craie ou de pierre de Savonnières, du simple mille-feuille horizontal au damier géométrique du couvent Sainte-Marie. Sur ces murs mixtes, la craie est tendre et gélive ; les scellements de solin et les fixations en pied de souche ne se traitent pas comme dans une brique pleine.",
      "Le tissu est dense et mitoyen, traversé par les bras du Mau et du Nau. Les toitures se voient depuis la rue et se bordent souvent de chéneaux encaissés plutôt que de gouttières apparentes. Un chéneau encaissé qui déborde ne se signale pas au sol : il se signale au plafond de l'étage, quand le dégât est déjà fait.",
    ],
    materiaux: [
      {
        nom: "Tuile plate de petit moule",
        texte:
          "Couverture traditionnelle du bâti à pan de bois du centre. Forte pente, recouvrement important, grand nombre de pièces : la reprise demande d'ouvrir le versant plutôt que de remplacer à l'unité.",
      },
      {
        nom: "Ardoise",
        texte:
          "Édifices publics, hôtels particuliers et immeubles bourgeois du centre ancien. Pose au crochet ou au clou, avec reprise des solins et des noues en zinc ou en plomb.",
      },
      {
        nom: "Zinc",
        texte:
          "Chéneaux encaissés, noues, descentes, habillages de lucarne et ornements des immeubles du XIXe et des façades Art nouveau et Art déco. C'est la partie du toit que nous réparons le plus souvent à Châlons.",
      },
      {
        nom: "Tuile mécanique",
        texte:
          "Faubourgs de la fin du XIXe et du début du XXe siècle, puis pavillons d'après-guerre. Remplacement à l'unité, reprise de faîtage, pose d'un écran de sous-toiture en réfection.",
      },
      {
        nom: "Étanchéité de faible pente",
        texte:
          "Collectifs des années 1960-1970, dont les quartiers en renouvellement urbain. Travail sur les relevés, les acrotères et les évacuations, pas sur un versant.",
      },
    ],
  },

  contraintes: [
    {
      titre: "Site patrimonial remarquable",
      texte:
        "Châlons est couverte par un Site patrimonial remarquable depuis le 7 juillet 2016, dont le règlement s'applique depuis le 14 novembre 2019. Le périmètre déborde largement le vieux centre : il s'étend de l'avenue de Paris à l'avenue de Metz et du boulevard Croix-Dampierre à l'avenue Sarrail. Ce règlement s'ajoute au PLU, classe les immeubles par type architectural et par valeur patrimoniale, et encadre donc l'aspect des couvertures visibles. La Ville met gratuitement un architecte-conseil à disposition pour les projets situés dans ce périmètre.",
    },
    {
      titre: "Abords des monuments historiques",
      texte:
        "Cinquante-trois édifices châlonnais portent au moins une protection au titre des monuments historiques, treize classés et quarante inscrits : à eux seuls, 13 % des monuments protégés de la Marne. Les périmètres d'abords qui en découlent couvrent une grande partie de la ville. Les travaux qui y modifient l'aspect extérieur passent par l'avis de l'Architecte des Bâtiments de France, qui peut imposer le matériau, la teinte et le mode de pose. Nous en tenons compte au moment du chiffrage, pas une fois l'échafaudage monté.",
    },
    {
      titre: "Rues étroites, encorbellements et emprise sur la voirie",
      texte:
        "Dans le centre ancien, l'échafaudage déborde presque toujours sur le trottoir ou la chaussée : il faut une autorisation d'occupation du domaine public et la neutralisation du stationnement. Les encorbellements compliquent le montage, puisque l'étage surplombe la rue et que les pieds se posent en retrait de l'aplomb de l'égout de toit. Les bras du Mau et du Nau ferment par ailleurs certains accès arrière. Ces points se règlent au relevé, avant le chiffrage.",
    },
    {
      titre: "Bâti mitoyen et copropriétés",
      texte:
        "Le centre châlonnais est construit en rangs continus : raccords en limite de propriété, souches de cheminée partagées, chéneaux communs. L'intervention se prépare avec le voisin, et l'accès par sa parcelle se règle avant, pas le jour de la pose. Sur les immeubles, qui forment plus des deux tiers du parc de la ville, la décision passe par le syndic et l'assemblée générale : le devis est établi pour être présenté tel quel.",
    },
  ],

  faq: [
    {
      question: "Ma maison est-elle dans le Site patrimonial remarquable de Châlons ?",
      reponse:
        "Le périmètre est bien plus large que le vieux centre : il va de l'avenue de Paris à l'avenue de Metz et du boulevard Croix-Dampierre à l'avenue Sarrail. Si votre adresse s'y trouve, le règlement en vigueur depuis novembre 2019 s'ajoute aux règles du PLU et encadre l'aspect de votre couverture. La mairie renseigne l'adresse au cas par cas, et la Ville met un architecte-conseil gratuitement à disposition pour les projets concernés. Nous vérifions ce point au relevé, avant de chiffrer.",
    },
    {
      question: "Peut-on remplacer la tuile plate par de la tuile mécanique à Châlons ?",
      reponse:
        "Cela dépend d'abord de l'endroit. Dans le Site patrimonial remarquable et dans les abords des monuments protégés, l'aspect de la couverture visible est encadré : le changement de matériau n'est pas acquis. Cela dépend ensuite de la pente. Les toitures anciennes du centre sont très pentues, dessinées pour la petite tuile plate, et tous les modèles mécaniques ne s'y posent pas. Nous relevons la pente et vérifions le régime applicable à votre adresse avant de vous proposer une solution.",
    },
    {
      question: "Comment intervenir sur une maison à encorbellement du centre ancien ?",
      reponse:
        "L'étage déborde au-dessus du trottoir : l'échafaudage se monte sur le domaine public, avec autorisation et neutralisation du stationnement, et ses pieds se placent en retrait de l'aplomb de l'égout. Sur ces façades, l'eau de toiture est rejetée directement au-dessus de la rue, ce qui rend le chéneau et sa naissance particulièrement sensibles. Le relevé sur place détermine le mode de montage et l'emprise nécessaire. Il est gratuit, comme le devis.",
    },
  ],

  distanceKm: 8,

  communesVoisines: [
    "saint-memmie",
    "fagnieres",
    "compertrix",
    "saint-martin-sur-le-pre",
    "sarry",
    "ecury-sur-coole",
  ],
};

export default chalonsEnChampagne;
