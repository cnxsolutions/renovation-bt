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
    ];
  },
};

export default nextConfig;
