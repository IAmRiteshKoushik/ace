import FAQSection from "@/components/Faq";
import Footer from "@/components/Footer";
import Appbar from "@/components/Appbar";
import HeroSection from "@/components/Hero";
import Location from "@/components/Location";
import Overview from "@/components/Overview";
import Gallery from "@/components/Gallery";
import Sponsors from "@/components/Sponsors";
import Stats from "@/components/Stats";
import Upcoming from "@/components/Upcoming";
import Banner from "@/components/Banner";

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
                bg-[size:70px_70px]"
            >
            </div>
            <div className="fixed -top-4 w-full flex flex-col items-center justify-center py-2 mt-2">
                <Banner 
                    display={true}
                    content={"Deep dive into the working of startups with founders, angel-investors and venture capitalists."}
                    boldContent={"Join the cohort of 2023-24. Registrations Closing Soon!"}
                />
                <Appbar activeLink={"Home"} />
            </div>
            {/* Hero Section */}
            <div className="w-full h-dvh flex flex-col justify-center items-center py-5">
                <HeroSection />
                <Location />
            </div>
            {/* Overview */}
            <div className="w-full flex justify-center py-5">
                <Overview />
            </div>
            {/* Upcoming Events */}
            <div className="w-full flex justify-center py-5">
                <Upcoming />
            </div>
            {/* Statistics and Sponsors */}
            <div className="w-full flex flex-col justify-center items-center gap-y-10 py-5">
                <Stats />
                <Sponsors />
            </div>
            {/* Gallery */}
            <div className="w-full flex justify-center py-5">
                <Gallery />
            </div>
            {/* FAQ Section */}
            <div className="text-center py-20">
                <FAQSection items={faqs}/>
            </div>
            <Footer />
        </div>
  );
}
