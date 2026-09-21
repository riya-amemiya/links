import { profile } from "@/content/profile";
import { works } from "@/content/works";
import type { Profile } from "@/types/profileType";
import type { Work } from "@/types/worksType";

function getContent(endpoint: "profile"): Profile;
function getContent(endpoint: "works"): Work;
function getContent(endpoint: "profile" | "works"): Profile | Work {
  return endpoint === "profile" ? profile : works;
}

export { getContent };
