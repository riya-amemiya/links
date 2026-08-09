import { profile } from "@/content/profile";
import { talks } from "@/content/talks";
import { works } from "@/content/works";
import type { Profile } from "@/types/profileType";
import type { Talks } from "@/types/talksType";
import type { Work } from "@/types/worksType";

function getContent(endpoint: "profile"): Profile;
function getContent(endpoint: "works"): Work;
function getContent(endpoint: "talks"): Talks;
function getContent(
  endpoint: "profile" | "works" | "talks",
): Profile | Work | Talks {
  if (endpoint === "profile") {
    return profile;
  }
  if (endpoint === "talks") {
    return talks;
  }
  return works;
}

export { getContent };
