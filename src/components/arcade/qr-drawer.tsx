"use client";

import { QRCodeSVG } from "qrcode.react";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export const QrDrawer = ({
  children,
  url,
}: {
  children: ReactNode;
  url: string;
}) => (
  <Drawer>
    <DrawerTrigger asChild={true}>{children}</DrawerTrigger>
    <DrawerContent variant="arcade">
      <div className="mx-auto w-full max-w-sm px-6 pb-8">
        <DrawerHeader>
          <DrawerTitle className="text-center" variant="arcade">
            Scan · URL
          </DrawerTitle>
        </DrawerHeader>
        <div className="my-3.5 flex justify-center">
          <div className="rounded-xl border bg-white p-3.5 shadow-sm">
            <QRCodeSVG level="H" size={184} value={url} />
          </div>
        </div>
        <div className="break-all text-center font-mono arc-text-12-5 text-arc-ink">
          {url.replace(/^https?:\/\//, "")}
        </div>
        <DrawerClose asChild={true}>
          <Button className="mx-auto mt-5 flex h-11 w-11/20">Close</Button>
        </DrawerClose>
      </div>
    </DrawerContent>
  </Drawer>
);
