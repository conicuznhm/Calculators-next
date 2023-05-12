import { useAppSelector } from "@/redux/store";

interface ButtonProps {
  el: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void; //if need to access to event obj
  // onClick: () => void;
  classWidth?: string;
}

export default function InputButton({ el, onClick, classWidth }: ButtonProps): JSX.Element {
  const op = useAppSelector(state => state.cal.operator);
  return (
    <button
      className={`text-white 
      ${op === el ? "bg-gray-500" : "bg-[rgb(54,52,52)]"}
       hover:bg-gray-500 rounded-[50%] px-10 py-8 border border-black ${classWidth}`}
      type="submit"
      // onClick = {(): void => handleClick(el)}
      onClick={onClick}
    >
      {el}
    </button>
  );
}
