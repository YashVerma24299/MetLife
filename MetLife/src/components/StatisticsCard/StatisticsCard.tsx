type Props = {
  icon: string,
  num: number,
  title: string
};
export default function StatisticsCard({ icon, num, title }: Props) {
  var bg,border;

  if(title=='Total Videos'){
    bg="#239DE01A",border='#239DE033'
  }else if(title=='In Progress'){
    bg="#99D53829",border='#99D53833'
  }else if(title=='Completed'){
    bg="#FB96781A",border='#FB967833'
  }else{
    bg="#AB8CE41A",border='#AB8CE433'
  }
  return (
    <div style={{
      backgroundColor: bg,
      borderColor: border
    }} className={`rounded-lg p-5 border shadow-sm flex flex-col justify-between`}>
      <div className="flex justify-between items-center mb-3 ">
        <img src={icon} className="w-9 h-9 rounded-full" />
        <p className="text-2xl font-semibold opacity-90">{num}</p>
      </div>
      <p className="text-[#333333] text-md font-semibold">{title}</p>
    </div>
  );
}

