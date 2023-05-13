import { useAppSelector } from "@/redux/store";
export default function Screen(): JSX.Element {
  const result = useAppSelector(state => state.cal.result);
  return (
    <div className="mt-16 mb-4 px-6">
      <div className="text-white text-7xl text-end overflow-hidden">{result || "0"}</div>
    </div>
  );
}
