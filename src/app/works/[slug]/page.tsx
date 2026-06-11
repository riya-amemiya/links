import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { StageBriefing } from "@/components/arcade/stage-briefing";
import { defaultDescription, defaultTitle } from "@/config/defaultMetadata";
import { getMicrocms } from "@/lib/getMicrocms";
import { getWorkSlug } from "@/lib/getWorkSlug";

export const generateStaticParams = async () => {
  const works = await getMicrocms("works");
  return works.contents.map((content) => ({ slug: getWorkSlug(content) }));
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
  const { slug } = await params;
  const works = await getMicrocms("works");
  const work = works.contents.find((content) => getWorkSlug(content) === slug);
  if (!work) {
    return { title: `Works | ${defaultTitle}` };
  }
  return {
    title: `${work.link.name} | ${defaultTitle}`,
    description: `${work.link.name} | ${defaultDescription}`,
  };
};

const WorkDetail = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const works = await getMicrocms("works");
  const contents = works.contents.toReversed();
  const index = contents.findIndex((content) => getWorkSlug(content) === slug);
  const work = contents[index];
  if (!work) {
    notFound();
  }
  const previous = contents[(index - 1 + contents.length) % contents.length];
  const next = contents[(index + 1) % contents.length];
  return (
    <StageBriefing
      index={index}
      nextSlug={getWorkSlug(next ?? work)}
      previousSlug={getWorkSlug(previous ?? work)}
      total={contents.length}
      work={work}
    />
  );
};
export default WorkDetail;
