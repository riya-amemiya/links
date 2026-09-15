"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { tv, type VariantProps } from "tailwind-variants";

import { cn } from "@/lib/utilities";

const labelVariants = tv({
  base: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  variants: {
    variant: {
      default: "",
      arcade:
        "font-mono text-[11px] text-arc-fg/50 font-normal uppercase tracking-[0.2em]",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, variant, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants({ variant }), className)}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
