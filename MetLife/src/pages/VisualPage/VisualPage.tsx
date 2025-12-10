import { useState } from "react";
import copy from "../../assets/images/copy.png";
import recycle from "../../assets/images/recycle.png";
import CommonTable from "../../components/CommonTable/CommonTable";
import { useNavigate } from "react-router-dom";




export default function VisualPage() {
  const [hasVisuals, setHasVisuals] = useState(false);
  const navigate =useNavigate();

  const columns = hasVisuals
    ? ["Scene No.", "Visual Type", "Visual Description", "Visual Image", "Action"]
    : ["Scene No.", "Visual Type", "Visual Description", "Action"];

  const rows = [
    [
      "01",
      "Image",
      "Create a 90-second explainer video script about photosynthesis",
      ...(hasVisuals ? [<div className="w-6 h-6 bg-gray-200 mx-auto" />] : []),
      <div className="flex justify-center gap-2">
        <img src={copy} className="w-4 cursor-pointer" />
        <img src={recycle} className="w-4 cursor-pointer" />
      </div>
      
    ],
    [
      "02",
      "Footage",
      "Create a 90-second explainer",
      ...(hasVisuals ? [<div className="w-6 h-6 bg-gray-200 mx-auto" />] : []),
      <div className="flex justify-center gap-2">
        <img src={copy} className="w-4 cursor-pointer" />
        <img src={recycle} className="w-4 cursor-pointer" />
      </div>
    ],
    [
      "03",
      "Clip",
      "Create a 90-second explainer video script",
      ...(hasVisuals ? [<div className="w-6 h-6 bg-gray-200 mx-auto" />] : []),
      <div className="flex justify-center gap-2">
        <img src={copy} className="w-4 cursor-pointer" />
        <img src={recycle} className="w-4 cursor-pointer" />
      </div>
    ],
    [
      "04",
      "Image",
      "Create a 90-second explainer video script about photosynthesis",
      ...(hasVisuals ? [<div className="w-6 h-6 bg-gray-200 mx-auto" />] : []),
      <div className="flex justify-center gap-2">
        <img src={copy} className="w-4 cursor-pointer" />
        <img src={recycle} className="w-4 cursor-pointer" />
      </div>
      
    ],
    [
      "05",
      "Footage",
      "Create a 90-second explainer",
      ...(hasVisuals ? [<div className="w-6 h-6 bg-gray-200 mx-auto" />] : []),
      <div className="flex justify-center gap-2">
        <img src={copy} className="w-4 cursor-pointer" />
        <img src={recycle} className="w-4 cursor-pointer" />
      </div>
    ],
  ];


  return (
    <div className="p-8 space-y-6">
      <h2 className="text-2xl font-semibold text-[#333333]">
        Visual Content
      </h2>

      <CommonTable columns={columns} rows={rows} />

      {hasVisuals && (
        <div className="flex justify-end">
          <button className="bg-[#239DE0] text-white px-6 py-2 rounded text-sm cursor-pointer hover:bg-blue-600" onClick={()=> navigate('audio-animation')}>
            Audio & Animation Toolkit
          </button>
        </div>
      )}
      {!hasVisuals && (
        <div className="flex justify-end ">
          <button  onClick={() => setHasVisuals(true)} className="bg-blue-500 text-white px-6 py-2 rounded text-sm cursor-pointer hover:bg-blue-600">
            Generate Visuals
          </button>
        </div>
      )}
    </div>
  );
}
