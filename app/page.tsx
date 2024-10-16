import Image from "next/image";
import Navbar from "./_components/Navbar";
import FAQ from "./_components/FAQ"
import { Hero } from "./_components/Hero";
import { Spotlight } from "@/_components/ui/spotlight";
import Sponsors from "./_components/Sponsors";

export default function Home() {
  return (
    <>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-0"
        fill="orange"
      />
      <Navbar />
      <Hero />
      <Sponsors />
      <FAQ />
    </>
  )
}

