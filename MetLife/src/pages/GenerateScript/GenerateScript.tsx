import InputField from "../../components/InputField/InputField";
import { Outlet, useNavigate } from "react-router-dom";
import GenerateScriptSection from "../../components/GenerateScriptSection/GenerateScriptSection";
import GenerateScriptMain from "../../components/GenerateScriptSection/GenerateScriptMain";
import { useState } from "react";

export default function GenerateScript() {
    const [openSection, setOpenSection] = useState(null);
    const navigate = useNavigate();


    return (

        <>
            <div className="p-8">
                <div className="bg-[#e9f5fc] border border-[#cfe6f4] rounded-xl py-5 px-10 space-y-5">

                    <h2 className="text-2xl font-semibold text-gray-800">
                        Generate Script
                    </h2>

                    <div className=" flex flex-col space-y-7">
                        
                        <GenerateScriptMain text='Create a 90-second explainer video script about photosynthesis for a 5th-grade audience. The tone should be fun and engaging, with three distinct scenes: Introduction, The Process, and Why Its Important' btn='Saved Prompt'/>

                        <GenerateScriptSection  id="video"  title="Video Filters" openSection={openSection} setOpenSection={setOpenSection}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-3 py-4">
                                <InputField title="Language" placeholder="Select Language" />
                                <InputField title="Video Type" placeholder="Select Video Type" />
                                <InputField title="Duration" placeholder="Enter Duration" />
                                <InputField title="Target Audience" placeholder="Target Audience" />
                            </div>
                        </GenerateScriptSection>

                        <GenerateScriptSection  id="data" title="Data Filters" openSection={openSection} setOpenSection={setOpenSection}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-3 py-4">
                                <InputField title="Channel" placeholder="Select Language" />
                                <InputField title="Field 01" placeholder="Field 01" />
                                <InputField title="Field 02" placeholder="Field 02" />
                                <InputField title="Field 03" placeholder="Field 03" />
                            </div>
                        </GenerateScriptSection>

                        <GenerateScriptSection  id="branding" title="Branding" openSection={openSection} setOpenSection={setOpenSection}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-3 py-4">
                                <InputField title="Top N" placeholder="Top N" />
                                <InputField title="Model" placeholder="Model" />
                                <InputField title="Data Source" placeholder="Field 02" />
                            </div>
                        </GenerateScriptSection>

                        <div className="flex justify-end ">
                            <button className="text-white text-sm bg-blue-500 px-9 py-2 rounded-sm cursor-pointer hover:bg-blue-600" onClick={() => navigate('script')}>Generate Script</button>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}
