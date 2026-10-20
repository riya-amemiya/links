import { createFileRoute } from "@tanstack/react-router";

import { CharacterSelect } from "@/components/arcade/character-select";
import { defaultDescription, defaultTitle } from "@/config/defaultMetadata";
import { defaultUrl } from "@/config/defaultUrl";
import { getContent } from "@/lib/getContent";
import { getPageHead } from "@/lib/getPageHead";

export const Route = createFileRoute("/home")({
  head: () =>
    getPageHead({
      canonical: `${defaultUrl}/home`,
      description: `Home | ${defaultDescription}`,
      openGraphTitle: defaultTitle,
      title: `Home | ${defaultTitle}`,
    }),
  component: Home,
});

function Home() {
  const profile = getContent("profile");
  return <CharacterSelect profile={profile} />;
}
