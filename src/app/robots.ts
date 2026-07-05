import type { MetadataRoute } from "next";
import { SEO } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: `${SEO.siteUrl}/sitemap.xml`,
  };
}
