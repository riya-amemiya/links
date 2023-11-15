import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  GitHubLogoIcon,
  Link2Icon,
  PersonIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
async function Index() {
  const links: {
    name: string;
    url: string;
    icon: JSX.Element;
  }[] = [
    {
      name: "Portfolio",
      url: "https://lapras.com/public/riyaamemiya",
      icon: <PersonIcon className="w-5 h-5 mr-4" />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/Riya31377928",
      icon: <TwitterLogoIcon className="w-5 h-5 mr-4" />,
    },
    {
      name: "GitHub",
      url: "https://github.com/riya-amemiya",
      icon: <GitHubLogoIcon className="w-5 h-5 mr-4" />,
    },
    {
      name: "Diary",
      url: "https://sizu.me/riya_amemiya",
      icon: <Link2Icon className="w-5 h-5 mr-4" />,
    },
    {
      name: "Zenn",
      url: "https://zenn.dev/riya_amemiya",
      icon: <Link2Icon className="w-5 h-5 mr-4" />,
    },
  ];
  return (
    // 真ん中に表示する
    <Card className="max-w-md mx-auto bg-slate-50 rounded-xl shadow-md overflow-hidden md:max-w-2xl w-full p-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="flex-1 w-full flex flex-col items-center">
        <div className="md:flex-shrink-0">
          <Avatar className="h-48 w-full object-cover md:h-full md:w-48">
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
            {links.map((link) => (
              <li className="flex items-center space-x-2 w-36" key={link.url}>
                <Button className="w-full">
                  <div className="relative w-full">
                    <div className="w-full flex items-center justify-center">
                      {link.icon}
                      <a
                        className="text-sm text-white"
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.name}
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
