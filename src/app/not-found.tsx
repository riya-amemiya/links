import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 Not Found",
};

export default function NotFound() {
  return (
    <div className="flex min-h-arc-80vh flex-col items-center justify-center text-center">
      <div className="arc-text-11 text-arc-accent uppercase tracking-arc-30">
        — Portfolio System —
      </div>
      <h1 className="mt-4 font-sans arc-text-gameover text-arc-bright font-extrabold leading-arc-90 -tracking-arc-3">
        GAME OVER
      </h1>
      <p className="mt-4 text-arc-fg/60 text-sm uppercase tracking-arc-18">
        404 · Stage not found
      </p>
      <Link
        className="mt-8 inline-flex items-center gap-2 border-2 border-arc-accent bg-arc-accent px-6 py-3 arc-text-13 text-arc-bg font-bold uppercase tracking-arc-14"
        href="/"
      >
        <span className="motion-safe:animate-arc-blink">▶</span> Continue
      </Link>
    </div>
  );
}
