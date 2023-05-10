import { useAppDispatch } from "@/redux/store";
import InputButton from "./InputButton";
import { operate, setEqual, setInput, setSign, setDot, clear } from "@/redux/cal-slice2";
export default function InputField() {
  const numPad = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
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
      <div className="w-3/4 h4/6">
        <div className="flex flex-wrap-reverse">
          {numPad.map(el => (
            <div key={el}>
              {/* <InputButton el={el} onClick={(): void => handleNumberClick(el)} /> */}
              <InputButton el={el} onClick={(): any => dispatch(setInput(el))} />
            </div>
          ))}
        </div>
        {/* <InputButton el={"+"} onClick={(): void => handleOperateClick("+")} /> */}
        <InputButton el={"."} onClick={() => dispatch(setDot("."))} />
        <InputButton el={"+"} onClick={() => dispatch(operate("+"))} />
        <InputButton el={"-"} onClick={() => dispatch(operate("-"))} />
        <InputButton el={"X"} onClick={() => dispatch(operate("X"))} />
        <InputButton el={"/"} onClick={() => dispatch(operate("/"))} />
        <InputButton el={"="} onClick={() => dispatch(setEqual("="))} />
        <InputButton el={"AC"} onClick={() => dispatch(clear("AC"))} />
        <InputButton el={"+/-"} onClick={() => dispatch(setSign("+/-"))} />
      </div>
    </>
  );
}
