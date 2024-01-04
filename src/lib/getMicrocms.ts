import { MicroCMSQueries } from "microcms-js-sdk";

import { microcmsClient } from "@/lib/microcmsClient";
import { Config } from "@/types/configType";
import { Work } from "@/types/worksType";

export async function getMicrocms<T>(
  endpoint: T extends Config ? "config" : T extends Work ? "works" : string,
  queries?: MicroCMSQueries,
): Promise<T> {
  const data = await microcmsClient.get<T>({
    endpoint,
    queries,
  });
  return data;
}
