import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";

interface CalState {
  value: number;
  preValue: number;
  result: number;
  operator: string;
  input: string;
}

const initialState: CalState = {
  value: 0,
  preValue: 0,
  result: 0,
  operator: "",
  input: ""
};

const equal = (operator: string, preValue: number, value: number): number => {
  let result = 0;
  switch (operator) {
    case "+":
      result = value ? preValue + value : preValue;
      break;
    case "-":
      result = value ? preValue - value : preValue;
      break;
    case "X":
      result = value ? preValue * value : preValue;
      break;
    case "/":
      result = value ? preValue / value : preValue;
      break;
    case "=":

    default:
      console.log("error");
      break;
  }
  return result;
};

const calSlice = createSlice({
  name: "cal",
  initialState,
  reducers: {
    operate: (state, action: PayloadAction<string>) => {
      // state.result = state.result
      //   ? equal(state.operator, state.preValue, state.value)
      //   : state.value;
      console.log(JSON.stringify(state));
      switch (state.operator) {
        case "+":
          state.result = state.value ? state.preValue + state.value : state.preValue;
          break;
        case "-":
          state.result = state.value ? state.preValue - state.value : state.preValue;
          break;
        case "X":
          state.result = state.value ? state.preValue * state.value : state.preValue;
          break;
        case "/":
          state.result = state.value ? state.preValue / state.value : state.preValue;
          break;
        default:
          state.result = state.value;
          break;
      }
      state.preValue = state.result;
      state.operator = action.payload;
      state.value = initialState.value;
      state.input = initialState.input;
    },
    setInput: (state, action: PayloadAction<string>) => {
      // state.operator = initialState.operator;
      if (action.payload === "." && !state.input.includes(".")) {
        state.input += action.payload;
      } else if (!isNaN(Number(action.payload))) {
        state.input += action.payload;
      }
      if (state.input === ".") {
        state.input = "0.";
      }
      state.value = +state.input;
      // state.input = initialState.input;
    }
  }
});

export const { operate, setInput } = calSlice.actions;
export default calSlice.reducer;
