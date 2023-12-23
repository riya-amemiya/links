import { microcmsClient } from "@/lib/microcmsClient";

export async function getMicrocms<T>(
  endpoint: string,
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
