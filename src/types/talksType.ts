export type TalkKind = "talk" | "staff" | "oss" | "writing";

export interface Talk {
  id: string;
  year: string;
  title: string;
  venue: string;
  kind: TalkKind;
  score: number;
  url?: string;
}

export interface Talks {
  contents: Talk[];
}
