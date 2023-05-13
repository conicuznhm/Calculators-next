import InputField from "./InputField";
import Screen from "./Screen";

export default function Container(): JSX.Element {
  return (
    <div className="mx-auto font-arial-helvetica-sans w-[435px] px-2 py-16 my-10 bg-black drop-shadow-[7px 7px 5px 0px rgba(50,50,50,0.75)] border border-black rounded-2xl">
      <Screen />
      <InputField />
    </div>
  );
}
