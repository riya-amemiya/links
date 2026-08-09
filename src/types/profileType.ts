import type { Img as Icon } from "./imgType";
import type { Link } from "./linksType";

export interface Skill {
  name: string;
  value: number;
}

export interface Profile {
  name: string;
  biography: string;
  icon: Icon;
  links: Link[];
  level: string;
  role: string;
  skills: Skill[];
}
