"use client";

import { CaretLeftIcon } from "@radix-ui/react-icons";
import {
  type CSSProperties,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

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
        <h2 className="font-sans arc-text-34 text-arc-bright font-extrabold -tracking-arc-2 max-md:arc-text-26">
          <Glitch text="Bonus Stage">Bonus Stage</Glitch>
        </h2>
        <span className="font-mono arc-text-11 text-arc-fg/40 tracking-widest">
          COMBO RUSH ▶
        </span>
        <ArcLink className="ml-auto" href="/works">
          <CaretLeftIcon className="size-4" /> Stages
        </ArcLink>
      </div>
      <div className="grid grid-cols-arc-panel gap-5.5 max-md:grid-cols-1 max-md:gap-4">
        <div className="relative flex flex-col border-2 border-arc-accent arc-bg-panel p-4 motion-safe:animate-arc-rise">
          <Brackets />
          <div className="flex justify-between arc-text-10-5 font-bold text-arc-accent uppercase tracking-arc-16">
            <span>BONUS</span>
            <span>LAB-01</span>
          </div>
          <button
            aria-label="Hit for combo"
            className={cn(
              "my-4 flex min-h-45 flex-1 cursor-pointer flex-col items-center justify-center gap-3 border border-arc-fg/18 bg-arc-fg/[0.03] text-arc-accent transition-arc-press duration-120 hover:border-arc-accent hover:bg-arc-accent/10 hover:arc-shadow-glow-soft",
              pulse && "scale-98 bg-arc-accent/20",
            )}
            onClick={hit}
            type="button"
          >
            <span className="font-mono arc-text-12 tracking-arc-20 motion-safe:animate-arc-blink">
              ▶ TAP / CLICK
            </span>
            <span className="font-sans arc-text-combo text-arc-bright font-extrabold leading-none tabular-nums">
              {combo}
            </span>
            <span className="font-mono arc-text-11 text-arc-fg/50 tracking-arc-14">
              COMBO
            </span>
          </button>
          <div className="h-2 overflow-hidden bg-arc-fg/10">
            <div
              className="h-full w-(--arc-fill) bg-arc-accent arc-shadow-bar"
              style={{ "--arc-fill": `${fill}%` } as CSSProperties}
            />
          </div>
        </div>
        <div className="flex flex-col arc-delay-90 motion-safe:animate-arc-rise">
          <div className="arc-text-11 text-arc-fg/50 uppercase tracking-arc-20">
            Mission
          </div>
          <p className="mt-2 max-w-115 arc-text-15 text-arc-fg-soft leading-arc-170">
            Keep tapping before the charge bar empties. Chain hits to push your
            best combo. No save file—just muscle memory.
          </p>
          <Label className="mt-4.5" variant="arcade">
            Stats
          </Label>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <Card variant="arcade">
              <CardHeader variant="arcade">
                <CardTitle variant="arcade">BEST</CardTitle>
              </CardHeader>
              <CardContent tone="accent" variant="arcade">
                {best}
              </CardContent>
            </Card>
            <Card variant="arcade">
              <CardHeader variant="arcade">
                <CardTitle variant="arcade">LIVE</CardTitle>
              </CardHeader>
              <CardContent tone="bright" variant="arcade">
                {combo}
              </CardContent>
            </Card>
          </div>
          <div className="mt-4.5 arc-text-11 text-arc-fg/50 uppercase tracking-arc-20">
            Loadout
          </div>
          <div className="mt-2 flex flex-wrap gap-1.75">
            {["React", "Client", "No CMS"].map((item) => (
              <span
                className="border border-arc-fg/[0.22] bg-arc-fg/[0.03] px-2.75 py-1.5 font-mono arc-text-11 text-arc-fg tracking-arc-4"
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
