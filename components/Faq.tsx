"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Chip } from "@nextui-org/react";

import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

type FAQ = {
    question: string;
    answer: string;
}

type FAQProps = {
    items: FAQ[];
}

export default function FAQSection({ items }: FAQProps){
    return(
        <div className="w-full flex justify-center">
            <div className="w-3/5 px-2 border-2 border-[#230C25] shadow-2xl rounded-lg py-5 bg-white">
                <Accordion      
                    motionProps={{
                        variants: {
                            enter: {
                                y: 0,
                                opacity: 1,
                                height: "auto",
                                transition: {
                                    height: {
                                        type: "spring",
                                        stiffness: 500,
                                        damping: 30,
                                        duration: 1,
                                    },
                                    opacity: {
                                        easings: "ease",
                                        duration: 1,
                                    },
                                },
                            },
                            exit: {
                                y: -10,
                                opacity: 0,
                                height: 0,
                                transition: {
                                    height: {
                                        easings: "ease",
                                        duration: 0.25,
                                    },
                                    opacity: {
                                        easings: "ease",
                                        duration: 0.3,
                                    },
                                },
                            },
                        },
                    }}
                    variant="light"
                    className="flex flex-col bg-white"
                >
                    {items.map((item, index) => (
                        <AccordionItem 
                            key={index} 

                            title={<div className="text-center flex items-center">
                                <Chip variant="bordered" 
                                    size="sm"
                                    className="border-2 text-[#2E0C25] 
                                    border-[#2E0C25] text-sm mx-2"
                                >
                                    {"0" + (index + 1)}
                                </Chip>
                                <span>
                                    {item.question}
                                </span>
                            </div>}

                            className="border-1 border-[#2E0C25] rounded-md p-2 font-semibold text-left"
                            indicator={<KeyboardDoubleArrowLeftIcon style={{ color: "#2E0C25"}}/>}
                        >
                            <span
                                className="font-normal px-2"
                            >
                                {item.answer}
                            </span>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    );
}
