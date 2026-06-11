import type { Metadata } from "next";
import Link from "next/link";

import { Scanline } from "@/components/arcade/scanline";

export const metadata: Metadata = {
  title: "404 Not Found",
};

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-arc-bg p-6 text-center font-mono text-arc-fg">
      <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(226,59,47,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(226,59,47,0.09)_1px,transparent_1px)] [background-size:46px_46px] [mask-image:radial-gradient(120%_90%_at_50%_50%,#000_30%,transparent_100%)]" />
      <Scanline className="absolute inset-0" />
      <div className="relative z-[2]">
        <div className="text-[11px] text-arc-accent uppercase tracking-[0.3em]">
          — Portfolio System —
        </div>
        <h1 className="mt-4 font-sans text-[clamp(48px,12vw,104px)] text-arc-bright font-extrabold leading-[0.9] tracking-[-0.03em]">
          GAME OVER
        </h1>
        <p className="mt-4 text-arc-fg/60 text-sm uppercase tracking-[0.18em]">
          404 · Stage not found
        </p>
        <Link
          className="mt-8 inline-flex items-center gap-2 border-2 border-arc-accent bg-arc-accent px-6 py-3 text-[13px] text-arc-bg font-bold uppercase tracking-[0.14em]"
          href="/"
        >
          <span className="motion-safe:animate-arc-blink">▶</span> Continue
        </Link>
      </div>
    </div>
  );
}
