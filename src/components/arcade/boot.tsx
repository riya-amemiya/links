import { useCallback, useEffect, useState } from "react";

import { Scanline } from "@/components/arcade/scanline";
import { cn } from "@/lib/utilities";

export const Boot = ({
  name,
  onStart,
}: {
  name: string;
  onStart: () => void;
}) => {
  const [credit, setCredit] = useState(0);
  const [leaving, setLeaving] = useState(false);

  const go = useCallback(() => {
    if (leaving) {
      return;
    }
    setCredit(1);
    globalThis.setTimeout(() => setLeaving(true), 280);
    globalThis.setTimeout(onStart, 760);
  }, [leaving, onStart]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      event.preventDefault();
      go();
    };
    globalThis.addEventListener("keydown", onKey);
    return () => globalThis.removeEventListener("keydown", onKey);
  }, [go]);

  return (
    <button
      aria-label="Press to start"
      className={cn(
        "relative flex min-h-screen w-full cursor-pointer items-center justify-center overflow-hidden bg-[#08080a]",
        leaving && "motion-safe:animate-arc-boot-out",
      )}
      onClick={go}
      type="button"
    >
      <div className="absolute inset-0 [background-image:linear-gradient(rgba(226,59,47,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(226,59,47,0.09)_1px,transparent_1px)] [background-size:46px_46px] [mask-image:radial-gradient(120%_90%_at_50%_50%,#000_30%,transparent_100%)]" />
      <Scanline className="absolute inset-0" />
      <div className="relative z-[2] p-6 text-center">
        <div className="font-mono text-[clamp(11px,2.4vw,14px)] text-arc-fg/60 uppercase tracking-[0.34em]">
          {name}
        </div>
        <div className="mt-2 font-mono text-[clamp(10px,2vw,12px)] text-arc-accent tracking-[0.3em]">
          — PORTFOLIO SYSTEM —
        </div>
        <h1
          className={cn(
            "mt-[clamp(28px,7vw,54px)] font-sans text-[clamp(40px,11vw,104px)] text-arc-bright font-extrabold leading-[0.9] tracking-[-0.03em]",
            leaving && "motion-safe:animate-arc-glitch-burst",
          )}
        >
          INSERT COIN
        </h1>
        <div className="mt-[clamp(22px,5vw,40px)] font-mono text-[clamp(12px,2.6vw,16px)] text-arc-fg uppercase tracking-[0.18em] motion-safe:animate-arc-coin-blink">
          ▶ Press any key / tap to start
        </div>
        <div className="mt-[clamp(26px,6vw,48px)] flex justify-center gap-5 font-mono text-[clamp(10px,2.2vw,12px)] text-arc-fg/55 tracking-[0.16em]">
          <span>
            CREDIT{" "}
            <span className="font-bold text-arc-accent">
              {String(credit).padStart(2, "0")}
            </span>
          </span>
          <span>© {new Date().getFullYear()} TOKIDUX</span>
          <span>1P</span>
        </div>
      </div>
    </button>
  );
};
