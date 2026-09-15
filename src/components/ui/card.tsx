import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

import { cn } from "@/lib/utilities";

const cardVariants = tv({
  base: "rounded-xl border bg-card text-card-foreground shadow",
  variants: {
    variant: {
      default: "",
      arcade:
        "rounded-none border-arc-fg/18 bg-arc-fg/[0.03] text-arc-fg shadow-none",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(cardVariants({ variant }), className)}
    {...props}
  />
));
Card.displayName = "Card";

const cardHeaderVariants = tv({
  base: "flex flex-col space-y-1.5 p-6",
  variants: {
    variant: {
      default: "",
      arcade: "space-y-0 p-3.5 pb-0",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardHeaderVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(cardHeaderVariants({ variant }), className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const cardTitleVariants = tv({
  base: "font-semibold leading-none tracking-tight",
  variants: {
    variant: {
      default: "",
      arcade:
        "font-mono text-[10px] text-arc-fg/45 font-normal tracking-[0.12em]",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardTitleVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(cardTitleVariants({ variant }), className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const cardContentVariants = tv({
  base: "p-6 pt-0",
  variants: {
    variant: {
      default: "",
      arcade: "p-3.5 pt-1 font-mono text-[28px] font-bold tabular-nums",
    },
    tone: {
      default: "",
      accent: "text-arc-accent",
      bright: "text-arc-bright",
    },
  },
  defaultVariants: {
    variant: "default",
    tone: "default",
  },
});

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof cardContentVariants>
>(({ className, variant, tone, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(cardContentVariants({ variant, tone }), className)}
    {...props}
  />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
