import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import SideNav from "../components/SideNav/SideNav";
import Footer from "../components/Footer/Footer";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex flex-1 pt-19 bg-gray-100 ">
        <SideNav />
        <div className="flex flex-col flex-1 yash" style={{height: 'calc(100vh - 76px)'}}>
          <div className="flex-1 px-6 py-6">
            <Outlet/>
          </div>
          <Footer />
        </div>

      </div>
    </div>
  );
}
