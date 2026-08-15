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
  if (!success) {
    return new NextResponse("Too Many Requests", {
      headers: {
        "Retry-After": "60",
      },
      status: 429,
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    String.raw`/((?!_next/static|_next/image|favicon.ico|.*\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)`,
  ],
};
