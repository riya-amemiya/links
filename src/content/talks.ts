import type { Talks } from "@/types/talksType";

export const talks: Talks = {
  contents: [
    {
      id: "v8-contributor",
      year: "2025",
      title: "V8 contributions",
      venue: "V8 / Chromium",
      kind: "oss",
      score: 9800,
      url: "https://github.com/v8/v8/commits/main/?author=riya-amemiya",
    },
    {
      id: "tskaigi-staff",
      year: "2025",
      title: "TSKaigi staff",
      venue: "TSKaigi",
      kind: "staff",
      score: 9100,
      url: "https://tskaigi.org/",
    },
    {
      id: "conference-slides",
      year: "2025",
      title: "Conference slides (Slidev)",
      venue: "Speaker Deck / GitHub",
      kind: "talk",
      score: 8700,
      url: "https://speakerdeck.com/riyaamemiya",
    },
    {
      id: "zenn-writing",
      year: "2024",
      title: "Technical writing on Zenn",
      venue: "Zenn",
      kind: "writing",
      score: 8200,
      url: "https://zenn.dev/riya_amemiya",
    },
    {
      id: "umt-library",
      year: "2023",
      title: "UMT utility library",
      venue: "npm / GitHub",
      kind: "oss",
      score: 7600,
      url: "https://github.com/riya-amemiya/UMT",
    },
  ],
};
