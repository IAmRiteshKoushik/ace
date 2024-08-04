export default function HeroSection(){
    return(
        <div className="px-10 pb-10 w-2/3">
            <div className="w-full rounded-lg text-[#230C25] border-2 
                border-[#230C25] bg-white p-4 flex flex-col items-center
                shadow-2xl">
                <div className="text-7xl">Amrita Centre for</div>  
                <div className="text-9xl italic pb-3">Entrepreneurship</div>
            </div>
            <div className="text-4xl flex flex-row-reverse mt-2">
                <span className="text-white border-2 bg-[#230C25] rounded-lg p-2">Edition: 2023-24</span>
            </div>
        </div>
    );
}
