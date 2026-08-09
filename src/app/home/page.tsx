import type { Metadata } from "next";

import { CharacterSelect } from "@/components/arcade/character-select";
import { defaultDescription, defaultTitle } from "@/config/defaultMetadata";
import { defaultUrl } from "@/config/defaultUrl";
import { getContent } from "@/lib/getContent";

export const metadata: Metadata = {
  title: `Home | ${defaultTitle}`,
  description: `Home | ${defaultDescription}`,
  alternates: {
    canonical: `${defaultUrl}/home`,
  },
  openGraph: {
    title: defaultTitle,
    url: `${defaultUrl}/home`,
  },
};

export default function Home() {
  const profile = getContent("profile");
  return <CharacterSelect profile={profile} />;
}
