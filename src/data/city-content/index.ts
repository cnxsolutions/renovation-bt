/**
 * Registre du contenu des pages ville.
 *
 * UNE COMMUNE = UN FICHIER. Le contenu redactionnel ne vit plus dans le
 * composant de page : `src/app/couvreur/[city]/page.tsx` ne fait que rendre ce
 * que ce registre lui donne. Deux redacteurs peuvent donc travailler en meme
 * temps sur deux communes sans jamais toucher au meme fichier.
 *
 * AJOUTER UNE COMMUNE — trois gestes, dans cet ordre :
 *   1. creer `src/data/city-content/<slug>.ts` sur le modele de
 *      `chalons-en-champagne.ts` (contrat de type : `./types.ts`) ;
 *   2. ajouter ici la ligne d'import et l'entree du registre ;
 *   3. basculer `hasPage: true` pour ce slug dans `src/data/cities.ts`.
 *
 * Les deux conditions sont necessaires : une commune sans entree ici ne rend
 * pas de page, et une entree ici sans `hasPage` n'est ni generee ni listee.
 * Le slug de la cle, celui du champ `slug` du fichier et celui de
 * `src/data/cities.ts` doivent etre identiques — c'est le dernier segment de
 * l'URL `/couvreur/<slug>`.
 */
import type { CityContent } from "./types";

import betheny from "./betheny";
import bezannes from "./bezannes";
import chalonsEnChampagne from "./chalons-en-champagne";
import compertrix from "./compertrix";
import coolus from "./coolus";
import cormontreuil from "./cormontreuil";
import courtisols from "./courtisols";
import dormans from "./dormans";
import ecurySurCoole from "./ecury-sur-coole";
import epernay from "./epernay";
import fagnieres from "./fagnieres";
import fereChampenoise from "./fere-champenoise";
import mourmelonLeGrand from "./mourmelon-le-grand";
import muizon from "./muizon";
import reims from "./reims";
import saintMartinSurLePre from "./saint-martin-sur-le-pre";
import saintMemmie from "./saint-memmie";
import sainteMenehould from "./sainte-menehould";
import sarry from "./sarry";
import sezanne from "./sezanne";
import sommeVesle from "./somme-vesle";
import suippes from "./suippes";
import tinqueux from "./tinqueux";
import vitryLeFrancois from "./vitry-le-francois";

export const cityContent: Record<string, CityContent> = {
  "betheny": betheny,
  "bezannes": bezannes,
  "chalons-en-champagne": chalonsEnChampagne,
  "compertrix": compertrix,
  "coolus": coolus,
  "cormontreuil": cormontreuil,
  "courtisols": courtisols,
  "dormans": dormans,
  "ecury-sur-coole": ecurySurCoole,
  "epernay": epernay,
  "fagnieres": fagnieres,
  "fere-champenoise": fereChampenoise,
  "mourmelon-le-grand": mourmelonLeGrand,
  "muizon": muizon,
  "reims": reims,
  "saint-martin-sur-le-pre": saintMartinSurLePre,
  "saint-memmie": saintMemmie,
  "sainte-menehould": sainteMenehould,
  "sarry": sarry,
  "sezanne": sezanne,
  "somme-vesle": sommeVesle,
  "suippes": suippes,
  "tinqueux": tinqueux,
  "vitry-le-francois": vitryLeFrancois,
};

/**
 * Contenu d'une commune, ou `undefined` si le slug n'a pas de fichier.
 *
 * `hasOwnProperty` plutot qu'un acces direct : sans lui, `getCityContent(
 * "constructor")` renverrait une fonction du prototype d'Object, que le typage
 * annoncerait pourtant comme un `CityContent`. Le slug vient de l'URL, donc
 * d'un tiers : il est traite comme tel.
 */
export function getCityContent(slug: string): CityContent | undefined {
  return Object.prototype.hasOwnProperty.call(cityContent, slug)
    ? cityContent[slug]
    : undefined;
}

/** Les slugs qui ont un fichier de contenu, dans l'ordre du registre. */
export const cityContentSlugs = Object.keys(cityContent);

export type {
  CityContent,
  CitySection,
  CityMateriau,
  CityBatiEtCouverture,
  CityContrainte,
  CityFaqItem,
} from "./types";
