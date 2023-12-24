import { microcmsClient } from "@/lib/microcmsClient";
import { Config } from "@/types/configType";
import { Work } from "@/types/worksType";

export async function getMicrocms<T>(
  endpoint: T extends Config ? "config" : T extends Work ? "works" : string,
  queries?: {
    orders?:
      | "-createdAt"
      | "-updatedAt"
      | "createdAt"
      | "updatedAt"
      | "-id"
      | "id";
    q?: string;
    limit?: number;
    offset?: number;
    fields?: string;
    ids?: string;
  },
): Promise<T> {
  const data = await microcmsClient.get({
    endpoint,
    queries,
  });
  return data as unknown as T;
}
