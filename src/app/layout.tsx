import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { SEO } from "@/lib/constants";

/**
 * Inter, sous-ensemble `latin` UNIQUEMENT.
 *
 * Mesure du 2026-08-03 sur fonts.gstatic.com (Inter v20, police variable) :
 *   - sous-ensemble latin      :  48 256 octets
 *   - sous-ensemble latin-ext  :  85 068 octets
 *   - total precedent          : 133 324 octets (~130 Ko), qui finissaient de
 *     telecharger a 3 080-3 442 ms et disputaient la bande passante a l'image
 *     LCP. Retirer `latin-ext` retire 83 Ko, soit 64 % de la charge police.
 *
 * Verifie avant de retirer `latin-ext` : aucun texte du site n'utilise de
 * caractere hors du sous-ensemble latin (U+0000-00FF + ponctuation generale).
 * Le francais y tient entierement, accents et ligatures compris (é, è, ç, à,
 * œ, «, »). Les seuls caracteres hors plage trouves dans src/ sont un emoji
 * (U+1F3D7) et une fleche (U+2192), qu'AUCUN des deux sous-ensembles ne
 * couvre : ils tombent de toute facon sur la police systeme.
 *
 * Pourquoi PAS de propriete `weight` : Google Fonts ne sert plus d'instances
 * statiques pour Inter. Les cinq graisses reellement utilisees par le site
 * (400, 500, 600, 700, 800) renvoient toutes vers le MEME fichier woff2
 * variable de 48 256 octets — verifie URL par URL. Declarer `weight` ne
 * retirerait donc pas un seul octet, et ajouterait cinq regles @font-face.
 */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SEO.siteUrl),
  title: {
    default: SEO.defaultTitle,
    template: SEO.titleTemplate,
  },
  description: SEO.defaultDescription,
  /*
   * PAS de `keywords`. Google ne lit plus <meta name="keywords"> depuis 2009
   * (annonce officielle du 21/09/2009). Les 25 mots-cles qui figuraient ici ne
   * produisaient donc aucun effet de referencement, mais revendiquaient
   * « Reims » et « Epernay » — deux villes que l'entreprise, sans salarie et
   * a 45 km de distance, ne dessert pas de facon credible. Ne pas remettre.
   */
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SEO.siteUrl,
    siteName: "Rénovation BT",
    title: "Rénovation BT | Couvreur Châlons-en-Champagne - Devis gratuit",
    description:
      "Artisan couvreur à Écury-sur-Coole, intervenant à Châlons-en-Champagne et dans la Marne (51) depuis 2010. Toiture, façade, gouttières. Devis gratuit et sans engagement.",
    images: [
      {
        url: SEO.ogImage,
        width: 1200,
        height: 630,
        alt: "Rénovation BT - Couvreur professionnel à Châlons-en-Champagne, Marne (51)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rénovation BT | Couvreur Châlons-en-Champagne - Devis gratuit",
    description:
      "Artisan couvreur à Écury-sur-Coole, intervenant à Châlons-en-Champagne et dans la Marne (51) depuis 2010. Toiture, façade, gouttières. Devis gratuit.",
    images: [SEO.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
    languages: {
      "fr-FR": "/",
    },
  },
  /* public/manifest.json existe et repond 200. */
  manifest: "/manifest.json",
  /*
   * N'y declarer QUE des fichiers qui existent. Inventaire du 2026-08-03 :
   *   - src/app/favicon.ico  -> servi sur /favicon.ico   (200)
   *   - public/icon.svg      -> servi sur /icon.svg      (200)
   *   - apple-icon.png       -> N'EXISTE NI DANS public/ NI DANS src/app/.
   *     La declaration `apple: /apple-icon.png` produisait donc un
   *     <link rel="apple-touch-icon"> vers une 404 sur toutes les pages.
   *     Retiree. La reintroduire suppose d'ajouter d'abord le fichier
   *     src/app/apple-icon.png (180x180), que Next servira tout seul.
   */
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
  /*
   * PAS de balises `geo.position` / `geo.placename` / `geo.region` / `ICBM`.
   * Elles declaraient 48.9566;4.3630 (Chalons-en-Champagne) alors que le
   * JSON-LD declare 48.898162;4.341054 (Ecury-sur-Coole, position exacte de
   * la fiche Google) : deux positions contradictoires dans le meme document.
   * Google ne lit plus ces balises ; la seule chose qu'elles produisaient
   * etait cette incoherence. Elles ne sont pas « corrigees », elles sont
   * retirees. La position de l'entreprise se declare dans le JSON-LD.
   */
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f97316" },
    { media: "(prefers-color-scheme: dark)", color: "#1f2937" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} h-full`}>
      <head>
        <JsonLd />
      </head>
      <body className="flex min-h-full flex-col font-sans antialiased">
        <TopBanner />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
