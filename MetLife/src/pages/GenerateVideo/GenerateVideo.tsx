import Cards from '../../components/CreatePageCard/Cards'
import upload from "../../assets/images/upload.png";
import magic from "../../assets/images/magic.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

export default function GenerateVideo() {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "My Generate - Video Dashboard";
  }, []);

  return (
    <div className="pt-16 flex flex-col items-center">
      {/* heading */}
      <h1 className="text-4xl font-semibold text-gray-800">
        Generate Your Video
      </h1>

      {/* Cards */}
      <div className="mt-10 flex flex-wrap justify-center gap-8 w-full px-6">

        <Cards
          title="Upload a Script"
          description="Already have a script? Upload a .txt, .doc, or .pdf file to get started."
          icon={upload}
          buttonText="Upload a Script"
          onClick={() => navigate("upload")}
        />

        <Cards
          title="Generate a Script"
          description="Describe your video idea, and our AI will write the perfect script for you."
          icon={magic}
          buttonText="Generate a Script"
          onClick={() => navigate('generate')}
        />

      </div>
    </div>
  );
}
