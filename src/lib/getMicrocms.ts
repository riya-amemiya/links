import type { MicroCMSQueries } from "microcms-js-sdk";

import { microcmsClient } from "@/lib/microcmsClient";
import type { Profile } from "@/types/profileType";
import type { Work } from "@/types/worksType";

function getMicrocms(
  endpoint: "profile",
  queries?: MicroCMSQueries,
): Promise<Profile>;
function getMicrocms(
  endpoint: "works",
  queries?: MicroCMSQueries,
): Promise<Work>;
async function getMicrocms<T>(
  endpoint: "profile" | "works",
  queries?: MicroCMSQueries,
): Promise<T> {
  const data = await microcmsClient.get<T>({
    endpoint,
    queries,
  });
  return data;
}
export { getMicrocms };
