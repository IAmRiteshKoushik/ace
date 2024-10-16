"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/app/_components/ui/hero-highlight";
import { Cover } from "@/app/_components/ui/cover";
export function Hero() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="px-10 py-12 text-2xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-snug lg:leading-tight text-center mx-auto 
                   drop-shadow-lg" // Add text shadow for depth
      >
        <span className="block"> Build amazing Startups <br /> at <Cover className="text-red">warp speed</Cover></span>
        <br />
        <Highlight className="text-black drop-shadow-md">
          Empowering Innovators, Building Tomorrow's Leaders
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
