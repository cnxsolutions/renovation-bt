export interface City {
  name: string;
  slug: string;
  department: string;
  departmentCode: string;
  postalCode: string;
  latitude: number;
  longitude: number;
  hasPage: boolean;
}

export const cities: City[] = [
  { name: "Écury-sur-Coole", slug: "ecury-sur-coole", department: "Marne", departmentCode: "51", postalCode: "51240", latitude: 48.8967, longitude: 4.2822, hasPage: true },
  { name: "Châlons-en-Champagne", slug: "chalons-en-champagne", department: "Marne", departmentCode: "51", postalCode: "51000", latitude: 48.9566, longitude: 4.3630, hasPage: true },
  { name: "Reims", slug: "reims", department: "Marne", departmentCode: "51", postalCode: "51100", latitude: 49.2583, longitude: 4.0317, hasPage: true },
  { name: "Épernay", slug: "epernay", department: "Marne", departmentCode: "51", postalCode: "51200", latitude: 49.0404, longitude: 3.9514, hasPage: true },
  { name: "Vitry-le-François", slug: "vitry-le-francois", department: "Marne", departmentCode: "51", postalCode: "51300", latitude: 48.7253, longitude: 4.5844, hasPage: true },
  { name: "Sainte-Ménehould", slug: "sainte-menehould", department: "Marne", departmentCode: "51", postalCode: "51800", latitude: 49.0897, longitude: 4.9217, hasPage: true },
  { name: "Sézanne", slug: "sezanne", department: "Marne", departmentCode: "51", postalCode: "51120", latitude: 48.7224, longitude: 3.7219, hasPage: true },
  { name: "Dormans", slug: "dormans", department: "Marne", departmentCode: "51", postalCode: "51700", latitude: 49.0756, longitude: 3.6303, hasPage: false },
  { name: "Fère-Champenoise", slug: "fere-champenoise", department: "Marne", departmentCode: "51", postalCode: "51230", latitude: 48.7528, longitude: 3.9917, hasPage: false },
  { name: "Suippes", slug: "suippes", department: "Marne", departmentCode: "51", postalCode: "51600", latitude: 49.1289, longitude: 4.5317, hasPage: false },
  { name: "Somme-Vesle", slug: "somme-vesle", department: "Marne", departmentCode: "51", postalCode: "51460", latitude: 49.0833, longitude: 4.3667, hasPage: false },
  { name: "Mourmelon-le-Grand", slug: "mourmelon-le-grand", department: "Marne", departmentCode: "51", postalCode: "51400", latitude: 49.1275, longitude: 4.3647, hasPage: false },
  { name: "Courtisols", slug: "courtisols", department: "Marne", departmentCode: "51", postalCode: "51460", latitude: 48.9800, longitude: 4.5167, hasPage: false },
  { name: "Saint-Memmie", slug: "saint-memmie", department: "Marne", departmentCode: "51", postalCode: "51470", latitude: 48.9500, longitude: 4.3500, hasPage: false },
  { name: "Tinqueux", slug: "tinqueux", department: "Marne", departmentCode: "51", postalCode: "51430", latitude: 49.2500, longitude: 3.9833, hasPage: true },
  { name: "Cormontreuil", slug: "cormontreuil", department: "Marne", departmentCode: "51", postalCode: "51350", latitude: 49.2167, longitude: 3.9833, hasPage: false },
  { name: "Bétheny", slug: "betheny", department: "Marne", departmentCode: "51", postalCode: "51450", latitude: 49.2833, longitude: 4.0333, hasPage: false },
  { name: "Gueux", slug: "gueux", department: "Marne", departmentCode: "51", postalCode: "51390", latitude: 49.2500, longitude: 3.9000, hasPage: false },
  { name: "Witry-lès-Reims", slug: "witry-les-reims", department: "Marne", departmentCode: "51", postalCode: "51420", latitude: 49.3000, longitude: 4.0833, hasPage: false },
  { name: "Bezannes", slug: "bezannes", department: "Marne", departmentCode: "51", postalCode: "51430", latitude: 49.2167, longitude: 3.9500, hasPage: false },
  { name: "Muizon", slug: "muizon", department: "Marne", departmentCode: "51", postalCode: "51140", latitude: 49.2667, longitude: 3.8833, hasPage: false },
  { name: "Jonchery-sur-Vesle", slug: "jonchery-sur-vesle", department: "Marne", departmentCode: "51", postalCode: "51140", latitude: 49.2833, longitude: 3.8167, hasPage: false },
  { name: "Bazeilles-sur-Othain", slug: "bazeilles-sur-othain", department: "Meuse", departmentCode: "55", postalCode: "55600", latitude: 49.4833, longitude: 5.3667, hasPage: false },
  { name: "Verdun", slug: "verdun", department: "Meuse", departmentCode: "55", postalCode: "55100", latitude: 49.1600, longitude: 5.3833, hasPage: true },
  { name: "Bar-le-Duc", slug: "bar-le-duc", department: "Meuse", departmentCode: "55", postalCode: "55000", latitude: 48.7736, longitude: 5.1597, hasPage: true },
  { name: "Saint-Dizier", slug: "saint-dizier", department: "Haute-Marne", departmentCode: "52", postalCode: "52100", latitude: 48.6378, longitude: 4.9494, hasPage: true },
  { name: "Troyes", slug: "troyes", department: "Aube", departmentCode: "10", postalCode: "10000", latitude: 48.2973, longitude: 4.0744, hasPage: true },
  { name: "Romilly-sur-Seine", slug: "romilly-sur-seine", department: "Aube", departmentCode: "10", postalCode: "10100", latitude: 48.5144, longitude: 3.7264, hasPage: false },
  { name: "Brienne-le-Château", slug: "brienne-le-chateau", department: "Aube", departmentCode: "10", postalCode: "10500", latitude: 48.3950, longitude: 4.5250, hasPage: false },
  { name: "Nogent-sur-Seine", slug: "nogent-sur-seine", department: "Aube", departmentCode: "10", postalCode: "10400", latitude: 48.4931, longitude: 3.5003, hasPage: false },
  { name: "Vendeuvre-sur-Barse", slug: "vendeuvre-sur-barse", department: "Aube", departmentCode: "10", postalCode: "10140", latitude: 48.2333, longitude: 4.4667, hasPage: false },
  { name: "Chaumont", slug: "chaumont", department: "Haute-Marne", departmentCode: "52", postalCode: "52000", latitude: 48.1119, longitude: 5.1389, hasPage: true },
  { name: "Langres", slug: "langres", department: "Haute-Marne", departmentCode: "52", postalCode: "52200", latitude: 47.8622, longitude: 5.3333, hasPage: false },
  { name: "Neufchâteau", slug: "neufchateau", department: "Vosges", departmentCode: "88", postalCode: "88300", latitude: 48.3564, longitude: 5.6958, hasPage: false },
  { name: "Vittel", slug: "vittel", department: "Vosges", departmentCode: "88", postalCode: "88800", latitude: 48.2050, longitude: 5.9467, hasPage: false },
  { name: "Épinal", slug: "epinal", department: "Vosges", departmentCode: "88", postalCode: "88000", latitude: 48.1725, longitude: 6.4494, hasPage: true },
  { name: "Remiremont", slug: "remiremont", department: "Vosges", departmentCode: "88", postalCode: "88200", latitude: 48.0167, longitude: 6.5833, hasPage: false },
  { name: "Gérardmer", slug: "gerardmer", department: "Vosges", departmentCode: "88", postalCode: "88400", latitude: 48.0736, longitude: 6.8778, hasPage: false },
  { name: "Colmar", slug: "colmar", department: "Haut-Rhin", departmentCode: "68", postalCode: "68000", latitude: 48.0794, longitude: 7.3558, hasPage: false },
  { name: "Mulhouse", slug: "mulhouse", department: "Haut-Rhin", departmentCode: "68", postalCode: "68100", latitude: 47.7508, longitude: 7.3358, hasPage: false },
  { name: "Strasbourg", slug: "strasbourg", department: "Bas-Rhin", departmentCode: "67", postalCode: "67000", latitude: 48.5734, longitude: 7.7521, hasPage: true },
  { name: "Haguenau", slug: "haguenau", department: "Bas-Rhin", departmentCode: "67", postalCode: "67500", latitude: 48.8155, longitude: 7.7908, hasPage: false },
  { name: "Saverne", slug: "saverne", department: "Bas-Rhin", departmentCode: "67", postalCode: "67700", latitude: 48.7414, longitude: 7.3625, hasPage: false },
  { name: "Sélestat", slug: "selestat", department: "Bas-Rhin", departmentCode: "67", postalCode: "67600", latitude: 48.2594, longitude: 7.4531, hasPage: false },
  { name: "Ribeauvillé", slug: "ribeauville", department: "Haut-Rhin", departmentCode: "68", postalCode: "68150", latitude: 48.1947, longitude: 7.3175, hasPage: false },
  { name: "Lunéville", slug: "luneville", department: "Meurthe-et-Moselle", departmentCode: "54", postalCode: "54300", latitude: 48.5936, longitude: 6.5017, hasPage: false },
  { name: "Nancy", slug: "nancy", department: "Meurthe-et-Moselle", departmentCode: "54", postalCode: "54000", latitude: 48.6921, longitude: 6.1844, hasPage: true },
  { name: "Metz", slug: "metz", department: "Moselle", departmentCode: "57", postalCode: "57000", latitude: 49.1193, longitude: 6.1757, hasPage: true },
  { name: "Thionville", slug: "thionville", department: "Moselle", departmentCode: "57", postalCode: "57100", latitude: 49.3578, longitude: 6.1681, hasPage: false },
  { name: "Forbach", slug: "forbach", department: "Moselle", departmentCode: "57", postalCode: "57600", latitude: 49.1886, longitude: 6.8981, hasPage: false },
  { name: "Sarreguemines", slug: "sarreguemines", department: "Moselle", departmentCode: "57", postalCode: "57200", latitude: 49.1097, longitude: 7.0653, hasPage: false },
  { name: "Saint-Avold", slug: "saint-avold", department: "Moselle", departmentCode: "57", postalCode: "57500", latitude: 49.1044, longitude: 6.7108, hasPage: false },
];

export const citiesWithPages = cities.filter((c) => c.hasPage);
export const cityNames = cities.map((c) => c.name);
