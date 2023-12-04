import { NextResponse } from "next/server";

import { getMicrocms } from "@/lib/getMicrocms";

export async function POST(request: Request) {
  const body = (await request.json()) as {
    endpoint: string;
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
    };
  };
  const { endpoint, queries } = body;
  const data = await getMicrocms(endpoint, queries);
  return NextResponse.json(data);
}
