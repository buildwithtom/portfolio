"use client";

import * as React from "react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const [text, setText] = React.useState("");
  const fullText = "Hi, I'm Tom Jose";

  React.useEffect(() => {
    let i = 0;
    // Delay start slightly for effect
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setText(fullText.slice(0, i + 1));
        i++;
        if (i >= fullText.length) {
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const part1 = text.length > 8 ? text.slice(0, 8) : text;
  const part2 = text.length > 8 ? text.slice(8) : "";

  return (
    <section id="home" className="min-h-[calc(100svh-4rem)] md:min-h-[80vh] flex flex-col justify-center pt-12 pb-28 md:pt-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >

        <h1 className="font-pixel text-5xl md:text-7xl lg:text-8xl leading-none mb-6 text-foreground tracking-tight min-h-[2em] md:min-h-[1em]">
          {part1}
          <br className="md:hidden" />
          {part2.length > 0 && (
            <span className="text-retro-green relative inline-block">
              {part2}
              <span className="absolute -bottom-2 left-0 w-full h-[4px] bg-foreground" />
            </span>
          )}
          <span className="animate-pulse">_</span>
        </h1>

        <h2 className="text-xl md:text-3xl font-mono text-foreground/80 mb-12 max-w-2xl">
          Software Engineer crafting modern web applications, interactive dashboards, data visualizations, and robust UI systems.
        </h2>

        <div className="flex flex-wrap items-center gap-4">
          <Button size="lg" asChild>
            <a href="#projects">View Projects</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </motion.div>
      <a
        href="#about"
        aria-label="Scroll to About section"
        onClick={(event) => {
          const about = document.getElementById("about");
          if (!about) return;
          event.preventDefault();
          const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          about.scrollIntoView({ behavior: reduceMotion ? "instant" : "smooth", block: "start" });
        }}
        className="group absolute bottom-5 left-1/2 -translate-x-1/2 flex h-12 w-12 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-foreground"
      >
        <span className="hero-scroll-orb flex h-full w-full items-center justify-center rounded-full border-[0.5px] border-foreground/60 text-foreground/70 transition-colors duration-300 group-hover:border-foreground group-hover:text-foreground motion-reduce:transition-none">
          <ArrowDown aria-hidden="true" className="h-5 w-5" strokeWidth={0.5} />
        </span>
      </a>
    </section>
  );
}
