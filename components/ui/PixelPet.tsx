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
      viewBox="-2.5 0 20 22"
      fill="currentColor" 
      style={{ shapeRendering: 'crispEdges' }}
    >
      <g className="pixel-tail-flame">
        <path fill="#e76f28" d="M-1 9h1v1h1v-3h-1v-2h-1v2h-1v3h1z" />
        <path fill="#f9c74f" d="M-1 8h1v2h-1z" />
      </g>
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
  
  // The track reserves the sprite's width, leaving equal margins at both ends.
  const leftPos = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  
  // Leg poses swap purely based on scroll distance for exact syncing
  const leftOpacity = useTransform(scrollY, (y) => (Math.floor(y / 30) % 2 === 0 ? 1 : 0));
  const rightOpacity = useTransform(scrollY, (y) => (Math.floor(y / 30) % 2 !== 0 ? 1 : 0));

  return (
    <div
      aria-hidden="true"
      className="fixed bottom-4 inset-x-4 z-50 text-foreground/80 hover:text-retro-green transition-colors cursor-default h-[50px] pointer-events-none"
    >
      <div className="relative h-full mr-[50px]">
        <motion.div style={{ left: leftPos }} className="absolute top-0 w-[50px] h-[50px]">
          <motion.div style={{ opacity: leftOpacity }} className="absolute inset-0">
            <DinoSVG legs={legStepLeft} />
          </motion.div>
          <motion.div style={{ opacity: rightOpacity }} className="absolute inset-0">
            <DinoSVG legs={legStepRight} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
