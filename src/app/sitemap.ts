import type { MetadataRoute } from "next";

import { defaultUrl } from "@/config/defaultUrl";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: defaultUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${defaultUrl}/home`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: `${defaultUrl}/works`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
