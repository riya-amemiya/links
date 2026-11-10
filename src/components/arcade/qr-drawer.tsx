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
          <div className="text-center">
            <DrawerTitle variant="arcade">Scan · URL</DrawerTitle>
          </div>
        </DrawerHeader>
        <div className="my-3.5 flex justify-center">
          <div className="rounded-xl border bg-white p-3.5 shadow-sm">
            <QRCodeSVG level="H" size={184} value={url} />
          </div>
        </div>
        <div className="break-all text-center font-mono arc-text-12-5 text-arc-ink">
          {url.replace(/^https?:\/\//, "")}
        </div>
        <div className="mt-5 flex justify-center">
          <DrawerClose asChild={true}>
            <Button size="arcade">Close</Button>
          </DrawerClose>
        </div>
      </div>
    </DrawerContent>
  </Drawer>
);
