import { Image } from "@nextui-org/react";

export default function Gallery(){
    return(
        <div className="w-3/4">
            <div 
                className="grid grid-cols-4 gap-6 rounded-lg border-2 
                border-[#230C25] "
            >
                <div>
                    <Image
                        isZoomed
                        src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
                        alt="Gallery Image"
                        className="w-[240px]"
                    />
                </div>
                <div>
                    <Image
                        isZoomed
                        src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
                        alt="Gallery Image"
                        className="w-[240px]"
                    />
                </div>
                <div>
                    <Image
                        isZoomed
                        src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
                        alt="Gallery Image"
                        className="w-[240px]"
                    />
                </div>
                <div>
                    <Image
                        isZoomed
                        src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
                        alt="Gallery Image"
                        className="w-[240px]"
                    />
                </div>
                <div>
                    <Image
                        isZoomed
                        src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
                        alt="Gallery Image"
                        className="w-[240px]"
                    />
                </div>
                <div>
                    <Image
                        isZoomed
                        src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
                        alt="Gallery Image"
                        className="w-[240px]"
                    />
                </div>
                <div>
                    <Image
                        isZoomed
                        src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
                        alt="Gallery Image"
                        className="w-[240px]"
                    />
                </div>
            </div>
        </div>
    );
}
