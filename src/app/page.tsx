import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  GitHubLogoIcon,
  Link2Icon,
  PersonIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import type { IconProps } from "@radix-ui/react-icons/dist/types";
import type { ForwardRefExoticComponent, RefAttributes } from "react";
async function Index() {
  const links: {
    name: string;
    url: string;
    Icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
  }[] = [
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
  ];
  return (
    // 真ん中に表示する
    <Card className="max-w-md mx-auto bg-slate-50 rounded-xl shadow-md md:max-w-2xl overflow-hidden w-full p-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:mt-0 mt-10">
      <div className="flex-1 w-full flex flex-col items-center">
        <div className="md:flex-shrink-0">
          <Avatar className="h-full w-full md:w-48">
            <AvatarImage alt="User avatar" src="/icon.png" />
            <AvatarFallback>ICON</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-1 w-full flex flex-col items-center">
          <h1 className="block mt-1 text-lg leading-tight font-medium text-black">
            Amemiya Riya
          </h1>
          <p className="mt-2 text-gray-500 text-center">
            最近はReactずっと書いてます。
            <br />
            TSとPythonが得意です。
            <br />
            趣味としてプログラミングを楽しんでいます。
          </p>
          <ul className="mt-4 space-y-4">
            {links.map(({ url, name, Icon }) => (
              <li className="flex items-center space-x-2 w-36" key={url}>
                <Button className="w-full">
                  <div className="relative w-full">
                    <div className="w-full flex items-center justify-center">
                      <div className="w-4/12">
                        <div className="w-full flex justify-center items-center">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>
                      <a
                        className="text-sm text-white w-8/12 text-center"
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {name}
                      </a>
                    </div>
                  </div>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}
export default Index;
