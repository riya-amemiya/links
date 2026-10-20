import { createFileRoute } from "@tanstack/react-router";

import { BonusStage } from "@/components/arcade/bonus-stage";
import { defaultDescription, defaultTitle } from "@/config/defaultMetadata";
import { defaultUrl } from "@/config/defaultUrl";
import { getPageHead } from "@/lib/getPageHead";

export const Route = createFileRoute("/lab")({
  head: () =>
    getPageHead({
      canonical: `${defaultUrl}/lab`,
      description: `Bonus Stage | ${defaultDescription}`,
      openGraphTitle: `Lab | ${defaultTitle}`,
      title: `Lab | ${defaultTitle}`,
    }),
  component: BonusStage,
});
