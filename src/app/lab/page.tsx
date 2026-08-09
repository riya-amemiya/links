import type { Metadata } from "next";

import { BonusStage } from "@/components/arcade/bonus-stage";
import { defaultDescription, defaultTitle } from "@/config/defaultMetadata";
import { defaultUrl } from "@/config/defaultUrl";

export const metadata: Metadata = {
  title: `Lab | ${defaultTitle}`,
  description: `Bonus Stage | ${defaultDescription}`,
  alternates: {
    canonical: `${defaultUrl}/lab`,
  },
  openGraph: {
    title: `Lab | ${defaultTitle}`,
    url: `${defaultUrl}/lab`,
  },
};

export default function LabPage() {
  return <BonusStage />;
}
