import { CaretLeftIcon } from "@radix-ui/react-icons";
import { chtr } from "chtr";
import Link from "next/link";
import type { CSSProperties } from "react";

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
      <h2 className="font-sans arc-text-34 text-arc-bright font-extrabold -tracking-arc-2 max-md:arc-text-26">
        <Glitch text="Stage Select">Stage Select</Glitch>
      </h2>
      <span className="font-mono arc-text-11 text-arc-fg/40 tracking-widest">
        SELECT A STAGE ▶
      </span>
      <ArcLink className="ml-auto" href="/home">
        <CaretLeftIcon className="size-4" /> Back
      </ArcLink>
    </div>
    <div className="grid grid-cols-arc-stages gap-3 max-md:grid-cols-1">
      {works.map((work, workIndex) => {
        const StageIcon = iconData[work.link.icon[0]];
        return (
          <Link
            className="relative block cursor-pointer border border-arc-fg/18 arc-bg-card p-4 text-left text-arc-fg transition-arc-card duration-160 hover:-translate-y-0.75 hover:border-arc-accent hover:arc-bg-card-hover hover:arc-shadow-outline arc-delay-var motion-safe:animate-arc-rise-fast motion-safe:active:animate-arc-tap-glow"
            href={`/works/${getWorkSlug(work)}`}
            key={work.id}
            style={{ "--arc-delay": `${workIndex * 60}ms` } as CSSProperties}
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex text-arc-accent">
                <StageIcon className="size-5.5" />
              </span>
              <span className="arc-text-11 text-arc-fg/40">
                STAGE {String(workIndex + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="mt-3 font-sans text-xl font-extrabold -tracking-arc-1">
              {work.link.name}
            </div>
            <div className="mt-1 text-arc-fg/60 text-xs">
              {chtr(work.description)}
            </div>
            <div className="mt-3 arc-text-10 text-arc-fg/40 uppercase tracking-arc-8">
              {work.meta}
            </div>
          </Link>
        );
      })}
    </div>
  </div>
);
