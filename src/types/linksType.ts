import type { iconData } from "../config/iconData";

export type Links = Link[];

export interface Link {
  id: string;
  name: string;
  url: string;
  icon: [keyof typeof iconData];
}
