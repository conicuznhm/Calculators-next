import { useAppSelector } from "@/redux/store";
export default function Screen(): JSX.Element {
  const result = useAppSelector(state => state.cal.result);
  return (
    <>
      <div className="text-white">Screen</div>
      <div className="text-white">{result || "0"}</div>
    </>
  );
}
