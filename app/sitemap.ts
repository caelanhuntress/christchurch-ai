import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://christchurch-ai.com";
  const now = new Date();

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/epic-ai-conference`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${base}/epic-innovation-ai-events`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/ai-governance-may-2026`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/ai-meetup-christchurch`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/ai-christchurch`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/openclaw-user-group-march-2026`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/vibe-coding-april-2026`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/past-events`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
  ];
}
