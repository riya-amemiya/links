import { CharacterSelect } from "@/components/arcade/character-select";
import { getMicrocms } from "@/lib/getMicrocms";

const Index = async () => {
  const profile = await getMicrocms("profile");
  return <CharacterSelect profile={profile} />;
};
export default Index;
