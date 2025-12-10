import { useState } from 'react'
import saved from '../../assets/images/saved.svg'
import Button from '../Button/Button';

export default function GenerateScriptMain({ text }: any) {

    const [save, setSave] = useState(false);

    return (
        <div className="bg-[#FFFFFF] rounded-md p-3">
            <div className="text-sm text-gray-400 max-w-[760px]">
                <p>{text}</p>
            </div>
            <div className="flex justify-end items-center gap-2">
                <img
                    src={saved}
                    onClick={() => setSave(!save)}
                    className={`w-3 h-3 cursor-pointer ${save ? "filter brightness-0 invert " : ""}`}
                />

                <Button text='Saved Prompts' textColor='text-[#239DE0]' bg='bg-[#239DE01A]' padding='px-1 py-1' border='border border-[#239DE033]'/>

            </div>
        </div>
    )
}
