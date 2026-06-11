import { CaretLeftIcon } from "@radix-ui/react-icons";
import parse from "html-react-parser";
import Link from "next/link";

import { ArcLink } from "@/components/arcade/arc-link";
import { Glitch } from "@/components/arcade/glitch";
import { Hud } from "@/components/arcade/hud";
import { iconData } from "@/config/iconData";
import { getWorkSlug } from "@/lib/getWorkSlug";
import type { Content } from "@/types/worksType";

export const StageSelect = ({ works }: { works: Content[] }) => (
  <div>
    <Hud label="Stage Select" right="STAGE 1/1" />
    <div className="mb-4 flex flex-wrap items-center gap-3.5">
      <h2 className="font-sans text-[34px] text-arc-bright font-extrabold tracking-[-0.02em] max-md:text-[26px]">
        <Glitch text="Stage Select">Stage Select</Glitch>
      </h2>
      <span className="font-mono text-[11px] text-arc-fg/40 tracking-[0.1em]">
        SELECT A STAGE ▶
      </span>
      <ArcLink className="ml-auto" href="/home">
        <CaretLeftIcon className="size-4" /> Back
      </ArcLink>
    </div>
    <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-3 max-md:grid-cols-1">
      {works.map((work, workIndex) => {
        const StageIcon = iconData[work.link.icon[0]];
        return (
          <Link
            className="relative block cursor-pointer border border-arc-fg/[0.18] bg-[linear-gradient(160deg,rgba(226,59,47,0.06),rgba(236,234,230,0.02))] p-4 text-left text-arc-fg transition-[background,border-color,transform] duration-[160ms] hover:-translate-y-[3px] hover:border-arc-accent hover:bg-[linear-gradient(160deg,rgba(226,59,47,0.15),rgba(236,234,230,0.03))] hover:shadow-[0_0_0_1px_#e23b2f,0_0_18px_rgba(226,59,47,0.3)] motion-safe:animate-arc-rise-fast motion-safe:active:animate-arc-tap-glow"
            href={`/works/${getWorkSlug(work)}`}
            key={work.id}
            style={{ animationDelay: `${workIndex * 60}ms` }}
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex text-arc-accent">
                <StageIcon className="size-[22px]" />
              </span>
              <span className="text-[11px] text-arc-fg/40">
                STAGE {String(workIndex + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="mt-3 font-sans text-xl font-extrabold tracking-[-0.01em]">
              {work.link.name}
            </div>
            <div className="mt-1 text-arc-fg/60 text-xs">
              {parse(work.description)}
            </div>
            <div className="mt-3 text-[10px] text-arc-fg/40 uppercase tracking-[0.08em]">
              {work.meta}
            </div>
          </Link>
        );
      })}
    </div>
  </div>
);
