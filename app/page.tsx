import Banner from "@/components/Banner";
import FAQSection from "@/components/Faq";
import Footer from "@/components/Footer";
import Appbar from "@/components/Appbar";

const faqs = [
    { 
        question: "Can I modify or cancel my registration ?", 
        answer: "Lorem ipsum dolor sit amet, qui minim labore adipisicing \
        minim sint cillum sint consectetur cupidatat. Lorem ipsum dolor sit \
        amet, qui minim labore adipisicing minim sint cillum sint consectetur \
        cupidatat."
    },
    { 
        question: "How can I participate for breakout talks ?", 
        answer: "Lorem ipsum dolor sit amet, qui minim labore adipisicing \
        minim sint cillum sint consectetur cupidatat. Lorem ipsum dolor sit \
        amet, qui minim labore adipisicing minim sint cillum sint consectetur \
        cupidatat."
    },
    { 
        question: "Can I participate as sponsor of the event ?", 
        answer: "Lorem ipsum dolor sit amet, qui minim labore adipisicing \
        minim sint cillum sint consectetur cupidatat. Lorem ipsum dolor sit \
        amet, qui minim labore adipisicing minim sint cillum sint consectetur \
        cupidatat."
    },
    { 
        question: "Can I requeust for accomodation to attend the event ?", 
        answer: "Lorem ipsum dolor sit amet, qui minim labore adipisicing \
        minim sint cillum sint consectetur cupidatat. Lorem ipsum dolor sit \
        amet, qui minim labore adipisicing minim sint cillum sint consectetur \
        cupidatat."
    },
    { 
        question: "I have additional questions which were not covered here, \
        whom can I contact ?", 
        answer: "Lorem ipsum dolor sit amet, qui minim labore adipisicing \
        minim sint cillum sint consectetur cupidatat. Lorem ipsum dolor sit \
        amet, qui minim labore adipisicing minim sint cillum sint consectetur \
        cupidatat."
    }
]

export default function Home() {
  return (
    <div className="w-100dvw overflow-clip">
        <Banner 
            content={"Amrita Centre for Entrepreneurship is under construction."}
            boldContent={"Thank you for your patience!"}
            display={true}
        />
        <Appbar />
        <div className="text-center py-20">
            <FAQSection items={faqs}/>
        </div>
        <Footer />
    </div>
  );
}
