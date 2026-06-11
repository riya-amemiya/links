import { Boot } from "@/components/arcade/boot";
import { getMicrocms } from "@/lib/getMicrocms";

const Index = async () => {
  const profile = await getMicrocms("profile");
  return <Boot name={profile.name} />;
};
export default Index;
