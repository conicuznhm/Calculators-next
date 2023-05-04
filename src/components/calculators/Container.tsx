import InputField from "./InputField";
import Screen from "./Screen";

export default function Container() {
  return (
    <div className="mx-auto w-[50vh] h-[80vh] p-4 bg-black drop-shadow-[7px 7px 5px 0px rgba(50,50,50,0.75)] border border-black rounded-2xl">
      <Screen />
      <InputField />
    </div>
  );
}
