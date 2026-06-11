import type { ReactNode } from "react";

import { Scanline } from "@/components/arcade/scanline";

export const ArcadeRoot = ({ children }: { children: ReactNode }) => (
  <div className="relative min-h-screen overflow-hidden bg-arc-bg font-mono text-arc-fg after:pointer-events-none after:absolute after:inset-0 after:z-[7] after:bg-[radial-gradient(120%_90%_at_50%_50%,transparent_58%,rgba(0,0,0,0.55)_100%)] after:content-['']">
    <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(226,59,47,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(226,59,47,0.07)_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(120%_90%_at_50%_38%,#000_38%,transparent_100%)]" />
    <Scanline className="absolute inset-0 z-[6]" />
    <div className="relative z-[2] mx-auto max-w-[880px] px-[26px] pt-[34px] pb-[116px] max-md:px-4 max-md:pt-7 max-md:pb-[110px]">
      {children}
    </div>
  </div>
);
