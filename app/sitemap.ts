import type { MetadataRoute } from "next";
import { articles } from "./blog/articles";

const locationPages = [
  "interior-designer-greater-noida-west",
  "interior-designer-noida-extension",
  "interior-designer-greater-noida",
  "interior-designer-gaur-city",
  "interior-designer-gaur-city-2"
];

const servicePages = [
  "modular-kitchen-greater-noida-west",
  "wardrobe-interior-greater-noida-west",
  "turnkey-interior-designer-greater-noida-west",
  "false-ceiling-greater-noida-west",
  "home-renovation-greater-noida-west"
];

const propertyPages = [
  "2bhk-interior-design-greater-noida",
  "3bhk-interior-design-greater-noida",
  "4bhk-interior-design-greater-noida",
  "luxury-home-interior-greater-noida",
  "commercial-interior-designer-greater-noida"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: "https://decoory.com/",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1
    },
    ...locationPages.map((slug) => ({
      url: `https://decoory.com/${slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8
    })),
    ...servicePages.map((slug) => ({
      url: `https://decoory.com/${slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8
    })),
    ...propertyPages.map((slug) => ({
      url: `https://decoory.com/${slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7
    })),
    {
      url: "https://decoory.com/blog",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6
    },
    ...articles.map((article) => ({
      url: `https://decoory.com/blog/${article.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5
    }))
  ];
}
