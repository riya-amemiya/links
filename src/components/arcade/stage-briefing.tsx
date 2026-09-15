import { CaretLeftIcon, CaretRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

import { ArcLink } from "@/components/arcade/arc-link";
import { Brackets } from "@/components/arcade/brackets";
import { Glitch } from "@/components/arcade/glitch";
import { Hud } from "@/components/arcade/hud";
import { iconData } from "@/config/iconData";
import type { Content } from "@/types/worksType";

export const StageBriefing = ({
  index,
  nextSlug,
  previousSlug,
  total,
  work,
}: {
  index: number;
  nextSlug: string;
  previousSlug: string;
  total: number;
  work: Content;
}) => {
  const StageIcon = iconData[work.link.icon[0]];
  const stageNumber = String(index + 1).padStart(2, "0");
  const totalLabel = String(total).padStart(2, "0");
  return (
    <div>
      <Hud
        label="Stage Briefing"
        right={`STAGE ${stageNumber}/${totalLabel}`}
      />
      <div className="mb-4 flex flex-wrap items-center gap-3.5">
        <span className="font-mono arc-text-13 font-bold text-arc-accent tracking-widest">
          STAGE {stageNumber}
        </span>
        <h2 className="font-sans arc-text-34 text-arc-bright font-extrabold -tracking-arc-2 max-md:arc-text-26">
          <Glitch text={work.link.name}>{work.link.name}</Glitch>
        </h2>
        <ArcLink className="ml-auto" href="/works">
          <CaretLeftIcon className="size-4" /> Stages
        </ArcLink>
      </div>
      <div className="grid grid-cols-arc-panel gap-5.5 max-md:grid-cols-1 max-md:gap-4">
        <div className="relative flex flex-col border-2 border-arc-accent arc-bg-panel p-4 motion-safe:animate-arc-rise">
          <Brackets />
          <div className="flex justify-between arc-text-10-5 font-bold text-arc-accent uppercase tracking-arc-16">
            <span>STAGE {stageNumber}</span>
            <span>{work.type}</span>
          </div>
          <div className="my-3 flex min-h-37.5 flex-1 items-center justify-center text-arc-accent arc-drop-shadow-glow-icon">
            <StageIcon className="size-arc-stage-icon" />
          </div>
          <div className="flex justify-between whitespace-nowrap arc-text-10 text-arc-fg/45 uppercase tracking-widest">
            <span>EST. {work.year}</span>
            <span>{work.meta}</span>
          </div>
        </div>
        <div className="flex flex-col arc-delay-90 motion-safe:animate-arc-rise">
          <div className="arc-text-11 text-arc-fg/50 uppercase tracking-arc-20">
            Mission
          </div>
          <p className="mt-2 max-w-115 arc-text-15 text-arc-fg-soft leading-arc-170">
            {work.blurb}
          </p>
          <div className="mt-4.5 arc-text-11 text-arc-fg/50 uppercase tracking-arc-20">
            Loadout
          </div>
          <div className="mt-2 flex flex-wrap gap-1.75">
            {work.stack.map((item) => (
              <span
                className="border border-arc-fg/[0.22] bg-arc-fg/[0.03] px-2.75 py-1.5 font-mono arc-text-11 text-arc-fg tracking-arc-4"
                key={item}
              >
                {item}
              </span>
            ))}
          </div>
          <a
            className="mt-5.5 inline-flex cursor-pointer items-center gap-2.25 self-start whitespace-nowrap border-2 border-arc-accent bg-arc-accent px-6 py-3.25 font-mono arc-text-13 text-arc-bg font-bold uppercase tracking-arc-12 transition-shadow duration-160 hover:arc-shadow-glow motion-safe:active:animate-arc-tap-glow"
            href={work.link.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="motion-safe:animate-arc-blink">▶</span> Enter Stage
            · GitHub <CaretRightIcon className="size-4.5" />
          </a>
          <div className="mt-2.5 font-mono arc-text-11 text-arc-fg/40">
            {work.link.url.replace(/^https?:\/\//, "")}
          </div>
          <Link
            className="mt-3 inline-flex cursor-pointer items-center gap-2.25 self-start whitespace-nowrap border border-arc-fg/22 bg-arc-fg/[0.03] px-5 py-2.75 font-mono arc-text-12 text-arc-fg font-bold uppercase tracking-arc-12 transition-arc-lab duration-160 hover:border-arc-accent hover:bg-arc-accent/12 hover:arc-shadow-glow-faint motion-safe:active:animate-arc-tap-glow"
            href="/lab"
          >
            <span className="text-arc-accent motion-safe:animate-arc-blink">
              ▶
            </span>{" "}
            Bonus Stage · Lab <CaretRightIcon className="size-4" />
          </Link>
        </div>
      </div>
      <div className="mt-5.5 flex items-center justify-between gap-3.5">
        <ArcLink href={`/works/${previousSlug}`}>
          <CaretLeftIcon className="size-4" /> Prev
        </ArcLink>
        <span className="font-mono arc-text-11 text-arc-fg/40 tracking-widest">
          {stageNumber} / {totalLabel}
        </span>
        <ArcLink href={`/works/${nextSlug}`}>
          Next <CaretRightIcon className="size-4" />
        </ArcLink>
      </div>
    </div>
  );
};
