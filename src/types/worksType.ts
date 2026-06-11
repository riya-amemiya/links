import type { Img } from "./imgType";
import type { Link } from "./linksType";

export interface Work {
  contents: Content[];
}

export interface Content {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  link: Link;
  description: string;
  img: Img;
  blurb: string;
  meta: string;
  stack: string[];
  type: string;
  year: string;
}
