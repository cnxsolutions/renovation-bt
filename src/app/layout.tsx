import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { SEO } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
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
  keywords: [
    "couvreur",
    "toiture",
    "Écury-sur-Coole",
    "Châlons-en-Champagne",
    "Marne",
    "51",
    "rénovation",
    "façade",
    "gouttière",
    "ravalement",
    "démoussage",
    "artisan",
    "couverture",
    "zinguerie",
    "zingueur",
    "charpente",
    "couvreur Châlons",
    "couvreur Marne",
    "toiture Marne",
    "réparation toiture",
    "urgence couvreur",
    "Velux",
    "hydrofuge",
    "Saint-Memmie",
    "Reims",
    "Épernay",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SEO.siteUrl,
    siteName: "Rénovation BT",
    title: "Rénovation BT | Couvreur Châlons-en-Champagne - Devis gratuit",
    description: "Artisan couvreur à Écury-sur-Coole, intervenant à Châlons-en-Champagne et dans toute la Marne (51). Toiture, façade, gouttières. Devis gratuit sous 24h, garantie décennale.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Rénovation BT - Couvreur professionnel à Châlons-en-Champagne, Marne (51)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rénovation BT | Couvreur Châlons-en-Champagne - Devis gratuit",
    description: "Artisan couvreur à Écury-sur-Coole, intervenant à Châlons-en-Champagne et dans toute la Marne (51). Devis gratuit, garantie décennale.",
    images: ["/opengraph-image"],
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
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  other: {
    "geo.position": "48.9566;4.3630",
    "geo.placename": "Châlons-en-Champagne",
    "geo.region": "FR-51",
    "ICBM": "48.9566, 4.3630",
  },
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
