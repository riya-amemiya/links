"use client";

import { useState, useSyncExternalStore } from "react";

import { ArcadeRoot } from "@/components/arcade/arcade-root";
import { Boot } from "@/components/arcade/boot";
import { CharacterSelect } from "@/components/arcade/character-select";
import { StageBriefing } from "@/components/arcade/stage-briefing";
import { StageSelect } from "@/components/arcade/stage-select";
import type { Profile } from "@/types/profileType";
import type { Content } from "@/types/worksType";

type View = "detail" | "home" | "works";

const unsubscribeFromNothing = () => null;
const subscribeToNothing = () => unsubscribeFromNothing;
const getStoredBooted = () => sessionStorage.getItem("arc.booted") === "1";
const getServerBooted = () => false;

export const Arcade = ({
  initialView,
  profile,
  works,
}: {
  initialView: "home" | "works";
  profile: Profile;
  works: Content[];
}) => {
  const [started, setStarted] = useState(initialView === "works");
  const [view, setView] = useState<View>(initialView);
  const [stageIndex, setStageIndex] = useState(0);
  const [flash, setFlash] = useState(false);
  const storedBooted = useSyncExternalStore(
    subscribeToNothing,
    getStoredBooted,
    getServerBooted,
  );
  const booted = started || storedBooted;

  const start = () => {
    sessionStorage.setItem("arc.booted", "1");
    setStarted(true);
  };

  const doFlash = () => {
    if (globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    setFlash(true);
    globalThis.setTimeout(() => setFlash(false), 220);
  };

  const nav = (next: View) => {
    doFlash();
    setView(next);
  };

  const openStage = (index: number) => {
    doFlash();
    setStageIndex(index);
    setView("detail");
  };

  if (!booted) {
    return (
      <ArcadeRoot>
        <Boot name={profile.name} onStart={start} />
      </ArcadeRoot>
    );
  }

  return (
    <ArcadeRoot>
      {flash && (
        <div className="pointer-events-none absolute inset-0 z-[8] bg-arc-accent mix-blend-screen motion-safe:animate-arc-flash" />
      )}
      {view === "home" && (
        <CharacterSelect onWorks={() => nav("works")} profile={profile} />
      )}
      {view === "works" && (
        <StageSelect
          onBack={() => nav("home")}
          onOpen={openStage}
          works={works}
        />
      )}
      {view === "detail" && (
        <StageBriefing
          index={stageIndex}
          onBack={() => nav("works")}
          onNav={openStage}
          works={works}
        />
      )}
    </ArcadeRoot>
  );
};
