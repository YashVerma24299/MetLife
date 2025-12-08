type buttonProps = {
  text: string,
  onClick: () => void,
  active: boolean,
  bg: string
}

export default function Button({ text, onClick, active, bg }: buttonProps) {

  return (
    <button onClick={onClick} className={`${bg} px-4 py-2 rounded-md text-sm font-md transition text-white ${active ? 'hover:bg-blue-600 cursor-pointer' : ""}`} >
      {text}
    </button>
  );
}
