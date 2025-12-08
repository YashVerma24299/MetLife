import { useState } from "react";
import Selection from "../../components/AnimationSelection/Selection";
import Button from "../../components/Button/Button";
import GenerateScriptSection from "../../components/GenerateScriptSection/GenerateScriptSection";
import InputField from "../../components/InputField/InputField";

export default function Audio_Animation() {
  const [openSection, setOpenSection] = useState("");
  return (
    <div className="p-8">
      <div className="bg-[#e9f5fc] border border-[#cfe6f4] rounded-xl py-5 px-10 space-y-5">

        <h2 className="text-2xl font-semibold text-gray-800">
          Audio & Animation Toolkit
        </h2>

        <div className=" flex flex-col space-y-7">

          <GenerateScriptSection id="one" title="Audio Section" openSection={openSection} setOpenSection={setOpenSection}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-3 py-4">
              <InputField title="Narration" placeholder="Select Tool" />
              <InputField title="Narration" placeholder="Select Voice" />
              <InputField title="Alexa" placeholder="Select Tool" />
              <InputField title="Alexa" placeholder="Select Voice" />
              <InputField title="Alexa" placeholder="Select Tool" />
              <InputField title="Alexa" placeholder="Select Voice" />
            </div>

            <div className="flex justify-end mb-3 ml-2 px-3">
              <Button text='Submit' onClick={() => ("")} active={false} bg='bg-blue-500' />
            </div>
          </GenerateScriptSection>

          <GenerateScriptSection id="two" title="Animation Selection" openSection={openSection} setOpenSection={setOpenSection} >
            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 px-3 py-4">
              <Selection title='Entry' />
              <Selection title='Exit' />
            </div>
            <div className="flex justify-end  gap-8 px-6 py-4">
              <button className="bg-[#99D538] rounded px-7 py-2 text-white text-sm cursor-pointer">ALternative Scenes</button>
              <button className="bg-[#239DE0] rounded px-7 py-2 text-white text-sm cursor-pointer">Apply To All</button>
            </div>
          </GenerateScriptSection>

          <div className="flex justify-end  gap-8  py-4">
              <button className="bg-[#239DE0] rounded px-7 py-2 text-white text-sm cursor-pointer hover:bg-blue-600">Generate Video</button>
            </div>
        </div>
      </div>
    </div>
  )
}
