import Image from "next/image";
import Navbar from "./_components/Navbar";
import FAQ from "./_components/FAQ"
import { Hero } from "./_components/Hero";
import { Spotlight } from "@/app/_components/ui/spotlight";

export default function Home() {
  return (
    <>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="orange"
      />
      <Navbar />
      <Hero />
      <FAQ />
    </>
  )
}

