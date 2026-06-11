import { BootGate } from "@/components/arcade/boot-gate";
import { CharacterSelect } from "@/components/arcade/character-select";
import { getMicrocms } from "@/lib/getMicrocms";

const Index = async () => {
  const profile = await getMicrocms("profile");
  return (
    <BootGate name={profile.name}>
      <CharacterSelect profile={profile} />
    </BootGate>
  );
};
export default Index;
