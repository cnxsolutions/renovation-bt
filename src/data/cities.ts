export interface City {
  name: string;
  slug: string;
  department: string;
  departmentCode: string;
  postalCode: string;
  latitude: number;
  longitude: number;
  hasPage: boolean;
  isPrimary?: boolean; // Pour Châlons-en-Champagne
}

export const cities: City[] = [
  // ============================================
  // VILLES PRIMAIRES - Marne (51) - Zone principale
  // ============================================
  { name: "Châlons-en-Champagne", slug: "chalons-en-champagne", department: "Marne", departmentCode: "51", postalCode: "51000", latitude: 48.9566, longitude: 4.3630, hasPage: true, isPrimary: true },
  { name: "Écury-sur-Coole", slug: "ecury-sur-coole", department: "Marne", departmentCode: "51", postalCode: "51240", latitude: 48.8967, longitude: 4.2822, hasPage: true },

  // Villes proches de Châlons (< 15 km)
  { name: "Saint-Memmie", slug: "saint-memmie", department: "Marne", departmentCode: "51", postalCode: "51470", latitude: 48.9500, longitude: 4.3500, hasPage: true },
  { name: "Fagnières", slug: "fagnieres", department: "Marne", departmentCode: "51", postalCode: "51510", latitude: 48.9333, longitude: 4.4000, hasPage: true },
  { name: "Sarry", slug: "sarry", department: "Marne", departmentCode: "51", postalCode: "51520", latitude: 48.9000, longitude: 4.4000, hasPage: true },
  { name: "Compertrix", slug: "compertrix", department: "Marne", departmentCode: "51", postalCode: "51510", latitude: 48.9500, longitude: 4.3833, hasPage: false },
  { name: "Coolus", slug: "coolus", department: "Marne", departmentCode: "51", postalCode: "51510", latitude: 48.9167, longitude: 4.4167, hasPage: false },
  { name: "Saint-Martin-sur-le-Pré", slug: "saint-martin-sur-le-pre", department: "Marne", departmentCode: "51", postalCode: "51520", latitude: 48.9667, longitude: 4.3667, hasPage: false },
  { name: "Monetz", slug: "monetz", department: "Marne", departmentCode: "51", postalCode: "51520", latitude: 48.9667, longitude: 4.4000, hasPage: false },

  // Autres villes Marne avec hasPage
  { name: "Reims", slug: "reims", department: "Marne", departmentCode: "51", postalCode: "51100", latitude: 49.2583, longitude: 4.0317, hasPage: true },
  { name: "Épernay", slug: "epernay", department: "Marne", departmentCode: "51", postalCode: "51200", latitude: 49.0404, longitude: 3.9514, hasPage: true },
  { name: "Vitry-le-François", slug: "vitry-le-francois", department: "Marne", departmentCode: "51", postalCode: "51300", latitude: 48.7253, longitude: 4.5844, hasPage: true },
  { name: "Sainte-Ménehould", slug: "sainte-menehould", department: "Marne", departmentCode: "51", postalCode: "51800", latitude: 49.0897, longitude: 4.9217, hasPage: true },
  { name: "Sézanne", slug: "sezanne", department: "Marne", departmentCode: "51", postalCode: "51120", latitude: 48.7224, longitude: 3.7219, hasPage: true },

  // Communes Marne sans page dédiée
  { name: "Courtisols", slug: "courtisols", department: "Marne", departmentCode: "51", postalCode: "51460", latitude: 48.9800, longitude: 4.5167, hasPage: true },
  { name: "Suippes", slug: "suippes", department: "Marne", departmentCode: "51", postalCode: "51600", latitude: 49.1289, longitude: 4.5317, hasPage: true },
  { name: "Mourmelon-le-Grand", slug: "mourmelon-le-grand", department: "Marne", departmentCode: "51", postalCode: "51400", latitude: 49.1275, longitude: 4.3647, hasPage: true },
  { name: "Dormans", slug: "dormans", department: "Marne", departmentCode: "51", postalCode: "51700", latitude: 49.0756, longitude: 3.6303, hasPage: false },
  { name: "Fère-Champenoise", slug: "fere-champenoise", department: "Marne", departmentCode: "51", postalCode: "51230", latitude: 48.7528, longitude: 3.9917, hasPage: false },
  { name: "Somme-Vesle", slug: "somme-vesle", department: "Marne", departmentCode: "51", postalCode: "51460", latitude: 49.0833, longitude: 4.3667, hasPage: false },
  { name: "Tinqueux", slug: "tinqueux", department: "Marne", departmentCode: "51", postalCode: "51430", latitude: 49.2500, longitude: 3.9833, hasPage: false },
  { name: "Cormontreuil", slug: "cormontreuil", department: "Marne", departmentCode: "51", postalCode: "51350", latitude: 49.2167, longitude: 3.9833, hasPage: false },
  { name: "Bétheny", slug: "betheny", department: "Marne", departmentCode: "51", postalCode: "51450", latitude: 49.2833, longitude: 4.0333, hasPage: false },
  { name: "Bezannes", slug: "bezannes", department: "Marne", departmentCode: "51", postalCode: "51430", latitude: 49.2167, longitude: 3.9500, hasPage: false },
  { name: "Muizon", slug: "muizon", department: "Marne", departmentCode: "51", postalCode: "51140", latitude: 49.2667, longitude: 3.8833, hasPage: false },
];

export const citiesWithPages = cities.filter((c) => c.hasPage);
export const citiesMarne = cities.filter((c) => c.departmentCode === "51");
export const citiesPrimary = cities.filter((c) => c.isPrimary || c.hasPage);
export const cityNames = cities.map((c) => c.name);

// Villes principales à afficher en priorité
export const mainCities = [
  "chalons-en-champagne",
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
