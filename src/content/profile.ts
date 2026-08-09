import type { Profile } from "@/types/profileType";

export const profile: Profile = {
  name: "Amemiya Riya",
  biography:
    "<p>V8 Contributor</p><p>Platform Engineer at Dinii Inc.</p><p>TSKaigi Staff</p>",
  icon: {
    url: "/content/profile-icon.png",
    height: 1000,
    width: 1000,
  },
  level: "5",
  role: "Platform Engineer",
  skills: [
    { name: "TypeScript", value: 90 },
    { name: "React", value: 90 },
    { name: "NestJS", value: 80 },
    { name: "Python", value: 80 },
    { name: "Rails", value: 70 },
    { name: "Rust", value: 60 },
  ],
  links: [
    {
      id: "6jul26-ht",
      name: "V8 Commits",
      url: "https://github.com/v8/v8/commits/main/?author=riya-amemiya",
      icon: ["GitHubLogoIcon"],
    },
    {
      id: "i98anp2p70do",
      name: "Slides",
      url: "https://speakerdeck.com/riyaamemiya",
      icon: ["Link2Icon"],
    },
    {
      id: "1v09n9z_p",
      name: "Zenn",
      url: "https://zenn.dev/riya_amemiya",
      icon: ["Link2Icon"],
    },
    {
      id: "l16qnrav2",
      name: "Sponsor",
      url: "https://github.com/sponsors/riya-amemiya",
      icon: ["Link2Icon"],
    },
    {
      id: "3uxigc2m0",
      name: "GitHub",
      url: "https://github.com/riya-amemiya",
      icon: ["GitHubLogoIcon"],
    },
    {
      id: "7-ovlgyb37c3",
      name: "Twitter",
      url: "https://twitter.com/Riya31377928",
      icon: ["TwitterLogoIcon"],
    },
    {
      id: "f25lrzudppy4",
      name: "Portfolio",
      url: "https://lapras.com/public/riyaamemiya",
      icon: ["PersonIcon"],
    },
  ],
};
