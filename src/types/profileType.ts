import { Img as Icon } from "./imgType";
import { Link } from "./linksType";

export interface Profile {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
  biography: string;
  icon: Icon;
  links: Link[];
}
