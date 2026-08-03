/**
 * Navigation principale (Header + MobileNav).
 *
 * AUCUN LIEN VILLE ICI, ET C'EST DELIBERE. Un menu qui aligne des communes est
 * le symptome d'un reseau de pages porte ; le maillage vers les villes reellement
 * desservies passe par « Zone d'intervention », pas par le header.
 *
 * `/tarifs` n'est pas un choix editorial : l'arrete du 24 janvier 2017 vise
 * nommement « couverture, toiture (y compris application d'hydrofuge et
 * demoussage) » et son article 3 exige que l'information tarifaire soit
 * « aisement accessible sur tout espace de communication en ligne dedie au
 * professionnel ». Un lien enterre en pied de page ne remplit pas ce critere.
 * Sanction encourue : 3 000 €. Ne pas retirer cette entree.
 *
 * `/conseils` est le PILIER du cluster d'articles : c'est la seule page du
 * cluster qui figure ici. Les neuf articles se rejoignent entre eux et remontent
 * tous vers ce pilier ; les aligner dans le menu reproduirait exactement le
 * defaut evite plus haut pour les villes.
 */
export const navigation = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Zone d'intervention", href: "/zone-intervention" },
  { label: "Conseils", href: "/conseils" },
  { label: "Avis", href: "/avis" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
] as const;
