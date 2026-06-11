import { StageSelect } from "@/components/arcade/stage-select";
import { getMicrocms } from "@/lib/getMicrocms";

const Works = async () => {
  const works = await getMicrocms("works");
  return <StageSelect works={works.contents.toReversed()} />;
};
export default Works;
