import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    short_name: "Riya Links",
    name: "Amemiya Riya Links",
    icons: [
      {
        src: "/icons/icon-192x192.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        src: "/icons/icon-256x256.png",
        type: "image/png",
        sizes: "256x256",
      },
      {
        src: "/icons/icon-384x384.png",
        type: "image/png",
        sizes: "384x384",
      },
      {
        src: "/icons/icon-512x512.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    start_url: ".",
    background_color: "#ffffff",
    display: "standalone",
    scope: "/",
    theme_color: "#000000",
  };
}
