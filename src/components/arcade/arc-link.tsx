import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utilities";

export const ArcLink = ({
  children,
  className,
  href,
}: {
  children: ReactNode;
  className?: string;
  href: string;
}) => (
  <Link
    className={cn(
      "inline-flex cursor-pointer items-center gap-1.5 border border-arc-accent bg-arc-accent/10 px-3.5 py-[9px] font-mono text-arc-fg text-xs font-semibold tracking-[0.1em] motion-safe:active:animate-arc-tap-glow",
      className,
    )}
    href={href}
  >
    {children}
  </Link>
);
