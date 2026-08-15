import { describe, expect, it } from "vitest";

import { resolveRateLimitKey } from "@/lib/rate-limit";

describe("resolveRateLimitKey", () => {
  it("prefers cf-connecting-ip", () => {
    const headers = new Headers({
      "cf-connecting-ip": "203.0.113.10",
      "x-forwarded-for": "198.51.100.1, 192.0.2.1",
    });
    expect(resolveRateLimitKey(headers)).toBe("203.0.113.10");
  });

  it("uses the first x-forwarded-for hop when cf-connecting-ip is absent", () => {
    const headers = new Headers({
      "x-forwarded-for": "198.51.100.1, 192.0.2.1",
    });
    expect(resolveRateLimitKey(headers)).toBe("198.51.100.1");
  });

  it("falls back to anonymous when no client identity header is present", () => {
    expect(resolveRateLimitKey(new Headers())).toBe("anonymous");
  });
});
