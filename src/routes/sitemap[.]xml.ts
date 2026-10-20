import { createFileRoute } from "@tanstack/react-router";

import { defaultUrl } from "@/config/defaultUrl";

const entries = [
  { path: "", changeFrequency: "yearly", priority: 1 },
  { path: "/home", changeFrequency: "yearly", priority: 0.9 },
  { path: "/works", changeFrequency: "monthly", priority: 0.8 },
  { path: "/lab", changeFrequency: "yearly", priority: 0.5 },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () =>
        new Response(
          [
            '<?xml version="1.0" encoding="UTF-8"?>',
            '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
            ...entries.map(({ changeFrequency, path, priority }) =>
              [
                "<url>",
                `<loc>${defaultUrl}${path}</loc>`,
                `<lastmod>${new Date().toISOString()}</lastmod>`,
                `<changefreq>${changeFrequency}</changefreq>`,
                `<priority>${priority}</priority>`,
                "</url>",
              ].join("\n"),
            ),
            "</urlset>",
            "",
          ].join("\n"),
          { headers: { "Content-Type": "application/xml" } },
        ),
    },
  },
});
