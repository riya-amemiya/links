import { createMiddleware, createStart } from "@tanstack/react-start";

import { resolveRateLimitKey } from "@/lib/rate-limit";

const rateLimitMiddleware = createMiddleware().server(
  async ({ next, request }) => {
    const { env } = await import("cloudflare:workers");
    const { success } = await env.RATE_LIMITER.limit({
      key: resolveRateLimitKey(request.headers),
    });
    return success
      ? next()
      : new Response("Too Many Requests", {
          headers: {
            "Retry-After": "60",
          },
          status: 429,
        });
  },
);

const securityHeadersMiddleware = createMiddleware().server(
  async ({ next }) => {
    const result = await next();
    if (import.meta.env.PROD) {
      result.response.headers.set(
        "Permissions-Policy",
        "camera=(), microphone=(), geolocation=()",
      );
      result.response.headers.set("Access-Control-Allow-Origin", "same-origin");
    }
    return result;
  },
);

export const startInstance = createStart(() => ({
  requestMiddleware: [rateLimitMiddleware, securityHeadersMiddleware],
}));
