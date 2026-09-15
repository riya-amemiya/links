import { cn } from "@/lib/utilities";

export const Scanline = ({ className }: { className?: string }) => (
  <div
    aria-hidden="true"
    className={cn(
      "pointer-events-none opacity-50 mix-blend-multiply arc-bg-scanline motion-safe:animate-arc-scan",
      className,
    )}
  />
);
