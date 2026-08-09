import { StageSelect } from "@/components/arcade/stage-select";
import { getContent } from "@/lib/getContent";

export default function Works() {
  const works = getContent("works");
  return <StageSelect works={works.contents.toReversed()} />;
}
