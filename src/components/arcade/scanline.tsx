import { cn } from "@/lib/utilities";

export const Scanline = ({ className }: { className?: string }) => (
  <div
    aria-hidden="true"
    className={cn(
      "pointer-events-none opacity-50 mix-blend-multiply [background-image:repeating-linear-gradient(to_bottom,rgba(0,0,0,0.16)_0_1px,transparent_1px_3px)] motion-safe:animate-arc-scan",
      className,
    )}
  />
);
