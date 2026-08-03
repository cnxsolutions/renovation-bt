/**
 * CONTENU DE LA PAGE D'ACCUEIL — source unique des chaines et des listes.
 *
 * Pourquoi ce fichier existe : la page d'accueil est composee de dix sections
 * qui parlent des memes faits (les horaires, la distance, la gratuite du devis,
 * les chantiers). Ecrire ces faits dans chaque composant, c'est garantir qu'un
 * jour l'un d'eux dira autre chose que les autres. Tout ce qui est publie ici
 * derive soit de `src/lib/constants.ts`, soit d'un fichier deja publie du depot,
 * et chaque valeur porte sa source.
 *
 * DETTE CONNUE, A SOLDER HORS DU PERIMETRE DE CETTE REFONTE :
 * `CHANTIERS` recopie le tableau `realisations` de
 * `src/app/realisations/page.tsx`. La bonne forme est un
 * `src/data/realisations.ts` lu par les deux pages. Tant que ce fichier
 * n'existe pas, toute modification d'un chantier doit etre faite AUX DEUX
 * ENDROITS.
 */

import { BUSINESS } from "@/lib/constants";
import { cities } from "@/data/cities";
import type { FaqItem } from "@/data/faq";
import { DISTANCE_PHRASE, HORAIRES_EN_PHRASE } from "./business-facts";

/*
 * Les faits qui appartiennent a l'entreprise et non a cette page vivent dans
 * `./business-facts` : horaires complets, gratuite du devis et du deplacement,
 * distance au centre de Chalons. `CTABanner` les partage avec les dix autres
 * pages du site.
 */

/* -------------------------------------------------------------------------- */
/*  CHANTIERS REELS — la seule preuve locale du site                          */
/* -------------------------------------------------------------------------- */

export interface Chantier {
  id: string;
  /** Ce que le chantier montre, en francais lisible. */
  titre: string;
  /** Famille de metier, reprise de /realisations. */
  metier: "Toiture" | "Zinguerie";
  /** Commune. Les cinq chantiers ont eu lieu a Chalons-en-Champagne. */
  ville: string;
  /** Photo avant travaux. Absente quand seule la photo finale existe. */
  avant?: string;
  /** Photo apres travaux. Toujours presente. */
  apres: string;
}

/**
 * Les cinq chantiers photographies, tous a Chalons-en-Champagne.
 *
 * TROIS d'entre eux disposent d'une paire avant/apres ; les deux derniers n'ont
 * qu'une photo finale. C'est pourquoi aucun titre de section n'annonce « cinq
 * avant/apres » : la page dirait alors le contraire de ce qu'elle montre.
 * Source des fichiers : `src/app/realisations/page.tsx` (voir dette n° 1).
 */
export const CHANTIERS: readonly Chantier[] = [
  {
    id: "refection-toiture-complete",
    titre: "Réfection complète de toiture",
    metier: "Toiture",
    ville: "Châlons-en-Champagne",
    avant: "/images/maison-toiture-avant-chalonsenchampagne.webp",
    apres: "/images/maison-toiture-apres-chalonsenchampagne.webp",
  },
  {
    id: "toiture-terre-plein",
    titre: "Toiture de terre-plein rénovée",
    metier: "Toiture",
    ville: "Châlons-en-Champagne",
    avant: "/images/toiture-terreplein-renove-avant-chalonsenchampagne.webp",
    apres: "/images/toiture-terreplein-renove-apres-chalonsenchampagne.webp",
  },
  {
    id: "zinguerie-complete",
    titre: "Reprise complète de zinguerie",
    metier: "Zinguerie",
    ville: "Châlons-en-Champagne",
    avant: "/images/zinguerie-avant-chalonsenchampagne.webp",
    apres: "/images/zinguerie-apres-chalonsenchampagne.webp",
  },
  {
    id: "toiture-renovee",
    titre: "Toiture rénovée",
    metier: "Toiture",
    ville: "Châlons-en-Champagne",
    apres: "/images/toiture-renove-chalonsenchampagne.webp",
  },
  {
    id: "toiture-et-zinguerie",
    titre: "Toiture et zinguerie reprises",
    metier: "Zinguerie",
    ville: "Châlons-en-Champagne",
    apres: "/images/toiture-zinguerie-renove-chalonsenchampagne.webp",
  },
] as const;

/**
 * Image LCP de la page.
 *
 * C'est un chantier reel, pas un decor : le premier pixel que le visiteur
 * regarde doit deja prouver quelque chose. Dimensions LUES dans le fichier
 * (1536 x 1024), jamais estimees — le depot a deja porte un ratio faux.
 */
export const IMAGE_LCP = {
  src: "/images/toiture-renove-chalonsenchampagne.webp",
  width: 1536,
  height: 1024,
  legende: "Toiture rénovée à Châlons-en-Champagne",
} as const;

/* -------------------------------------------------------------------------- */
/*  PRESTATIONS — alignees sur les services declares de la fiche              */
/* -------------------------------------------------------------------------- */

/**
 * La fiche d'etablissement declare trois services : Roof inspection,
 * Roof repair, Roof installation — des ACTIONS. Le site vendait « Toitures /
 * Facades / Gouttieres » — des OBJETS. Les deux taxonomies ne se recouvraient
 * nulle part, alors que la pertinence est le premier facteur de classement
 * local cite par Google. Ces trois entrees sont la traduction francaise, mot
 * pour mot, des trois services de la fiche.
 *
 * Chaque `href` pointe vers une ancre qui EXISTE reellement : les `id` rendus
 * par `src/app/services/page.tsx` sont `toitures`, `facades` et `gouttieres`.
 * Aucune ancre inventee, aucune page fantome.
 */
export interface Intervention {
  id: string;
  titre: string;
  texte: string;
  href: string;
  ancre: string;
}

export const INTERVENTIONS: readonly Intervention[] = [
  {
    id: "diagnostic",
    titre: "Diagnostic de toiture",
    texte:
      "On monte voir. État des tuiles, des solins, des noues et de la zinguerie, recherche de l'entrée d'eau, relevé des surfaces. Le déplacement et le devis écrit ne vous sont pas facturés.",
    href: "/tarifs",
    ancre: "Ce que coûte une recherche de fuite",
  },
  {
    id: "reparation",
    titre: "Réparation de toiture et de fuites",
    texte:
      "Tuile cassée ou déplacée, solin décollé en pied de souche, noue percée, gouttière qui déborde, infiltration après un coup de vent. La réparation se chiffre après la visite, jamais au téléphone.",
    href: "/services#toitures",
    ancre: "Réparation et réfection de toiture",
  },
  {
    id: "refection",
    titre: "Réfection et pose de couverture",
    texte:
      "Tuile mécanique, tuile plate, ardoise. Liteaunage, écran de sous-toiture, faîtage, noues, rives, et la zinguerie qui va avec.",
    href: "/services#gouttieres",
    ancre: "Gouttières, descentes et zinguerie",
  },
] as const;

/* -------------------------------------------------------------------------- */
/*  FUITE — le vocabulaire du client, pas celui du metier                     */
/* -------------------------------------------------------------------------- */

/**
 * Quatre symptomes formules comme un proprietaire les decrit, et non comme un
 * couvreur les nomme. Aucun n'est presente comme « le plus frequent » : le
 * dossier ne contient aucune statistique d'appels, et en inventer une serait un
 * fait fabrique sur l'entreprise.
 */
export const SYMPTOMES: readonly { constat: string; lecture: string }[] = [
  {
    constat: "Une tache brune au plafond, qui grandit après la pluie",
    lecture:
      "L'eau entre rarement à la verticale de la tache : elle circule sur la charpente avant de tomber. C'est pour cela qu'on cherche l'entrée depuis les combles et depuis le toit, pas depuis le salon.",
  },
  {
    constat: "Une tuile retournée ou déplacée après un coup de vent",
    lecture:
      "Une seule tuile ouverte suffit à mouiller un liteau, puis un chevron. Le versant se lit en entier avant de conclure.",
  },
  {
    constat: "Un solin qui se décolle en pied de cheminée ou contre un mur",
    lecture:
      "C'est la jonction entre la couverture et la maçonnerie qui lâche en premier sur une maison de ville. La reprise se fait en zinc ou en plomb selon le support.",
  },
  {
    constat: "Une gouttière qui déborde à chaque averse",
    lecture:
      "Un débordement répété mouille le pied de mur et le débord de toit. Le problème vient de la pente, de l'encrassement ou d'une descente sous-dimensionnée : on le voit sur place.",
  },
] as const;

/* -------------------------------------------------------------------------- */
/*  CE QUI SE PASSE APRES L'APPEL                                             */
/* -------------------------------------------------------------------------- */

/**
 * Le devis gratuit etait affirme partout sur le site, la sequence n'etait
 * decrite nulle part : c'est pourtant elle qui repond a « a quoi je m'engage en
 * appelant ? ». Quatre etapes, aucun delai annonce, aucun fait ajoute — la
 * meme sequence est deja publiee dans `src/data/faq.ts`.
 */
export const ETAPES_APRES_APPEL: readonly { titre: string; texte: string }[] = [
  {
    titre: "Vous appelez et vous décrivez ce que vous voyez",
    texte:
      "L'artisan répond lui-même. On vous dit de vive voix quand on peut passer — jamais un délai lancé au hasard.",
  },
  {
    titre: "On vient voir la toiture",
    texte: `La visite et la prise de mesures ne vous sont pas facturées, ${DISTANCE_PHRASE} comme dans tout le rayon de ${BUSINESS.serviceRadius.value} km.`,
  },
  {
    titre: "Vous recevez un devis écrit et détaillé",
    texte:
      "Prestations, matériaux et prix à payer, poste par poste. Il vous est remis avant tout début de chantier, quel que soit le montant, et c'est ce document qui fait foi.",
  },
  {
    titre: "Le chantier, puis la réception avec vous",
    texte:
      "Protection des abords, travaux, nettoyage, puis réception avant facturation. Le même interlocuteur du premier appel à la fin du chantier.",
  },
] as const;

/* -------------------------------------------------------------------------- */
/*  ZONE — cinq communes, choisies dans une source du depot                   */
/* -------------------------------------------------------------------------- */

/**
 * Les communes voisines declarees par la page ville de Chalons
 * (`communesVoisines` de `src/data/city-content/chalons-en-champagne.ts`),
 * moins Ecury-sur-Coole qui est le siege et qui est nomme ailleurs sur la page.
 *
 * Les NOMS ne sont pas recopies : ils sont relus dans `src/data/cities.ts` a
 * partir du slug, donc une commune renommee ou depubliee ne peut pas laisser un
 * lien mort ni une graphie divergente derriere elle.
 */
const SLUGS_COMMUNES_PROCHES = [
  "saint-memmie",
  "fagnieres",
  "compertrix",
  "saint-martin-sur-le-pre",
  "sarry",
] as const;

export const COMMUNES_PROCHES = SLUGS_COMMUNES_PROCHES.map((slug) =>
  cities.find((city) => city.slug === slug && city.hasPage),
).filter((city): city is NonNullable<typeof city> => Boolean(city));

/* -------------------------------------------------------------------------- */
/*  CONSEILS — trois articles reels du cluster                                */
/* -------------------------------------------------------------------------- */

/**
 * Les intitules sont les QUESTIONS reellement portees par ces articles, telles
 * qu'elles sont ecrites dans `src/app/conseils/page.tsx`. Une ancre qui promet
 * autre chose que ce que la cible contient est une ancre qui ment.
 */
export const CONSEILS_ACCUEIL: readonly { question: string; resume: string; href: string }[] = [
  {
    question: "Quel est le prix pour refaire une toiture de 100 m² ?",
    resume:
      "100 m² au sol ne font pas 100 m² de toiture : la pente ajoute une surface que les simulateurs oublient.",
    href: "/conseils/prix-refaire-toiture-100m2",
  },
  {
    question: "À quoi ressemble une toiture en mauvais état ?",
    resume:
      "Le diagnostic classé par lieu d'observation : depuis le sol, depuis les combles, après une pluie, après un gel.",
    href: "/conseils/toiture-en-mauvais-etat-signes",
  },
  {
    question: "Comment savoir si un couvreur est bon ?",
    resume:
      "Vous avez un devis en main, reste à le lire : noues, solins, rives, faîtage, écran de sous-toiture, ventilation.",
    href: "/conseils/reconnaitre-bon-couvreur",
  },
] as const;

/* -------------------------------------------------------------------------- */
/*  FAQ PROPRE A L'ACCUEIL                                                    */
/* -------------------------------------------------------------------------- */

/** Une question de la FAQ d'accueil, avec un lien de sortie facultatif. */
export interface FaqAccueilItem extends FaqItem {
  lien?: { href: string; libelle: string };
}

/**
 * Une FAQ PROPRE a l'accueil, distincte de `faqItems`.
 *
 * Deux raisons, dans cet ordre :
 *
 *  1. `faqItems` est deja servi sur les pages ville et sur les pages service.
 *     Le remonter tel quel ferait de la FAQ un doublon exact entre l'accueil et
 *     `/couvreur/chalons-en-champagne`, c'est-a-dire exactement la
 *     cannibalisation que cette refonte doit reduire.
 *
 *  2. `src/app/couvreur/[city]/page.tsx` renvoie vers `/#faq` en annoncant que
 *     « les questions de prix, de devis et de deroulement d'un chantier » y sont
 *     traitees. Les trois premieres questions ci-dessous existent pour honorer
 *     ce lien entrant : une ancre qui arrive sur une FAQ qui ne repond plus a ce
 *     qu'on lui a delegue est un lien casse qui ne se voit pas.
 *
 * ECARTEE VOLONTAIREMENT : « Quelles sont les aides financieres pour une
 * refection de toiture ? ». `LEGAL.isRGE` vaut `false`. Il n'y a ni reponse
 * utile ni excuse a formuler : on ne pose pas la question, et on ne s'en
 * explique pas.
 */
export const FAQ_ACCUEIL: readonly FaqAccueilItem[] = [
  {
    question: "Le devis et le déplacement sont-ils gratuits ?",
    answer: `Oui, l'un et l'autre, dans tout notre rayon de ${BUSINESS.serviceRadius.value} km, que vous nous confiiez ensuite les travaux ou non. Pour la couverture, la toiture et le démoussage, un devis écrit vous est remis avant tout début de chantier quel que soit le montant : il détaille les prestations, les matériaux et le prix à payer, et c'est ce document qui fait foi.`,
  },
  {
    question: "Combien coûte l'intervention d'un couvreur à Châlons-en-Champagne ?",
    answer:
      "Cela dépend de la surface et de la pente, du type de couverture, de l'état de la charpente, de l'accès au chantier et de l'échafaudage nécessaire : un prix moyen annoncé avant d'avoir vu la toiture se révèle presque toujours faux. Nos prix de départ sont publiés prestation par prestation, avec notre taux horaire et nos conditions de devis.",
    lien: { href: "/tarifs", libelle: "Voir notre grille de tarifs" },
  },
  {
    question: "Comment se déroule un chantier de toiture ?",
    answer:
      "En quatre étapes : visite de la toiture et remise d'un devis écrit et détaillé, préparation du chantier et protection des abords, réalisation des travaux, puis nettoyage et réception avec vous avant facturation. L'entreprise est artisanale : c'est le même interlocuteur du premier appel à la réception des travaux.",
  },
  {
    question: "Quels signes indiquent qu'il faut refaire sa toiture ?",
    answer:
      "Des tuiles déplacées ou fendues visibles depuis le sol, du jour à travers la couverture depuis les combles, une tache au plafond qui grandit après la pluie, un versant qui ondule, des mousses épaisses qui retiennent l'eau. Certains de ces signes se traitent dans l'année, d'autres justifient un contrôle rapide.",
    lien: {
      href: "/conseils/toiture-en-mauvais-etat-signes",
      libelle: "Les signes qui alertent, un par un",
    },
  },
  {
    question: "Intervenez-vous en dehors de Châlons-en-Champagne ?",
    answer: `Oui. Nous sommes établis à ${BUSINESS.address.city}, ${DISTANCE_PHRASE}, et nous nous déplaçons dans un rayon de ${BUSINESS.serviceRadius.value} km : la couronne châlonnaise, mais aussi Reims, Épernay, Vitry-le-François et Sainte-Menehould.`,
    lien: { href: "/zone-intervention", libelle: "Toutes les communes où nous nous déplaçons" },
  },
  {
    question: "Êtes-vous joignable le samedi ?",
    answer: `Le samedi, oui : nos horaires sont ceux affichés sur notre fiche d'établissement Google, ${HORAIRES_EN_PHRASE}. Le dimanche, l'entreprise est fermée — laissez votre demande par le formulaire, elle sera lue.`,
    lien: { href: "/contact", libelle: "Formulaire de demande de devis" },
  },
] as const;
