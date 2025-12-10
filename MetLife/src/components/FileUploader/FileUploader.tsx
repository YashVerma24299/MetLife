

export default function FileUploader({ file, onChange, bg,border,icon,text }: any) {
    return (
        <label className={`flex flex-col justify-center items-center ${bg} rounded-xl border ${border} py-9 cursor-pointer`}>

            <input
                type="file"
                accept=".txt,.pdf,.jpg,.png,.webp"
                className="hidden"
                onChange={(e) => {
                    if (e.target.files) {
                        onChange(e.target.files[0]);
                    }
                }}
            />

            {file ? (
                <p className="text-sm text-gray-500">{file.name}</p>
            ) : (
                <div className="flex flex-col space-y-2">
                    <div className="flex justify-center">
                        <img className="w-5 h-4" src={icon} />
                    </div>
                    <p className="text-sm text-[#239DE0] underline">{text}</p>
                </div>
            )}
        </label>
    );
}
