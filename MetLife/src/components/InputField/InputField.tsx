import arrowdown01 from '../../assets/images/arrowdown01.png'
type props = {
    title: string,
    placeholder: string,
    arrow?: boolean,
    value: string;
    onChange: (v: string) => void;
}
export default function InputField({ title, placeholder, arrow, value, onChange }: props) {
    const error = value.trim().length < 3;

    return (
        <>
            <div className="flex flex-col mb-3">
                <div className="flex ">
                    <p className={`text-sm font-semibold text-gray-500 mb-1`}>{title}</p>
                    <p className="text-red-600  ml-1">*</p>
                </div>

                <div className="flex relative">
                    <input
                        type="text"
                        placeholder={placeholder}
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        className={`border rounded-lg p-2 pl-4 w-full text-sm text-gray-500 outline-none ${error && value ? "border-red-500" : "border-gray-200 focus:border-gray-400"}`}
                    />
                    {arrow && <img src={arrowdown01} className='text-gray-500 object-contain absolute right-3 top-3' />}
                </div>
                {error && value&&  <span className="text-red-600 text-xs mt-1">Minimum 3 character required</span>}
            </div>
        </>
    )
}