type Props = {
  icon: string,
  num: number,
  desc: string,
  bg: string,
  border: string
};
export default function StatisticsCard({ icon, num, desc, bg, border }: Props) {
  return (
    <div style={{
      backgroundColor: bg,
      borderColor: border
    }} className={`rounded-lg p-5 border shadow-sm flex flex-col justify-between`}>
      <div className="flex justify-between items-center mb-3 ">
        <img src={icon} className="w-9 h-9 rounded-full" />
        <p className="text-xl font-semibold">{num}</p>
      </div>
      <p className="text-gray-500 text-sm font-semibold">{desc}</p>
    </div>
  );
}

