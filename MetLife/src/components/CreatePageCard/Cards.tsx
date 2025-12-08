type Props = {
  title: string;
  description: string;
  icon: string;
  buttonText: string;
  onClick: () => void;
};

export default function Cards({
  title,
  description,
  icon,
  buttonText,
  onClick,
}: Props) {
  return (
    <div className="flex flex-col justify-between min-w-[260px] bg-[#e9f5fc] rounded-xl border border-[#d0e3ee] px-8 py-14">

      <div>
        <h2 className="text-md font-semibold text-[#333]">{title}</h2>
        <p className="text-sm text-gray-500 mt-3 mb-6 max-w-[260px]">
          {description}
        </p>
      </div>

      <button
        onClick={onClick}
        className="flex items-center gap-2 bg-[#239DE0] py-2 rounded text-white w-[70%] cursor-pointer hover:bg-blue-400"
      >
        <img src={icon} className="w-5 h-4 ml-5" />
        <span className="text-sm">{buttonText}</span>
      </button>
    </div>
  );
}
