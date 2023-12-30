import htmr from "htmr";
import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";
import { toBase64 } from "umt/module/String/toBase64";

import { Avatar } from "@/components/ui/avatar";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { iconData } from "@/config/iconData";
import { Work } from "@/types/worksType";

import { Button } from "../ui/button";
export const WorksLinks = ({ data }: { data: Work }) => {
  return (
    <ul className="mt-4 flex flex-wrap justify-center items-center gap-7">
      {data.contents.reverse().map(({ link, img, description }) => {
        const Icon = iconData[link.icon[0]];
        return (
          <li
            className="flex items-center animate__animated animate__fadeIn max-sm:w-full"
            key={toBase64(link.url)}
          >
            <div className="flex flex-col items-center w-full">
              <div className="md:flex items-center">
                <Drawer>
                  <DrawerTrigger asChild={true}>
                    <div className="md:flex-shrink-0">
                      <Avatar
                        asChild={true}
                        className="h-full w-2/3 md:w-48 mx-auto"
                      >
                        <Image
                          alt="User avatar"
                          height={500}
                          loading="eager"
                          src={img.url}
                          width={500}
                        />
                      </Avatar>
                    </div>
                  </DrawerTrigger>
                  <DrawerContent>
                    <div className="mx-auto w-full max-w-sm">
                      <DrawerHeader>
                        <h1 className="text-3xl font-bold text-center">
                          {link.name} URL
                        </h1>
                      </DrawerHeader>
                      <div className="flex justify-center items-center w-full">
                        <QRCodeSVG level="H" value={link.url} />
                      </div>
                      <DrawerFooter>
                        <DrawerClose asChild={true}>
                          <Button className="w-1/2 mx-auto">Cancel</Button>
                        </DrawerClose>
                      </DrawerFooter>
                    </div>
                  </DrawerContent>
                </Drawer>
              </div>
              <div className="text-gray-500 text-center text-lg ">
                {htmr(description)}
              </div>
              <div className="w-1/3 md:w-1/2 mx-auto mt-2">
                <Button asChild={true} className="w-full">
                  <a href={link.url} rel="noopener noreferrer" target="_blank">
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
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
