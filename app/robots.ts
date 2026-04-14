import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://christchurch-ai.com/sitemap.xml",
    host: "https://christchurch-ai.com",
  };
}
