import Image from "next/image";

import { Avatar } from "@/components/ui/avatar";

export const Icon = ({
  alt = "",
  className = "",
  url,
  loading = "eager",
  height = 250,
  width = 250,
}: {
  alt?: string;
  className?: string;
  height?: number;
  loading?: "eager" | "lazy";
  url: string;
  width?: number;
}) => {
  return (
    <Avatar asChild={true} className={className}>
      <Image
        alt={alt}
        height={height}
        loading={loading}
        src={url}
        width={width}
      />
    </Avatar>
  );
};
