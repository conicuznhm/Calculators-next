import { useAppDispatch } from "@/redux/store";
import { clear, setPerc, setSign } from "@/redux/cal-slice";
import InputButton from "./InputButton";
export default function InputMisc(): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <div className="flex justify-center">
      <InputButton el={"AC"} onClick={() => dispatch(clear("AC"))} bgColor="bg-[#A5A5A5]" />
      <InputButton el={"+/-"} onClick={() => dispatch(setSign("+/-"))} bgColor="bg-[#A5A5A5]" />
      <InputButton el={"%"} onClick={() => dispatch(setPerc("%"))} bgColor="bg-[#A5A5A5]" />
    </div>
  );
}
