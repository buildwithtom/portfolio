"use client";

import * as React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EXPERIENCE } from "@/lib/data";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <section id="experience" className="py-12 md:py-16">
      <SectionHeading title="Experience" />
      
      <div className="mt-8 space-y-8 pl-4 md:pl-0">
        {EXPERIENCE.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            className="relative md:pl-8 border-l-2 border-foreground/30 ml-4 md:ml-0"
          >
            {/* Timeline node */}
            <div className="absolute w-4 h-4 bg-retro-green border-2 border-foreground -left-[9px] top-1" />
            
            <div className="pl-6 pb-2">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2 md:gap-0">
                <h3 className="font-pixel text-2xl uppercase text-foreground">{exp.role}</h3>
                <span className="font-pixel text-retro-green bg-foreground px-2 py-0.5 text-sm uppercase self-start md:self-auto">{exp.duration}</span>
              </div>
              
              <h4 className="font-mono text-lg font-bold mb-4">{exp.company}</h4>
              
              <ul className="space-y-3 font-mono text-sm leading-relaxed">
                {exp.impact.map((item, i) => (
                  <li key={i} className="relative pl-6">
                    <span className="absolute left-0 top-1.5 w-2 h-2 border-[1px] border-foreground bg-transparent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
