import type { NextConfig } from "next";

/**
 * NE PAS REINTRODUIRE de redirection `/couvreur/<slug>` -> /zone-intervention.
 *
 * Onze slugs (courtisols, epernay, fagnieres, mourmelon-le-grand, reims,
 * saint-memmie, sainte-menehould, sarry, sezanne, suippes, vitry-le-francois)
 * y etaient redirigés en 301 a l'epoque ou leurs pages avaient ete supprimees
 * pour cause de contenu duplique. Ces communes ont de nouveau une page, ecrite
 * une par une (src/data/city-content/<slug>.ts).
 *
 * Une entree de `redirects()` est evaluee AVANT le systeme de fichiers : tant
 * que ces regles existaient, les pages correspondantes n'etaient jamais
 * servies, quel que soit leur contenu. Elles sont donc retirees, et non
 * conservees « au cas ou ».
 */

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },

  async redirects() {
    return [
      /**
       * www vers l'apex.
       *
       * Verifie en production le 2026-08-03 : artisan-boisson-teddy.fr et
       * www.artisan-boisson-teddy.fr servaient TOUS DEUX un 200 avec le meme
       * ETag, sans aucune redirection. Deux URL pour chaque page, et aucune
       * canonique valide pour arbitrer puisqu'elles designaient un domaine
       * mort. On tranche ici, dans le code, plutot que dans une console : la
       * regle est ainsi versionnee et verifiable.
       */
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.artisan-boisson-teddy.fr" }],
        destination: "https://artisan-boisson-teddy.fr/:path*",
        permanent: true,
      },

      // `/couvreur` seul n'a jamais existe (404). Il est devine par les
      // visiteurs et par les robots qui remontent l'arborescence.
      {
        source: "/couvreur",
        destination: "/zone-intervention",
        permanent: true,
      },

      /**
       * Heritage de l'ancien site WordPress, encore presente dans l'index
       * Google en aout 2026 et tombee en 404 depuis la refonte. Une URL
       * indexee qui meurt sans redirection perd tout son historique.
       */
      {
        source: "/devis-gratuit-rapide-personnalise-clics",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/nos-services",
        destination: "/services",
        permanent: true,
      },

      /**
       * INVENTAIRE COMPLET DE L'ANCIEN WORDPRESS.
       *
       * Releve exhaustif des URL archivees par la Wayback Machine entre le
       * 2023-12-29 et le 2026-05-13, dernier etat du site sous WordPress :
       * neuf URL en 200. Une seule etait redirigee (celle du devis, ci-dessus) ;
       * les huit autres tombaient en 404, alors que plusieurs sont TOUJOURS
       * indexees — verifie sur Bing et DuckDuckGo le 2026-08-04.
       *
       * Les quatre ci-dessous portent un contenu commercial reel et ont un
       * equivalent exact sur le nouveau site. Elles sont donc redirigees.
       */
      {
        // Page FAQ autonome ; la FAQ vit desormais dans l'accueil, ancre #faq.
        source: "/faq",
        destination: "/#faq",
        permanent: true,
      },
      {
        // Deux URL distinctes pour la meme prestation : le demoussage est
        // decrit sous la famille « Couverture et toiture » de /services.
        source: "/demoussage-a-chalons-en-champagne",
        destination: "/services#toitures",
        permanent: true,
      },
      {
        source: "/demoussage-de-toit-a-chalons-en-champagne",
        destination: "/services#toitures",
        permanent: true,
      },
      {
        source: "/peinture-facades-toiture-chalons-champagne",
        destination: "/services#facades",
        permanent: true,
      },

      /*
       * NE PAS AJOUTER ICI les trois dernieres URL de l'ancien WordPress :
       * /hello-world, /author/mathieu-gaugaingmail-com et
       * /category/uncategorized.
       *
       * Ce sont des artefacts structurels de WordPress — l'article de
       * demonstration, une page d'auteur, une categorie par defaut — sans
       * aucun equivalent sur ce site. Google demande de rediriger vers une
       * page PERTINENTE et, a defaut, de laisser repondre 404 : une
       * redirection vers l'accueil serait lue comme un soft 404 et brouillerait
       * le signal. Un 404 est ici la bonne reponse, et il se nettoie seul.
       */
    ];
  },
};

export default nextConfig;
