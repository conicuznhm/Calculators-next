//#1
import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";

interface CalState {
  value: number;
  preValue: number;
  result: string;
  operator: string;
  input: string;
}

const initialState: CalState = {
  value: 0,
  preValue: 0,
  result: "",
  operator: "",
  input: ""
};

const calSlice = createSlice({
  name: "cal",
  initialState,
  reducers: {
    operate: (state, action: PayloadAction<string>) => {
      console.log(JSON.stringify(state));
      switch (state.operator) {
        case "+":
          // state.result = state.value ? state.preValue + state.value : state.preValue;
          state.preValue = state.value ? state.preValue + state.value : state.preValue;
          break;
        case "-":
          state.preValue = state.value ? state.preValue - state.value : state.preValue;
          break;
        case "X":
          state.preValue = state.value ? state.preValue * state.value : state.preValue;
          break;
        case "/":
          state.preValue = state.value ? state.preValue / state.value : state.preValue;
          break;
        default:
          state.preValue = state.value;
          break;
      }

      if (action.payload !== "=") {
        state.operator = action.payload;
        state.value = initialState.value;
      }
      state.result = state.preValue + "";
      state.input = initialState.input;
    },
    setInput: (state, action: PayloadAction<string>) => {
      if (action.payload === "." && !state.input.includes(".")) {
        state.input ? (state.input += action.payload) : (state.input = "0.");
      } else if (!isNaN(Number(action.payload))) {
        state.input += action.payload;
        state.value = +state.input;
      }
      state.result = state.input;
    },
    setSign: (state, action: PayloadAction<string>) => {
      state.result
        ? state.result[0] === "-"
          ? (state.result = state.result.slice(1))
          : (state.result = "-" + state.result)
        : (state.result = "-0");
      state.input = state.result;
      state.value = +state.result;
    },
    clear: (state, action: PayloadAction<string>) => {
      if (action.payload === "AC") {
        return initialState;
      }
    }
  }
});

export const { operate, setInput, setSign, clear } = calSlice.actions;
export default calSlice.reducer;

// setInput: (state, action: PayloadAction<string>) => {
//   if (action.payload === "." && !state.input.includes(".")) {
//     state.input += action.payload;
//   } else if (!isNaN(Number(action.payload))) {
//     state.input += action.payload;
//     state.value = +state.input;
//   }
//   if (state.input === ".") {
//     state.input = "0.";
//   }
//   state.result = state.input;
// },

//
//-------------------------------------------------------------------------
//

//#2
// import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";

// interface CalState {
//   value: number;
//   preValue: number;
//   result: string;
//   operator: string;
//   opEqual: string;
//   input: string;
// }

// const initialState: CalState = {
//   value: 0,
//   preValue: 0,
//   result: "",
//   operator: "",
//   opEqual: "",
//   input: ""
// };

// const calSlice = createSlice({
//   name: "cal",
//   initialState,
//   reducers: {
//     operate: (state, action: PayloadAction<string>) => {
//       console.log(JSON.stringify(state));
//       if (state.value) {
//         switch (state.operator) {
//           case "+":
//             state.preValue += state.value;
//             break;
//           case "-":
//             state.preValue -= state.value;
//             break;
//           case "X":
//             state.preValue *= state.value;
//             break;
//           case "/":
//             state.preValue /= state.value;
//             break;
//           default:
//             state.preValue = state.opEqual ? state.preValue : state.value;
//             break;
//         }
//       }
//       state.opEqual = initialState.opEqual;
//       state.operator = action.payload;
//       state.value = initialState.value;
//       state.result = state.preValue + "";
//       state.input = initialState.input;
//     },
//     setInput: (state, action: PayloadAction<string>) => {
//       // if(state.input==="-0"){
//       //   state.input = "-"
//       // }
//       state.input = state.input === "-0" ? "-" : state.input;
//       state.input += action.payload;
//       state.value = +state.input;
//       state.result = state.input;
//     },
//     setDot: (state, action: PayloadAction<string>) => {
//       if (!state.input.includes(".")) {
//         state.input ? (state.input += ".") : (state.input = "0.");
//       } else {
//         state;
//       }
//       state.result = state.input;
//     },
//     setSign: (state, action: PayloadAction<string>) => {
//       state.result
//         ? state.result[0] === "-"
//           ? (state.result = state.result.slice(1))
//           : (state.result = "-" + state.result)
//         : (state.result = "-0");
//       state.input = state.result;
//       state.value ? (state.value = +state.result) : (state.preValue *= -1);
//     },
//     setEqual: (state, action: PayloadAction<string>) => {
//       // if (state.operator) {
//       //   state.opEqual = state.operator;
//       // }
//       // if (!state.value) {
//       //   state.value = state.preValue;
//       // }
//       state.opEqual = state.operator ? state.operator : state.opEqual;
//       state.value = state.value ? state.value : state.preValue;
//       state.operator = initialState.operator;
//       switch (state.opEqual) {
//         case "+":
//           state.preValue += state.value;
//           break;
//         case "-":
//           state.preValue -= state.value;
//           break;
//         case "X":
//           state.preValue *= state.value;
//           break;
//         case "/":
//           state.preValue /= state.value;
//           break;
//         default:
//           state.preValue = state.value;
//           break;
//       }
//       state.result = state.preValue + "";
//       state.input = initialState.input;
//     },
//     clear: (state, action: PayloadAction<string>) => {
//       if (action.payload === "AC") {
//         return initialState;
//       }
//     }
//   }
// });

// export const { operate, setInput, setDot, setSign, setEqual, clear } = calSlice.actions;
// export default calSlice.reducer;
