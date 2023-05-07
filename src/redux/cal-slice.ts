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
      if (state.operator) return;
      switch (action.payload) {
        case "+":
          state.operator = action.payload;
          state.input = initialState.input;
          state.result = state.preValue + state.value;
          state.preValue = state.result;
          break;
        default:
          break;
      }
    },
    setInput: (state, action: PayloadAction<string>) => {
      state.operator = initialState.operator;
      if (action.payload === "." && !state.input.includes(".")) {
        state.input += action.payload;
      } else if (!isNaN(Number(action.payload))) {
        state.input += action.payload;
      }
      state.value = +state.input;
    }
  }
});

export const { operate, setInput } = calSlice.actions;
export default calSlice.reducer;
