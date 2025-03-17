import Image from "next/image";

import { Avatar } from "@/components/ui/avatar";
import type { ComponentProps } from "react";

export const Icon = ({
  alt = "",
  className = "",
  src,
  loading = "eager",
  height = 250,
  width = 250,
}: ComponentProps<typeof Image>) => {
  return (
    <Avatar asChild={true} className={className}>
      <Image
        alt={alt}
        height={height}
        loading={loading}
        src={src}
        width={width}
        priority={true}
      />
    </Avatar>
  );
};
