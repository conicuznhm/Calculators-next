import { useAppSelector, useAppDispatch } from "@/redux/store";
export default function Screen() {
  const input = useAppSelector(state => state.cal.input);
  const result = useAppSelector(state => state.cal.result);
  return (
    <>
      <div className="text-white">Screen</div>
      <div className="text-white">{input ? input : result}</div>
    </>
  );
}
