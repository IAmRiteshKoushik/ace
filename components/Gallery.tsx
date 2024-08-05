import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Gallery() {
    return (
        <div className="relative -z-10 flex flex-col items-center
            bg-gradient-to-r from-violet-200 to-pink-200">
            <div className="w-3/5 text-[#230C25] font-semibold text-3xl mt-4">Join Our Thriving Community (Image Gallery)</div>
            <Marquee pauseOnHover speed={70} direction={"left"}>
                <div className="flex justify-center">
                    <div className="m-5">
                        <Image
                            src="/sponsor_1.png"
                            alt="Gallery Image 1"
                            className="w-[240px]"
                            width={200}
                            height={500}

                        />
                    </div>
                    <div className="m-5">
                        <Image
                            src="/sponsor_1.png"
                            alt="Gallery Image 1"
                            className="w-[240px]"
                            width={200}
                            height={500}

                        />
                    </div>
                    <div className="m-5">
                        <Image
                            src="/sponsor_1.png"
                            alt="Gallery Image 4"
                            className="w-[240px]"
                            width={200}
                            height={500}


                        />
                    </div>
                    <div className="m-5">
                        <Image
                            src="/sponsor_1.png"
                            alt="Gallery Image 2"
                            className="w-[240px]"
                            width={200}
                            height={500}


                        />
                    </div>
                    <div className="m-5">
                        <Image
                            src="/sponsor_1.png"
                            alt="Gallery Image 4"
                            className="w-[240px]"
                            width={200}
                            height={500}


                        />
                    </div>
                    <div className="m-5">
                        <Image
                            src="/sponsor_1.png"
                            alt="Gallery Image 3"
                            className="w-[240px]"
                            width={200}
                            height={500}


                        />
                    </div>
                    <div className="m-5">
                        <Image
                            src="/sponsor_1.png"
                            alt="Gallery Image 4"
                            className="w-[240px]"
                            width={200}
                            height={500}
                        />
                    </div>
                </div>
            </Marquee>
            <Marquee pauseOnHover speed={70} direction={"right"}>
            <div className="flex justify-center">
                    <div className="m-5">
                        <Image
                            src="/sponsor_1.png"
                            alt="Gallery Image 1"
                            className="w-[240px]"
                            width={200}
                            height={500}

                        />
                    </div>
                    <div className="m-5">
                        <Image
                            src="/sponsor_1.png"
                            alt="Gallery Image 4"
                            className="w-[240px]"
                            width={200}
                            height={500}


                        />
                    </div>
                    <div className="m-5">
                        <Image
                            src="/sponsor_1.png"
                            alt="Gallery Image 2"
                            className="w-[240px]"
                            width={200}
                            height={500}


                        />
                    </div>
                    <div className="m-5">
                        <Image
                            src="/sponsor_1.png"
                            alt="Gallery Image 4"
                            className="w-[240px]"
                            width={200}
                            height={500}


                        />
                    </div>
                    <div className="m-5">
                        <Image
                            src="/sponsor_1.png"
                            alt="Gallery Image 3"
                            className="w-[240px]"
                            width={200}
                            height={500}


                        />
                    </div>
                    <div className="m-5">
                        <Image
                            src="/sponsor_1.png"
                            alt="Gallery Image 4"
                            className="w-[240px]"
                            width={200}
                            height={500}
                        />
                    </div>
                    <div className="m-5">
                        <Image
                            src="/sponsor_1.png"
                            alt="Gallery Image 4"
                            className="w-[240px]"
                            width={200}
                            height={500}
                        />
                    </div>
                </div>
            </Marquee>
        </div>
        
    );
}
