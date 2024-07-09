type BannerProps = {
    display: boolean
    content: string
    boldContent?: string
}
export default function Banner({ content, display, boldContent }: BannerProps){
    return(
        <div className={`w-screen ${display ? "" : "hidden" }` + 
            "bg-gradient-to-r from-violet-200 to-pink-200 text-sm p-2 flex \
             gap-x-2 justify-center text-[#2E0C25]" 
        }>
            <span>{content}</span>
            <span className="font-bold">{boldContent}</span>
        </div>   
    );
}
