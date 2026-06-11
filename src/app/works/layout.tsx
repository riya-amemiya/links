import type { Metadata } from "next";

import { defaultDescription, defaultTitle } from "@/config/defaultMetadata";
import { defaultUrl } from "@/config/defaultUrl";

export const metadata: Metadata = {
  title: `Works | ${defaultTitle}`,
  description: `Works | ${defaultDescription}`,
  alternates: {
    canonical: `${defaultUrl}/works`,
  },
  openGraph: {
    title: defaultTitle,
    url: `${defaultUrl}/works`,
  },
};

export default function WorksRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
