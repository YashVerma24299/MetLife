import uploadIcon from "../../assets/images/uploadblue.png";

export default function FileUploader({ file, onChange }: any) {
    return (
        <label className="flex flex-col justify-center items-center bg-white rounded-xl border border-gray-300 py-9 cursor-pointer">

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
                        <img className="w-5 h-4" src={uploadIcon} />
                    </div>
                    <p className="text-sm text-[#239DE0] underline">Browse Files</p>
                </div>
            )}
        </label>
    );
}
