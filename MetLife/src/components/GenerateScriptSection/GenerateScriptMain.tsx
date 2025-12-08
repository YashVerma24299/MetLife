import { useState } from 'react'
import saved from '../../assets/images/saved.svg'

export default function GenerateScriptMain({ text, btn }: any) {

    const [save, setSave] = useState(false);

    return (
        <div className="bg-[#FFFFFF] rounded-md p-3">
            <div className="text-sm text-gray-500 max-w-[760px]">
                <p>{text}</p>
            </div>
            <div className="flex justify-end items-center gap-2">
                <img
                    src={saved}
                    onClick={() => setSave(!save)}
                    className={`w-3 h-3 cursor-pointer ${save ? "filter brightness-0 invert " : ""}`}
                />

                <div className="flex justify-center bg-[#239DE01A] px-4 py-1 rounded-sm">
                    <button className="text-xs text-[#239DE0]">{btn}</button>
                </div>
            </div>
        </div>
    )
}
