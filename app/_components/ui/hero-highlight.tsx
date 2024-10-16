"use client";
import { cn } from "@/_components/lib/utils";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React from "react";

// HeroHighlight component
export const HeroHighlight = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn(
        "relative h-screen flex items-start mt-20 justify-center w-full group", // Centering items horizontally
        containerClassName
      )}
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 bg-dot-thick-neutral-300 dark:bg-dot-thick-neutral-800 pointer-events-none" />
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: "linear-gradient(135deg, #1e1e1e, #ff4500, #ff7f00)", // Dark to bright gradient
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              0px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              0px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />

      <motion.div
        initial={{ opacity: 0, translateY: 30 }} // Start hidden and slightly below
        animate={{ opacity: 1, translateY: 0 }} // Fade in and slide up to position
        transition={{
          duration: 0.8, // Shorter duration for quicker entrance
          ease: "easeInOut",
        }}
        className={cn("relative z-20 text-center text-white", className)}
      >
        {children}
      </motion.div>
    </div>
  );
};

// Highlight component
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
        opacity: 0, // Start hidden
        translateY: 10, // Start slightly below
      }}
      animate={{
        backgroundSize: "100% 100%",
        opacity: 1, // Fade in
        translateY: 0, // Slide up to position
      }}
      transition={{
        duration: 1, // Longer duration for a smoother effect
        ease: "easeInOut",
        delay: 0.3, // Delay for the highlight to fade in after the main text
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline-block", // Changed to inline-block for better spacing control
        background: "linear-gradient(to right, #ff4500, #ff7f00)", // Gradient background for highlight
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
      className={cn(
        `relative inline-block pb-1 px-1 rounded-lg transition duration-300`,
        className
      )}
    >
      {children}
    </motion.span>
  );
};
