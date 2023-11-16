import {
  GitHubLogoIcon,
  Link2Icon,
  PersonIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import type { IconProps } from "@radix-ui/react-icons/dist/types";
import type { ForwardRefExoticComponent, RefAttributes } from "react";

interface Config {
  iconImage: string;
  name: string | JSX.Element;
  description?: string | JSX.Element;
  links: {
    name: string;
    url: string;
    Icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
  }[];
}

export const config: Config = {
  iconImage: "/icon.png",
  name: "Amemiya Riya",
  description: (
    <>
      最近はReactずっと書いてます。
      <br />
      TSとPythonが得意です。
      <br />
      趣味としてプログラミングを楽しんでいます。
    </>
  ),
  links: [
    {
      name: "Portfolio",
      url: "https://lapras.com/public/riyaamemiya",
      Icon: PersonIcon,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/Riya31377928",
      Icon: TwitterLogoIcon,
    },
    {
      name: "GitHub",
      url: "https://github.com/riya-amemiya",
      Icon: GitHubLogoIcon,
    },
    {
      name: "Diary",
      url: "https://sizu.me/riya_amemiya",
      Icon: Link2Icon,
    },
    {
      name: "Zenn",
      url: "https://zenn.dev/riya_amemiya",
      Icon: Link2Icon,
    },
  ],
};
