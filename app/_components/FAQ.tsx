"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/_components/ui/accordion";

const FAQ = () => {
  const faqs = [
    { question: "Lorem Ipsum 1", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { question: "Lorem Ipsum 2", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { question: "Lorem Ipsum 3", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { question: "Lorem Ipsum 4", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { question: "Lorem Ipsum 5", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { question: "Lorem Ipsum 6", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  ];

  return (
    <div className="flex flex-col py-8 items-center justify-center bg-black text-white">
      <h1 className="text-5xl mb-4" style={{ fontFamily: "var(--font-geist-sans)" }}>
        Frequently Asked Questions
      </h1>
      <div className="w-[80vw] text-xl" style={{ fontFamily: "var(--font-geist-sans)" }}>
        <Accordion type="single">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="flex items-center align-middle h-20 px-2 hover:bg-[#3d3d3d] hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-2 text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
