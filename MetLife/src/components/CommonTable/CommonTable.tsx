

export default function CommonTable({ columns, rows, hColor}: any) {
  return (
    <div className="overflow-x-auto w-full rounded-t-2xl">
      <table className={`w-full bg-white  mt-1 `}>

        {/* HEADER */}
        <thead className={`${hColor} rounded-t-4xl` }>
          <tr>
            {columns.map((col:any, i:number) => (
              <th
                key={i}
                className="py-3 px-10 text-sm font-semibold text-gray-700 text-left whitespace-nowrap "
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>

        {/* BODY */}
        <tbody className="">
          {rows.map((row:any, rIndex:number) => (
            <tr
              key={rIndex}
              className="border-t border-gray-200"
            >
              {row.map((cell:string, cIndex:number) => (
                <td
                  key={cIndex}
                  className={`py-3 px-10  text-gray-600 text-left text-sm ${hColor!='bg-[#d1e1eb]'  ? "" : 'whitespace-nowrap'}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  )
}
