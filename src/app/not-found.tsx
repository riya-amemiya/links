import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 Not Found",
};

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center text-center">
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
  );
}
