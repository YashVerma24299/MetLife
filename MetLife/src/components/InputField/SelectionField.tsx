import { useState } from "react";
import arrowdown01 from "../../assets/images/arrowdown01.png";

type Option = {
  label: string;
  value: string;
};

type Props = {
  title: string;
  placeholder: string;
  options: Option[];
  value?: string;
  onChange?: (v: string) => void;
};

export default function SelectField({ title, placeholder, options, value, onChange }: Props) {
  const [open, setOpen] = useState(false);
  // const [selected, setSelected] = useState("");

  return (
    <div className="flex flex-col mb-3 relative" tabIndex={0}
      onBlur={() => setOpen(false)}>
      <p className={`text-sm font-semibold text-gray-500 mb-1 ${title == '' ? 'mt-[19px]' : ''}`}>{title}</p>

      <div
        onClick={() => setOpen(!open)}
        className="border rounded-lg p-2 pl-4 w-full text-sm text-gray-500 outline-none border-gray-200 focus:border-gray-400 cursor-pointer flex justify-between items-center"
      >
        <span>{value || placeholder}</span>
        <img
          src={arrowdown01}
          className={`w-4 transition-all duration-200 ${open ? "rotate-180" : ""
            }`}
        />
      </div>

      {open && (
        <div className="absolute top-[75px] w-full bg-white border border-gray-200 rounded-lg shadow-md z-20">
          {options.map((opt) => (
            <div
              key={opt.value}
              onClick={() => {
                onChange(opt.label);
                setOpen(false);
              }}
              className="p-2 px-4 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
