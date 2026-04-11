import type { MetadataRoute } from "next"

const BASE_URL = "https://ammarbuilds.com"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/case-studies/chatbots`,
      lastModified: new Date("2025-04-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/case-studies/lead-gen`,
      lastModified: new Date("2025-04-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/case-studies/flutter-app`,
      lastModified: new Date("2025-04-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/case-studies/n8n-workflows`,
      lastModified: new Date("2025-04-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ]
}
