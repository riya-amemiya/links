import { CaretLeftIcon, CaretRightIcon } from "@radix-ui/react-icons";

import { ArcButton } from "@/components/arcade/arc-button";
import { Brackets } from "@/components/arcade/brackets";
import { Glitch } from "@/components/arcade/glitch";
import { Hud } from "@/components/arcade/hud";
import { iconData } from "@/config/iconData";
import type { Content } from "@/types/worksType";

export const StageBriefing = ({
  index,
  onBack,
  onNav,
  works,
}: {
  index: number;
  onBack: () => void;
  onNav: (index: number) => void;
  works: Content[];
}) => {
  const work = works[index];
  if (!work) {
    return null;
  }
  const StageIcon = iconData[work.link.icon[0]];
  const stageNumber = String(index + 1).padStart(2, "0");
  const total = String(works.length).padStart(2, "0");
  return (
    <div>
      <Hud label="Stage Briefing" right={`STAGE ${stageNumber}/${total}`} />
      <div className="mb-4 flex flex-wrap items-center gap-3.5">
        <span className="font-mono text-[13px] font-bold text-arc-accent tracking-[0.1em]">
          STAGE {stageNumber}
        </span>
        <h2 className="font-sans text-[34px] text-arc-bright font-extrabold tracking-[-0.02em] max-md:text-[26px]">
          <Glitch text={work.link.name}>{work.link.name}</Glitch>
        </h2>
        <ArcButton className="ml-auto" onClick={onBack}>
          <CaretLeftIcon className="size-4" /> Stages
        </ArcButton>
      </div>
      <div className="grid grid-cols-[minmax(230px,0.92fr)_1.08fr] gap-[22px] max-md:grid-cols-1 max-md:gap-4">
        <div className="relative flex flex-col border-2 border-arc-accent bg-[radial-gradient(120%_100%_at_50%_0%,#20120f_0%,#0d0c0e_70%)] p-4 motion-safe:animate-arc-rise">
          <Brackets />
          <div className="flex justify-between text-[10.5px] font-bold text-arc-accent uppercase tracking-[0.16em]">
            <span>STAGE {stageNumber}</span>
            <span>{work.type}</span>
          </div>
          <div className="my-3 flex min-h-[150px] flex-1 items-center justify-center text-arc-accent [filter:drop-shadow(0_0_26px_rgba(226,59,47,0.3))]">
            <StageIcon className="size-[clamp(72px,12vw,104px)]" />
          </div>
          <div className="flex justify-between whitespace-nowrap text-[10px] text-arc-fg/45 uppercase tracking-[0.1em]">
            <span>EST. {work.year}</span>
            <span>{work.meta}</span>
          </div>
        </div>
        <div className="flex flex-col [animation-delay:90ms] motion-safe:animate-arc-rise">
          <div className="text-[11px] text-arc-fg/50 uppercase tracking-[0.2em]">
            Mission
          </div>
          <p className="mt-2 max-w-[460px] text-[15px] text-[#e7e5e0] leading-[1.7]">
            {work.blurb}
          </p>
          <div className="mt-[18px] text-[11px] text-arc-fg/50 uppercase tracking-[0.2em]">
            Loadout
          </div>
          <div className="mt-2 flex flex-wrap gap-[7px]">
            {work.stack.map((item) => (
              <span
                className="border border-arc-fg/[0.22] bg-arc-fg/[0.03] px-[11px] py-1.5 font-mono text-[11px] text-arc-fg tracking-[0.04em]"
                key={item}
              >
                {item}
              </span>
            ))}
          </div>
          <a
            className="mt-[22px] inline-flex cursor-pointer items-center gap-[9px] self-start whitespace-nowrap border-2 border-arc-accent bg-arc-accent px-6 py-[13px] font-mono text-[13px] text-arc-bg font-bold uppercase tracking-[0.12em] transition-shadow duration-[160ms] hover:shadow-[0_0_26px_rgba(226,59,47,0.5)] motion-safe:active:animate-arc-tap-glow"
            href={work.link.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="motion-safe:animate-arc-blink">▶</span> Enter Stage
            · GitHub <CaretRightIcon className="size-[18px]" />
          </a>
          <div className="mt-2.5 font-mono text-[11px] text-arc-fg/40">
            {work.link.url.replace(/^https?:\/\//, "")}
          </div>
        </div>
      </div>
      <div className="mt-[22px] flex items-center justify-between gap-3.5">
        <ArcButton
          onClick={() => onNav((index - 1 + works.length) % works.length)}
        >
          <CaretLeftIcon className="size-4" /> Prev
        </ArcButton>
        <span className="font-mono text-[11px] text-arc-fg/40 tracking-[0.1em]">
          {stageNumber} / {total}
        </span>
        <ArcButton onClick={() => onNav((index + 1) % works.length)}>
          Next <CaretRightIcon className="size-4" />
        </ArcButton>
      </div>
    </div>
  );
};
