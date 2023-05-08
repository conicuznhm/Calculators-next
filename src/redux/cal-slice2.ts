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

const updateValue = (state: CalState, inputValue: string): void => {
  if (state.value < 0) {
    state.input = -state.value + inputValue;
  } else {
    state.input += inputValue;
  }
  state.value = +state.input;
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
          // state.result = state.value ? state.preValue + state.value : state.preValue;
          state.result = state.value ? state.preValue + state.value : state.result;
          break;
        case "-":
          state.result = state.value ? state.preValue - state.value : state.result;
          break;
        case "X":
          state.result = state.value ? state.preValue * state.value : state.result;
          break;
        case "/":
          state.result = state.value ? state.preValue / state.value : state.result;
          break;
        default:
          state.result = state.value;
          break;
      }
      // if (action.payload === "=") {
      //   state;
      // } else {
      //   state.operator = action.payload;
      //   state.value = initialState.value;
      // }
      if (action.payload !== "=") {
        state.operator = action.payload;
        state.value = initialState.value;
      }
      state.preValue = state.result;
      state.input = initialState.input;
    },
    setInput: (state, action: PayloadAction<string>) => {
      if (action.payload === "." && !state.input.includes(".")) {
        state.input += action.payload;
      } else if (!isNaN(Number(action.payload))) {
        if (state.value < 0) {
          // state.input = (-state.value).toString() + action.payload;
          state.input = -state.value + action.payload;
          state.value = +state.input * -1;
        } else {
          state.input += action.payload;
          state.value = +state.input;
        }
      }
      if (state.input === ".") {
        state.input = "0.";
      }
    },
    setSign: (state, action: PayloadAction<string>) => {
      state.value *= -1;
      state.input = state.value ? state.value + "" : "";
      state.result *= -1;
      // state.preValue *= -1;
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
