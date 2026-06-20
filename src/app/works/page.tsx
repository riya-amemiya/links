import { StageSelect } from "@/components/arcade/stage-select";
import { getMicrocms } from "@/lib/getMicrocms";

export default async function Works() {
  const works = await getMicrocms("works");
  return <StageSelect works={works.contents.toReversed()} />;
}
