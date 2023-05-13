// import { useAppDispatch } from "@/redux/store";
// import { operate, setEqual, setInput, setSign, setDot, clear } from "@/redux/cal-slice";
// import InputButton from "./InputButton";
// import InputNumber from "./InputNumber";
// export default function InputArea(): JSX.Element {
//   const dispatch = useAppDispatch();
//   // const handleNumberClick = (el: string): void => {
//   //   !isNaN(Number(el)) && dispatch(setInput(el));
//   // };
//   // const handleOperateClick = (el: string): void => {
//   //   dispatch(operate(el));
//   // };
//   return (
//     <>
//       <div>input field</div>
//       <div className="w-3/4 h4/6">
//         <InputNumber onClick={el => dispatch(setInput(el))} />
//         {/* <InputButton el={"+"} onClick={(): void => handleOperateClick("+")} /> */}
//         {/* <InputButton el={"0"} onClick={() => dispatch(setInput("0"))} /> */}
//         <InputButton el={"."} onClick={() => dispatch(setDot("."))} />
//         <InputButton el={"+"} onClick={() => dispatch(operate("+"))} />
//         <InputButton el={"-"} onClick={() => dispatch(operate("-"))} />
//         <InputButton el={"X"} onClick={() => dispatch(operate("X"))} />
//         <InputButton el={"/"} onClick={() => dispatch(operate("/"))} />
//         <InputButton el={"="} onClick={() => dispatch(setEqual("="))} />
//         <InputButton el={"AC"} onClick={() => dispatch(clear("AC"))} />
//         <InputButton el={"+/-"} onClick={() => dispatch(setSign("+/-"))} />
//       </div>
//       <div className="flex flex-col gap-2 ">
//         <div className="flex gap-2">
//           <div className="bg-red-500 w-3/4 ">gg</div>
//           <div className="bg-blue-500 w-1/4 ">gg</div>
//         </div>
//         <div className="bg-green-500">gg</div>
//       </div>
//     </>
//   );
// }
