"use client";

import { CaretLeftIcon } from "@radix-ui/react-icons";
import { useCallback, useEffect, useRef, useState } from "react";

import { ArcLink } from "@/components/arcade/arc-link";
import { Brackets } from "@/components/arcade/brackets";
import { Glitch } from "@/components/arcade/glitch";
import { Hud } from "@/components/arcade/hud";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utilities";

const chargeMs = 900;

export const BonusStage = () => {
  const [combo, setCombo] = useState(0);
  const [best, setBest] = useState(0);
  const [fill, setFill] = useState(0);
  const [pulse, setPulse] = useState(false);
  const comboReference = useRef(0);
  const deadlineReference = useRef(0);
  const intervalReference = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearCharge = useCallback(() => {
    if (intervalReference.current === null) {
      return;
    }
    clearInterval(intervalReference.current);
    intervalReference.current = null;
  }, []);

  useEffect(() => () => clearCharge(), [clearCharge]);

  const hit = useCallback(() => {
    setPulse(true);
    setTimeout(() => {
      setPulse(false);
    }, 120);
    comboReference.current += 1;
    setCombo(comboReference.current);
    deadlineReference.current = Date.now() + chargeMs;
    clearCharge();
    intervalReference.current = setInterval(() => {
      const remaining = deadlineReference.current - Date.now();
      if (remaining <= 0) {
        clearCharge();
        setFill(0);
        const finished = comboReference.current;
        if (finished > 0) {
          comboReference.current = 0;
          setCombo(0);
          setBest((current) => Math.max(current, finished));
        }
        return;
      }
      setFill((remaining / chargeMs) * 100);
    }, 40);
  }, [clearCharge]);

  return (
    <div>
      <Hud label="Bonus Stage" right="LAB MODE" />
      <div className="mb-4 flex flex-wrap items-center gap-3.5">
        <h2 className="font-sans text-[34px] text-arc-bright font-extrabold tracking-[-0.02em] max-md:text-[26px]">
          <Glitch text="Bonus Stage">Bonus Stage</Glitch>
        </h2>
        <span className="font-mono text-[11px] text-arc-fg/40 tracking-widest">
          COMBO RUSH ▶
        </span>
        <ArcLink className="ml-auto" href="/works">
          <CaretLeftIcon className="size-4" /> Stages
        </ArcLink>
      </div>
      <div className="grid grid-cols-[minmax(230px,0.92fr)_1.08fr] gap-[22px] max-md:grid-cols-1 max-md:gap-4">
        <div className="relative flex flex-col border-2 border-arc-accent bg-[radial-gradient(120%_100%_at_50%_0%,#20120f_0%,#0d0c0e_70%)] p-4 motion-safe:animate-arc-rise">
          <Brackets />
          <div className="flex justify-between text-[10.5px] font-bold text-arc-accent uppercase tracking-[0.16em]">
            <span>BONUS</span>
            <span>LAB-01</span>
          </div>
          <button
            aria-label="Hit for combo"
            className={cn(
              "my-4 flex min-h-[180px] flex-1 cursor-pointer flex-col items-center justify-center gap-3 border border-arc-fg/18 bg-arc-fg/[0.03] text-arc-accent transition-[transform,box-shadow,background-color] duration-120 hover:border-arc-accent hover:bg-arc-accent/10 hover:shadow-[0_0_26px_rgba(226,59,47,0.35)]",
              pulse && "scale-[0.98] bg-arc-accent/20",
            )}
            onClick={hit}
            type="button"
          >
            <span className="font-mono text-[12px] tracking-[0.2em] motion-safe:animate-arc-blink">
              ▶ TAP / CLICK
            </span>
            <span className="font-sans text-[clamp(42px,10vw,72px)] text-arc-bright font-extrabold leading-none tabular-nums">
              {combo}
            </span>
            <span className="font-mono text-[11px] text-arc-fg/50 tracking-[0.14em]">
              COMBO
            </span>
          </button>
          <div className="h-2 overflow-hidden bg-arc-fg/10">
            <div
              className="h-full bg-arc-accent shadow-[0_0_10px_rgba(226,59,47,0.55)]"
              style={{ width: `${fill}%` }}
            />
          </div>
        </div>
        <div className="flex flex-col [animation-delay:90ms] motion-safe:animate-arc-rise">
          <div className="text-[11px] text-arc-fg/50 uppercase tracking-[0.2em]">
            Mission
          </div>
          <p className="mt-2 max-w-[460px] text-[15px] text-[#e7e5e0] leading-[1.7]">
            Keep tapping before the charge bar empties. Chain hits to push your
            best combo. No save file—just muscle memory.
          </p>
          <Label className="mt-[18px] font-mono text-[11px] text-arc-fg/50 font-normal uppercase tracking-[0.2em]">
            Stats
          </Label>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <Card className="rounded-none border-arc-fg/18 bg-arc-fg/[0.03] text-arc-fg shadow-none">
              <CardHeader className="space-y-0 p-3.5 pb-0">
                <CardTitle className="font-mono text-[10px] text-arc-fg/45 font-normal tracking-[0.12em]">
                  BEST
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3.5 pt-1 font-mono text-[28px] text-arc-accent font-bold tabular-nums">
                {best}
              </CardContent>
            </Card>
            <Card className="rounded-none border-arc-fg/18 bg-arc-fg/[0.03] text-arc-fg shadow-none">
              <CardHeader className="space-y-0 p-3.5 pb-0">
                <CardTitle className="font-mono text-[10px] text-arc-fg/45 font-normal tracking-[0.12em]">
                  LIVE
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3.5 pt-1 font-mono text-[28px] text-arc-bright font-bold tabular-nums">
                {combo}
              </CardContent>
            </Card>
          </div>
          <div className="mt-[18px] text-[11px] text-arc-fg/50 uppercase tracking-[0.2em]">
            Loadout
          </div>
          <div className="mt-2 flex flex-wrap gap-[7px]">
            {["React", "Client", "No CMS"].map((item) => (
              <span
                className="border border-arc-fg/[0.22] bg-arc-fg/[0.03] px-[11px] py-1.5 font-mono text-[11px] text-arc-fg tracking-[0.04em]"
                key={item}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
