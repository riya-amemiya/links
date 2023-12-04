import { NextResponse } from "next/server";

import { getMicrocms } from "@/lib/getMicrocms";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const endpoint = searchParams.get("endpoint");
  const orders = searchParams.get("orders") as
    | ("createdAt" | "updatedAt" | "id" | "-createdAt" | "-updatedAt" | "-id")
    | null;
  const q = searchParams.get("q");
  const limit = searchParams.get("limit");
  const offset = searchParams.get("offset");
  const fields = searchParams.get("fields");
  const ids = searchParams.get("ids");
  if (!endpoint) {
    return NextResponse.error();
  }
  if (
    orders &&
    ![
      "createdAt",
      "updatedAt",
      "id",
      "-createdAt",
      "-updatedAt",
      "-id",
    ].includes(orders)
  ) {
    return NextResponse.error();
  }
  const queries: {
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
  } = {
    orders: orders ?? undefined,
    q: q ?? undefined,
    limit: limit ? Number(limit) : undefined,
    offset: offset ? Number(offset) : undefined,
    fields: fields ?? undefined,
    ids: ids ?? undefined,
  };

  const data = await getMicrocms(endpoint, queries);
  return NextResponse.json(data);
}
