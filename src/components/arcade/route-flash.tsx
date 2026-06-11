"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

export const RouteFlash = () => {
  const pathname = usePathname();
  const [previousPathname, setPreviousPathname] = useState(pathname);
  const [flashCount, setFlashCount] = useState(0);

  if (previousPathname !== pathname) {
    setPreviousPathname(pathname);
    setFlashCount(flashCount + 1);
  }

  if (flashCount === 0) {
    return null;
  }

  return (
    <div
      className="pointer-events-none absolute inset-0 z-[8] bg-arc-accent mix-blend-screen motion-safe:animate-arc-flash motion-reduce:hidden"
      key={flashCount}
    />
  );
};
