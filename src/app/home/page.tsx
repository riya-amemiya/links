import type { Metadata } from "next";

import { CharacterSelect } from "@/components/arcade/character-select";
import { defaultDescription, defaultTitle } from "@/config/defaultMetadata";
import { defaultUrl } from "@/config/defaultUrl";
import { getMicrocms } from "@/lib/getMicrocms";

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

export default async function Home() {
  const profile = await getMicrocms("profile");
  return <CharacterSelect profile={profile} />;
}
