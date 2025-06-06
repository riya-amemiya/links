import parse from "html-react-parser";
import { QRCodeSVG } from "qrcode.react";

import { HomeLinks } from "@/components/home/links";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Icon } from "@/components/ui/icon";
import { defaultUrl } from "@/config/defaultUrl";
import { getMicrocms } from "@/lib/getMicrocms";

const Index = async () => {
  const data = await getMicrocms("profile");
  return (
    <Card className="max-w-md mx-auto bg-slate-50 rounded-xl shadow-md md:max-w-2xl w-full md:p-10 pb-10">
      <CardContent>
        <div className="flex-1 w-full flex flex-col items-center">
          <Drawer>
            <DrawerTrigger asChild={true}>
              <div className="md:shrink-0">
                <Icon
                  alt={`${data.name}のアイコン`}
                  className="h-full w-full md:w-64 cursor-pointer"
                  priority={true}
                  src={data.icon.url}
                />
              </div>
            </DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto w-full max-w-sm">
                <DrawerHeader>
                  <DrawerTitle className="text-3xl font-bold text-center">
                    URL
                  </DrawerTitle>
                </DrawerHeader>
                <div className="flex justify-center items-center w-full p-4">
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
            <h1 className="mt-4 text-2xl leading-tight font-medium text-black">
              {data.name}
            </h1>
            <div className="mt-2 text-gray-500 text-center text-base md:text-lg">
              {parse(data.biography)}
            </div>
            <HomeLinks links={data.links} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default Index;
