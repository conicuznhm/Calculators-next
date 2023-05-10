// const equal = (operator: string, preValue: number, value: number): number => {
//     let result = 0;
//     switch (operator) {
//       case "+":
//         result = value ? preValue + value : preValue;
//         break;
//       case "-":
//         result = value ? preValue - value : preValue;
//         break;
//       case "X":
//         result = value ? preValue * value : preValue;
//         break;
//       case "/":
//         result = value ? preValue / value : preValue;
//         break;
//       case "=":
//       default:
//         console.log("error");
//         break;
//     }
//     return result;
//   };

//   const updateValue = (state: CalState, inputValue: string): void => {
//     if (state.value < 0) {
//       state.input = -state.value + inputValue;
//     } else {
//       state.input += inputValue;
//     }
//     state.value = +state.input;
//   };
