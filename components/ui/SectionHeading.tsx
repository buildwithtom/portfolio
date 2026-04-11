import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  title: string;
}

export function SectionHeading({ title, className, ...props }: SectionHeadingProps) {
  return (
    <div className={cn("mb-8 flex items-center gap-4", className)} {...props}>
      <h2 className="font-pixel text-3xl md:text-4xl uppercase tracking-widest text-foreground">
        <span className="text-retro-green mr-2">{">"}</span>
        {title}
        <span className="animate-pulse ml-1">_</span>
      </h2>
      <div className="h-[2px] flex-grow bg-dashed bg-foreground/20" style={{ backgroundImage: 'linear-gradient(to right, currentColor 50%, transparent 50%)', backgroundSize: '8px 2px', backgroundRepeat: 'repeat-x' }} />
    </div>
  );
}
