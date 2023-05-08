import { useAppSelector, useAppDispatch } from "@/redux/store";
export default function Screen() {
  const value = useAppSelector(state => state.cal.value);
  const result = useAppSelector(state => state.cal.result);
  return (
    <>
      <div className="text-white">Screen</div>
      <div className="text-white">{value ? value : result}</div>
    </>
  );
}
