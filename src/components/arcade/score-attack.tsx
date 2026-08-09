import { CaretLeftIcon, CaretRightIcon } from "@radix-ui/react-icons";

import { ArcLink } from "@/components/arcade/arc-link";
import { Glitch } from "@/components/arcade/glitch";
import { Hud } from "@/components/arcade/hud";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Talk, TalkKind } from "@/types/talksType";

const kindLabel: Record<TalkKind, string> = {
  talk: "TALK",
  staff: "STAFF",
  oss: "OSS",
  writing: "WRITE",
};

export const ScoreAttack = ({ talks }: { talks: Talk[] }) => {
  const ranked = [...talks].toSorted((a, b) => b.score - a.score);
  return (
    <div>
      <Hud label="Score Attack" right={`RECORDS ${ranked.length}`} />
      <div className="mb-4 flex flex-wrap items-center gap-3.5">
        <h2 className="font-sans text-[34px] text-arc-bright font-extrabold tracking-[-0.02em] max-md:text-[26px]">
          <Glitch text="Score Attack">Score Attack</Glitch>
        </h2>
        <span className="font-mono text-[11px] text-arc-fg/40 tracking-widest">
          HIGH SCORES ▶
        </span>
        <ArcLink className="ml-auto" href="/works">
          <CaretLeftIcon className="size-4" /> Stages
        </ArcLink>
      </div>
      <Card className="overflow-hidden rounded-none border-arc-fg/18 bg-transparent text-arc-fg shadow-none">
        <CardHeader className="space-y-1 border-b border-arc-fg/14 bg-arc-fg/[0.04] p-0">
          <div className="grid grid-cols-[48px_72px_1fr_100px_88px] gap-2 px-3.5 py-2.5 font-mono text-[10px] text-arc-fg/45 uppercase tracking-[0.12em] max-md:grid-cols-[36px_56px_1fr_72px]">
            <CardTitle className="font-mono text-[10px] font-normal tracking-[0.12em]">
              #
            </CardTitle>
            <span>Year</span>
            <span>Title</span>
            <span className="max-md:hidden">Kind</span>
            <span className="text-right">Score</span>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <ul>
            {ranked.map((talk, index) => {
              const rank = String(index + 1).padStart(2, "0");
              const row = (
                <div
                  className="grid grid-cols-[48px_72px_1fr_100px_88px] items-center gap-2 px-3.5 py-3.5 max-md:grid-cols-[36px_56px_1fr_72px]"
                  style={{ animationDelay: `${index * 55}ms` }}
                >
                  <span className="font-mono text-[12px] text-arc-accent font-bold">
                    {rank}
                  </span>
                  <span className="font-mono text-[12px] text-arc-fg/55">
                    {talk.year}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate font-sans text-[15px] text-arc-bright font-bold tracking-[-0.01em]">
                      {talk.title}
                    </span>
                    <span className="mt-0.5 block truncate font-mono text-[11px] text-arc-fg/45">
                      {talk.venue}
                    </span>
                  </span>
                  <span className="font-mono text-[11px] text-arc-fg/50 tracking-[0.08em] max-md:hidden">
                    {kindLabel[talk.kind]}
                  </span>
                  <span className="text-right font-mono text-[13px] text-arc-accent font-bold tabular-nums">
                    {talk.score.toLocaleString("en-US")}
                  </span>
                </div>
              );
              if (talk.url) {
                return (
                  <li
                    className="border-b border-arc-fg/10 transition-colors duration-140 last:border-b-0 hover:bg-arc-accent/10 motion-safe:animate-arc-rise-fast"
                    key={talk.id}
                  >
                    <a
                      className="block text-arc-fg"
                      href={talk.url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {row}
                    </a>
                  </li>
                );
              }
              return (
                <li
                  className="border-b border-arc-fg/10 last:border-b-0 motion-safe:animate-arc-rise-fast"
                  key={talk.id}
                >
                  {row}
                </li>
              );
            })}
          </ul>
        </CardContent>
        <CardFooter className="flex-col items-stretch gap-4 border-t border-arc-fg/10 p-4 sm:flex-row sm:items-center sm:justify-between">
          <CardDescription className="font-mono text-[11px] text-arc-fg/40 tracking-[0.08em]">
            Tap a row to open the linked record.
          </CardDescription>
          <ArcLink href="/works">
            Back to Stages <CaretRightIcon className="size-4" />
          </ArcLink>
        </CardFooter>
      </Card>
    </div>
  );
};
