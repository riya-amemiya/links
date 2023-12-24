import htmr from "htmr";
import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";

import { Links } from "@/components/home/links";
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
import { getMicrocms } from "@/lib/getMicrocms";
import { Config } from "@/types/configType";
const Index = async () => {
  const data = await getMicrocms<Config>("config");
  return (
    // 真ん中に表示する
    <Card className="max-w-md mx-auto bg-slate-50 rounded-xl shadow-md md:max-w-2xl w-full md:p-10 pb-10">
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
                  <h1 className="text-3xl font-bold text-center">URL</h1>
                </DrawerHeader>
                <div className="flex justify-center items-center w-full">
                  <QRCodeSVG level="H" value={defaultUrl} />
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
            <Links data={data} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default Index;
