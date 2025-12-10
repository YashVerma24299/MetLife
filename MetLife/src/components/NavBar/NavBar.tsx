import myPic from "../../assets/images/my_pic.png";
import metLife from '../../assets/images/metlife.png';
import arrowdown01 from '../../assets/images/arrowdown01.png';
import search from '../../assets/images/search.png'
import { useLocation, useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const check = location.pathname == '/dashboard';
  console.log(check);
  return (
    <>
      <div className="fixed top-0 w-full shadow-md bg-white  ">
        <div className="flex items-center justify-between px-6 h-19">
          {!check && <div className=""></div>}

          {/* Left Part */}
          <p className="ahganirya text-xl text-[#231F20] font-semibold cursor-pointer" onClick={() => navigate('/dashboard')}>OneFrame</p>

          {/* Right Part */}
          <div className="flex items-center gap-10">
            <img className={`h-7 md:block hidden cursor-pointer ${!check ? 'pr-12': ''}`} onClick={() => navigate('/dashboard')} src={metLife} />
            {check && <div className="flex relative">
              <input
                placeholder="Select by Video Name"
                className="md:block hidden w-65 px-4 py-2 border border-gray-300 rounded-md text-sm focus:border-blue-500 outline-none"
              />
              <img className="w-3  absolute right-4 top-3" src={search} />
            </div>}

            {check && <div className="flex items-center gap-3 cursor-pointer">
              <img className="w-9 h-9 rounded-full" src={myPic} />
              <p className=" text-sm text-[#231F20] font-medium">Yash Verma</p>
              <img className="" src={arrowdown01} />
            </div>}

          </div>
        </div>
      </div>
    </>
  );
}


