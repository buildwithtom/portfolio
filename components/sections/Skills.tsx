"use client";

import * as React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SKILLS } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";
import { motion } from "framer-motion";

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <section id="skills" className="py-20">
      <SectionHeading title="Skills" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {(Object.keys(SKILLS) as Array<keyof typeof SKILLS>).map((category) => (
          <div key={category} className="border-2 border-foreground p-6 bg-background retro-shadow">
            <h3 className="font-pixel text-2xl uppercase mb-6 text-foreground border-b-2 border-dashed border-foreground/30 pb-2">
              {category}
            </h3>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {SKILLS[category].map((skill) => (
                <motion.div key={skill} variants={itemVariants}>
                  <Badge variant="outline" className="px-3 py-1.5 text-sm bg-white hover:bg-retro-green hover:text-white hover:border-retro-green transition-colors cursor-default">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
