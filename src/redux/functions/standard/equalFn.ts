export default function equalFn(operator: string, preValue: number, value: number): string {
  switch (operator) {
    case "+":
      preValue += value;
      break;
    case "-":
      preValue -= value;
      break;
    case "X":
      preValue *= value;
      break;
    case "/":
      preValue /= value;
      break;
    default:
      return "";
  }
  return preValue + "";
}
