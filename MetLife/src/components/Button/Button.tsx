type buttonProps = {
  text: string,
  textColor?: string,
  onClick?: () => void,
  active?: boolean,
  activeColor?:string
  bg?: string,
  padding?: string,
  border?: string
}

export default function Button({ text, textColor='text-white', onClick, active, activeColor='bg-blue-600',  bg='bg-blue-500', padding='px-4 py-2', border='' }: buttonProps) {

  return (
    <button onClick={onClick} className={`${bg} ${padding} rounded-md text-sm font-md ${border} transition ${textColor} ${active ? `${activeColor} cursor-pointer` : "cursor-not-allowed"}`} >
      {text}
    </button>
  );
}
