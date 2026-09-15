import { CaretRightIcon } from "@radix-ui/react-icons";
import { chtr } from "chtr";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

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
    <div className="grid grid-cols-arc-panel gap-5.5 max-md:grid-cols-1 max-md:gap-4">
      <div className="relative flex flex-col border-2 border-arc-accent arc-bg-panel p-4 motion-safe:animate-arc-rise">
        <Brackets />
        <div className="flex justify-between arc-text-10-5 font-bold text-arc-accent tracking-arc-16">
          <span>P1</span>
          <span className="motion-safe:animate-arc-blink">READY</span>
        </div>
        <QrDrawer url={defaultUrl}>
          <button
            aria-label="Show QR code"
            className="group relative mx-auto my-2 aspect-square w-full max-w-57.5 flex-1 cursor-pointer arc-drop-shadow-glow active:scale-arc-press max-md:max-w-50"
            type="button"
          >
            <Image
              alt={profile.name}
              className="size-full object-contain"
              height={profile.icon.height}
              priority={true}
              src={profile.icon.url}
              width={profile.icon.width}
            />
            <span className="absolute right-2/25 bottom-3/50 flex size-8 items-center justify-center rounded-lg bg-arc-accent text-arc-bg transition-transform duration-170 ease-arc group-hover:scale-114 group-hover:-rotate-4">
              <QrGlyph size={15} />
            </span>
          </button>
        </QrDrawer>
        <div className="flex justify-between whitespace-nowrap arc-text-10 text-arc-fg/45 uppercase tracking-widest">
          <span>NO.001</span>
          <span>TYPE · {profile.role}</span>
        </div>
      </div>
      <div className="flex flex-col arc-delay-90 motion-safe:animate-arc-rise">
        <div className="arc-text-11 text-arc-fg/50 uppercase tracking-arc-20">
          Fighter
        </div>
        <h1 className="mt-0.5 font-sans arc-text-fighter text-arc-bright font-extrabold leading-arc-95 -tracking-arc-3">
          <Glitch text={profile.name}>
            {profile.name.split(" ").map((part) => (
              <span className="block" key={part}>
                {part}
              </span>
            ))}
          </Glitch>
        </h1>
        <div className="mt-2.5 flex items-center gap-2 whitespace-nowrap arc-text-11 uppercase tracking-arc-13">
          <span className="bg-arc-accent px-2 py-0.75 font-bold text-arc-bg">
            LV.{profile.level}
          </span>
          <span className="text-arc-fg/70">Class · {profile.role}</span>
        </div>
        <div className="mt-4 flex flex-col gap-2.25">
          {profile.skills.map(({ name, value }, skillIndex) => {
            const fill = Math.round((value / 100) * 20);
            return (
              <div className="flex items-center gap-3" key={name}>
                <span className="w-22 flex-none arc-text-11-5 text-arc-fg/80 tracking-arc-4">
                  {name}
                </span>
                <span className="flex flex-1 gap-0.75">
                  {Array.from({ length: 20 }, (_, segment) => segment).map(
                    (segment) => (
                      <span
                        className={cn(
                          "h-3 flex-1 origin-bottom arc-delay-var",
                          segment < fill
                            ? "bg-arc-accent arc-shadow-seg motion-safe:animate-arc-seg-rise"
                            : "bg-arc-fg/10",
                        )}
                        key={segment}
                        style={
                          {
                            "--arc-delay": `${skillIndex * 90 + segment * 22}ms`,
                          } as CSSProperties
                        }
                      />
                    ),
                  )}
                </span>
              </div>
            );
          })}
        </div>
        <div className="mt-4 arc-text-12-5 text-arc-fg/65 leading-arc-170">
          {chtr(profile.biography)}
        </div>
      </div>
    </div>
    <div className="mt-5 arc-delay-180 motion-safe:animate-arc-rise">
      <div className="mb-2 arc-text-11 text-arc-fg/50 uppercase tracking-arc-20">
        — Links / Commands
      </div>
      <div className="grid grid-cols-arc-links gap-2 max-md:grid-cols-2">
        {profile.links.toReversed().map(({ icon, name, url }, linkIndex) => {
          const LinkIcon = iconData[icon[0]];
          return (
            <a
              className="flex items-center gap-2.5 border border-arc-fg/18 bg-arc-fg/3 px-3.25 py-2.75 text-arc-fg transition-arc-link duration-140 hover:translate-x-0.5 hover:border-arc-accent hover:bg-arc-accent/12 hover:arc-shadow-outline motion-safe:active:animate-arc-tap-glow"
              href={url}
              key={url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="inline-flex text-arc-accent">
                <LinkIcon className="size-4.5" />
              </span>
              <span className="font-sans arc-text-13-5 font-semibold">
                {name}
              </span>
              <span className="ml-auto arc-text-10 text-arc-fg/40">
                {String(linkIndex + 1).padStart(2, "0")}
              </span>
            </a>
          );
        })}
      </div>
    </div>
    <Link
      className="mt-4.5 flex w-full cursor-pointer items-center justify-center gap-2.5 whitespace-nowrap border-2 border-arc-accent bg-arc-accent p-3.75 font-mono arc-text-13 text-arc-bg font-bold uppercase tracking-arc-14 transition-shadow duration-160 arc-delay-240 hover:arc-shadow-glow motion-safe:animate-arc-rise motion-safe:active:animate-arc-tap-glow"
      href="/works"
    >
      <span className="motion-safe:animate-arc-blink">▶</span> Press Start ·
      Stage Select <CaretRightIcon className="size-4.5" />
    </Link>
  </div>
);
