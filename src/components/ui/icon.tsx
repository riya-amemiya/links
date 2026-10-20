import { Avatar } from "@/components/ui/avatar";
import type { ComponentProps } from "react";

export const Icon = ({
  alt = "",
  className = "",
  src,
  loading = "eager",
  height = 250,
  width = 250,
}: ComponentProps<"img">) => {
  return (
    <Avatar asChild={true} className={className}>
      <img
        alt={alt}
        fetchPriority="high"
        height={height}
        loading={loading}
        src={src}
        width={width}
      />
    </Avatar>
  );
};
