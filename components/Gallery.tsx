import { Image } from "@nextui-org/react";
import Marquee from "react-fast-marquee";

export default function Gallery() {
    return (
        <div>
            <Marquee pauseOnHover speed={70} direction={"right"}>
                <div className="flex justify-center">
                    <div className="m-5">
                        <Image
                            isZoomed
                            src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
                            alt="Gallery Image 1"
                            className="w-[240px]"
                        />
                    </div>
                    <div className="m-5">
                        <Image
                            isZoomed
                            src="https://nextui-docs-v2.vercel.app/images/fruit-6.jpeg"
                            alt="Gallery Image 4"
                            className="w-[240px]"
                        />
                    </div>
                    <div className="m-5">
                        <Image
                            isZoomed
                            src="https://nextui-docs-v2.vercel.app/images/fruit-2.jpeg"
                            alt="Gallery Image 2"
                            className="w-[240px]"
                        />
                    </div>
                    <div className="m-5">
                        <Image
                            isZoomed
                            src="https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg"
                            alt="Gallery Image 4"
                            className="w-[240px]"
                        />
                    </div>
                    <div className="m-5">
                        <Image
                            isZoomed
                            src="https://nextui-docs-v2.vercel.app/images/fruit-3.jpeg"
                            alt="Gallery Image 3"
                            className="w-[240px]"
                        />
                    </div>
                    <div className="m-5">
                        <Image
                            isZoomed
                            src="https://nextui-docs-v2.vercel.app/images/fruit-5.jpeg"
                            alt="Gallery Image 4"
                            className="w-[240px]"
                        />
                    </div>
                </div>
            </Marquee>
            <Marquee pauseOnHover speed={70} direction={"right"}>
                <div className="flex justify-center">
                    <div className="m-5">
                        <Image
                            isZoomed
                            src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
                            alt="Gallery Image 1"
                            className="w-[240px]"
                        />
                    </div>
                    <div className="m-5">
                        <Image
                            isZoomed
                            src="https://nextui-docs-v2.vercel.app/images/fruit-6.jpeg"
                            alt="Gallery Image 4"
                            className="w-[240px]"
                        />
                    </div>
                    <div className="m-5">
                        <Image
                            isZoomed
                            src="https://nextui-docs-v2.vercel.app/images/fruit-2.jpeg"
                            alt="Gallery Image 2"
                            className="w-[240px]"
                        />
                    </div>
                    <div className="m-5">
                        <Image
                            isZoomed
                            src="https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg"
                            alt="Gallery Image 4"
                            className="w-[240px]"
                        />
                    </div>
                    <div className="m-5">
                        <Image
                            isZoomed
                            src="https://nextui-docs-v2.vercel.app/images/fruit-3.jpeg"
                            alt="Gallery Image 3"
                            className="w-[240px]"
                        />
                    </div>
                    <div className="m-5">
                        <Image
                            isZoomed
                            src="https://nextui-docs-v2.vercel.app/images/fruit-5.jpeg"
                            alt="Gallery Image 4"
                            className="w-[240px]"
                        />
                    </div>
                </div>
            </Marquee>
        </div>
        
    );
}
