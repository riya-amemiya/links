"use client";

import { useState, useSyncExternalStore } from "react";
import type { ReactNode } from "react";

import { Boot } from "@/components/arcade/boot";

const unsubscribeFromNothing = () => null;
const subscribeToNothing = () => unsubscribeFromNothing;
const getStoredBooted = () => sessionStorage.getItem("arc.booted") === "1";
const getServerBooted = () => false;

export const BootGate = ({
  children,
  name,
}: {
  children: ReactNode;
  name: string;
}) => {
  const [started, setStarted] = useState(false);
  const storedBooted = useSyncExternalStore(
    subscribeToNothing,
    getStoredBooted,
    getServerBooted,
  );

  if (!(started || storedBooted)) {
    return (
      <Boot
        name={name}
        onStart={() => {
          sessionStorage.setItem("arc.booted", "1");
          setStarted(true);
        }}
      />
    );
  }

  return children;
};
