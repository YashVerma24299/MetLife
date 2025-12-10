import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FileUploader from "../../components/FileUploader/FileUploader";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";
import uploadIcon from "../../assets/images/uploadblue.png";

export default function UploadScript() {
  const [file, setFile] = useState<File | null>(null);
  const [modal, setModal] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  useEffect(() => {
    document.title = "My UploadScript Dashboard";
  }, []);

  const navigate = useNavigate();

  const language=["Hindi", "English", "French", "German", "Italian", "Japanese"];

  return (
    <>
      <div className="p-8">
        <div className="bg-[#e9f5fc] border border-[#cfe6f4] rounded-xl py-10 px-14">
          {/* heading */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Upload Script
          </h2>

          {/* FileUploader */}
          <FileUploader file={file} onChange={setFile} bg='bg-white' border='border-gray-300' icon={uploadIcon} text='Browse Files'/>

          <p className="text-right text-sm text-gray-500 mt-2">
            Detected: {selectedLanguage}
          </p>

          {/* Buttons */}
          <div className="flex justify-end mt-8 gap-8 mb-15">
            <Button
              text="Translate Script"
              onClick={() => setModal(true)}
              active={true}
              activeColor="hover:bg-[#99d538ea]"
              bg="bg-[#99d538]"
              padding="px-7 py-2"
            />
            <Button
              text="Continue & Generate Video"
              onClick={() => navigate("../generate")}
              active={true}
              activeColor="hover:bg-blue-400"
              bg="bg-[#239DE0]"
              padding="px-7 py-2"
            />
          </div>
        </div>
      </div>

      {/* Language Modal */}
      <Modal open={modal} onClose={() => setModal(false)}>
        <div className="w-[480px] ">

          <h2 className="text-md font-semibold text-[#239DE0] shadow-md">Select Language</h2>
          {/* <div className="w-full h-[3px] bg-gray-200 shadow" /> */}

          {language.map((lang) => (
            <div
              key={lang}
              className={`px-8 py-3 cursor-pointer hover:bg-blue-100 ${
                selectedLanguage === lang ? "bg-blue-100" : ""
              }`}
              onClick={() => setSelectedLanguage(lang)}
            >
              {lang}
            </div>
          ))}

          <div className="flex justify-center mt-6">
            <Button
              text="Translate & Download Script"
              onClick={() => setModal(false)}
              active={true}
              activeColor="hover:bg-blue-500"
              bg="bg-[#239DE0]"
              padding="py-3 w-[80%]"
            />
          </div>

        </div>
      </Modal>
    </>
  );
}
