import { Boot } from "@/components/arcade/boot";
import { getContent } from "@/lib/getContent";

export default function Index() {
  const profile = getContent("profile");
  return <Boot name={profile.name} />;
}
