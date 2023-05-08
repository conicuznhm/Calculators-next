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

const calSlice = createSlice({
  name: "cal",
  initialState,
  reducers: {
    operate: (state, action: PayloadAction<string>) => {
      console.log(JSON.parse(JSON.stringify(state)).operator);
      console.log(current(state).operator);
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
    //sign +/- should change only input and result state
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
