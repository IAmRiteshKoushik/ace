import React from "react";
import { Timeline } from "@/app/_components/ui/customtimeline";
import { BackgroundLines } from "@/app/_components/ui/background-lines";

function TimelineDemo() {
  const data = [
    {
      title: " Incubation Success and Alumni Entrepreneurs",
      date: "2013 - Present",
      content: (
        <div>
          <p className="text-white text-sm md:text-lg lg:text-xl font-bold mb-4">
          2013 - Present
          </p>
          <p className="text-white text-sm md:text-lg lg:text-base leading-relaxed mb-2">
          Over the years, ACE has successfully incubated numerous startups, providing them with mentorship, networking opportunities, and resources. Notable incubatees include:
JRM Technologies (first incubatee at AIIC in 2023).
Raaltech Solutions, ZAi-Fi, and several MSME Hackathon winners.
          </p>
        
        </div>
      ),
    },
    {
      title: " Setting Up the Atal Incubation Centre (AIC)",
      date: "Ongoing 2023-24",
      content: (
        <div>
          <p className="text-white text-sm md:text-lg lg:text-xl font-bold mb-4">
          Ongoing 2023-24
          </p>
          <p className="text-white text-sm md:text-lg lg:text-base leading-relaxed mb-2">
          ACE is in the process of establishing an Atal Incubation Centre (AIC) in Coimbatore.
           This state-of-the-art facility will span 19,000 sq. ft. and is being developed with an investment of Rs. 12.5 crores.
            The AIC will house labs and coworking spaces, providing startups with the infrastructure and resources needed to scale their ventures. 
          This facility aims to boost innovation in areas such as AI, robotics, and clean energy.
          </p>
        
        </div>
      ),
    },
    {
      title: "MSME Idea Hackathon 3.0 for Women",
      date: "27th June - 10th August 2023",
      content: (
        <div>
          <p className="text-white text-sm md:text-lg lg:text-xl font-bold mb-4">
          27th June - 10th August 2023
          </p>
          <p className="text-white text-sm md:text-lg lg:text-base leading-relaxed mb-2">
          Following the success of Hackathon 2.0, ACE helped organize MSME Idea Hackathon 3.0, this time specifically for women entrepreneurs. 
          The event took place from 27th June to 10th August 2023 and focused on empowering women innovators across 5 sectors.
          </p>
        
        </div>
      ),
    },
    {
      title: " Success in MSME Idea Hackathon 2.0 ",
      date: "2nd October - 14th November 2022",
      content: (
        <div>
          <p className="text-white text-sm md:text-lg lg:text-xl font-bold mb-4">
          2nd October - 14th November 2022
          </p>
          <p className="text-white text-sm md:text-lg lg:text-base leading-relaxed mb-2">
          ACE supported the MSME Idea Hackathon 2.0, a national event focused on innovation.
           The hackathon, held from 2nd October to 14th November 2022, attracted 124 ideas across 15 themes and 5 sectors.
          </p>
        
        </div>
      ),
    },
    {
      title: " Inauguration of ACE Innovation & Incubation Centre (AIIC)",
      date: "6th October 2022",
      content: (
        <div>
          <p className="text-white text-sm md:text-lg lg:text-xl font-bold mb-4">
          6th October 2022
          </p>
          <p className="text-white text-sm md:text-lg lg:text-base leading-relaxed mb-2">
          On 6th October 2022, ACE formally inaugurated its Innovation & Incubation Centre (AIIC). 
          The facility was launched by Mr. Dattatri Salagame, CEO, President, and MD of Bosch Global Software Technologies.
           This 48-seater coworking space is dedicated to incubating startups, providing them with office space, prototyping facilities, 
           and guidance from mentors and industry experts. 
          The AIIC serves as a launchpad for ventures nurtured by ACE.
          </p>
        
        </div>
      ),
    },
    {
      title: " Recognition as Host Institute for Business Incubation (HI/BI) by MSME Ministry ",
      date: "22nd June 2022",
      content: (
        <div>
          <p className="text-white text-sm md:text-lg lg:text-xl font-bold mb-4">
          22nd June 2022
          </p>
          <p className="text-white text-sm md:text-lg lg:text-base leading-relaxed mb-2">
          ACE achieved recognition as a Host Institute for Business Incubation (HI/BI) from the MSME Ministry during
           the 2nd PMAC meeting held on 22nd June 2022, with formal communication received on 5th July 2022.
            This recognition marked a significant milestone, allowing ACE to officially incubate startups under the MSME banner, 
          
      offering access to resources, mentoring, and funding opportunities.
          </p>
        
        </div>
      ),
    },
    {
      title: "  First Online FDP on Entrepreneurship ",
      date: "17th - 29th July 2023",
      content: (
        <div>
          <p className="text-white text-sm md:text-lg lg:text-xl font-bold mb-4">
          17th - 29th July 2023
          </p>
          <p className="text-white text-sm md:text-lg lg:text-base leading-relaxed mb-2">
          ACE conducted its first-ever DST-funded Online Faculty Development Program (FDP) on entrepreneurship from 17th to 29th July 2023. 
          This two-week program aimed to train faculty members from institutions across the country to foster entrepreneurship within their
           student bodies.
          </p>
        
        </div>
      ),
    },
    {
      title: " Second Online TEDP on Electric Vehicles ",
      date: "21st June - 18th July 2023",
      content: (
        <div>
          <p className="text-white text-sm md:text-lg lg:text-xl font-bold mb-4">
          21st June - 18th July 2023
          </p>
          <p className="text-white text-sm md:text-lg lg:text-base leading-relaxed mb-2">
          Following the success of the first TEDP, ACE organized a second DST-funded online TEDP on Electric Vehicles, held from 21st June to 18th July 2023.
          </p>
        
        </div>
      ),
    },
    {
      title: "First Online TEDP on Electric Vehicles",
      date: "3rd February - 17th March 2021",
      content: (
        <div>
          <p className="text-white text-sm md:text-lg lg:text-xl font-bold mb-4">
          3rd February - 17th March 2021
          </p>
          <p className="text-white text-sm md:text-lg lg:text-base leading-relaxed mb-2">
          As the world moved towards electric mobility, ACE responded with the launch of its first online Technology-based Entrepreneurship Development Programme (TEDP) on Electric Vehicles (EVs). This 6-week program,
           conducted from 3rd February to 17th March 2021, aimed at fostering entrepreneurship in the EV sector.
          </p>
         
        </div>
      ),
    },
    {
      title: "First DST-funded Entrepreneurship Development Program (EDP)",
      date: "30th May - 27th June 2016",
      content: (
        <div>
          <p className="text-white text-sm md:text-lg lg:text-xl font-bold mb-4">
          30th May - 27th June 2016
          </p>
          <p className="text-white text-sm md:text-lg lg:text-base leading-relaxed mb-2">
          ACE organized its first DST-funded month-long Entrepreneurship Development Program (EDP) from 30th May to 27th June 2016. The goal was to provide hands-on training and mentoring to aspiring entrepreneurs.
          </p>
          
        </div>
      ),
    },
    {
      title: "First DST-funded Faculty Development Programme (FDP)",
      date: "14 - 25 December 2015",
      content: (
        <div>
          <p className="text-white text-sm md:text-lg lg:text-xl font-bold mb-4">
           14 - 25 December 2015
          </p>
          <p className="text-white text-sm md:text-lg lg:text-base leading-relaxed mb-2">
            ACE conducted its first DST-funded Faculty Development Program (FDP) on entrepreneurship.
          </p>
          <p className="text-white text-sm md:text-lg lg:text-base leading-relaxed mb-2">
            The two-week program aimed to equip faculty members with the tools and knowledge to mentor aspiring entrepreneurs.
          </p>
        </div>
      ),
    },






    {
      title: "Inauguration of ACE",
      date: "27th June 2011",
      content: (
        <div>
          <p className="text-white text-sm md:text-lg lg:text-xl font-bold mb-4">
         27th June 2011
          </p>
          <p className="text-white text-sm md:text-lg lg:text-base leading-relaxed mb-2">
            Inaugurated by Dr. L.S. Ganesh, IIT-Madras.
          </p>
          <p className="text-white text-sm md:text-lg lg:text-base leading-relaxed mb-4">
            The first Entrepreneurship Awareness Camp (EAC) was held from 27-29 June 2011.
          </p>
        </div>
      ),
    },
  






  ];

  return (
    
    <div className="w-full flex justify-center mt-12 p-6 rounded-lg shadow-lg">
    <div className="max-w-6xl w-full">
      <Timeline data={data} />
    </div>
  </div>
  );
}

export default TimelineDemo;
