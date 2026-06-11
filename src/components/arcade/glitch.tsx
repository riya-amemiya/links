import type { ReactNode } from "react";

import { cn } from "@/lib/utilities";

export const Glitch = ({
  children,
  className,
  text,
}: {
  children: ReactNode;
  className?: string;
  text: string;
}) => (
  <span
    className={cn(
      "relative before:pointer-events-none before:absolute before:top-0 before:left-0.5 before:hidden before:h-full before:w-full before:overflow-hidden before:text-arc-accent before:opacity-90 before:content-[attr(data-text)] after:pointer-events-none after:absolute after:top-0 after:-left-0.5 after:hidden after:h-full after:w-full after:overflow-hidden after:text-[#57c7ff] after:opacity-70 after:mix-blend-screen after:content-[attr(data-text)] motion-safe:hover:before:block motion-safe:hover:before:animate-arc-glitch motion-safe:hover:after:block motion-safe:hover:after:animate-arc-glitch-reverse",
      className,
    )}
    data-text={text}
  >
    {children}
  </span>
);
