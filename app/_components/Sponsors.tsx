"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import google from "../../public/sponsers/google.svg";
import cocacola from "../../public/sponsers/coca-cola.svg";
import instagram from "../../public/sponsers/instagram.svg";
import microsoft from "../../public/sponsers/microsoft.svg";
import tinder from "../../public/sponsers/tinder.svg";
import facebook from "../../public/sponsers/facebook.svg";
import netflix from "../../public/sponsers/netflix.svg";
import tesla from "../../public/sponsers/tesla.svg";

const sponsorsData = [
  { name: "Google", logo: google, url: "https://www.companya.com" },
  { name: "Coco Cola", logo: cocacola, url: "https://www.companyb.com" },
  { name: "Instagram", logo: instagram, url: "https://www.companyc.com" },
  { name: "Netflix", logo: netflix, url: "https://www.netflix.com" },
  { name: "Microsoft", logo: microsoft, url: "https://www.microsoft.com" },
  { name: "Tinder", logo: tinder, url: "https://www.amazon.com" },
  { name: "Facebook", logo: facebook, url: "https://www.facebook.com" },
  { name: "Tesla", logo: tesla, url: "https://www.tesla.com" },
];

const Sponsors = () => {
  return (
    <div className="flex flex-col py-8 items-center justify-center">
      <div>
        <h1
          className="font-bold text-5xl bg-orange-500 w-fit px-4 py-1 text-center text-black"
        >
          Our Sponsors
        </h1>
      </div>
      <div className="flex space-x-4 w-[80vw] text-xl">
        {sponsorsData.map((sponsor, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center rounded-lg p-6 shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
              <motion.div
                className="mb-2"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={sponsor.logo}
                  alt={`${sponsor.name} Logo`}
                  width={128}
                  height={64}
                  className="w-32 h-auto"
                />
              </motion.div>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
