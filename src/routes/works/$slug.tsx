import { createFileRoute, notFound } from "@tanstack/react-router";

import { StageBriefing } from "@/components/arcade/stage-briefing";
import { defaultDescription, defaultTitle } from "@/config/defaultMetadata";
import { defaultUrl } from "@/config/defaultUrl";
import { getContent } from "@/lib/getContent";
import { getPageHead } from "@/lib/getPageHead";
import { getWorkSlug } from "@/lib/getWorkSlug";

export const Route = createFileRoute("/works/$slug")({
  loader: ({ params }) => {
    const contents = getContent("works").contents.toReversed();
    const index = contents.findIndex(
      (content) => getWorkSlug(content) === params.slug,
    );
    const work = contents[index];
    if (!work) {
      throw notFound();
    }
    const previous = contents[(index - 1 + contents.length) % contents.length];
    const next = contents[(index + 1) % contents.length];
    return {
      index,
      nextSlug: getWorkSlug(next ?? work),
      previousSlug: getWorkSlug(previous ?? work),
      total: contents.length,
      work,
    };
  },
  head: ({ loaderData }) =>
    loaderData
      ? getPageHead({
          canonical: `${defaultUrl}/works`,
          description: `${loaderData.work.link.name} | ${defaultDescription}`,
          openGraphTitle: defaultTitle,
          title: `${loaderData.work.link.name} | ${defaultTitle}`,
        })
      : { meta: [{ title: `Works | ${defaultTitle}` }] },
  component: WorkDetail,
});

function WorkDetail() {
  const { index, nextSlug, previousSlug, total, work } = Route.useLoaderData();
  return (
    <StageBriefing
      index={index}
      nextSlug={nextSlug}
      previousSlug={previousSlug}
      total={total}
      work={work}
    />
  );
}
