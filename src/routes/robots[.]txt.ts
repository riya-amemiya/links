import { createFileRoute } from "@tanstack/react-router";

import { defaultUrl } from "@/config/defaultUrl";

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: () =>
        new Response(
          `User-Agent: *\nAllow: /\n\nSitemap: ${defaultUrl}/sitemap.xml\n`,
          { headers: { "Content-Type": "text/plain" } },
        ),
    },
  },
});
