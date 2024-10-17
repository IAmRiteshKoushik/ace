import NumberTicker from "@/_components/ui/number-ticker";

export default function Statistics() {
  return (
    <div className="flex justify-center items-center tracking-tighter bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 h-[120px]">
      <StatCard count={10} title="YEARS" />
      <StatCard count={243} title="SESSIONS" />
      <StatCard count={27} title="STARTUPS" />
      <StatCard count={1000} title="MENTORING HOURS" />
    </div>
  );
}

interface PropsForStatCard {
  count: number,
  title: string,
}

function StatCard({ count, title }: PropsForStatCard) {
  return (
    <div className="mx-10 md:text-7xl font-bold text-center">
      <NumberTicker value={count} />
      <div className="text-sm">{title}</div>
    </div>
  )
}
