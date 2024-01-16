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
import type { Work } from "@/types/worksType";

import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export const WorksLinks = ({ data }: { data: Work }) => {
  return (
    <ul className="max-lg:flex-col mt-4 flex justify-center items-center gap-7 max-md:flex-wrap w-full">
      {data.contents.reverse().map(({ link, img, description }) => {
        const Icon = iconData[link.icon[0]];
        return (
          <li
            className=" flex items-center animate__animated animate__fadeIn max-sm:w-full justify-center "
            key={toBase64(link.url)}
          >
            <Card>
              <section>
                <div
                  className="max-md:hidden"
                  style={{
                    width: "25rem",
                  }}
                />
                <div className="flex items-center justify-center">
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
                              height={250}
                              loading="eager"
                              src={img.url}
                              width={250}
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
                </div>
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-center">
                    <div className="flex items-center justify-center">
                      {/* 先頭だけ大文字 */}
                      <div>
                        {link.name.charAt(0).toUpperCase() + link.name.slice(1)}
                      </div>
                      <div>
                        <Button
                          asChild={true}
                          className="w-full rounded-full"
                          variant="link"
                        >
                          <a
                            href={link.url}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            <div className="flex justify-center items-center">
                              <Icon className="w-6 h-6" />
                            </div>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center w-full">
                    <div className="text-gray-500 text-center text-lg">
                      {htmr(description)}
                    </div>
                  </div>
                </CardContent>
              </section>
            </Card>
          </li>
        );
      })}
    </ul>
  );
};
