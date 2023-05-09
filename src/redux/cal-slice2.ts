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
      // state.preValue = +state.result;
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
        state.input += action.payload;
      } else if (!isNaN(Number(action.payload))) {
        state.input += action.payload;
        state.value = +state.input;
      }
      if (state.input === ".") {
        state.input = "0.";
        state.result = state.input;
      } else {
        state.result = state.input;
      }
    },
    setSign: (state, action: PayloadAction<string>) => {
      state.result[0] === "-"
        ? (state.result = state.result.slice(1))
        : (state.result = "-" + state.result);
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
