import InputButton from "./InputButton";

interface OperateProps {
  onClick: (el: string) => void;
}
export default function InputOperate({ onClick }: OperateProps) {
  const operator = ["/", "X", "+", "-"];
  return (
    <>
      {operator.map(el => (
        <div key={el}>
          <InputButton el={el} onClick={() => onClick(el)} />
        </div>
      ))}
    </>
  );
}
