"use client";

import * as React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeading title="About" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4 font-mono text-base md:text-lg">
            <p>
              Hey there! I&apos;m Tom Jose, a Software Engineer with over four years of professional experience developing web applications across the entire Software Development Life Cycle.
            </p>
            <p>
              Experienced in full-stack development, problem-solving, and collaborative work within team environments. Over the last few years, I&apos;ve built everything from interactive data visualizations to complex enterprise CMS platforms, always aiming to craft reliable and genuinely helpful digital experiences.
            </p>
            <p>
              I am deeply committed to continuous learning and the practical application of new technologies—whether I&apos;m integrating AI workflows or writing clean, accessible React code.
            </p>
          </div>
          
          <div className="border-2 border-foreground p-6 bg-background retro-shadow h-fit transform rotate-1 hover:rotate-0 transition-transform duration-300">
            <h3 className="font-pixel text-2xl uppercase mb-4 text-retro-green border-b-2 border-dashed border-foreground/30 pb-2">Vitals</h3>
            <ul className="space-y-4 font-mono text-sm">
              <li className="flex flex-col">
                <span className="text-foreground/60 uppercase tracking-wider text-xs">Role</span>
                <span className="text-base font-bold">Software Engineer</span>
                <span className="text-sm opacity-80 mt-1">Frontend & UI Systems</span>
              </li>
              <li className="flex flex-col">
                <span className="text-foreground/60 uppercase tracking-wider text-xs">Experience</span>
                <span className="text-base font-bold">4+ Years</span>
              </li>
              <li className="flex flex-col">
                <span className="text-foreground/60 uppercase tracking-wider text-xs">Specialties</span>
                <span className="text-base font-bold">UI Systems, Data Viz, Gen AI</span>
              </li>
              <li className="flex flex-col">
                <span className="text-foreground/60 uppercase tracking-wider text-xs">Based in</span>
                <span className="text-base font-bold">Kerala, India</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
