/**
 * Sainte-Ménehould (51800).
 *
 * Fichier redige. Convention : voir ./types.ts, et ./chalons-en-champagne.ts
 * comme fichier de reference.
 */
import type { CityContent } from "./types";

const sainteMenehould: CityContent = {
  slug: "sainte-menehould",

  metaTitle: "Couvreur à Sainte-Ménehould (51800)",
  metaDescription:
    "Rénovation BT, couvreur établi à Écury-sur-Coole depuis 2010. Toiture, tuile plate, ardoise, zinguerie et gouttières à Sainte-Ménehould. Devis gratuit.",

  h1: "Couvreur à Sainte-Ménehould (51800)",

  intro: [
    "Sainte-Ménehould a été rebâtie d'un seul tenant après l'incendie de 1719 : un centre de brique et de gaize sous des toits à la Mansart, où chaque couverture porte un brisis et un terrasson.",
    "Rénovation BT est une entreprise artisanale de couverture installée à Écury-sur-Coole depuis 2010. Nous intervenons à Sainte-Ménehould sur la réfection et l'entretien des toitures, la zinguerie, la pose et le remplacement des gouttières, le démoussage et le traitement hydrofuge.",
    "Le déplacement et le devis sont gratuits, y compris jusqu'en Argonne. Le relevé se fait sur place, à l'heure qui vous convient : nous sommes joignables au 07 61 54 53 43 du lundi au samedi.",
  ],

  sections: [
    {
      titre: "Le comble brisé, toiture type du centre de Sainte-Ménehould",
      paragraphes: [
        "Après l'incendie de 1719, la reconstruction confiée à l'ingénieur Philippe de la Force a donné au centre une homogénéité rare : des façades où alternent assises de brique et assises de gaize, et par-dessus, le toit à la Mansart. L'hôtel de ville, dont la première pierre a été posée en 1730, en est le modèle.",
        "Un comble brisé, ce n'est pas un deux-pans. Ce sont deux ouvrages de nature différente sur le même toit : un brisis à très forte pente, presque vertical, et un terrasson à faible pente au-dessus. Ils ne se posent pas de la même façon et ne vieillissent pas au même rythme. La ligne de bris qui les sépare est l'un des points de fuite les plus fréquents, avec les lucarnes à croupe, les égouts en pénétration et les souches de brique.",
        "S'y ajoutent les contraintes de chantier : un échafaudage plus haut que pour une toiture ordinaire, une protection du brisis pendant les travaux, et l'état d'une charpente ancienne à vérifier avant de s'engager sur la reprise. Tout cela se relève sur place, gratuitement, et se retrouve détaillé au devis.",
      ],
    },
    {
      titre: "Ville haute, ville basse : deux façons d'accéder au toit",
      paragraphes: [
        "Sainte-Ménehould se lit sur deux niveaux. La ville haute occupe la butte de gaize, autour du château et de son église : rues en pente, gabarit limité, virages courts. La ville basse s'étale dans la vallée de l'Auve, plus accessible, mais plus humide.",
        "Là-haut, faire monter une nacelle n'est pas toujours possible, et l'échafaudage devient la seule solution — sur un terrain qui n'est jamais de niveau. En bas, c'est l'eau qui commande : proximité de l'Auve, versants nord qui ne sèchent pas, mousse qui reprend vite après nettoyage. Nous regardons l'accès et l'exposition au relevé : sur une même commune, deux toitures de dimensions identiques ne demandent pas le même chantier.",
      ],
    },
    {
      titre: "L'humidité argonnaise et l'entretien des couvertures",
      paragraphes: [
        "L'Argonne est plus boisée et plus arrosée que la plaine crayeuse voisine, et cela se voit sur les toits. Les mousses s'installent plus vite, les versants nord restent humides plus longtemps, et l'eau retenue contre la tuile finit par pénétrer là où le gel l'attend. Les maçonneries anciennes de brique et de gaize connaissent, elles, des remontées d'humidité que la couverture seule ne réglera pas.",
        "Le démoussage suivi d'un traitement hydrofuge rétablit l'écoulement et retarde cette pénétration. C'est un entretien : il prolonge une couverture saine, il ne rattrape pas un versant en fin de vie, et nous vous le disons quand c'est le cas. Sur un brisis d'ardoise ou de tuile plate, le nettoyage demande en outre de la retenue : une pente pareille ne se lave pas comme un toit de pavillon.",
      ],
    },
  ],

  batiEtCouverture: {
    titre: "Ce que nous rencontrons sur les toits de Sainte-Ménehould",
    paragraphes: [
      "Le centre de Sainte-Ménehould est un ensemble du XVIIIe siècle issu d'une seule reconstruction. L'appareil champenois y alterne assises de brique et assises de gaize — la pierre siliceuse verdâtre extraite en Argonne — sous des toits à la Mansart. Autour de ce noyau : des faubourgs du XIXe siècle, du bâti rural argonnais et des lotissements récents.",
      "Selon les édifices, le brisis reçoit de l'ardoise ou de la tuile plate de petit moule, tradition champenoise ; le terrasson, lui, demande une mise en œuvre adaptée à sa faible pente. Cette double nature explique la plupart des désordres rencontrés ici : un terrasson en défaut fuit sans que rien ne se voie depuis la rue, et le plafond de l'étage le signale avant la façade.",
      "Le climat fait le reste. Plus de bois et plus de pluie qu'en plaine, des versants nord qui sèchent mal, puis le gel et le dégel de l'hiver marnais : une tuile poreuse ou un joint ouvert ne passe pas beaucoup de saisons. Un contrôle au sortir de l'hiver reste le meilleur moyen d'éviter une reprise de charpente.",
    ],
    materiaux: [
      {
        nom: "Ardoise",
        texte:
          "Brisis des combles à la Mansart du centre XVIIIe et édifices publics. Réparation au crochet, reprise des noues et des solins, format et teinte à respecter dans le secteur protégé.",
      },
      {
        nom: "Tuile plate de petit moule",
        texte:
          "Tradition champenoise, présente sur les brisis comme sur le bâti ancien des faubourgs. Forte pente et fort recouvrement : la réparation passe par l'ouverture propre du versant, jamais par une tuile glissée sous les rangs.",
      },
      {
        nom: "Zinc et plomb",
        texte:
          "Ligne de bris, lucarnes à croupe, égouts en pénétration, solins des souches de brique. Sur un comble brisé, ce sont ces raccords qui fuient, rarement le versant lui-même.",
      },
      {
        nom: "Tuile mécanique",
        texte:
          "Bâti rural argonnais et lotissements récents. Remplacement à l'unité, reprise des faîtages et des rives, écran de sous-toiture posé en réfection complète.",
      },
    ],
  },

  contraintes: [
    {
      titre: "Un centre XVIIIe protégé",
      texte:
        "La place du Général-Leclerc aligne des façades de brique et de pierre protégées au titre des monuments historiques, comme la place d'Austerlitz, l'hôtel de ville, le château et son église, ou l'ancienne faïencerie du XVIIIe siècle. Une réfection visible depuis ces espaces se prépare avec l'Architecte des Bâtiments de France, qui se prononce sur le matériau, la teinte et le dessin des lucarnes. La ville est par ailleurs labellisée Petite Cité de Caractère : l'homogénéité du centre est ce qui fait sa valeur, et ce qui encadre les travaux.",
    },
    {
      titre: "Accès à la ville haute",
      texte:
        "La butte de gaize se monte par des rues en pente, au gabarit limité. Une nacelle n'y trouve pas toujours sa place, et l'échafaudage doit être calé sur un sol qui ne l'est pas. Nous repérons l'accès au relevé et nous chiffrons le moyen réellement praticable, pas celui qui arrangerait le devis.",
    },
    {
      titre: "Le chantier d'un toit à la Mansart",
      texte:
        "Reprendre un comble brisé demande plus de hauteur d'échafaudage qu'une couverture ordinaire, une protection du brisis pendant les travaux, et souvent la reprise de pièces de charpente découvertes en cours de dépose. Nous le disons au relevé plutôt qu'en cours de chantier : sur ce type de toiture, une partie de ce qui sera à faire n'est visible qu'une fois le versant ouvert. Le devis distingue alors ce qui est ferme de ce qui reste à confirmer.",
    },
  ],

  faq: [
    {
      question: "Puis-je remplacer l'ardoise de mon brisis par de la tuile mécanique ?",
      reponse:
        "Dans le centre protégé de Sainte-Ménehould, non. L'Architecte des Bâtiments de France se prononce sur l'aspect extérieur, et le matériau comme la teinte y sont généralement imposés pour préserver l'unité du bâti reconstruit après 1719. Hors de ce périmètre, ce sont les règles d'urbanisme communales qui encadrent les matériaux de couverture, et elles peuvent elles aussi limiter le choix. Nous vérifions votre adresse au relevé avant de chiffrer quoi que ce soit.",
    },
    {
      question: "Pourquoi une toiture à la Mansart demande-t-elle plus de travail qu'un toit à deux pans ?",
      reponse:
        "Parce qu'il y a deux toitures sur le même bâtiment. Le brisis, presque vertical, se travaille en hauteur et se pose comme un mur incliné ; le terrasson, à faible pente, exige une mise en œuvre différente et ne pardonne aucun défaut. Entre les deux, la ligne de bris doit être parfaitement étanche. S'y ajoutent les lucarnes à croupe et les souches de brique, qui multiplient les raccords. C'est un ouvrage de couvreur, pas une pose de tuiles.",
    },
    {
      question: "Vous déplacez-vous jusqu'en Argonne depuis Écury-sur-Coole ?",
      reponse:
        "Oui. Une cinquantaine de kilomètres séparent notre siège de Sainte-Ménehould, à l'est de Châlons-en-Champagne, et le déplacement pour établir un devis reste gratuit. Nous intervenons dans la ville haute comme dans la ville basse, ainsi que dans les communes du secteur. Vous nous joignez au 07 61 54 53 43, du lundi au samedi.",
    },
  ],

  distanceKm: 50,

  communesVoisines: [
    "courtisols",
    "somme-vesle",
    "suippes",
    "chalons-en-champagne",
  ],
};

export default sainteMenehould;
