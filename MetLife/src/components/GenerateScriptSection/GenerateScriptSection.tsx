import arrowDown from "../../assets/images/arrowDown.png";

type Props = {
  id: string;
  title: string;
  openSection: string;
  setOpenSection: () => void;
  children: any;
};

export default function GenerateScriptSection({ id, title, openSection, setOpenSection, children }: Props) {
  const open = openSection === id;

  return (
    <div className="space-y-1">
      <div className="bg-white rounded-md p-3">
        <div className={`flex justify-between items-center gap-2 cursor-pointer`} onClick={() => setOpenSection(!open ? id : '')}>
          <p className="text-md font-semibold text-black">{title}</p>
          <div className="flex justify-center bg-[#239DE01A] px-2 py-1 rounded-sm">
            <img
              src={arrowDown}
              className={`${open ? "rotate-180" : ""}`}
            />
          </div>
        </div>
      </div>

      {open && (
        <div className="bg-white rounded-md p-3">
          {children}
        </div>
      )}
    </div>
  );
}
