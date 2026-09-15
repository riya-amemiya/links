"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { Scanline } from "@/components/arcade/scanline";
import { cn } from "@/lib/utilities";

export const Boot = ({ name }: { name: string }) => {
  const router = useRouter();
  const [credit, setCredit] = useState(0);
  const [leaving, setLeaving] = useState(false);

  const go = useCallback(() => {
    if (leaving) {
      return;
    }
    setCredit(1);
    setTimeout(() => setLeaving(true), 280);
    setTimeout(() => {
      router.push("/home");
    }, 760);
  }, [leaving, router]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      event.preventDefault();
      go();
    };
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, [go]);

  const now = new Date();
  const currentYear = now.getFullYear();

  return (
    <button
      aria-label="Press to start"
      className={cn(
        "relative flex min-h-screen w-full cursor-pointer items-center justify-center overflow-hidden bg-arc-bg-deep",
        leaving && "motion-safe:animate-arc-boot-out",
      )}
      onClick={go}
      type="button"
    >
      <div className="absolute inset-0 arc-bg-grid-boot" />
      <Scanline className="absolute inset-0" />
      <div className="relative z-2 p-6 text-center">
        <div className="font-mono arc-text-boot-name text-arc-fg/60 uppercase tracking-arc-34">
          {name}
        </div>
        <div className="mt-2 font-mono arc-text-boot-system text-arc-accent tracking-arc-30">
          — PORTFOLIO SYSTEM —
        </div>
        <h1
          className={cn(
            "mt-arc-boot-title font-sans arc-text-boot-title text-arc-bright font-extrabold leading-arc-90 -tracking-arc-3",
            leaving && "motion-safe:animate-arc-glitch-burst",
          )}
        >
          INSERT COIN
        </h1>
        <div className="mt-arc-boot-prompt font-mono arc-text-boot-prompt text-arc-fg uppercase tracking-arc-18 motion-safe:animate-arc-coin-blink">
          ▶ Press any key / tap to start
        </div>
        <div className="mt-arc-boot-credit flex justify-center gap-5 font-mono arc-text-boot-credit text-arc-fg/55 tracking-arc-16">
          <span>
            CREDIT{" "}
            <span className="font-bold text-arc-accent">
              {String(credit).padStart(2, "0")}
            </span>
          </span>
          <span>© {currentYear} TOKIDUX</span>
          <span>1P</span>
        </div>
      </div>
    </button>
  );
};
