import InputButton from "./InputButton";

interface NumberProps {
  onClick: (el: string) => void;
}

export default function InputNumber({ onClick }: NumberProps): JSX.Element {
  const numPad = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  return (
    <div className="flex flex-wrap-reverse justify-center">
      {numPad.map(el => (
        <div key={el}>
          {/* <InputButton el={el} onClick={(): void => handleNumberClick(el)} /> */}
          {/* <InputButton el={el} onClick={(): any => dispatch(setInput(el))} /> */}
          <InputButton el={el} onClick={() => onClick(el)} />
        </div>
      ))}
    </div>
  );
}
