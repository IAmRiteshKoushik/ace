import React from "react";
import { BackgroundLines } from "@/app/_components/ui/background-lines";
import Navbar from "@/_components/Navbar";
import Team from "@/_components/Team";
function Roster() {
  return (
    <>
    <BackgroundLines className="flex items-center justify-center h-screen w-full flex-col px-4">
      <Navbar />
      <div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none text-center">
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-8xl drop-shadow-2xl text-orange-400 mb-4 tracking-wide">
          <span className="text-white font-bold">The Roster</span>
        </h1>
        {/* Compressed Paragraph with Highlights */}
        <div className="max-w-3xl text-sm md:text-base lg:text-lg space-y-4 text-gray-300 drop-shadow-2xl">
          <p>
            <span className="text-orange-400">ACE</span> empowers visionaries cultivating 
            <span className="text-orange-400"> entrepreneurs</span> who dare to innovate.
          </p>
          <p>
            We are a community that nurtures creativity, collaboration, and leadership.
          </p>
          <p>
            Driven by the <span className="text-orange-400">passion for change</span>, our members push boundaries,
          </p>
          <p>
            shaping a future where <span className="text-orange-400">ideas become reality</span>.
          </p>
        </div>
      </div>
      
    </BackgroundLines>
    <Team />
    </>
  );
}

export default Roster;
