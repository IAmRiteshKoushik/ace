"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { LampContainer } from "@/_components/ui/lamp";
import OrbitingCircles from "@/_components/ui/orbiting-circles";
import google from "../../public/sponsers/google.svg";
import bitcoin from "../../public/sponsers/bitcoin.svg";
import instagram from "../../public/sponsers/instagram.svg";
import microsoft from "../../public/sponsers/microsoft.svg";
import oracle from "../../public/sponsers/oracle.svg";
import facebook from "../../public/sponsers/facebook.svg";
import netflix from "../../public/sponsers/netflix.svg";
import tesla from "../../public/sponsers/tesla.svg";

const Sponsors = () => {
  return (
    <div className="relative flex h-[900px] w-full flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl">
      <span className="z-10 shadow-md pointer-events-none whitespace-pre-wrap text-orange-500 bg-clip-text text-center text-5xl font-semibold leading-none font-">
        Our Sponsors
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="border-none bg-transparent"
        duration={40}
        delay={0}
        radius={180}
      >
        <Image
          src={bitcoin}
          alt="Bitcoin"
          className="w-[64px] h-[64px] object-contain"
          height={128}
          width={128}
        />
      </OrbitingCircles>
      <OrbitingCircles
        className="border-none bg-transparent"
        duration={40}
        delay={13}
        radius={180}
      >
        <Image
          src={google}
          alt="Google"
          className="w-[64px] h-[64px] object-contain"
          height={128}
          width={128}
        />
      </OrbitingCircles>
      <OrbitingCircles
        className="border-none bg-transparent"
        duration={40}
        delay={23}
        radius={180}
      >
        <Image
          src={instagram}
          alt="Instagram"
          className="w-[64px] h-[64px] object-contain"
          height={128}
          width={128}
        />
      </OrbitingCircles>
      <OrbitingCircles
        className="border-none bg-transparent"
        duration={40}
        delay={33}
        radius={180}
      >
        <Image
          src={netflix}
          alt="Netflix"
          className="w-[64px] h-[64px] object-contain"
          height={128}
          width={128}
        />
      </OrbitingCircles>

      {/* Outer Circles */}
      <OrbitingCircles
        className="border-none bg-transparent"
        duration={40}
        delay={7}
        radius={280}
        reverse
      >
        <Image
          src={microsoft}
          alt="Microsoft"
          className="w-[64px] h-[64px] object-contain"
          height={128}
          width={128}
        />
      </OrbitingCircles>
      <OrbitingCircles
        className="border-none bg-transparent"
        duration={40}
        delay={17}
        radius={280}
        reverse
      >
        <Image
          src={oracle}
          alt="Oracle"
          className="w-[64px] h-[64px] object-contain"
          height={128}
          width={128}
        />
      </OrbitingCircles>
      <OrbitingCircles
        className="border-none bg-transparent"
        duration={40}
        delay={24}
        radius={280}
        reverse
      >
        <Image
          src={facebook}
          alt="Facebook"
          className="w-[64px] h-[64px] object-contain"
          height={128}
          width={128}
        />
      </OrbitingCircles>
      <OrbitingCircles
        className="border-none bg-transparent"
        duration={40}
        delay={38}
        radius={280}
        reverse
      >
        <Image
          src={tesla}
          alt="Tesla"
          className="w-[64px] h-[64px] object-contain"
          height={128}
          width={128}
        />
      </OrbitingCircles>
    </div>
  );
};

export default Sponsors;
