import { Arcade } from "@/components/arcade/arcade";
import { getMicrocms } from "@/lib/getMicrocms";

const Works = async () => {
  const [profile, works] = await Promise.all([
    getMicrocms("profile"),
    getMicrocms("works"),
  ]);
  return (
    <Arcade
      initialView="works"
      profile={profile}
      works={works.contents.toReversed()}
    />
  );
};
export default Works;
