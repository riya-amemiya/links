import { Glitch } from "@/components/arcade/glitch";

export const Hud = ({ label, right }: { label: string; right: string }) => (
  <div className="mb-4.5 flex flex-wrap items-center gap-2.5 arc-text-11 text-arc-fg/60 uppercase tracking-arc-18 max-md:arc-text-10">
    <span className="text-arc-accent">◆</span>
    <Glitch className="font-bold text-arc-fg" text={label}>
      {label}
    </Glitch>
    <span className="ml-auto inline-flex flex-wrap items-center gap-3.5">
      <span className="text-arc-fg/55">{right}</span>
      <span className="text-arc-accent motion-safe:animate-arc-blink">
        ● P1 READY
      </span>
    </span>
  </div>
);
