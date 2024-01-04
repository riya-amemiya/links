import { MicroCMSQueries } from "microcms-js-sdk";

import { microcmsClient } from "@/lib/microcmsClient";
import { Config } from "@/types/configType";
import { Work } from "@/types/worksType";

function getMicrocms(
  endpoint: "config",
  queries?: MicroCMSQueries,
): Promise<Config>;
function getMicrocms(
  endpoint: "works",
  queries?: MicroCMSQueries,
): Promise<Work>;
async function getMicrocms<T>(
  endpoint: string,
  queries?: MicroCMSQueries,
): Promise<T> {
  const data = await microcmsClient.get<T>({
    endpoint,
    queries,
  });
  return data;
}
export { getMicrocms };
