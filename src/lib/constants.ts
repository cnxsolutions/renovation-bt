/**
 * Source de verite unique de l'identite de l'entreprise.
 *
 * Toute valeur ici est VERIFIABLE. Les donnees d'identite proviennent du
 * registre national des entreprises (SIREN 524754280) et de la fiche
 * d'etablissement Google, relevees le 2026-08-03. Ne jamais ajouter ici un
 * chiffre invente : ce fichier alimente le JSON-LD, donc il est publie.
 *
 * Les champs a `null` sont des informations que SEUL le gerant possede. Elles
 * sont rendues dans les pages sous la forme « [A COMPLETER : ... ] », ce qui
 * fait echouer la regle CNT-001 du moteur seo-guard tant qu'elles ne sont pas
 * renseignees. C'est voulu : un champ vide se voit, un champ invente se publie.
 */

export const BUSINESS = {
  /**
   * NOM D'ENTITE — a garder identique, caractere pour caractere, au titre de la
   * fiche d'etablissement Google.
   *
   * La fiche s'intitule « BOISSON Teddy | RENOVATIONBT ». Le site affichait
   * « Rénovation BT », et ces deux chaines n'ont aucun mot en commun une fois
   * normalisees : Google devait rapprocher deux noms differents pour relier le
   * site a la fiche. Or la coherence du NAP entre le HTML et la fiche est le
   * premier facteur on-page du Local Pack.
   *
   * Ce champ n'est PAS destine a l'affichage : un pipe dans un titre de page ou
   * sous un logo est illisible. Pour tout ce qui se lit a l'ecran, utiliser
   * `displayName`. Reserver `name` au JSON-LD et aux endroits ou l'on declare
   * l'identite de l'entreprise a une machine.
   *
   * Si le gerant renomme sa fiche Google, cette chaine doit changer le meme
   * jour — sinon le rapprochement se casse dans l'autre sens.
   */
  name: "BOISSON Teddy | RENOVATIONBT",
  /**
   * Enseigne commerciale telle qu'elle se lit : logo, titres de page, pied de
   * page, gabarit de titre. C'est le nom que porte le domaine et que les
   * clients prononcent.
   */
  displayName: "Rénovation BT",
  /**
   * L'artisan, nomme. Une entreprise sans visage n'inspire rien : la fiche
   * Google porte deja le nom du gerant, le site doit le porter aussi, dans les
   * formulations du type « Teddy Boisson, artisan couvreur ».
   * Graphie courante (capitale initiale), a distinguer de `legalName` qui
   * reprend la graphie du registre.
   */
  operatorName: "Teddy Boisson",
  /**
   * Denomination LEGALE, telle qu'immatriculee au registre national des
   * entreprises. « Rénovation BT » n'y figure ni comme raison sociale, ni comme
   * nom commercial, ni comme enseigne : le declarer en `legalName` etait une
   * affirmation fausse dans le JSON-LD.
   * A ARBITRER PAR LE GERANT : soit declarer « Rénovation BT » comme enseigne
   * aupres de l'INPI/INSEE, soit exploiter sous « Artisan Boisson Teddy ».
   */
  legalName: "BOISSON Teddy",
  tagline: "Rénovation et Entretien",
  slogan: "Votre couvreur de confiance dans la Marne",
  phone: "07 61 54 53 43",
  phoneHref: "tel:+33761545343",
  phoneInternational: "+33761545343",
  email: "contact@artisan-boisson-teddy.fr",
  website: "https://artisan-boisson-teddy.fr",

  address: {
    // « 43 Bis » et non « 43 » : graphie de la fiche Google ET du registre.
    street: "43 Bis Rue de Châlons-sur-Marne",
    city: "Écury-sur-Coole",
    postalCode: "51240",
    region: "Grand Est",
    country: "FR",
  },

  /**
   * Position exacte de la fiche d'etablissement Google. L'ancienne valeur
   * (48.8967 / 4.2822) placait l'entreprise a 4,3 km a l'ouest de sa fiche.
   */
  geo: {
    latitude: 48.898162,
    longitude: 4.341054,
  },

  /**
   * Horaires REELS, alignes sur la fiche Google : 24h/24 du lundi au samedi,
   * ferme le dimanche. Le site annoncait « 7j/7 », la fiche disait le contraire.
   */
  hours: "Ouvert 24h/24 du lundi au samedi",
  openingHoursSchema: "Mo-Sa 00:00-23:59",

  /** Date de creation au registre : 09/09/2010. Verifiee, donc affichable. */
  foundingDate: "2010-09-09",
  experience: "depuis 2010",

  /**
   * URL stable de la fiche d'etablissement, construite sur le Place ID.
   * L'ancienne (`g.page/renovation-bt`) ne resolvait vers aucune fiche : Google
   * a supprime les liens courts g.page en 2022.
   */
  googlePlaceId: "ChIJ7aUrR00YQgwRf6_hqGeMXVU",
  googleMapsUrl:
    "https://www.google.com/maps/place/?q=place_id:ChIJ7aUrR00YQgwRf6_hqGeMXVU",

  /**
   * VIDE, deliberement. Les trois `sameAs` precedents ont ete verifies un par
   * un le 2026-08-03 : facebook.com/renovationbt est une entreprise malaisienne
   * sans rapport, instagram.com/renovationbt n'existe pas, g.page/renovation-bt
   * ne resout plus. Un `sameAs` faux injecte une identite erronee dans le
   * graphe d'entites de Google — c'est pire que pas de `sameAs` du tout.
   * N'y remettre une URL qu'apres l'avoir ouverte et verifiee.
   */
  sameAs: [] as readonly string[],

  /**
   * Rayon d'intervention credible pour un artisan SANS SALARIE (0 salarie au
   * registre). 60 km couvre Reims, Epernay, Vitry-le-Francois et
   * Sainte-Menehould. L'ancien rayon de 150 km n'atteignait meme pas les
   * departements alsaciens qui etaient pourtant revendiques.
   */
  serviceRadius: {
    value: 60,
    unit: "KMT",
  },

  /** Departements reellement desservis depuis Ecury-sur-Coole. */
  departments: [
    "Marne (51)",
    "Aube (10)",
    "Haute-Marne (52)",
    "Ardennes (08)",
    "Meuse (55)",
  ],

  knowsAbout: [
    "couverture",
    "toiture",
    "zinguerie",
    "ravalement de façade",
    "gouttières",
    "démoussage",
    "nettoyage hydrofuge",
    "charpente",
    "isolation toiture",
    "étanchéité",
  ],
} as const;

/**
 * Identite legale et mentions obligatoires.
 *
 * References a jour au 2026-08-03 : la LCEN a ete reecrite par la loi SREN
 * n° 2024-449 du 21/05/2024 — les mentions legales relevent de son ARTICLE 1-1,
 * l'ancien article 6 III n'existe plus. Le repertoire des metiers a ete
 * remplace par le registre national des entreprises (RNE) au 01/01/2023 : la
 * mention « RM n° ... » serait aujourd'hui FAUSSE.
 */
export const LEGAL = {
  /** Entrepreneur individuel : non commercant, donc pas de RCS. L'identifiant a publier est le SIREN. */
  companyForm: "Entrepreneur individuel",
  siren: "524 754 280",
  siret: "524 754 280 00047",
  registry: "Registre national des entreprises (RNE), secteur des métiers et de l'artisanat",
  publicationDirector: "Teddy BOISSON",

  host: {
    name: "Vercel Inc.",
    address: "440 N Barranca Ave #4133, Covina, CA 91723, États-Unis",
    /** Exige par la LCEN art. 1-1, 4°. Introuvable publiquement — a fournir. */
    phone: null as string | null,
  },

  /** Assujetti a la TVA ? Si franchise en base : mention « TVA non applicable, art. 293 B du CGI » sur les devis et factures, pas sur le site. */
  vatNumber: null as string | null,

  /**
   * Mediateur de la consommation. OBLIGATOIRE sur le site : C. conso. art.
   * R616-1 cite le site internet comme premier support, et exige les
   * coordonnees ET l'adresse du site du mediateur. Sanction 3 000 €.
   * Le gerant doit d'abord ADHERER a un dispositif de mediation agree CECMC.
   */
  mediator: {
    name: null as string | null,
    address: null as string | null,
    website: null as string | null,
  },

  /**
   * Assurance decennale. NON obligatoire sur le site (l'art. L132-1 du code de
   * l'artisanat exclut expressement les personnes soumises a l'art. L241-1 du
   * code des assurances, donc les couvreurs). L'obligation est l'ATTESTATION
   * JOINTE a chaque devis et a chaque facture (C. assur. art. L243-2).
   * L'afficher ici reste le meilleur signal de confiance disponible — a
   * condition d'etre exact et a jour.
   */
  decennale: {
    insurer: null as string | null,
    policyNumber: null as string | null,
    coverage: null as string | null,
  },

  /**
   * Tarifs. OBLIGATOIRES sur le site : l'arrete du 24 janvier 2017 vise
   * nommement « couverture, toiture (y compris application d'hydrofuge et
   * demoussage) », et son art. 3 impose que ces informations soient « aisement
   * accessibles sur tout espace de communication en ligne dedie au
   * professionnel ». Sanction 3 000 €.
   */
  pricing: {
    hourlyRateTTC: null as string | null,
    timeAccountingTerms: null as string | null,
    /**
     * ATTESTE PAR LA FICHE D'ETABLISSEMENT : sa description declare « Devis et
     * deplacement gratuits » (relevee dans le tableau de bord Google le
     * 2026-08-03). Ce champ etait a `null`, et la mention avait donc ete
     * retiree du site faute de source — la fiche est cette source.
     *
     * La coherence entre le NAP publie en HTML et celui de la fiche est le
     * PREMIER facteur on-page du Local Pack (#15, Whitespark 2026) : ce qui
     * est promis sur la fiche doit l'etre sur le site, mot pour mot.
     */
    travelFees: "Déplacement gratuit",
    /** Le devis peut etre payant dans le batiment — il faut seulement le DIRE. */
    quoteIsFree: true,
  },

  /**
   * Certification RGE. VERIFIE le 2026-08-03 aupres de l'API ADEME
   * (liste-des-entreprises-rge) sur le SIREN 524754280 : AUCUNE qualification.
   * Consequence : les clients ne peuvent obtenir ni MaPrimeRenov' ni CEE.
   * Toute page qui promet ces aides est une pratique commerciale trompeuse
   * (C. conso. art. L121-2) tant que ce booleen est faux.
   */
  isRGE: false,
} as const;

export const SEO = {
  /*
   * `displayName` et non `name` : le gabarit de titre est lu par des humains
   * dans un onglet et dans une page de resultats. « Couvreur Châlons-en-Champagne
   * | BOISSON Teddy | RENOVATIONBT » contiendrait deux separateurs et serait
   * tronque. Le rapprochement avec la fiche Google se fait dans le JSON-LD, ou
   * `BUSINESS.name` porte la chaine exacte.
   */
  defaultTitle: `Couvreur Châlons-en-Champagne | ${BUSINESS.displayName}`,
  titleTemplate: `%s | ${BUSINESS.displayName}`,
  /**
   * Aucun delai promis ici. « Devis gratuit sous 24h » figurait dans cette
   * description et se propageait donc dans TOUTES les metadonnees par defaut du
   * site : un delai garanti que rien ne mesure est une allegation au sens de
   * l'art. L121-2 du code de la consommation. « depuis 2010 » le remplace — le
   * fait est verifiable au registre, donc opposable, et il vaut mieux.
   */
  defaultDescription:
    "Couvreur à Châlons-en-Champagne (51) : toiture, zinguerie, démoussage, gouttières. Devis gratuit et sans engagement. Artisan dans la Marne depuis 2010.",
  /**
   * `/og-image.jpg` renvoyait 404 : la route reellement servie est
   * `/opengraph-image`, generee par src/app/opengraph-image.tsx.
   */
  ogImage: "/opengraph-image",
  /**
   * LE domaine servi en production, verifie le 2026-08-03 (HTTP 200, Vercel).
   * NE PAS remettre `www.renovationbt-chalons.fr` : ce domaine repond 404
   * DEPLOYMENT_NOT_FOUND. Le commit 33f74a9 du 2026-07-06 avait fait
   * l'inverse, et toutes les canoniques du site ont depuis designe un domaine
   * mort comme version de reference.
   */
  siteUrl: "https://artisan-boisson-teddy.fr",
} as const;
