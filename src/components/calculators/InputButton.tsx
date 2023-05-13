import { useAppSelector } from "@/redux/store";

interface ButtonProps {
  el: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void; //if need to access to event obj
  // onClick: () => void;
  classWidth?: string;
  classRadius?: string;
  bgColor?: string;
}

export default function InputButton({
  el,
  onClick,
  classWidth,
  classRadius,
  bgColor
}: ButtonProps): JSX.Element {
  const op = useAppSelector(state => state.cal.operator);
  return (
    <div className="text-center">
      <button
        className={`text-white 
      ${op === el ? "bg-gray-500" : bgColor || "bg-[rgb(54,52,52)]"}
       hover:bg-gray-500 ${classRadius || "rounded-[50%]"} h-24 ${
          classWidth || "w-24"
        } border border-black m-1 `}
        type="submit"
        // onClick = {(): void => handleClick(el)}
        onClick={onClick}
      >
        {el}
      </button>
    </div>
  );
}
