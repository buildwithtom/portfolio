"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const bodyPixels = [
  "        XXXXXXXX ",
  "       XXXXXXXXXX",
  "       XX  XXXXXX",
  "       XXXXXXXXXX",
  "       XXXXXXXXXX",
  "       XXXX      ",
  "       XXXXXXX   ",
  "       XXXXX     ",
  "      XXXXX      ",
  "X    XXXXXXX     ",
  "X   XXXXXXXXXX   ",
  "XX  XXXXXXXXXX   ",
  "XXX XXXXXXXX     ",
  "XXXXXXXXXXXXXXXX ",
  " XXXXXXXXXXXXX   ",
  "  XXXXXXXXXXX    ",
  "   XXXXXXXXX     ",
  "    XXXXXXX      ",
  "     XXXXX       ",
];

const legStepLeft = [
  "      XX  XX     ",
  "      XX         ",
  "      XXX        "
];

const legStepRight = [
  "      XX  XX     ",
  "          XX     ",
  "           XX    "
];

const DinoSVG = ({ legs }: { legs: string[] }) => {
  return (
    <svg 
      width="50" 
      height="50" 
      viewBox="0 0 17 22" 
      fill="currentColor" 
      style={{ shapeRendering: 'crispEdges' }}
    >
      {[...bodyPixels, ...legs].map((row, y) => 
        row.split('').map((char, x) => 
          char === 'X' ? <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" /> : null
        )
      )}
    </svg>
  );
};

export function PixelPet() {
  const { scrollY, scrollYProgress } = useScroll();
  
  // Tie the horizontal position to the scroll progress
  // Framer Motion has issues interpolating calc() strings. 
  // Using matching vw units ensures a perfectly smooth scroll map.
  const xPos = useTransform(scrollYProgress, [0, 1], ["0vw", "90vw"]);
  
  // Leg poses swap purely based on scroll distance for exact syncing
  const leftOpacity = useTransform(scrollY, (y) => (Math.floor(y / 30) % 2 === 0 ? 1 : 0));
  const rightOpacity = useTransform(scrollY, (y) => (Math.floor(y / 30) % 2 !== 0 ? 1 : 0));

  return (
    <motion.div 
      style={{ x: xPos }}
      className="fixed bottom-4 left-4 z-50 text-foreground/80 hover:text-retro-green transition-colors cursor-default w-[50px] h-[50px] pointer-events-none"
    >
      <motion.div style={{ opacity: leftOpacity }} className="absolute inset-0">
        <DinoSVG legs={legStepLeft} />
      </motion.div>
      <motion.div style={{ opacity: rightOpacity }} className="absolute inset-0">
        <DinoSVG legs={legStepRight} />
      </motion.div>
    </motion.div>
  );
}
