import { useLocation, useNavigate } from "react-router-dom";
import dashboard from "../../assets/images/dashboard.svg";
import comple from "../../assets/images/comple.svg";
import inprogress from "../../assets/images/inprogress.svg";
import movies_icon from "../../assets/images/movies_icon.svg";
import settingss from "../../assets/images/settingss.svg";

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

export default function   SideNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="hidden md:block w-64 bg-white shadow-lg">
      <ul className="text-gray-600">
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
                ${
                  isActive
                    ? "bg-blue-400 text-white font-semibold"
                    : "hover:bg-blue-400 hover:text-white"
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
      </ul>
    </div>
  );
}
