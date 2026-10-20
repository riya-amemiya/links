import { createFileRoute } from "@tanstack/react-router";

import { Boot } from "@/components/arcade/boot";
import { defaultDescription, defaultTitle } from "@/config/defaultMetadata";
import { defaultUrl } from "@/config/defaultUrl";
import { getContent } from "@/lib/getContent";
import { getPageHead } from "@/lib/getPageHead";

export const Route = createFileRoute("/")({
  head: () =>
    getPageHead({
      canonical: defaultUrl,
      description: defaultDescription,
      openGraphImage: true,
      openGraphTitle: defaultTitle,
      title: defaultTitle,
    }),
  component: Index,
});

function Index() {
  const profile = getContent("profile");
  return <Boot name={profile.name} />;
}
