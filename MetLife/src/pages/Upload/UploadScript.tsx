import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FileUploader from "../../components/FileUploader/FileUploader";
import Modal from "../../components/Modal/Modal";

export default function UploadScript() {
  const [file, setFile] = useState<File | null>(null);
  const [modal, setModal] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("");

  useEffect(() => {
        document.title = "My UploadScript Dashboard";
      }, []);

  const navigate = useNavigate();

  return (
    <>
      <div className="p-8">
        <div className="bg-[#e9f5fc] border border-[#cfe6f4] rounded-xl p-6">

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Upload Script
          </h2>

          <FileUploader file={file} onChange={setFile} />

          <p className="text-right text-sm text-gray-500 mt-2">
            Detected: English
          </p>

          <div className="flex justify-end mt-8 gap-8 mb-15">
            <button className="bg-[#99d538] rounded px-7 py-2 text-white text-sm cursor-pointer hover:bg-[#99d538ea]"
              onClick={() => setModal(true)}>Translate script</button>
            {/* // option 1: go up one level then generate
              navigate("../generate");
              // option 2: absolute path
              navigate("/dashboard/createvideo/generate"); */}
            <button onClick={() => navigate('../generate')} className="bg-[#239DE0] rounded px-7 py-2 text-white text-sm cursor-pointer hover:bg-blue-400">Continue & Generate Video</button>
          </div>
        </div>
      </div>

      {/* Modal Reuse */}
      {modal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white rounded-xl w-[440px] p-6">

            {/* Heading */}
            <h2 className="text-md font-semibold text-blue-500">
              Select Language
            </h2>

            {/* EXACT subtle shadow under heading */}
            <div className="w-full h-[1px] bg-gray-200 shadow-[0_2px_6px_rgba(0,0,0,0.08)] mt-2 mb-4"></div>

            {/* Language List */}
            <div className="">
              {["Hindi", "English", "French", "German", "Italian", "Japanese"].map(
                (lang, i) => (
                  <div
                    key={i}
                    className={`w-full px-4 py-3 text-gray-600  cursor-pointer 
                hover:bg-blue-100 
                ${selectedLanguage === lang ? "bg-blue-100" : ""}`}
                    onClick={() => setSelectedLanguage(lang)}
                  >
                    {lang}
                  </div>
                )
              )}
            </div>

            {/* Button */}
            <button
              className="bg-[#239DE0] text-white w-full py-3 mt-6 rounded-sm text-sm hover:bg-blue-500 cursor-pointer"
              onClick={() => {
                setModal(false);
              }}
            >
              Translate & Download Script
            </button>

          </div>
        </div>
      )}

    </>
  );
}
