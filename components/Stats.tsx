export default function Stats(){
    const data = [
        {
            stat: "1450+",
            title: "MEMBERS"
        },
        {
            stat: "40+",
            title: "STARTUPS"
        },
        {
            stat: "10+",
            title: "YEARS"
        },
        {
            stat: "> 30",
            title: "SESSIONS/YR"
        },
        {
            stat: "1",
            title: "GOAL"
        }
    ]
    return(
        <div className="bg-[#2E0C25] text-white text-2xl w-full
            overflow-hidden my-20">
            <div className="flex justify-center gap-x-20 items-center">
                <div>BE A PART OF OUR STATS</div>
                {data.map((item, index) => (
                    <DataPoint 
                        stat={item.stat}
                        title={item.title}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
}

interface DataPointIntf {
    stat: string,
    title: string,
}

function DataPoint({ stat, title }: DataPointIntf){
    return(
        <div className="flex flex-col justify-center items-center py-3">
            <div className="text-5xl text-white">{stat}</div>
            <div className="text-sm text-white">{title}</div>
        </div>
    );
}
