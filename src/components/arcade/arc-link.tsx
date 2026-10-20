import { Link, type LinkComponentProps } from "@tanstack/react-router";

import { cn } from "@/lib/utilities";

export const ArcLink = ({ className, ...props }: LinkComponentProps) => (
  <Link
    className={cn(
      "inline-flex cursor-pointer items-center gap-1.5 border border-arc-accent bg-arc-accent/10 px-3.5 py-2.25 font-mono text-arc-fg text-xs font-semibold tracking-widest motion-safe:active:animate-arc-tap-glow",
      className,
    )}
    {...props}
  />
);
