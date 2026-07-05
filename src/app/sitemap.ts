import type { MetadataRoute } from "next";
import { SEO } from "@/lib/constants";
import { citiesWithPages } from "@/data/cities";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SEO.siteUrl;
  const lastBuild = new Date("2026-07-05");

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: lastBuild,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: lastBuild,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/realisations`,
      lastModified: lastBuild,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/avis`,
      lastModified: lastBuild,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/a-propos`,
      lastModified: lastBuild,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: lastBuild,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: lastBuild,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/politique-confidentialite`,
      lastModified: lastBuild,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const cityRoutes: MetadataRoute.Sitemap = citiesWithPages.map((city) => ({
    url: `${baseUrl}/couvreur/${city.slug}`,
    lastModified: lastBuild,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...cityRoutes];
}
