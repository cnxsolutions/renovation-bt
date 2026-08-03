/**
 * Les trois familles de prestations du site.
 *
 * Audite le 2026-08-03 : aucune valeur de ce fichier n'affirme un chiffre, un
 * label, une certification ni un delai. Ne decrire ici que des PRESTATIONS
 * reellement realisees, jamais une qualite (« certifie », « garanti »,
 * « n° 1 »), un volume (« +500 toitures ») ni un delai (« sous 24h ») : ces
 * mentions se retrouveraient telles quelles dans le JSON-LD et dans les
 * resultats de recherche, sans que rien ne puisse les etayer.
 *
 * ALIGNEMENT SUR LA FICHE D'ETABLISSEMENT (2026-08-03)
 *
 * La fiche Google declare trois services — Roof inspection, Roof installation,
 * Roof repair — c'est-a-dire des ACTIONS : inspecter, poser, reparer. Ce
 * fichier ne portait que des OBJETS (« Couverture », « Peinture »,
 * « Habillage PVC / Alu ») : aucun verbe, donc aucun recouvrement avec la
 * fiche, alors que la pertinence est le premier des trois facteurs de
 * classement local cites par Google.
 *
 * Les `id`, les `title`, les `href` et les `icon` sont INCHANGES : ils
 * alimentent les ancres `#toitures`, `#facades` et `#gouttieres` reellement
 * rendues par `src/app/services/page.tsx`, et ce fichier est aussi lu par
 * `src/app/couvreur/[city]/page.tsx`. Seules les `features` changent, pour
 * porter les verbes de la fiche. Chaque libelle ci-dessous correspond a une
 * prestation deja decrite sur `/services` ou tarifee sur `/tarifs` : rien
 * d'ajoute, rien d'invente.
 */
/**
 * LE METIER EST LA COUVERTURE — precision du proprietaire, 2026-08-03.
 *
 * Teddy Boisson est couvreur : son perimetre est le toit et tout ce qui s'y
 * rattache — couverture, zinguerie, gouttieres, demoussage, charpente. La
 * facade est une prestation ADJACENTE, pas une famille de rang egal.
 *
 * L'ordre et les intitules ci-dessous portent cette hierarchie. « Façades »
 * figurait auparavant en deuxieme position, a parite avec « Toitures » : sur la
 * requete qui fait vivre l'entreprise — couvreur a Châlons-en-Champagne — cela
 * diluait le coeur de metier au profit d'une activite peripherique, et
 * contredisait la categorie principale de la fiche d'etablissement,
 * « Roofing Service ».
 *
 * Les `id` et les `href` restent INCHANGES : ils alimentent les ancres
 * `#toitures`, `#facades` et `#gouttieres` reellement rendues par
 * `src/app/services/page.tsx` et pointees depuis le pied de page. Renommer un
 * intitule est sans risque ; renommer une ancre casserait des liens.
 */
export const services = [
  {
    id: "toitures",
    title: "Couverture et toiture",
    emphasis: "principal" as const,
    features: [
      "Diagnostic et recherche de fuite",
      "Réparation de toiture et remplacement de tuiles",
      "Réfection et pose de couverture",
      "Démoussage et traitement hydrofuge",
    ],
    href: "/services#toitures",
    icon: "roof" as const,
  },
  {
    id: "gouttieres",
    title: "Zinguerie et gouttières",
    emphasis: "principal" as const,
    features: [
      "Solins, noues, chéneaux et faîtages",
      "Pose de gouttières zinc, PVC et aluminium",
      "Réparation et remplacement de descentes",
      "Nettoyage et débouchage",
    ],
    href: "/services#gouttieres",
    icon: "gutter" as const,
  },
  {
    id: "facades",
    title: "Façade",
    emphasis: "complementaire" as const,
    features: [
      "Nettoyage haute pression",
      "Traitement anti-mousse",
      "Ravalement et enduit",
    ],
    href: "/services#facades",
    icon: "facade" as const,
  },
] as const;
