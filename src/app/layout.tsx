import "the-new-css-reset/css/reset.css";
import "@/styles/globals.css";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

import { ArcadeRoot } from "@/components/arcade/arcade-root";
import { RouteFlash } from "@/components/arcade/route-flash";
import { defaultDescription, defaultTitle } from "@/config/defaultMetadata";
import { defaultUrl } from "@/config/defaultUrl";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: defaultTitle,
  description: defaultDescription,
  alternates: {
    canonical: defaultUrl,
  },
  authors: {
    name: "Amemiya Riya",
    url: "https://twitter.com/Riya31377928",
  },
  robots: {
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: defaultUrl,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "Riya31377928",
    title: defaultTitle,
    description: defaultDescription,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${GeistMono.variable} ${GeistSans.variable}`} lang="en">
      <body className="bg-arc-bg">
        <ArcadeRoot>
          <RouteFlash />
          {children}
        </ArcadeRoot>
      </body>
    </html>
  );
}
