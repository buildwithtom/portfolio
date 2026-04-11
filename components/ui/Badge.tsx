import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-none border-2 px-2.5 py-0.5 text-xs uppercase font-pixel tracking-wider transition-colors",
        {
          "border-foreground bg-foreground text-background": variant === "default",
          "border-foreground bg-retro-green text-white": variant === "secondary",
          "border-foreground text-foreground": variant === "outline",
        },
        className
      )}
      {...props}
    />
  );
}

export { Badge };
