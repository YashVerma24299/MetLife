import { useLocation, useNavigate } from "react-router-dom";
import dashboard from "../../assets/images/dashboard.svg";
import comple from "../../assets/images/comple.svg";
import inprogress from "../../assets/images/inprogress.svg";
import movies_icon from "../../assets/images/movies_icon.svg";
import settingss from "../../assets/images/settingss.svg";
import { useState } from "react";
import Hamburger_icon from "../../assets/images/Hamburger_icon.svg.png";


const data = [
  {
    name: 'Dashboard', path: '/dashboard', image: dashboard
  },
  {
    name: 'All Videos', path: '/videos', image: movies_icon
  },
  {
    name: 'In Progress', path: '/progress', image: inprogress
  },
  {
    name: 'Completed', path: '/completed', image: comple
  },
  {
    name: 'Settings', path: '/settings', image: settingss
  },
]

export default function SideNav() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className={`hidden md:block ${isSidebarOpen ? 'w-64' : 'w-0'} bg-white shadow-lg  relative`}>
        {isSidebarOpen && <ul className="text-gray-600">
          {data.map((item, ind) => {
            const isDashboard = item.path === "/dashboard";

            const isActive = isDashboard
              ? location.pathname.startsWith("/dashboard")
              : location.pathname === item.path;

            return (
              <li
                key={ind}
                onClick={() => navigate(item.path)}
                className={`flex gap-3 px-10 py-5 cursor-pointer transition group
                ${isActive
                    ? "bg-blue-400 text-white font-semibold"
                    : "hover:bg-blue-300 hover:text-white"
                  }
              `}
              >
                <img
                  src={item.image}
                  className={isActive ? "invert brightness-0" : "group-hover:invert group-hover:brightness-0"}
                />
                {item.name}
              </li>
            );
          })}
        </ul>}
        {isSidebarOpen && <div className="bg-gray-300  h-8 w-8 flex justify-center items-center rounded-full mt-2 ml-1 transition duration-200 hover:hover:scale-110 cursor-pointer absolute top-0 -right-9" onClick={toggleSidebar}>
          <div className=" text-gray-500  cursor-pointer">✕</div>
        </div>}
        {!isSidebarOpen && <div className="bg-gray-300  h-8 w-8 flex justify-center items-center rounded-sm mt-2 ml-1 transition duration-200 hover:hover:scale-110 cursor-pointer" onClick={toggleSidebar}>
          <div className=" text-gray-500 w-5 h-5 cursor-pointer"><img src={Hamburger_icon} alt="" /></div>
        </div>}
      </div>
    </>
  );
}
