export default function Default({title}:{title: string}) {
  return (
    <div className="">
      <div className="bg-white rounded-lg shadow-sm p-10 flex flex-col items-center justify-center ">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Page Coming Soon for {title}
        </h2>

        <p className="text-gray-500 text-sm text-center">
          This section is under development.  
          Content will be available here very soon.
        </p>
      </div>
    </div>
  );
}
