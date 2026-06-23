import { CaretRightIcon } from "@radix-ui/react-icons";
import { chtr } from "chtr";
import Image from "next/image";
import Link from "next/link";

import { Brackets } from "@/components/arcade/brackets";
import { Glitch } from "@/components/arcade/glitch";
import { Hud } from "@/components/arcade/hud";
import { QrDrawer } from "@/components/arcade/qr-drawer";
import { QrGlyph } from "@/components/arcade/qr-glyph";
import { defaultUrl } from "@/config/defaultUrl";
import { iconData } from "@/config/iconData";
import { cn } from "@/lib/utilities";
import type { Profile } from "@/types/profileType";

export const CharacterSelect = ({ profile }: { profile: Profile }) => (
  <div>
    <Hud label="Character Select" right="CREDIT 01" />
    <div className="grid grid-cols-[minmax(230px,0.92fr)_1.08fr] gap-[22px] max-md:grid-cols-1 max-md:gap-4">
      <div className="relative flex flex-col border-2 border-arc-accent bg-[radial-gradient(120%_100%_at_50%_0%,#20120f_0%,#0d0c0e_70%)] p-4 motion-safe:animate-arc-rise">
        <Brackets />
        <div className="flex justify-between text-[10.5px] font-bold text-arc-accent tracking-[0.16em]">
          <span>P1</span>
          <span className="motion-safe:animate-arc-blink">READY</span>
        </div>
        <QrDrawer url={defaultUrl}>
          <button
            aria-label="Show QR code"
            className="group relative mx-auto my-2 aspect-square w-full max-w-[230px] flex-1 cursor-pointer filter-[drop-shadow(0_0_26px_rgba(226,59,47,0.28))] active:scale-[0.985] max-md:max-w-[200px]"
            type="button"
          >
            <Image
              alt={profile.name}
              className="h-full w-full object-contain"
              height={profile.icon.height}
              priority={true}
              src={profile.icon.url}
              width={profile.icon.width}
            />
            <span className="absolute right-[8%] bottom-[6%] flex size-8 items-center justify-center rounded-lg bg-arc-accent text-arc-bg transition-transform duration-170 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.14] group-hover:rotate-[-4deg]">
              <QrGlyph size={15} />
            </span>
          </button>
        </QrDrawer>
        <div className="flex justify-between whitespace-nowrap text-[10px] text-arc-fg/45 uppercase tracking-widest">
          <span>NO.001</span>
          <span>TYPE · {profile.role}</span>
        </div>
      </div>
      <div className="flex flex-col [animation-delay:90ms] motion-safe:animate-arc-rise">
        <div className="text-[11px] text-arc-fg/50 uppercase tracking-[0.2em]">
          Fighter
        </div>
        <h1 className="mt-0.5 font-sans text-[clamp(34px,5.4vw,52px)] text-arc-bright font-extrabold leading-[0.95] tracking-[-0.03em]">
          <Glitch text={profile.name}>
            {profile.name.split(" ").map((part) => (
              <span className="block" key={part}>
                {part}
              </span>
            ))}
          </Glitch>
        </h1>
        <div className="mt-2.5 flex items-center gap-2 whitespace-nowrap text-[11px] uppercase tracking-[0.13em]">
          <span className="bg-arc-accent px-2 py-[3px] font-bold text-arc-bg">
            LV.{profile.level}
          </span>
          <span className="text-arc-fg/70">Class · {profile.role}</span>
        </div>
        <div className="mt-4 flex flex-col gap-[9px]">
          {profile.skills.map(({ name, value }, skillIndex) => {
            const fill = Math.round((value / 100) * 20);
            return (
              <div className="flex items-center gap-3" key={name}>
                <span className="w-[88px] flex-none text-[11.5px] text-arc-fg/80 tracking-[0.04em]">
                  {name}
                </span>
                <span className="flex flex-1 gap-[3px]">
                  {Array.from({ length: 20 }, (_, segment) => segment).map(
                    (segment) => (
                      <span
                        className={cn(
                          "h-3 flex-1 origin-bottom",
                          segment < fill
                            ? "bg-arc-accent shadow-[0_0_6px_rgba(226,59,47,0.55)] motion-safe:animate-arc-seg-rise"
                            : "bg-arc-fg/10",
                        )}
                        key={segment}
                        style={{
                          animationDelay: `${skillIndex * 90 + segment * 22}ms`,
                        }}
                      />
                    ),
                  )}
                </span>
              </div>
            );
          })}
        </div>
        <div className="mt-4 text-[12.5px] text-arc-fg/65 leading-[1.7]">
          {chtr(profile.biography)}
        </div>
      </div>
    </div>
    <div className="mt-5 [animation-delay:180ms] motion-safe:animate-arc-rise">
      <div className="mb-2 text-[11px] text-arc-fg/50 uppercase tracking-[0.2em]">
        — Links / Commands
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-2 max-md:grid-cols-2">
        {profile.links.toReversed().map(({ icon, name, url }, linkIndex) => {
          const LinkIcon = iconData[icon[0]];
          return (
            <a
              className="flex items-center gap-2.5 border border-arc-fg/18 bg-arc-fg/3 px-[13px] py-[11px] text-arc-fg transition-[background-color,border-color,transform] duration-140 hover:translate-x-0.5 hover:border-arc-accent hover:bg-arc-accent/12 hover:shadow-[0_0_0_1px_#e23b2f,0_0_18px_rgba(226,59,47,0.3)] motion-safe:active:animate-arc-tap-glow"
              href={url}
              key={url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="inline-flex text-arc-accent">
                <LinkIcon className="size-[18px]" />
              </span>
              <span className="font-sans text-[13.5px] font-semibold">
                {name}
              </span>
              <span className="ml-auto text-[10px] text-arc-fg/40">
                {String(linkIndex + 1).padStart(2, "0")}
              </span>
            </a>
          );
        })}
      </div>
    </div>
    <Link
      className="mt-[18px] flex w-full cursor-pointer items-center justify-center gap-2.5 whitespace-nowrap border-2 border-arc-accent bg-arc-accent p-[15px] font-mono text-[13px] text-arc-bg font-bold uppercase tracking-[0.14em] transition-shadow duration-160 [animation-delay:240ms] hover:shadow-[0_0_26px_rgba(226,59,47,0.5)] motion-safe:animate-arc-rise motion-safe:active:animate-arc-tap-glow"
      href="/works"
    >
      <span className="motion-safe:animate-arc-blink">▶</span> Press Start ·
      Stage Select <CaretRightIcon className="size-[18px]" />
    </Link>
  </div>
);
