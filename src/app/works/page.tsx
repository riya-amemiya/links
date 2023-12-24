import { CaretLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { toBase64 } from "umt/module/String/toBase64";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { iconData } from "@/config/iconData";
import { getMicrocms } from "@/lib/getMicrocms";
import { Work } from "@/types/worksType";

const UMT = async () => {
  const data = await getMicrocms<Work>("works");
  return (
    // 真ん中に表示する
    <Card className="max-w-md mx-auto bg-slate-50 rounded-xl shadow-md md:max-w-2xl w-full md:p-10 p-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-md:mt-10 max-sm:mt-20">
      <CardContent>
        <div className="flex-1 w-full flex flex-col items-center">
          <div className="flex-1 w-full flex flex-col items-center">
            <ul className="mt-4 flex flex-wrap justify-center items-center gap-4">
              {data.contents.reverse().map(({ link }) => {
                const Icon = iconData[link.icon[0]];
                return (
                  <li
                    className="flex items-center w-36 animate__animated animate__fadeInUp"
                    key={toBase64(link.url)}
                  >
                    <Button asChild={true} className="w-full">
                      <a
                        href={link.url}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="relative w-full">
                          <div className="w-full flex items-center justify-center">
                            <div className="w-4/12">
                              <div className="w-full flex justify-center items-center">
                                <Icon className="w-5 h-5" />
                              </div>
                            </div>
                            <span className="text-sm text-white w-8/12 text-center">
                              {link.name}
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
        <Button asChild={true} className="mt-4">
          <Link href="/">
            <CaretLeftIcon className="w-5 h-5" />
            Back
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};
export default UMT;
