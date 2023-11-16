import "@/styles/globals.css";
import "animate.css";
import "the-new-css-reset/css/reset.css";
import type { Metadata } from "next";

const defaultUrl = process.env.VERCEL_URL
  ? "https://riya-amemiya-links.oshaburikitchin.com"
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Amemiya Riya Links",
  description: "Amemiya Riya Links",
  alternates: {
    canonical: defaultUrl,
  },
  authors: {
    name: "Amemiya Riya",
    url: "https://twitter.com/AmemiyaRiya",
  },
  robots: {
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Amemiya Riya Links",
    description: "Amemiya Riya Links",
    url: defaultUrl,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "Riya31377928",
    title: "Amemiya Riya Links",
    description: "Amemiya Riya Links",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="bg-primary text-foreground">
        <main className="min-h-screen flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
