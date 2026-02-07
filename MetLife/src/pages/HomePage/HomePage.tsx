import Button from "../../components/Button/Button";
import StatisticsCard from "../../components/StatisticsCard/StatisticsCard";
import { useNavigate } from "react-router-dom";
import eye from "../../assets/images/eye.png";
import CommonTable from "../../components/CommonTable/CommonTable";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDashboardData, setDashboardData } from "../../Redux/Slices/dashboardSlice";

export default function HomePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();

  const { statistics, videos } = useSelector((state: any) => state.dashboard)

  useEffect(() => {
    document.title = "My Dashboard";
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await getDashboardData();
      console.log(data);
      dispatch(setDashboardData(data));
    } catch (error) {
      console.log("API Error:", error);
    }
  };

  const columns = [
    "Thumbnail",
    "Video Name",
    "Duration",
    "Last Update",
    "Status",
    "Action",
  ];
  const rows = videos.map((v: any) => [
    <img src={v.thumbnail} className="w-8 h-8 rounded-full" />,
    v.name,
    v.duration,
    v.lastupdate,
    <Button
      text={v.status}
      bg={
        v.status === "Completed"
          ? "bg-green-500 px-2 py-1"
          : v.status === "In Progress"
            ? "bg-blue-500 px-2 py-1"
            : "bg-red-500 px-6 py-1"
      }
      padding=""
    />,
    <img
      src={eye}
      className="mx-3 cursor-pointer"
      onClick={() =>
        navigate("/dashboard/createvideo/generate/script")
      }
    />,
  ]);


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
          {
            statistics.map((item: any, ind: number) => (
              <StatisticsCard key={ind} icon={item.img} num={item.value} title={item.title} />
            ))
          }
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
