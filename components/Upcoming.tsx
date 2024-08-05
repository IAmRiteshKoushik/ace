"use client"
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function Upcoming(){

    const data = [
        {
            title: "Payment Options and Analyst Training",
            blurb: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat. Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
            price: "Free",
            type: "Workshop",
            url: "/",
            tags: ["Workshop", "Hands-On", "Industry Experts"],
            venue: "Sudhamani Hall",
            time: "10 AM - Indian Standard Time",
            date: "11th December, 2024"
        },
        {
            title: "Developer tools training and certification prep",
            blurb: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat. Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
            price: "Free",
            type: "Event",
            url: "/",
            venue: "Amriteshwari Hall",
            time: "10 AM - Indian Standard Time",
            date: "11th December, 2024",
            tags: ["Events", "Developers", "Tools"]
        }
    ]
    return(
        <div className="w-3/5">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <div className="flex flex-col w-fit">
                    <span className="bg-[#230C25] text-md text-white w-fit px-1 mb-1">
                        UPCOMING
                    </span>
                    <span className="bg-[#230C25] text-4xl text-white w-fit px-1">
                        Things We Have In Store
                    </span>
                    <span className="bg-[#230C25] text-4xl text-white w-fit px-1 mb-1 ml-auto">
                        For You
                    </span>
                </div>
                <div className="w-1/2 text-wrap">
                    If you have ideas or suggestions for more events. Do reach out to us 
                through our <span className="underline hover:cursor-pointer font-bold">social media</span> handles. We always love to hear from the community!
                </div>
            </div>
            {/* Content */}
            <div className="flex gap-x-2 mt-2">
                {data.map((event, index) => (
                    <UpcomingCard 
                        key={index}
                        title={event.title}
                        blurb={event.blurb}
                        price={event.price}
                        type={event.type}
                        url={event.url}
                        tags={event.tags}
                        time={event.time}
                        venue={event.venue}
                        date={event.date}
                    />
                ))}
            </div>
        </div>
    );
}

interface cardProps {
    title: string,
    blurb: string,
    price: string,
    type: string,
    date: string,
    time: string,
    venue: string,
    url: string,
    tags: string[],
}

function UpcomingCard({
    title, blurb, price, type, url, tags, date, time, venue
}: cardProps){

    const Register = async(url: string) => {
        // Handle Registration Call
    }

    return(
        <div className="pt-4 rounded-lg border-1 border-[#230C25] w-1/2 bg-white overflow-clip">
            {/* Top Level Info */}
            <div className="mx-4 flex font-semibold justify-between text-[#230C25]">
                <div className="rounded-full px-2 border-1 border-[#230C25]">{type}</div>
                <div className="rounded-full px-2 border-1 border-[#230C25]">{price}</div>
            </div>
            {/* Title */}
            <div className="mx-4 text-4xl text-[#230C25] text-wrap my-6">{title}</div>
            {/* Blurb */}
            <div className="mx-4 mb-2">{blurb}</div>
            {/* Details */}
            <div className="mx-4 border-t-1 border-b-1 border-[#230c25] py-2">{"Date: " + date}</div>
            <div className="mx-4 border-b-1 border-[#230c25] py-2">{"Time: " + time}</div>
            <div className="mx-4 border-b-1 border-[#230c25] py-2">{"Venue: " + venue}</div>
            {/* Register */}
            <button onClick={e => Register(url)} className="bg-[#230C25] text-white py-2 
                px-4 rounded-full my-4 hover:opacity-90 mx-4"
            >
                Learn More
            </button>
            <div className="bg-[#230c25] w-full text-white flex gap-3 px-3 py-1 justify-center">
                <AcUnitIcon />
                {tags.map((tag, index) => (
                    <>
                        <span>{tag}</span>
                        <AcUnitIcon />
                    </>
                ))}
            </div>
        </div>
    );
}
