import { getCloudflareContext } from "@opennextjs/cloudflare";
import { type NextRequest, NextResponse } from "next/server";

import { resolveRateLimitKey } from "@/lib/rate-limit";

const getRateLimiter = () => {
  try {
    return getCloudflareContext().env.RATE_LIMITER;
  } catch {
    return;
  }
};

export async function middleware(request: NextRequest) {
  const rateLimiter = getRateLimiter();
  if (!rateLimiter) {
    return NextResponse.next();
  }

  const key = resolveRateLimitKey(request.headers);
  const { success } = await rateLimiter.limit({ key });
  return success
    ? NextResponse.next()
    : new NextResponse("Too Many Requests", {
        headers: {
          "Retry-After": "60",
        },
        status: 429,
      });
}

export const config = {
  matcher: "/:path*",
};
