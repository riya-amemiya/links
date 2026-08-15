export const resolveRateLimitKey = (headers: Headers): string => {
  const cfConnectingIp = headers.get("cf-connecting-ip");
  if (cfConnectingIp) {
    return cfConnectingIp;
  }

  const forwardedFor = headers.get("x-forwarded-for");
  if (forwardedFor) {
    const first = forwardedFor.split(",", 1)[0]?.trim();
    if (first) {
      return first;
    }
  }

  return "anonymous";
};
