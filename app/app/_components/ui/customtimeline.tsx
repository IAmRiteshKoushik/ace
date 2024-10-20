"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useLayoutEffect, useRef } from "react";
import Navbar from "@/_components/Navbar";
import { BackgroundLines } from "./background-lines";
interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        // Dynamically recalculate the height of the timeline container
        const totalHeight = ref.current.getBoundingClientRect().height;
        return totalHeight;
      }
      return 0;
    };

    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0%", "end 100%"],
  });

  // Dynamic height and opacity transforms based on scroll position
  const heightTransform = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Immediate color transition for the title: gray to orange
  const colorTransform = useTransform(scrollYProgress, [0, 0.1], ["#6b7280", "#f29c2c"]); // From gray-500 to orange-500

  return (
    <>
    <BackgroundLines>
      {/* Centered Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full h-20 flex justify-center items-center z-50">
        <Navbar />
      </div>

      {/* Timeline content with padding to avoid overlap with the Navbar */}
      <div className="pt-20 w-full font-sans md:px-10" ref={containerRef}>
        <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10 flex flex-col items-center text-center">
        <h2 className="text-2xl md:text-7xl mb-6 font-bold text-orange-600 dark:text-orange-400 z-20">
  TIMELINE OF OUR JOURNEY
</h2>

          <p className="text-lg md:text-2xl text-white max-w-2xl leading-relaxed">
          Explore ACE's journey of innovation and success in empowering entrepreneurs and transforming ideas into impactful ventures
          </p>
        </div>

        <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
          {data.map((item, index) => (
            <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                </div>
                {/* Title with immediate color change */}
                <motion.h3
                  className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold"
                  style={{ color: colorTransform }} // Apply the immediate color transformation
                >
                  {item.title}
                </motion.h3>
              </div>

              <div className="relative pl-20 pr-4 md:pl-4 w-full">
      {/* Title animation for mobile (md:hidden) */}
      <motion.h3
        className="md:hidden block text-2xl mb-4 text-left font-bold text-orange-400"
        initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and translate down
        whileInView={{ opacity: 1, y: 0 }} // Animate to opacity 1 and translate up when in view
        transition={{ duration: 0.6, ease: "easeOut" }} // Customize the transition timing
      >
        {item.title}
      </motion.h3>

      {/* Content animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} // Start hidden and below the current position
        whileInView={{ opacity: 1, y: 0 }} // Animate to visible and slide up when in view
        transition={{ duration: 0.8, ease: "easeOut" }} // Slightly slower animation for the content
      >
        {item.content}
      </motion.div>
    </div>

            </div>
          ))}

          {/* Beam that renders dynamically as you scroll */}
          <motion.div
            style={{
              height: heightTransform, // Beam height transforms dynamically with scroll
              opacity: opacityTransform, // Beam opacity transforms dynamically with scroll
            }}
            className="absolute inset-x-0 top-0 left-8 w-[2px] bg-gradient-to-b from-black to-orange-700 rounded-full"
 // Solid orange beam
          />
        </div>
      </div>
      </BackgroundLines>
    </>
  );
};
