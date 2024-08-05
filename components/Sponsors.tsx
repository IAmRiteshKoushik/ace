import AcUnitIcon from '@mui/icons-material/AcUnit';
import Image from 'next/image';
import Link from 'next/link';

export default function Sponsors(){

    const sponsorData = [
        {
            imgUrl: "/sponsor_1.png",
            url: "https:/github.com"
        },
        {
            imgUrl: "/sponsor_2.png",
            url: "https:/github.com"
        },
        {
            imgUrl: "/sponsor_3.png",
            url: "https:/github.com"
        },
        {
            imgUrl: "/sponsor_4.png",
            url: "https:/github.com"
        },
        {
            imgUrl: "/sponsor_5.png",
            url: "https:/github.com"
        },
        {
            imgUrl: "/sponsor_6.png",
            url: "https:/github.com"
        }
    ]

    return(
        <div className='w-3/5 flex flex-col items-center'>
            {/* Sponsor Marquee Band */}
            <div className='text-[#230C25] bg-white w-fit flex
                gap-x-5 px-5 text-4xl justify-center items-center py-5 
                border-2 rounded-lg border-[#230C25] shadow-2xl'>
                    <AcUnitIcon />
                    <span>Sponsors</span>
                    <AcUnitIcon />
            </div>
            {/* Call for more sponsorship */}
            <div className='flex justify-between items-center w-full'>
                <div>
                    <div className='text-white bg-[#230C25] text-4xl w-fit p-1'>Meet our </div>
                    <div className='text-white bg-[#230C25] text-4xl w-fit p-1 ml-20'>Session Partners.</div>
                </div>
                <div className='flex flex-col'>
                    Interested in becoming a sponsor to one of our events ? 
                    <Link 
                        href={"/about/#contact"} 
                        className='underline font-semibold w-fit'
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
            {/* Sponsor Table */}
            <div className='flex flex-wrap gap-5 w-full justify-center align-center
                m-5'>
                {sponsorData.map((sponsor, index) => (
                    <div key={index} className='border-2 border-[#230C25] p-2
                        rounded-lg flex justify-center items-center 
                        text-[#230C25] bg-white hover:shadow-xl'>
                        <a href={sponsor.url}>
                            <Image 
                                src={sponsor.imgUrl}
                                alt={"Sponsor image"}
                                width={200}
                                height={50}
                            />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
