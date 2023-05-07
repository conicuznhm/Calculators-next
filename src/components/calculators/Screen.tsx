import { useAppSelector, useAppDispatch } from "@/redux/store";
export default function Screen() {
  const input = useAppSelector(state => state.cal.input);
  const result = useAppSelector(state => state.cal.result);
  const op = useAppSelector(state => state.cal.operator);
  console.log("input", input);
  console.log("result", result);
  console.log("operator", op);
  return (
    <>
      <div className="text-white">Screen</div>
      <div className="text-white">{op ? result : input}</div>
    </>
  );
}
