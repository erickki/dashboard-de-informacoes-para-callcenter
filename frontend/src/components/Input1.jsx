export default function Input1(props) {
  const typeType = props.type;
  const textPlaceholder = props.text;

  return (
    <input
      type={typeType}
      placeholder={textPlaceholder}
      value={value}
      onChange={onChange}
      className="h-[40px] w-[230px] border-[2px] border-white-1 rounded-[10px] pl-[10px] outline-0 text-[14px] text-white-1 focus:italic selection:bg-purple-1 placeholder:text-white-1 focus:border-purple-1"
    />
  );
}
