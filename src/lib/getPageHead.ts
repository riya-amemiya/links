import { defaultUrl } from "@/config/defaultUrl";

export const openGraphImageMeta = [
  { property: "og:image", content: `${defaultUrl}/opengraph-image.png` },
  { property: "og:image:type", content: "image/png" },
  { property: "og:image:width", content: "1920" },
  { property: "og:image:height", content: "1080" },
  { property: "og:type", content: "website" },
];

export const getPageHead = ({
  canonical,
  description,
  openGraphImage = false,
  openGraphTitle,
  title,
}: {
  canonical: string;
  description: string;
  openGraphImage?: boolean;
  openGraphTitle: string;
  title: string;
}) => ({
  meta: [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: openGraphTitle },
    { property: "og:description", content: description },
    { property: "og:url", content: canonical },
    ...(openGraphImage ? openGraphImageMeta : []),
  ],
  links: [{ rel: "canonical", href: canonical }],
});
