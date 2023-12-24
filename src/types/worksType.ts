import { Img } from "./imgType";
import { Link } from "./linksType";

export interface Work {
  contents: Content[];
}

interface Content {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  link: Link;
  description: string;
  img: Img;
}
