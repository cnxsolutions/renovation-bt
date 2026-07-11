import type { MetadataRoute } from "next";
import { SEO } from "@/lib/constants";
import { citiesWithPages } from "@/data/cities";

const PAGE_LAST_MODIFIED = "2026-07-11";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SEO.siteUrl;

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

  // Pages villes dynamiques /couvreur/[city]
  const cityRoutes = citiesWithPages.map((city) => ({
    url: `${baseUrl}/couvreur/${city.slug}`,
    lastModified: new Date(PAGE_LAST_MODIFIED).toISOString(),
    changeFrequency: "monthly" as const,
    priority: city.isPrimary ? 1.0 : 0.8,
  }));

  return [...staticPagesSitemap, ...cityRoutes];
}
