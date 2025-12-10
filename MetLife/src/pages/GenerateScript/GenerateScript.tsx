import InputField from "../../components/InputField/InputField";
import { Outlet, useNavigate } from "react-router-dom";
import GenerateScriptSection from "../../components/GenerateScriptSection/GenerateScriptSection";
import GenerateScriptMain from "../../components/GenerateScriptSection/GenerateScriptMain";
import { useState } from "react";
import SelectField from "../../components/InputField/SelectionField";
import Button from "../../components/Button/Button";




export default function GenerateScript() {
    const [openSection, setOpenSection] = useState<any>(null);
    const [form, setForm] = useState<any>({
        language: "",
        videoType: "",
        duration: "",
        audience: "",
        channel: "",
        field01: "",
        field02: "",
        field03: "",
        topN: "",
        model: "",
        dataSource: "",
    });

    const navigate = useNavigate();

    const data1 = [
        { label: "Hindi", value: "1" },
        { label: "English", value: "2" },
        { label: "French", value: "3" }
    ]
    const data2 = [
        { label: "Option 1", value: "1" },
        { label: "Option 2", value: "2" },
        { label: "Option 3", value: "3" }
    ]

    const validateForm = () => {
        for (let key in form) {
            if (!form[key].trim()) return false;
        }
        return true;
    };

    return (

        <>
            <div className="p-8">
                <div className="bg-[#e9f5fc] border border-[#cfe6f4] rounded-xl py-5 px-10 space-y-5">

                    <h2 className="text-2xl font-semibold text-gray-800">
                        Generate Script
                    </h2>

                    <div className=" flex flex-col space-y-7 ">

                        <GenerateScriptMain text='Create a 90-second explainer video script about photosynthesis for a 5th-grade audience. The tone should be fun and engaging, with three distinct scenes: Introduction, The Process, and Why Its Important' btn='Saved Prompt' />

                        <GenerateScriptSection  id="video" title="Video Filters" openSection={openSection} setOpenSection={setOpenSection} >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-3 py-4 transition">
                                <SelectField
                                    title="Language"
                                    placeholder="Select Language"
                                    options={data1}
                                    value={form.language}
                                    onChange={(val) => setForm({ ...form, language: val })}
                                />
                                <SelectField
                                    title="Video Type"
                                    placeholder="Select Video Type"
                                    options={data2}
                                    value={form.videoType}
                                    onChange={(val) => setForm({ ...form, videoType: val })}

                                />
                                <InputField title="Duration" placeholder="Enter Duration" arrow={false} value={form.duration}
                                    onChange={(val) => setForm({ ...form, duration: val })} />
                                <InputField title="Target Audience" placeholder="Target Audience" arrow={false} value={form.audience}
                                    onChange={(val) => setForm({ ...form, audience: val })} />
                            </div>
                        </GenerateScriptSection>

                        <GenerateScriptSection id="data" title="Data Filters" openSection={openSection} setOpenSection={setOpenSection}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-3 py-4">
                                <InputField title="Channel" placeholder="Select Language" value={form.channel}
                                    onChange={(val) => setForm({ ...form, channel: val })} />
                                <InputField title="Field 01" placeholder="Field 01" value={form.field01}
                                    onChange={(val) => setForm({ ...form, field01: val })} />
                                <InputField title="Field 02" placeholder="Field 02" value={form.field02}
                                    onChange={(val) => setForm({ ...form, field02: val })} />
                                <InputField title="Field 03" placeholder="Field 03" value={form.field03}
                                    onChange={(val) => setForm({ ...form, field03: val })} />
                            </div>
                        </GenerateScriptSection>

                        <GenerateScriptSection id="branding" title="Branding" openSection={openSection} setOpenSection={setOpenSection}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-3 py-4">

                                <SelectField
                                    title="Top N"
                                    placeholder="Top N"
                                    options={data2}
                                    value={form.topN}
                                    onChange={(v) => setForm({ ...form, topN: v })}

                                />
                                <SelectField
                                    title="Model"
                                    placeholder="Model"
                                    options={data2}
                                    value={form.model}
                                    onChange={(v) => setForm({ ...form, model: v })}
                                />
                                <SelectField
                                    title="Data Source"
                                    placeholder="Field 02"
                                    options={data2}
                                    value={form.dataSource}
                                    onChange={(v) => setForm({ ...form, dataSource: v })}
                                />

                            </div>
                        </GenerateScriptSection>

                        <div className="flex justify-end ">
                            <Button
                                text='Generate Script'
                                onClick={() => {
                                    if (!validateForm()) {
                                        alert("Please fill all required fields before continuing!");
                                        return;
                                    }
                                    navigate("script");
                                }}
                                active={true}
                                activeColor="hover:bg-blue-600"
                                bg="bg-[#239DE0]"
                                padding="px-9 py-2"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}
