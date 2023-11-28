import { iconData } from "../config/iconData";
export interface Config {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
  description: string;
  icon: Icon;
  links: Link[];
}

interface Link {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
  url: string;
  icon: [keyof typeof iconData];
}

interface Icon {
  url: string;
  height: number;
  width: number;
}
