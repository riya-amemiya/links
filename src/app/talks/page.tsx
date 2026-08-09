import type { Metadata } from "next";

import { ScoreAttack } from "@/components/arcade/score-attack";
import { defaultDescription, defaultTitle } from "@/config/defaultMetadata";
import { defaultUrl } from "@/config/defaultUrl";
import { getContent } from "@/lib/getContent";

export const metadata: Metadata = {
  title: `Talks | ${defaultTitle}`,
  description: `Score Attack | ${defaultDescription}`,
  alternates: {
    canonical: `${defaultUrl}/talks`,
  },
  openGraph: {
    title: `Talks | ${defaultTitle}`,
    url: `${defaultUrl}/talks`,
  },
};

export default function TalksPage() {
  const talks = getContent("talks");
  return <ScoreAttack talks={talks.contents} />;
}
