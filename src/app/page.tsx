import htmr from "htmr";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { defaultUrl } from "@/config/defaultUrl";
import { iconData } from "@/config/iconData";
import { Config } from "@/types/configType";

const Index = async () => {
  const data: Config = await fetch(
    `${defaultUrl}/api/getMicrocms?endpoint=config`,
  ).then((response) => response.json());
  return (
    // 真ん中に表示する
    <Card className="max-w-md mx-auto bg-slate-50 rounded-xl shadow-md md:max-w-2xl overflow-hidden w-full p-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:mt-0 mt-10">
      <div className="flex-1 w-full flex flex-col items-center">
        <div className="md:flex-shrink-0">
          <div className="h-full w-full md:w-48">
            <Image
              alt="User avatar"
              height={500}
              loading="eager"
              src={data.icon.url}
              width={500}
            />
          </div>
        </div>
        <div className="flex-1 w-full flex flex-col items-center">
          <h1 className="block mt-1 text-2xl leading-tight font-medium text-black">
            {data.name}
          </h1>
          <div className="mt-2 text-gray-500 text-center text-base">
            {htmr(data.description)}
          </div>
          <ul className="mt-4 space-y-4">
            {data.links.reverse().map(({ url, name, icon }) => {
              const Icon = iconData[icon[0]];
              return (
                <li
                  className="flex items-center space-x-2 w-36 animate__animated animate__fadeInUp"
                  key={url}
                >
                  <Button asChild={true} className="w-full">
                    <a href={url} rel="noopener noreferrer" target="_blank">
                      <div className="relative w-full">
                        <div className="w-full flex items-center justify-center">
                          <div className="w-4/12">
                            <div className="w-full flex justify-center items-center">
                              <Icon className="w-5 h-5" />
                            </div>
                          </div>
                          <span className="text-sm text-white w-8/12 text-center">
                            {name}
                          </span>
                        </div>
                      </div>
                    </a>
                  </Button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Card>
  );
};
export default Index;
