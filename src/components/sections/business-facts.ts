/**
 * FAITS DERIVES DES CONSTANTES, partages par plusieurs sections.
 *
 * Ce module existe pour une raison precise : `CTABanner` est monte sur onze
 * pages du site, et il a besoin de la phrase d'horaires complete. Le faire
 * importer le contenu de la page d'accueil aurait cree une dependance absurde
 * (`/services` tirant les chantiers de l'accueil). Les faits qui appartiennent
 * a l'entreprise et non a une page vivent donc ici.
 *
 * REGLE DE TENUE : rien ne s'ecrit en dur dans ce fichier. Tout est DERIVE de
 * `src/lib/constants.ts`, qui reste la source de verite unique.
 */

import { BUSINESS, LEGAL } from "@/lib/constants";

/**
 * L'entreprise ouvre-t-elle le dimanche ?
 *
 * `BUSINESS.openingHoursSchema` vaut « Mo-Sa 00:00-23:59 » : le code du
 * dimanche (`Su`) en est absent. Le jour ou le gerant ouvrira le dimanche, il
 * changera cette seule constante et la mention « ferme le dimanche »
 * disparaitra d'elle-meme de toute la page — au lieu de survivre, recopiee, au
 * fond de six composants. C'est exactement le probleme que `constants.ts` a ete
 * ecrit pour supprimer.
 */
const OUVRE_LE_DIMANCHE = BUSINESS.openingHoursSchema.includes("Su");

/** « Ouvert 24h/24 du lundi au samedi, fermé le dimanche ». */
export const HORAIRES_COMPLETS = OUVRE_LE_DIMANCHE
  ? BUSINESS.hours
  : `${BUSINESS.hours}, fermé le dimanche`;

/** Meme phrase en minuscules, pour l'inserer au fil d'une phrase. */
export const HORAIRES_EN_PHRASE = HORAIRES_COMPLETS.toLowerCase();

/**
 * Graphie EXACTE de la fiche d'etablissement Google, dont la description
 * annonce « Devis et deplacement gratuits ». La coherence de cette chaine entre
 * le HTML et la fiche est le premier facteur on-page du Local Pack : on ne la
 * reformule pas. Les deux faits qui la composent sont dans les constantes
 * (`LEGAL.pricing.quoteIsFree` et `LEGAL.pricing.travelFees`).
 */
export const DEVIS_ET_DEPLACEMENT = LEGAL.pricing.quoteIsFree
  ? "Devis et déplacement gratuits"
  : LEGAL.pricing.travelFees;

/**
 * Distance du siege au centre de Chalons-en-Champagne, en kilometres.
 *
 * A DEPLACER DANS `BUSINESS`, aux cotes de `serviceRadius`. La valeur est deja
 * publiee telle quelle dans `src/data/city-content/chalons-en-champagne.ts`
 * (« a 8 km du centre de Chalons ») : elle vit donc aujourd'hui a deux
 * endroits, ce qui est precisement ce qu'il faut eviter. Le fichier de
 * constantes est hors du perimetre de cette refonte.
 */
export const DISTANCE_CENTRE_CHALONS_KM = 8;

/** « à 8 km de Châlons-en-Champagne ». */
export const DISTANCE_PHRASE = `à ${DISTANCE_CENTRE_CHALONS_KM} km de Châlons-en-Champagne`;
