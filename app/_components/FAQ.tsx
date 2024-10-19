"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/_components/ui/accordion";
import { LampContainer } from "@/_components/ui/lamp";
import { motion } from "framer-motion";

const FAQ = () => {
  const faqs = [
    {
      question: "1. What is the Amrita Centre for Entrepreneurship (ACE)?",
      answer: "ACE supports aspiring entrepreneurs with mentorship, resources, and infrastructure to turn ideas into successful ventures."
    },
    {
      question: "2. Who can join ACE?",
      answer: "Any student, faculty member, or budding entrepreneur at Amrita who is interested in innovation and entrepreneurship can join."
    },
    {
      question: "3. What kind of support does ACE provide for startups?",
      answer: "ACE offers mentorship, networking, incubation support, and guidance from idea validation to execution."
    },
    {
      question: "4. How can I participate in ACE programs and events?",
      answer: "Register with ACE and join e-clubs to attend workshops, leadership sessions, and events like hackathons and pitch competitions."
    },
    {
      question: "5. Does ACE provide funding or connect with investors?",
      answer: "ACE connects entrepreneurs with investors and offers opportunities to pitch ideas for funding."
    },
    {
      question: "6. How does ACE help in developing entrepreneurial skills?",
      answer: "ACE offers workshops, leadership programs, and access to mentors and industry experts to build entrepreneurial skills."
    },
  ];

  return (
    <div className="flex flex-col py-8 items-center justify-center bg-none">
      <LampContainer className="bg-none">
      <motion.h1 className="w-[80vw] text-3xl sm:text-3xl md:text-5xl mb-4 font-bold text-black p-4 text-center"
      initial={{ opacity: 0.5, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}>
        <div className="flex justify-center items-center mb-6 ">
          <span className="font-extrabold bg-gradient-to-b from-orange-500 via-orange-600 to-black bg-clip-text text-transparent">
          Frequently
          </span>
          <span className="text-white ">
          Asked Questions
          </span>
        </div>

      <div
        className="w-[80vw] text-xl text-white"
        style={{ fontFamily: "var(--font-geist-sans)" }}
      >
        <Accordion type="single">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index + 1}`}
              className="border-orange-500"
              color="orange"
            >
              <AccordionTrigger className="flex items-center align-middle h-20 px-2 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-2 text-base border-orange-600 text-left">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      </motion.h1>
      </LampContainer>
    </div>
  );
};

export default FAQ;
