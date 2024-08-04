// import Banner from "@/components/Banner";
import FAQSection from "@/components/Faq";
import Footer from "@/components/Footer";
import Appbar from "@/components/Appbar";
import HeroSection from "@/components/Hero";
import Location from "@/components/Location";

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
            <div
                className="fixed inset-0 -z-10 h-full w-full bg-white \
                bg-[linear-gradient(to_right,#f0f0f0_2px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_2px,transparent_1px)] \
                bg-[size:80px_80px]"
            >
            </div>
            <div className="sticky top-3 w-full flex justify-center py-2 mt-2">
                <Appbar activeLink={"Home"} />
            </div>
            <div className="w-full flex justify-center py-5">
                <HeroSection />
            </div>
            <div className="w-full flex justify-center py-5">
                <Location />
            </div>
            <div className="text-center py-20">
                <FAQSection items={faqs}/>
            </div>
            <Footer />
        </div>
  );
}
