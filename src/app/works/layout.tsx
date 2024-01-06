import "@/styles/globals.css";
import "animate.css";
import "the-new-css-reset/css/reset.css";
import type { Metadata } from "next";

import { defaultUrl } from "@/config/defaultUrl";

export const metadata: Metadata = {
  title: "Works | Amemiya Riya Links",
  alternates: {
    canonical: `${defaultUrl}/works`,
  },
  openGraph: {
    title: "Works | Amemiya Riya Links",
    url: `${defaultUrl}/works`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <div
        className="max-lg:hidden"
        style={{
          width: "60rem",
        }}
      />
      {children}
    </main>
  );
}
