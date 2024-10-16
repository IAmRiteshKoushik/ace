"use client";
import { motion } from "framer-motion";
import { HeroHighlight } from "./ui/hero-highlight";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { Lightbulb, Rocket, Trophy, Laptop } from "lucide-react";

export function Hero() {
  return (
    <HeroHighlight>
      {/* Center the content using flexbox */}
      <div className="flex flex-col items-center justify-center w-full h-full z-10 pt-20"> {/* Adjust pt-20 for spacing from navbar */}
        {/* Icons positioned above the text */}
        <div className="relative w-full h-full">
          <motion.div
            className="absolute top-[-40px] left-10"
            animate={{ y: [0, -10, 10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <Lightbulb className="w-10 h-10 text-blue-400" />
          </motion.div>

          <motion.div
            className="absolute top-[-40px] right-10"
            animate={{ y: [0, -15, 15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          >
            <Rocket className="w-10 h-10 text-orange-500" />
          </motion.div>
        </div>

        {/* Main text section */}
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
                     drop-shadow-lg"
        >
          <div className="flex flex-col items-center justify-center space-y-6">
            <span className="tracking-tight text-2xl md:text-4xl text-center font-medium text-white">
              Welcome to
            </span>

            <h1 className="tracking-tight text-8xl md:text-7xl xl:text-8xl text-center font-bold my-2">
              <span className="font-extrabold bg-gradient-to-b from-orange-500 via-orange-600 to-black bg-clip-text text-transparent">
                100x <span className="text-white font-bold"> Startups!</span>
              </span>
            </h1>

            <p className="text-white max-w-lg text-center tracking-tight md:text-lg font-light leading-relaxed">
              Empowering innovators, crafting leaders, and building startups at Warp Speed
            </p>

            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-transparent dark:text-white flex items-center space-x-2 px-4"
            >
              <span className="text-lg">Register at Amrita Centre for Entrepreneurship 🚀</span>
            </HoverBorderGradient>
          </div>
        </motion.h1>

        {/* Icons positioned below the text */}
        <div className="relative w-full h-full">
          <motion.div
            className="absolute bottom-[-40px] left-20"
            animate={{ y: [0, -20, 20, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            <Trophy className="w-10 h-10 text-green-400" />
          </motion.div>

          <motion.div
            className="absolute bottom-[-40px] right-20"
            animate={{ y: [0, -12, 12, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <Laptop className="w-10 h-10 text-purple-400" />
          </motion.div>
        </div>
      </div>
    </HeroHighlight>
  );
}
