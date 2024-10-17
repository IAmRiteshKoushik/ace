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
      className="relative flex h-[400px] w-[400px] flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
    >
      <MagicCard className="cursor-pointer flex-col items-center justfy-center shadow-2xl whitespace-nowrap m-0 border-0 p-4" gradientColor={"#262626"}>
        {/* Logo */}
        <MagicCard className="cursor-pointer flex-col items-center justfy-center shadow-2xl whitespace-nowrap m-0 border border-white p-4 w-fit h-fit" gradientColor={"#262626"}>
          {logo}
        </MagicCard>
        <div className="text-white text-wrap text-3xl font-bold my-3">
          {title}
        </div>
        {/* Subtitle */}
        <div className="text-slate-500 text-center text-wrap">{subtitle}</div>
      </MagicCard>
    </ShineBorder>
  );
}
