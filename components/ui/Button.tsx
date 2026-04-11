import * as React from "react";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap font-pixel text-lg uppercase transition-all duration-100 ease-in-out border-2 border-foreground disabled:pointer-events-none disabled:opacity-50",
          "active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
          {
            "bg-foreground text-background hover:bg-foreground/90 retro-shadow": variant === "default",
            "bg-background text-foreground hover:bg-foreground/10 retro-shadow": variant === "outline",
            "border-transparent bg-transparent hover:bg-foreground/10 text-foreground": variant === "ghost",
            "h-10 px-4 py-2": size === "default",
            "h-9 px-3 text-base": size === "sm",
            "h-12 px-8 text-xl": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
