import Button from "../../components/Button/Button";
import StatisticsCard from "../../components/StatisticsCard/StatisticsCard";
import video from "../../assets/images/video.png";
import progress from "../../assets/images/progress.png";
import complete from "../../assets/images/complete.png";
import error from "../../assets/images/error.png";
import { useNavigate } from "react-router-dom";
import eye from "../../assets/images/eye.png";
import tableImage from "../../assets/images/tableImage.png";
import CommonTable from "../../components/CommonTable/CommonTable";
import { useEffect } from "react";

export default function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "My Dashboard";
  }, []);

  const columns = [
    "Thumbnail",
    "Video Name",
    "Duration",
    "Last Update",
    "Status",
    "Action",
  ];
  const rows = [
    [
      <img src={tableImage} className="" />,
      "Travel Video",
      "00h : 25m : 20s",
      "12 October 2025",
      <Button text='Completed'  bg='bg-green-500'padding='px-2 py-1'/>,
      <img src={eye} className="mx-3 cursor-pointer" onClick={()=> navigate('/dashboard/createvideo/generate/script')}/>,
    ],
    [
      <img src={tableImage} className=" rounded-full" />,
      "Travel Video",
      "00h : 25m : 20s",
      "12 October 2025",
      <Button text='In Progress'  bg='bg-blue-500'padding='px-2 py-1'/>,
      <img src={eye} className="mx-3 cursor-pointer" onClick={()=> navigate('/dashboard/createvideo/generate/script')}/>,
    ],
    [
      <img src={tableImage} className="" />,
      "Travel Video",
      "00h : 25m : 20s",
      "12 October 2025",
      <Button text='Failed'  bg='bg-red-500'padding='px-6 py-1'/>,
      <img src={eye} className="mx-3 cursor-pointer" onClick={()=> navigate('/dashboard/createvideo/generate/script')}/>,
    ],
  ];

  return (
    <div className="space-y-5 p-4">

      {/* Header */}
      <div className="flex flex-wrap justify-between gap-3">
        <h1 className="text-2xl font-semibold text-[#333]">
          My Videos Dashboard
        </h1>
        <Button text="2 December 2025, 6:15 PM" onClick={() => ('')} active={false} bg='bg-blue-400' />
      </div>

      {/* Statistics */}
      <div className="bg-white p-6 rounded-lg">
        <h2 className="font-semibold text-gray-800 mb-4">Statistics</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <StatisticsCard icon={video} num={24} desc="Total Videos" bg="#239DE01A" border='#239DE033' />
          <StatisticsCard icon={progress} num={50} desc="In Progress" bg="#99D53829" border='#99D53833' />
          <StatisticsCard icon={complete} num={35} desc="Completed" bg="#FB96781A" border='#FB967833' />
          <StatisticsCard icon={error} num={20} desc="Failed / Error" bg="#AB8CE41A" border='#AB8CE433' />
        </div>
      </div>

      {/* Video list header */}
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-gray-700 text-lg">Video List</h2>
        <Button
          text="+ Create New Video"
          onClick={() => navigate("createvideo")} active={true}
          bg='bg-blue-400'
        />
      </div>

      <CommonTable columns={columns} rows={rows} hColor='bg-[#d1e1eb]' />

    </div>
  )
}
