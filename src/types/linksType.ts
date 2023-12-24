import { iconData } from "../config/iconData";

export type Links = Link[];

export interface Link {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
  url: string;
  icon: [keyof typeof iconData];
}
