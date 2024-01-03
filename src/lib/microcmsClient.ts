import { createClient } from "microcms-js-sdk";

export const microcmsClient = createClient({
  serviceDomain: process.env.MICROCMS_SERVICEDOMAIN as string,
  apiKey: process.env.MICROCMS_API_KEY as string,
});
