import { useAppDispatch } from "@/redux/store";
import { operate, setEqual, setInput, setSign, setDot, clear } from "@/redux/cal-slice";
import InputButton from "./InputButton";
import InputNumber from "./InputNumber";
import InputOperate from "./InputOperate";
import InputMisc from "./InputMisc";
export default function InputField(): JSX.Element {
  // const numPad = ["+", "-", "X", "/"];

  const dispatch = useAppDispatch();
  // const handleNumberClick = (el: string): void => {
  //   !isNaN(Number(el)) && dispatch(setInput(el));
  // };
  // const handleOperateClick = (el: string): void => {
  //   dispatch(operate(el));
  // };

  return (
    <>
      <div>input field</div>
      <div className="flex flex-col gap-2 ">
        <div className="flex gap-2">
          <div className="bg-red-500 w-3/4 ">
            <InputMisc />
            <InputNumber onClick={el => dispatch(setInput(el))} />
            <InputButton el="0" onClick={() => dispatch(setInput("0"))} classWidth="" />
            <InputButton el={"."} onClick={() => dispatch(setDot("."))} />
          </div>
          <div className="bg-blue-500 w-1/4 ">
            <InputOperate onClick={el => dispatch(operate(el))} />
            <InputButton el={"="} onClick={() => dispatch(setEqual("="))} />
          </div>
        </div>
      </div>
    </>
  );
}
