"use client";

import { useEffect, useState } from "react";

let navigated = false;

export default function Template({ children }: { children: React.ReactNode }) {
  const [showFlash] = useState(() => navigated);

  useEffect(() => {
    navigated = true;
  }, []);

  return (
    <>
      {showFlash && (
        <div className="pointer-events-none absolute inset-0 z-[8] bg-arc-accent mix-blend-screen motion-safe:animate-arc-flash" />
      )}
      {children}
    </>
  );
}
