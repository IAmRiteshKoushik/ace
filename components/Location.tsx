import { Button } from "@nextui-org/react";

export default function Location(){
    return(
        <div className="w-3/5 flex">
            <div className="flex flex-col w-fit">
                <span className="bg-[#230C25] text-md text-white w-fit px-1 mb-1">
                    LOCATION
                </span>
                <span className="bg-[#230C25] text-white text-4xl w-fit p-2">
                    Amrita Vishwa Vidyapeetham
                </span>
                <span className="bg-[#230C25] text-white text-4xl italic w-fit p-2 ml-auto">
                    Coimbatore
                </span>
                <div className="text-[#230C25] font-semibold p-2 border-1 border-[#230C25]
                    w-fit px-3">
                    10.9038° N, 76.8984° E
                </div>
            </div>
            <div className="ml-auto flex items-center">
                <Button
                    radius="full"
                    className="my-2 border-2 bg-white text-[#230C25] 
                    border-[#230c25] hover:shadow-lg text-4xl p-10
                    hover:text-white hover:bg-[#230c25] hover:bg-opacity-100"
                >
                    Register Now!
                </Button>
            </div>
        </div>
    );
}
