import { useAppDispatch } from "@/redux/store";
import InputButton from "./InputButton";
import { operate, setInput } from "@/redux/cal-slice";
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
            // <input
            //   type="button"
            //   value={el}
            //   key={el}
            //   className="border border-black"
            //   onClick={(): void => handleClick(el)}
            // />
          ))}
        </div>
        {/* <InputButton el={"+"} onClick={(): void => handleOperateClick("+")} /> */}
        <InputButton el={"."} onClick={(): any => dispatch(setInput("."))} />
        <InputButton el={"+"} onClick={(): any => dispatch(operate("+"))} />
        <InputButton el={"-"} onClick={(): any => dispatch(operate("-"))} />
      </div>
    </>
  );
}
