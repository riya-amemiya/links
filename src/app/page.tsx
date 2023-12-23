import htmr from "htmr";
import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";

import { ChevronDown } from "@/components/ChevronDown";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { defaultUrl } from "@/config/defaultUrl";
import { iconData } from "@/config/iconData";
import { getMicrocms } from "@/lib/getMicrocms";
import { Config } from "@/types/configType";
const Index = async () => {
  const data = await getMicrocms<Config>("config");
  return (
    // 真ん中に表示する
    <Card className="max-w-md mx-auto bg-slate-50 rounded-xl shadow-md md:max-w-2xl w-full md:p-10 pb-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-md:mt-10 max-sm:mt-20">
      <CardContent>
        <div className="flex-1 w-full flex flex-col items-center">
          <Drawer>
            <DrawerTrigger asChild={true}>
              <div className="md:flex-shrink-0">
                <Avatar asChild={true} className="h-full w-full md:w-64">
                  <Image
                    alt="User avatar"
                    height={500}
                    loading="eager"
                    src={data.icon.url}
                    width={500}
                  />
                </Avatar>
              </div>
            </DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto w-full max-w-sm">
                <DrawerHeader>
                  <h1 className="text-3xl font-bold text-center">QR Code</h1>
                </DrawerHeader>
                <div className="flex justify-center items-center w-full">
                  <QRCodeSVG value={defaultUrl} />
                </div>
                <DrawerFooter>
                  <DrawerClose asChild={true}>
                    <Button className="w-1/2 mx-auto">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
          <div className="flex-1 w-full flex flex-col items-center">
            <h1 className="block mt-1 text-2xl leading-tight font-medium text-black">
              {data.name}
            </h1>
            <div className="mt-2 text-gray-500 text-center text-base md:text-lg">
              {htmr(data.description)}
            </div>
            <div className="mt-2 hidden max-sm:block">
              <ChevronDown />
            </div>
            <ul className="mt-4 flex flex-wrap justify-center items-center gap-4">
              {data.links.reverse().map(({ url, name, icon }) => {
                const Icon = iconData[icon[0]];
                return (
                  <li
                    className="flex items-center w-36 animate__animated animate__fadeInUp"
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
      </CardContent>
    </Card>
  );
};
export default Index;
