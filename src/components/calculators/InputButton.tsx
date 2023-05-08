import { useAppSelector } from "@/redux/store";
interface ButtonProps {
  el: string;
  //   onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onClick: () => void;
}

export default function InputButton({ el, onClick }: ButtonProps): JSX.Element {
  const op = useAppSelector(state => state.cal.operator);
  return (
    <button
      className={`text-white 
      ${op === el ? "bg-gray-500" : "bg-[rgb(54,52,52)]"}
       hover:bg-gray-500 rounded-[50%] px-10 py-8 border border-black`}
      type="submit"
      // onClick = {(): void => handleClick(el)}
      onClick={onClick}
    >
      {el}
    </button>
  );
}
