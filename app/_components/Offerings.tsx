import ShineBorder from "@/_components/ui/shine-border";
import { MagicCard } from "@/_components/ui/magic-card";

interface PropsForOffer {
  logo: JSX.Element
  title: string,
  subtitle: string
}

export default function Offers({ logo, title, subtitle }: PropsForOffer) {
  return (
    <ShineBorder
      className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border md:shadow-xl"
      color={["#A07CFE", "#FE8FB5", "FFBE7B"]}
    >
      <div className="flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row">
        <MagicCard className="cursor-pointer flex-col items-center justfy-center shadow-2xl whitespace-nowrap" gradientColor={"#262626"}>
          {/* Title */}
          <div className="flex">
            <div>
              {logo}
            </div>
            <div className="text-white">
              {title}
            </div>
          </div>
          {/* Subtitle */}
          <div className="text-slate-500 text-center">{subtitle}</div>
        </MagicCard>
      </div >
    </ShineBorder>
  );
}
