import { useAppDispatch } from "@/redux/store";
import { operate, setEqual, setInput, setSign, setDot, clear } from "@/redux/cal-slice";
import InputButton from "./InputButton";
import InputNumber from "./InputNumber";
import InputOperate from "./InputOperate";
import InputMisc from "./InputMisc";
export default function InputField(): JSX.Element {
  // const numPad = ["+", "-", "X", "/"];

  const dispatch = useAppDispatch();

  return (
    <>
      <div className="flex flex-col">
        <div className="flex">
          {/* <div className="bg-red-500 w-3/4"> */}
          <div className="w-3/4">
            <InputMisc />
            <InputNumber onClick={el => dispatch(setInput(el))} />
            <div className="flex justify-center">
              <InputButton
                el="0"
                onClick={() => dispatch(setInput("0"))}
                classWidth="w-[12.5rem]"
                classRadius="rounded-[100px]"
              />
              <InputButton el={"."} onClick={() => dispatch(setDot("."))} />
            </div>
          </div>
          {/* <div className="bg-blue-500 w-1/4"> */}
          <div className="w-1/4">
            <InputOperate onClick={el => dispatch(operate(el))} />
            <InputButton el={"="} onClick={() => dispatch(setEqual("="))} />
          </div>
        </div>
      </div>
    </>
  );
}
