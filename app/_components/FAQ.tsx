"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/_components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Lorem Ipsum 1",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "Lorem Ipsum 2",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "Lorem Ipsum 3",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "Lorem Ipsum 4",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "Lorem Ipsum 5",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "Lorem Ipsum 6",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div className="flex flex-col py-8 items-center justify-center">
<h1 className="w-[80vw] text-3xl sm:text-3xl md:text-5xl mb-4 font-bold text-black p-4 text-center">
  <div className="flex flex-col items-center">
    <span className="bg-orange-500 w-fit px-4 py-1 text-center">
      Questions you keep asking us,
    </span>
    <span className="bg-orange-500 w-fit px-4 py-1 text-center">
      again and again
    </span>
  </div>
</h1>

      <div
        className="w-[80vw] text-xl"
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
              <AccordionContent className="px-2 text-base border-orange-600">
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
