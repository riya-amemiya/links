import type { Content } from "@/types/worksType";

export const getWorkSlug = (content: Content): string =>
  content.link.name.toLowerCase().replaceAll(/\s+/g, "-");
