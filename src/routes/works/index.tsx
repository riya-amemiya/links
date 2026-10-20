import { createFileRoute } from "@tanstack/react-router";

import { StageSelect } from "@/components/arcade/stage-select";
import { defaultDescription, defaultTitle } from "@/config/defaultMetadata";
import { defaultUrl } from "@/config/defaultUrl";
import { getContent } from "@/lib/getContent";
import { getPageHead } from "@/lib/getPageHead";

export const Route = createFileRoute("/works/")({
  head: () =>
    getPageHead({
      canonical: `${defaultUrl}/works`,
      description: `Works | ${defaultDescription}`,
      openGraphTitle: defaultTitle,
      title: `Works | ${defaultTitle}`,
    }),
  component: Works,
});

function Works() {
  const works = getContent("works");
  return <StageSelect works={works.contents.toReversed()} />;
}
