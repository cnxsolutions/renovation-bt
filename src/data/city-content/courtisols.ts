/**
 * Courtisols (51460).
 *
 * Convention de redaction : voir ./types.ts, et ./chalons-en-champagne.ts
 * comme fichier de reference.
 */
import type { CityContent } from "./types";

const courtisols: CityContent = {
  slug: "courtisols",

  metaTitle: "Couvreur à Courtisols (51460) — toiture",
  metaDescription:
    "Rénovation BT, couvreur établi à Écury-sur-Coole, intervient à Courtisols : toiture, tuile mécanique, bâtiments agricoles, zinguerie. Devis gratuit.",

  h1: "Couvreur à Courtisols (51460)",

  intro: [
    "Réputé le plus long village de France, Courtisols étire son bâti sur près de sept kilomètres le long de la vallée de la Vesle, en une succession de village-rues héritée de ses anciennes paroisses.",
    "Rénovation BT est une entreprise artisanale de couverture installée à Écury-sur-Coole depuis 2010, à une quinzaine de kilomètres de Courtisols. Nous y intervenons sur la réfection et l'entretien des toitures, la couverture des bâtiments agricoles, la zinguerie, la pose et le remplacement des gouttières et des descentes, le démoussage et le traitement hydrofuge.",
    "Le déplacement et le devis sont gratuits. Sur un linéaire de sept kilomètres, les situations n'ont rien de commun d'un bout à l'autre du village : c'est le relevé à l'adresse qui fixe la nature des travaux, pas une moyenne communale.",
  ],

  sections: [
    {
      titre: "Sept kilomètres de village-rue : ce que cela change sur un chantier à Courtisols",
      paragraphes: [
        "Courtisols n'a pas de centre compact. Le bâti se déroule le long de la rue, sur environ sept kilomètres, en trois séquences correspondant aux anciennes paroisses de Saint-Julien, de Saint-Memmie et de Saint-Martin. Un chantier ici ne ressemble pas à un chantier de centre ancien : les parcelles sont larges, la mitoyenneté serrée est rare, et la façade se laisse approcher directement depuis la rue.",
        "Cela simplifie l'installation. L'échafaudage se monte sur la parcelle, sans occuper la chaussée ni neutraliser du stationnement, et le véhicule se pose au pied du chantier. La dépose, l'évacuation des gravats et l'approvisionnement en tuiles se font par le même accès, ce qui réduit les manutentions.",
        "Le revers, c'est la longueur. Le territoire couvre 65,62 kilomètres carrés et le bâti se dilue sur toute sa longueur : deux adresses de Courtisols peuvent être séparées de plus de six kilomètres. Nous demandons donc l'adresse précise et non le seul nom de la commune, parce que la contrainte d'urbanisme comme l'accès varient d'une extrémité du village à l'autre.",
      ],
    },
    {
      titre: "Tuile mécanique et corps de ferme : la couverture courante à Courtisols",
      paragraphes: [
        "La couverture la plus répandue à Courtisols est la tuile mécanique de terre cuite à emboîtement. On la trouve sur les corps de ferme, sur les longères et sur l'ensemble du bâti des XIXe et XXe siècles bâti en long le long de la rue. Le pavillonnaire plus récent poursuit avec de la tuile mécanique en terre cuite ou en béton.",
        "Sur ces toitures, les désordres sont ceux d'une couverture posée en grande surface et vieillie sous le vent : tuiles déplacées ou fêlées, faîtage scellé qui se désolidarise, liteaux affaiblis, absence d'écran de sous-toiture sur les plus anciennes. La reprise ponctuelle reste possible tant que le modèle de tuile se retrouve encore ; passé un certain taux de casse sur le versant, le remplacement à l'unité devient sans fin et la réfection s'impose.",
        "Le bâti traditionnel du village est d'un autre âge : craie en moellons, pan de bois et torchis, couverts en tuile plate de petit moule à forte pente. Ces maisons demandent une reconnaissance de charpente avant tout chiffrage, et un traitement soigné des pieds de mur, la craie étant tendre et sensible au gel dès que l'eau de toiture s'y déverse mal.",
      ],
    },
    {
      titre: "Grandes toitures agricoles : fibrociment, bac acier et portée",
      paragraphes: [
        "Le territoire de Courtisols est agricole à 88 %, et cela se lit sur les toits. Aux maisons s'ajoutent les granges, les hangars et les bâtiments d'exploitation, qui représentent des surfaces de couverture sans commune mesure avec celles d'une habitation. On y travaille des mètres carrés, pas des détails d'ornement.",
        "Deux familles dominent : les plaques ondulées de fibrociment et le bac acier. Les plaques posées avant 1997 peuvent contenir de l'amiante : leur repérage conditionne la manière de procéder et doit être réglé avant toute dépose, jamais découvert une fois le bâtiment ouvert. Sur le bac acier, les points sensibles sont les fixations, les recouvrements et les rives, qui travaillent sous le vent.",
        "Les charpentes de ces bâtiments sont de grande portée, souvent en bois et souvent anciennes. Avant de reposer une couverture neuve, il faut savoir ce que la structure peut encore reprendre, et prévoir les moyens de levage nécessaires pour approvisionner en hauteur. Ces deux points pèsent sur un devis de bâtiment agricole plus que le choix du matériau lui-même.",
      ],
    },
  ],

  batiEtCouverture: {
    titre: "Ce que nous rencontrons sur les toits de Courtisols",
    paragraphes: [
      "Courtisols est bâti en pleine Champagne crayeuse, entre 105 et 204 mètres d'altitude, de part et d'autre de la vallée de la Vesle. Le bâti ancien y utilise ce que le sol donne : la craie en moellons, le pan de bois et le torchis. Ces maçonneries supportent mal les débordements d'eau de toiture, ce qui rend la gouttière et la descente aussi déterminantes que le versant lui-même.",
      "Le village est ouvert, sans relief ni boisement pour faire écran. Le vent d'ouest y sollicite en priorité les faîtages, les rives et les arêtiers : ce sont les premières lignes qui lâchent, avant que la casse ne gagne le champ courant du versant. Sur les grandes toitures agricoles, la même exposition travaille les fixations et les recouvrements.",
      "Enfin, le parc est très hétérogène le long des sept kilomètres. Une maison à pan de bois et torchis en tuile plate, une longère du XIXe en tuile mécanique, un hangar en bac acier et un pavillon des années 2000 peuvent se succéder sur quelques centaines de mètres. Il n'existe pas de toiture type à Courtisols, et c'est pour cela que nous nous déplaçons avant de chiffrer.",
    ],
    materiaux: [
      {
        nom: "Tuile mécanique à emboîtement",
        texte:
          "La couverture la plus courante du village : corps de ferme, longères, bâti des XIXe et XXe siècles, pavillonnaire récent. Remplacement à l'unité tant que le modèle se retrouve, reprise de faîtage, pose d'un écran de sous-toiture en réfection complète.",
      },
      {
        nom: "Tuile plate de petit moule",
        texte:
          "Bâti traditionnel en craie, pan de bois et torchis, à forte pente. Beaucoup de pièces au mètre carré : la reprise passe par l'ouverture du versant et par un contrôle préalable de la charpente.",
      },
      {
        nom: "Plaques ondulées de fibrociment",
        texte:
          "Bâtiments d'exploitation agricole, sur de très grandes surfaces. Celles posées avant 1997 peuvent contenir de l'amiante : le repérage se fait avant d'engager la dépose, et il détermine l'organisation complète du chantier.",
      },
      {
        nom: "Bac acier",
        texte:
          "Hangars, granges et bâtiments agricoles récents ou déjà refaits. Le travail porte sur les fixations, les recouvrements, les rives et les faîtières, que le vent de plaine sollicite en continu.",
      },
    ],
  },

  contraintes: [
    {
      titre: "Abords des églises Saint-Memmie et Saint-Martin",
      texte:
        "Courtisols compte trois églises pour un seul village, dont deux protégées : Saint-Memmie, inscrite au titre des monuments historiques le 12 septembre 1939, et Saint-Martin, inscrite le 9 décembre 1939. Chacune génère un périmètre de protection de 500 mètres qui découpe le linéaire du village. À l'intérieur de ces deux secteurs, l'aspect des toitures visibles est encadré et les travaux passent par l'avis de l'Architecte des Bâtiments de France. Comme le village s'étire sur sept kilomètres, la même commune comprend des adresses concernées et beaucoup d'autres qui ne le sont pas.",
    },
    {
      titre: "Un accès de chantier dégagé, hors de ces deux périmètres",
      texte:
        "Sur la plus grande partie du village, les parcelles sont larges et la mitoyenneté lâche. L'échafaudage et l'engin de levage se posent sur le terrain, sans autorisation d'occupation du domaine public ni neutralisation du stationnement. Cela allège l'installation et permet de traiter le versant d'un seul tenant plutôt que par tronçons.",
    },
    {
      titre: "Vent d'ouest en plaine crayeuse",
      texte:
        "Rien ne fait écran autour de Courtisols : ni relief marqué, ni masque boisé. Les faîtages, les rives, les arêtiers et les solins encaissent l'essentiel de l'effort, et ce sont eux qu'il faut contrôler en premier après un coup de vent. Sur les grandes toitures agricoles, la vérification porte d'abord sur les fixations et les recouvrements.",
    },
    {
      titre: "Bâtiments d'exploitation : portée et levage",
      texte:
        "Une grange ou un hangar de Courtisols ne se traite pas comme une maison. La charpente est de grande portée, souvent ancienne, et doit être reconnue avant qu'on décide de la couverture qu'elle recevra. L'approvisionnement en hauteur suppose par ailleurs des moyens de levage à prévoir dès le devis. Ces deux points s'établissent lors du relevé sur place.",
    },
  ],

  faq: [
    {
      question: "Mon adresse est-elle dans le périmètre d'une des églises de Courtisols ?",
      reponse:
        "Cela dépend de l'endroit du village, et la question est réelle ici puisque le bâti s'étire sur sept kilomètres. Deux périmètres de 500 mètres se superposent au linéaire, l'un autour de l'église Saint-Memmie, l'autre autour de l'église Saint-Martin, toutes deux inscrites en 1939. À l'intérieur, l'aspect de la couverture est encadré et l'avis de l'Architecte des Bâtiments de France est requis ; à l'extérieur, on retombe sur les seules règles du plan local d'urbanisme. La mairie renseigne la parcelle, et nous contrôlons ce point au relevé.",
    },
    {
      question:
        "Que faire d'une toiture en plaques de fibrociment sur un bâtiment agricole à Courtisols ?",
      reponse:
        "La première chose à établir est la date de pose. Les plaques ondulées mises en œuvre avant 1997 peuvent contenir de l'amiante, et cette information conditionne toute la suite : la manière de déposer, l'organisation du chantier et le devis lui-même. Ce repérage se règle avant d'ouvrir le bâtiment. Nous venons voir la couverture, la charpente et l'accès sur place, gratuitement, avant de vous proposer quoi que ce soit.",
    },
    {
      question: "Faut-il occuper la rue pour monter un échafaudage à Courtisols ?",
      reponse:
        "En règle générale, non. Le village est fait de parcelles larges avec un accès direct depuis la rue : l'échafaudage se monte sur votre terrain, et le véhicule comme le levage se positionnent au pied du chantier. C'est une différence nette avec les centres anciens, où l'échafaudage se monte depuis la chaussée et suppose une autorisation d'occupation du domaine public. Des configurations plus serrées existent malgré tout le long de la rue, et le relevé sur place permet de trancher.",
    },
  ],

  distanceKm: 15,

  communesVoisines: [
    "somme-vesle",
    "chalons-en-champagne",
    "suippes",
    "saint-memmie",
  ],
};

export default courtisols;
