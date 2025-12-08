

export default function CommonTable({ columns, rows, hColor}: any) {
  return (
    <div className="overflow-x-auto w-full">
      <table className={`w-full bg-white  mt-1`}>

        {/* HEADER */}
        <thead className={`${hColor} ` }>
          <tr>
            {columns.map((col:any, i:number) => (
              <th
                key={i}
                className="py-3 px-4 text-sm font-semibold text-gray-700 text-center whitespace-nowrap "
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>

        {/* BODY */}
        <tbody>
          {rows.map((row:any, rIndex:number) => (
            <tr
              key={rIndex}
              className="border-t border-gray-200"
            >
              {row.map((cell:string, cIndex:number) => (
                <td
                  key={cIndex}
                  className="py-3 px-4  text-gray-600 text-center whitespace-nowrap"
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
