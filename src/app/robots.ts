import type { MetadataRoute } from "next";

import { defaultUrl } from "@/config/defaultUrl";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${defaultUrl}/sitemap.xml`,
  };
}
