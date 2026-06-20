import { Boot } from "@/components/arcade/boot";
import { getMicrocms } from "@/lib/getMicrocms";

export default async function Index() {
  const profile = await getMicrocms("profile");
  return <Boot name={profile.name} />;
}
