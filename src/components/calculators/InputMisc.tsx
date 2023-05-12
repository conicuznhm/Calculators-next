import { useAppDispatch } from "@/redux/store";
import { clear, setPerc, setSign } from "@/redux/cal-slice";
import InputButton from "./InputButton";
export default function InputMisc(): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <div className="flex">
      <InputButton el={"AC"} onClick={() => dispatch(clear("AC"))} />
      <InputButton el={"+/-"} onClick={() => dispatch(setSign("+/-"))} />
      <InputButton el={"%"} onClick={() => dispatch(setPerc("%"))} />
    </div>
  );
}
