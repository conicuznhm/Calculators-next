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
