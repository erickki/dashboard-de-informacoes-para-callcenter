export default function Button1(props) {
  const textTexto = props.text;

  return (
    <button className="h-[40px] w-[230px] relative overflow-hidden bg-grey-1 rounded-[10px] font-bold text-[16px] hover:text-[18px] text-white-1 duration-500 group">
      <span className="relative z-2">{textTexto}</span>
      <span className="absolute inset-0 rotate-45 scale-0 group-hover:scale-500 opacity-0 group-hover:opacity-100 transition-transform duration-500 ease-out bg-purple-1 origin-center"></span>
      <span className="h-[40px] w-[230px] absolute inset-0 z-1 border-[2px] border-white-1 hover:border-purple-1 rounded-[10px]"></span>
    </button>
  );
}
