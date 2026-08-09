import type { Work } from "@/types/worksType";

export const works: Work = {
  contents: [
    {
      id: "ti040c1d40n9",
      link: {
        id: "0mgsx8srav20",
        name: "Slide",
        url: "https://github.com/riya-amemiya/amemiya_riya_slide_data",
        icon: ["GitHubLogoIcon"],
      },
      description: "<p>Here is a list of my presentation materials</p>",
      img: {
        url: "/content/github.png",
        height: 1000,
        width: 1000,
      },
      blurb:
        "Here is a list of slides from my conference presentations. They were created using Slidev.",
      meta: "Slide",
      stack: ["TypeScript"],
      type: "Slide",
      year: "2025",
    },
    {
      id: "21sc1ychp5",
      link: {
        id: "r3n_i6x_w4",
        name: "agrb",
        url: "https://github.com/riya-amemiya/agrb",
        icon: ["GitHubLogoIcon"],
      },
      description: "<p>A CLI that automates git rebase.</p>",
      img: {
        url: "/content/profile-icon.png",
        height: 1000,
        width: 1000,
      },
      blurb:
        "A command-line tool that automates fiddly git rebase workflows — fewer manual steps, fewer mistakes.",
      meta: "CLI",
      stack: ["TypeScript"],
      type: "CLI",
      year: "2024",
    },
    {
      id: "vn85xgx4m1",
      link: {
        id: "h4wqkws2p6um",
        name: "links",
        url: "https://github.com/riya-amemiya/links",
        icon: ["GitHubLogoIcon"],
      },
      description: "<p>Source code for this site.</p>",
      img: {
        url: "/content/profile-icon.png",
        height: 1000,
        width: 1000,
      },
      blurb:
        "This portfolio itself. Next.js + Tailwind, content in-repo as TypeScript modules, deployed to the edge on Cloudflare Workers.",
      meta: "TypeScript",
      stack: ["TypeScript"],
      type: "TypeScript",
      year: "2024",
    },
    {
      id: "8h6yxzevuz26",
      link: {
        id: "qq0crxzpr0f",
        name: "Articles",
        url: "https://github.com/riya-amemiya/amemiya_riya_zenn_data",
        icon: ["GitHubLogoIcon"],
      },
      description: "<p>Source data for my Zenn articles.</p>",
      img: {
        url: "/content/zenn.png",
        height: 1000,
        width: 1000,
      },
      blurb:
        "The source data behind my Zenn posts — write-ups and notes on TypeScript, React and day-to-day tooling.",
      meta: "TypeScript",
      stack: ["TypeScript", "Zenn"],
      type: "TypeScript",
      year: "2023",
    },
    {
      id: "i8e-d2lxyglz",
      link: {
        id: "g_7w0hdp9k33",
        name: "UMT",
        url: "https://github.com/riya-amemiya/UMT",
        icon: ["GitHubLogoIcon"],
      },
      description: "<p>A handy utility function collection.</p>",
      img: {
        url: "/content/github.png",
        height: 1000,
        width: 1000,
      },
      blurb:
        "A small, fully-typed TypeScript utility library — math, array, string and validation helpers I reach for on every project.",
      meta: "TypeScript",
      stack: ["TypeScript"],
      type: "Library",
      year: "2023",
    },
  ],
};
