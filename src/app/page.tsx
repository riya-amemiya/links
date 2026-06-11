import { Arcade } from "@/components/arcade/arcade";
import { getMicrocms } from "@/lib/getMicrocms";

const Index = async () => {
  const [profile, works] = await Promise.all([
    getMicrocms("profile"),
    getMicrocms("works"),
  ]);
  return (
    <Arcade
      initialView="home"
      profile={profile}
      works={works.contents.toReversed()}
    />
  );
};
export default Index;
