import Navbar from "./_components/Navbar";
import FAQ from "./_components/FAQ"
import { Hero } from "./_components/Hero";
import { Spotlight } from "@/_components/ui/spotlight";
import { Footer } from "./_components/Footer";
import Sponsors from "./_components/Sponsors";
import Statistics from "./_components/StatCard";
import Offers from "./_components/Offerings";

import { ListTodo, FlaskConical, LoaderPinwheel, Waypoints } from "lucide-react";

const offerData = [
  {
    logo: <ListTodo />,
    title: "Consulting & Program Development",
    subtitle: "We help institutions design and run entrepreneurship programs, networking events, and connects them to Amrita's resource base."
  },
  {
    logo: <FlaskConical />,
    title: "Startup Incubation",
    subtitle: "We offer resources, mentorship, and Incubation support to help student and early-stage entrepreneurs launch and grow their startups, providing guidance from idea validation to execution."
  },
  {
    logo: <LoaderPinwheel />,
    title: "Student Leadership",
    subtitle: "We organize leadership workshops, recognizes student entrepreneurs, and fosters campus-based initiatives."
  },
  {
    logo: <Waypoints />,
    title: "Networking & Mentorship",
    subtitle: "ACE boasts of a number of E-clubs and network of volunteers, inluding entrepreneurs and industry experts, ACE provides mentorship, networking and skill-building support."
  }
]

export default function Home() {
  return (
    <div className="bg-black">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-0"
        fill="orange"
      />
      <Navbar />
      <Hero />
      <Statistics />
      <div className="flex">
        {
          offerData.map((offer, index) => (
            <div key={index}>
              <Offers logo={offer.logo} title={offer.title} subtitle={offer.subtitle} />
            </div>
          ))
        }
      </div>
      <Sponsors />
      <FAQ />
      <Footer />
    </div>
  )
}

