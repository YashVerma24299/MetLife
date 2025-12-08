import { useState } from "react";

type props = {
    title: string,
    placeholder: string
}
export default function InputField({ title, placeholder }: props) {
    const [value, setValue] = useState("");
    const error = value.length < 12 && value.length>0 && !value.trim();


    return (
        <>
            <div className="flex flex-col mb-4">
                <div className="flex">
                    <p className={`text-sm font-semibold text-gray-500`}>{title}</p>
                    <p className="text-red-600  ml-1">*</p>

                </div>
                <input
                    type="text"
                    placeholder={placeholder}
                    className={`border rounded-lg p-2 pl-4 w-full text-sm text-gray-500 outline-none
          ${error ? "border-red-500" : "border-gray-200 focus:border-gray-400"}
        `}
                    onChange={(e) => setValue(e.target.value)}
                />
                {error && <span className="text-red-600 text-xs mt-1">Minimum 4 character required</span>}
            </div>
        </>
    )
}