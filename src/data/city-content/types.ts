/**
 * Contrat de type des pages ville.
 *
 * UNE COMMUNE = UN FICHIER `src/data/city-content/<slug>.ts`.
 * Le fichier porte du TEXTE ECRIT POUR CETTE COMMUNE. Il ne porte pas un
 * gabarit, pas une variable, pas une phrase qui resterait vraie si on
 * remplacait le nom de la commune par un autre. C'est la seule regle qui
 * compte, et chaque champ ci-dessous la rappelle.
 *
 * TEST DE SUBSTITUTION — a appliquer a chaque phrase avant de l'ecrire :
 * remplacer « Châlons-en-Champagne » par « Reims » dans la phrase. Si la
 * phrase reste vraie et utile, elle n'a rien a faire dans un fichier commune :
 * sa place est dans /services, dans la FAQ generale ou nulle part.
 *
 * CE QUI EST INTERDIT DANS CES FICHIERS
 *  - inventer un fait sur l'entreprise : chantier, temoignage, note, nombre de
 *    toitures, delai d'intervention, certification, label, aide financiere
 *    (MaPrimeRenov', CEE, eco-PTZ : l'entreprise n'est pas RGE) ;
 *  - le langage d'audit : « point de vigilance », les marqueurs de contenu
 *    manquant entre crochets, toute explication de la strategie editoriale ou
 *    SEO, tout aveu de ce que l'entreprise ne fait pas ou n'a pas, toute
 *    citation d'article de loi en corps de texte commercial ;
 *  - le superlatif creux : « savoir-faire d'exception », « qualite », « a
 *    votre ecoute », « leader », « n° 1 ».
 *
 * CE QUI EST ATTENDU, AU CONTRAIRE
 *  - les faits verifiables sur la COMMUNE : bati, materiaux de couverture
 *    dominants, patrimoine, secteurs proteges, climat, urbanisme, acces ;
 *  - les faits verifiables sur le METIER : pathologies, ordres de grandeur
 *    d'entretien, regles d'urbanisme applicables aux travaux de toiture ;
 *  - les faits verifiables sur l'entreprise : etablie a Écury-sur-Coole depuis
 *    2010, devis et deplacement gratuits, assurance decennale, horaires
 *    (24h/24 du lundi au samedi, ferme le dimanche), telephone.
 *
 * TON : deuxieme personne du pluriel pour s'adresser au client, phrases
 * courtes, francais impeccable, aucun jargon administratif.
 */

/** Un bloc redige du corps de page : un titre, puis des paragraphes. */
export interface CitySection {
  /**
   * Titre de la section, rendu en `<h2>`. Ecrit pour cette commune : il
   * contient normalement le nom de la commune ou un element de son bati.
   * Exemple : « Réfection de toiture à Châlons-en-Champagne ».
   */
  titre: string;
  /**
   * Les paragraphes de la section, dans l'ordre de lecture. Un element =
   * un `<p>`. Trois a cinq phrases par paragraphe. Aucun element vide.
   */
  paragraphes: string[];
}

/** Un materiau de couverture reellement rencontre dans la commune. */
export interface CityMateriau {
  /** Nom du materiau : « Ardoise », « Tuile plate », « Zinc »... */
  nom: string;
  /**
   * Une a deux phrases : ou on le rencontre dans CETTE commune, et ce qu'il
   * implique concretement en intervention. Pas de definition d'encyclopedie.
   */
  texte: string;
}

/** Ce que le couvreur constate sur le bati de la commune. */
export interface CityBatiEtCouverture {
  /** Titre rendu en `<h2>`. Exemple : « Ce que nous rencontrons sur les toits châlonnais ». */
  titre: string;
  /**
   * Deux a trois paragraphes : epoque et nature du bati, exposition, climat,
   * pathologies qui en decoulent. C'est le contenu qu'un couvreur du secteur
   * peut ecrire et qu'un concurrent exterieur ne peut pas copier.
   */
  paragraphes: string[];
  /**
   * Trois a cinq materiaux dominants dans la commune. Laisser le tableau vide
   * plutot que d'y mettre un materiau qu'on n'y voit pas.
   */
  materiaux: CityMateriau[];
}

/** Une contrainte concrete de chantier, propre a la commune. */
export interface CityContrainte {
  /**
   * Intitule court, rendu en `<h3>`. Exemple : « Abords des monuments
   * historiques », « Rues étroites et stationnement », « Vent de plaine ».
   */
  titre: string;
  /**
   * Deux a quatre phrases : la contrainte, et ce qu'elle change pour le
   * client (acces, autorisation, materiau impose, delai d'instruction,
   * organisation du chantier). Concret, jamais une lecon de droit.
   */
  texte: string;
}

/** Une question reellement posee a propos de CETTE commune. */
export interface CityFaqItem {
  /**
   * La question, telle qu'un habitant de la commune la pose. Elle doit etre
   * impossible a reposer a l'identique sur une autre page ville : si elle
   * l'est, elle releve de la FAQ generale du site et pas d'ici.
   */
  question: string;
  /**
   * La reponse, trois a cinq phrases. Aucun delai chiffre, aucune fourchette
   * de prix non sourcee, aucune aide financiere.
   */
  reponse: string;
}

/**
 * Le contenu complet d'une page `/couvreur/<slug>`.
 *
 * Tout champ de type `string` porte du texte redige a la main. Aucun n'est
 * construit a l'execution a partir du nom de la commune : la page se contente
 * de rendre ce fichier.
 */
export interface CityContent {
  /**
   * Slug de la commune, identique a `slug` dans `src/data/cities.ts` et au
   * nom du fichier. C'est la cle du registre et le dernier segment de l'URL.
   */
  slug: string;

  /**
   * Balise titre, AVANT suffixe de marque.
   * Le layout racine applique le gabarit « %s | Rénovation BT », qui ajoute
   * 16 caracteres. Ecrire donc 30 a 44 caracteres ici pour un titre final de
   * 46 a 60. Le nom de la commune et son code postal en font partie.
   * Exemple : « Couvreur à Châlons-en-Champagne (51000) ».
   */
  metaTitle: string;

  /**
   * Meta description, 70 a 160 caracteres, redigee pour cette commune.
   * Elle dit qui, ou, quoi : l'enseigne, la commune, les prestations, et
   * « devis gratuit ». Aucun delai, aucune aide, aucun superlatif.
   */
  metaDescription: string;

  /**
   * L'unique `<h1>` de la page. Contient le nom de la commune et son code
   * postal. Il peut etre identique au `metaTitle` : c'est normal et voulu.
   */
  h1: string;

  /**
   * Chapeau et ouverture, 2 a 3 paragraphes.
   *  - `intro[0]` : une a deux phrases, rendues sous le `<h1>` dans l'en-tete
   *    sombre. C'est la phrase qui doit ancrer la page dans la commune.
   *  - `intro[1]` et `intro[2]` : rendus en tete du corps de page. Qui nous
   *    sommes, ce que nous faisons dans cette commune, ce qui est gratuit.
   */
  intro: string[];

  /**
   * Le corps redige, libre en nombre de sections. Deux a quatre sections de
   * deux a trois paragraphes donnent une page dense sans remplissage.
   * L'ordre du tableau est l'ordre de lecture.
   */
  sections: CitySection[];

  /**
   * Ce que le couvreur constate sur le bati local. C'est le bloc qui distingue
   * une page ville legitime d'une page porte : il decrit des toitures, pas une
   * entreprise.
   */
  batiEtCouverture: CityBatiEtCouverture;

  /**
   * Les contraintes concretes d'un chantier dans cette commune. Deux a quatre.
   * Elles doivent tenir a la commune : patrimoine protege, densite du bati,
   * acces, exposition, urbanisme local.
   */
  contraintes: CityContrainte[];

  /**
   * FAQ PROPRE A LA COMMUNE, deux a quatre questions. Ce n'est jamais la FAQ
   * generale du site (`src/data/faq.ts`), qui est publiee ailleurs et repond
   * aux questions de prix, de devis et de deroulement. Ici, on ne repond qu'a
   * ce qui depend du lieu.
   */
  faq: CityFaqItem[];

  /**
   * Distance approximative entre le siege d'Écury-sur-Coole et la commune,
   * en kilometres, ARRONDIE (a l'unite en dessous de 15 km, au multiple de 5
   * au-dela). Elle n'est rendue que si elle est superieure a zero ; laisser
   * `0` pour Écury-sur-Coole, ou tant que la valeur n'a pas ete verifiee.
   * Ne jamais en deduire un temps de trajet ni un delai d'intervention.
   */
  distanceKm: number;

  /**
   * Slugs des communes proches qui ont elles aussi une page. Trois a cinq.
   * Ils doivent exister dans `src/data/cities.ts` : un slug inconnu est
   * silencieusement ignore au rendu, le lien n'apparait pas.
   */
  communesVoisines: string[];
}
