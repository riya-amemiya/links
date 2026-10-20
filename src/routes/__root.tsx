import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import type { ReactNode } from "react";
import resetCss from "the-new-css-reset/css/reset.css?url";

import { ArcadeRoot } from "@/components/arcade/arcade-root";
import { defaultDescription, defaultTitle } from "@/config/defaultMetadata";
import { defaultUrl } from "@/config/defaultUrl";
import { openGraphImageMeta } from "@/lib/getPageHead";
import globalsCss from "@/styles/globals.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Amemiya Riya" },
      { name: "googlebot", content: "index, follow" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "Riya31377928" },
      { name: "twitter:title", content: defaultTitle },
      { name: "twitter:description", content: defaultDescription },
      { name: "twitter:image", content: `${defaultUrl}/twitter-image.png` },
      { name: "twitter:image:type", content: "image/png" },
      { name: "twitter:image:width", content: "1920" },
      { name: "twitter:image:height", content: "1080" },
    ],
    links: [
      { rel: "author", href: "https://twitter.com/Riya31377928" },
      { rel: "manifest", href: "/manifest.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&family=Geist:wght@100..900&display=swap",
      },
      { rel: "stylesheet", href: resetCss },
      { rel: "stylesheet", href: globalsCss },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFound,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <HeadContent />
      </head>
      <body className="bg-arc-bg">
        <ArcadeRoot>{children}</ArcadeRoot>
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <div className="flex min-h-arc-80vh flex-col items-center justify-center text-center">
      <title>404 Not Found</title>
      <meta content="noindex" name="robots" />
      <meta content={defaultDescription} name="description" />
      <link href={defaultUrl} rel="canonical" />
      <meta content={defaultTitle} property="og:title" />
      <meta content={defaultDescription} property="og:description" />
      <meta content={defaultUrl} property="og:url" />
      {openGraphImageMeta.map(({ content, property }) => (
        <meta content={content} key={property} property={property} />
      ))}
      <div className="arc-text-11 text-arc-accent uppercase tracking-arc-30">
        — Portfolio System —
      </div>
      <h1 className="mt-4 font-sans arc-text-gameover text-arc-bright font-extrabold leading-arc-90 -tracking-arc-3">
        GAME OVER
      </h1>
      <p className="mt-4 text-arc-fg/60 text-sm uppercase tracking-arc-18">
        404 · Stage not found
      </p>
      <Link
        className="mt-8 inline-flex items-center gap-2 border-2 border-arc-accent bg-arc-accent px-6 py-3 arc-text-13 text-arc-bg font-bold uppercase tracking-arc-14"
        to="/"
      >
        <span className="motion-safe:animate-arc-blink">▶</span> Continue
      </Link>
    </div>
  );
}
