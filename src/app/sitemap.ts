import type { MetadataRoute } from "next";
import { SEO } from "@/lib/constants";
import { citiesWithPages } from "@/data/cities";
import { seoPages } from "@/data/seo-pages";

const PAGE_LAST_MODIFIED = "2026-07-11";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SEO.siteUrl;

  // Villes qui ont une page SEO dédiée (éviter les doublons)
  const staticCitySlugs = seoPages
    .filter((p) => p.type === "city" || p.type === "main-city")
    .map((p) => p.citySlug);

  const staticPages = [
    { route: "", priority: 1.0, changeFrequency: "weekly" as const },
    { route: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/realisations", priority: 0.8, changeFrequency: "weekly" as const },
    { route: "/avis", priority: 0.7, changeFrequency: "weekly" as const },
    { route: "/a-propos", priority: 0.6, changeFrequency: "monthly" as const },
    { route: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/mentions-legales", priority: 0.3, changeFrequency: "yearly" as const },
    { route: "/politique-confidentialite", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const staticPagesSitemap = staticPages.map((page) => ({
    url: `${baseUrl}${page.route}`,
    lastModified: new Date(PAGE_LAST_MODIFIED).toISOString(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  // Pages villes SANS page SEO dédiée (seulement celles-ci ont une vraie page dynamique)
  const cityRoutesDynamic = citiesWithPages
    .filter((city) => !staticCitySlugs.includes(city.slug))
    .map((city) => ({
      url: `${baseUrl}/couvreur/${city.slug}`,
      lastModified: new Date(PAGE_LAST_MODIFIED).toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.7, // Priorité réduite pour les pages secondaires
    }));

  // Nouvelles pages SEO prioritaires (priorité selon config)
  const seoPageRoutes = seoPages.map((page) => ({
    url: `${baseUrl}/${page.slug}`,
    lastModified: new Date(PAGE_LAST_MODIFIED).toISOString(),
    changeFrequency: "monthly" as const,
    priority: page.priority,
  }));

  return [...staticPagesSitemap, ...seoPageRoutes, ...cityRoutesDynamic];
}
