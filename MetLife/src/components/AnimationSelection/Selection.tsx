type props = {
    title: string
}
export default function Selection({ title }: props) {
    return (
        <>
            <div className="p-3">
                <div className="flex flex-col">
                    <p className="text-xs ml-1 font-semibold">{title}</p>
                    <div className="flex flex-col space-y-3 border border-gray-300 rounded-xl p-4 mt-2">
                        <label className="space-x-3 flex">
                            <input name='btn' type="radio"  placeholder="Zoom out" className="w-4 h-4"/>
                            <p className="text-xs text-gray-500">Fade in</p>
                        </label>
                        <label className="space-x-3 flex">
                            <input name='btn' type="radio"  placeholder="Zoom out" className="w-4 h-4"/>
                            <p className="text-xs text-gray-500">Fade out</p>
                        </label>
                        <label className="space-x-3 flex">
                            <input name='btn' type="radio" placeholder="Zoom out" className="w-4 h-4"/>
                            <p className="text-xs text-gray-500">Zoom in</p>
                        </label>
                        <label className="space-x-3 flex">
                            <input name='btn' type="radio" placeholder="Zoom out" className="w-4 h-4"/>
                            <p className="text-xs text-gray-500">Zoom out</p>
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}
