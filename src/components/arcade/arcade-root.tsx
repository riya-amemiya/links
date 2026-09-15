import type { ReactNode } from "react";

import { Scanline } from "@/components/arcade/scanline";

export const ArcadeRoot = ({ children }: { children: ReactNode }) => (
  <div className="relative min-h-screen overflow-hidden bg-arc-bg font-mono text-arc-fg after:pointer-events-none after:absolute after:inset-0 after:z-7 after:arc-bg-vignette after:content-empty">
    <div className="pointer-events-none absolute inset-0 arc-bg-grid" />
    <Scanline className="absolute inset-0 z-6" />
    <div className="relative z-2 mx-auto max-w-220 px-6.5 pt-8.5 pb-29 max-md:px-4 max-md:pt-7 max-md:pb-27.5">
      {children}
    </div>
  </div>
);
