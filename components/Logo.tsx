export default async function Logo() {
    return(
        <div className="flex">
            {/* Text::Amrita*/}
            <div className="border-2 border-[#2E0C25] text-[#2E0C25] font-bold
                text-4xl mx-1 p-1 rounded-md"
            >
                A.
            </div>
            {/* Text::Center For Entrepreneurship */}
            <div className="flex flex-col">
                <span 
                    className="px-3 bg-[#2E0C25] text-sm text-white text-left
                    w-fit"
                >
                    CENTER FOR
                </span>
                <span 
                    className="ml-6 px-2 bg-[#2E0C25] text-xl text-white
                    font-bold">
                    ENTREPRENEURSHIP
                </span>
            </div>
        </div>
    );
}
