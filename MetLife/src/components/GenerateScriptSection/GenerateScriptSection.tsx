import { useEffect, useRef } from "react";
import arrowDown from "../../assets/images/arrowDown.png";

type Props = {
  id: string;
  title: string;
  openSection?: string;
  setOpenSection?: (id:string) => void;
  children?: any;
};

export default function GenerateScriptSection({ id, title, openSection, setOpenSection, children }: Props) {
  const open = openSection === id;

  const sectionRef = useRef(null);

  useEffect(() => {
    if (open && sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [open]);

  useEffect(() => {
    function handleClickOutside(e: any) {
      if (open && sectionRef.current && !sectionRef.current.contains(e.target)) {
        setOpenSection(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);


  return (
    <div className="space-y-4" ref={sectionRef}>
      <div className="bg-white rounded-lg p-3 cursor-pointer border border-[#DFDFDF]"  onClick={() => setOpenSection(!open ? id : '')}>
        <div className={`flex justify-between items-center gap-2`} >
          <p className="text-md font-semibold text-[#231F20]">{title}</p>
          <div className="flex justify-center  px-2 py-1 rounded-sm">
            <img
              src={arrowDown}
              className={`${open ? "rotate-180" : ""}`}
            />
          </div>
        </div>
      </div>

      {open && (
        <div className="bg-white rounded-md p-3" >
          {children}
        </div>
      )}
    </div>
  );
}
