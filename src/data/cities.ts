/**
 * Communes de la zone d'intervention.
 *
 * `hasPage` NE SIGNIFIE PAS « commune desservie ». Il signifie « cette commune
 * a une page dediee sur le site ». Les deux notions avaient ete confondues :
 * treize communes portaient une page, et ces treize pages partageaient 99,6 %
 * de leur texte. Le nom de la ville substitue etait le seul contenu propre.
 * C'est l'exemple meme que la politique Google « Doorway abuse » cite :
 * « multiple pages targeted at specific regions or cities that funnel users to
 * one page ». La zone desservie reste rendue par /zone-intervention, qui liste
 * TOUTES les communes, avec ou sans page.
 *
 * REGLE POUR AJOUTER UNE PAGE VILLE : ne pas se contenter de basculer
 * `hasPage` a `true`. Il faut d'abord ecrire le fichier de contenu
 * `src/data/city-content/<slug>.ts` — bati local, materiaux de couverture,
 * contraintes de chantier, FAQ propre a la commune — et l'enregistrer dans
 * `src/data/city-content/index.ts`. Sans entree dans ce registre, la route
 * rend un 404 : c'est deliberement un garde-fou, pour qu'un booleen ne suffise
 * plus a fabriquer une page vide.
 *
 * COORDONNEES : plusieurs latitudes/longitudes de ce fichier sont manifestement
 * approximatives (arrondies au centieme, parfois decalees de 2 a 4 km). Elles ne
 * servent qu'a regrouper les communes par tranche de distance sur
 * /zone-intervention, ou l'imprecision reste sans effet sur la tranche. Ne PAS
 * s'en servir pour afficher une distance precise ni un temps de trajet.
 * A verifier un jour contre la Base Adresse Nationale.
 */

export interface City {
  name: string;
  slug: string;
  department: string;
  departmentCode: string;
  postalCode: string;
  latitude: number;
  longitude: number;
  /** Une page /couvreur/[slug] existe-t-elle ? Voir la regle ci-dessus. */
  hasPage: boolean;
  isPrimary?: boolean; // Pour Châlons-en-Champagne
}

export const cities: City[] = [
  // ============================================
  // COMMUNES AVEC UNE PAGE DEDIEE (24)
  // Chaque `hasPage: true` ci-dessous a pour contrepartie OBLIGATOIRE un
  // fichier src/data/city-content/<slug>.ts enregistre dans le registre.
  // ============================================
  // Chalons : la seule cible commerciale reelle (prefecture, 8 km du siege).
  { name: "Châlons-en-Champagne", slug: "chalons-en-champagne", department: "Marne", departmentCode: "51", postalCode: "51000", latitude: 48.9566, longitude: 4.3630, hasPage: true, isPrimary: true },
  // Ecury : siege social et adresse d'immatriculation. Page d'ancrage NAP.
  // Coordonnees alignees sur BUSINESS.geo (fiche d'etablissement Google).
  // L'ancien couple 48.8967 / 4.2822 placait le siege 4,3 km trop a l'ouest.
  { name: "Écury-sur-Coole", slug: "ecury-sur-coole", department: "Marne", departmentCode: "51", postalCode: "51240", latitude: 48.898162, longitude: 4.341054, hasPage: true },

  // Couronne de Châlons-en-Champagne
  { name: "Saint-Memmie", slug: "saint-memmie", department: "Marne", departmentCode: "51", postalCode: "51470", latitude: 48.9500, longitude: 4.3500, hasPage: true },
  { name: "Fagnières", slug: "fagnieres", department: "Marne", departmentCode: "51", postalCode: "51510", latitude: 48.9333, longitude: 4.4000, hasPage: true },
  { name: "Sarry", slug: "sarry", department: "Marne", departmentCode: "51", postalCode: "51520", latitude: 48.9000, longitude: 4.4000, hasPage: true },
  { name: "Compertrix", slug: "compertrix", department: "Marne", departmentCode: "51", postalCode: "51510", latitude: 48.9500, longitude: 4.3833, hasPage: true },
  { name: "Coolus", slug: "coolus", department: "Marne", departmentCode: "51", postalCode: "51510", latitude: 48.9167, longitude: 4.4167, hasPage: true },
  { name: "Saint-Martin-sur-le-Pré", slug: "saint-martin-sur-le-pre", department: "Marne", departmentCode: "51", postalCode: "51520", latitude: 48.9667, longitude: 4.3667, hasPage: true },
  // RETIRE : l'entree « Monetz » (slug `monetz`, CP 51520). Aucune commune de ce
  // nom n'existe dans la Marne. Il s'agit tres probablement de
  // Moncetz-Longevas (51240), mais je ne le RECONSTITUE pas : publier un nom de
  // commune faux sur la page zone serait exactement l'erreur qu'on corrige.
  // A CONFIRMER PAR LE GERANT, puis reintroduire avec le bon nom et le bon CP.

  // Reste de la Marne
  { name: "Reims", slug: "reims", department: "Marne", departmentCode: "51", postalCode: "51100", latitude: 49.2583, longitude: 4.0317, hasPage: true },
  { name: "Épernay", slug: "epernay", department: "Marne", departmentCode: "51", postalCode: "51200", latitude: 49.0404, longitude: 3.9514, hasPage: true },
  { name: "Vitry-le-François", slug: "vitry-le-francois", department: "Marne", departmentCode: "51", postalCode: "51300", latitude: 48.7253, longitude: 4.5844, hasPage: true },
  { name: "Sainte-Ménehould", slug: "sainte-menehould", department: "Marne", departmentCode: "51", postalCode: "51800", latitude: 49.0897, longitude: 4.9217, hasPage: true },
  { name: "Sézanne", slug: "sezanne", department: "Marne", departmentCode: "51", postalCode: "51120", latitude: 48.7224, longitude: 3.7219, hasPage: true },
  { name: "Courtisols", slug: "courtisols", department: "Marne", departmentCode: "51", postalCode: "51460", latitude: 48.9800, longitude: 4.5167, hasPage: true },
  { name: "Suippes", slug: "suippes", department: "Marne", departmentCode: "51", postalCode: "51600", latitude: 49.1289, longitude: 4.5317, hasPage: true },
  { name: "Mourmelon-le-Grand", slug: "mourmelon-le-grand", department: "Marne", departmentCode: "51", postalCode: "51400", latitude: 49.1275, longitude: 4.3647, hasPage: true },
  { name: "Dormans", slug: "dormans", department: "Marne", departmentCode: "51", postalCode: "51700", latitude: 49.0756, longitude: 3.6303, hasPage: true },
  { name: "Fère-Champenoise", slug: "fere-champenoise", department: "Marne", departmentCode: "51", postalCode: "51230", latitude: 48.7528, longitude: 3.9917, hasPage: true },
  { name: "Somme-Vesle", slug: "somme-vesle", department: "Marne", departmentCode: "51", postalCode: "51460", latitude: 49.0833, longitude: 4.3667, hasPage: true },
  { name: "Tinqueux", slug: "tinqueux", department: "Marne", departmentCode: "51", postalCode: "51430", latitude: 49.2500, longitude: 3.9833, hasPage: true },
  { name: "Cormontreuil", slug: "cormontreuil", department: "Marne", departmentCode: "51", postalCode: "51350", latitude: 49.2167, longitude: 3.9833, hasPage: true },
  { name: "Bétheny", slug: "betheny", department: "Marne", departmentCode: "51", postalCode: "51450", latitude: 49.2833, longitude: 4.0333, hasPage: true },
  { name: "Bezannes", slug: "bezannes", department: "Marne", departmentCode: "51", postalCode: "51430", latitude: 49.2167, longitude: 3.9500, hasPage: true },
  { name: "Muizon", slug: "muizon", department: "Marne", departmentCode: "51", postalCode: "51140", latitude: 49.2667, longitude: 3.8833, hasPage: true },
];

export const citiesWithPages = cities.filter((c) => c.hasPage);
export const citiesMarne = cities.filter((c) => c.departmentCode === "51");
export const citiesPrimary = cities.filter((c) => c.isPrimary || c.hasPage);
export const cityNames = cities.map((c) => c.name);

/**
 * Ordre d'affichage prioritaire, utilise pour TRIER une liste de communes.
 * Un slug present ici ne signifie pas qu'une page existe : ne pas s'en servir
 * pour construire des liens vers /couvreur/[slug].
 */
export const mainCities = [
  "chalons-en-champagne",
  "ecury-sur-coole",
  "saint-memmie",
  "fagnieres",
  "sarry",
  "courtisols",
  "suippes",
  "mourmelon-le-grand",
  "reims",
  "epernay",
  "vitry-le-francois",
];
