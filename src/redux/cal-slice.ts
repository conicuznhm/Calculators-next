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
      if (state.value) {
        switch (state.operator) {
          case "+":
            state.preValue = state.preValue + state.value;
            break;
          case "-":
            state.preValue = state.preValue - state.value;
            break;
          case "X":
            state.preValue = state.preValue * state.value;
            break;
          case "/":
            state.preValue = state.preValue / state.value;
            break;
          default:
            state.preValue = state.value;
            break;
        }
      }
      state.operator = action.payload;
      state.value = initialState.value;
      state.result = state.preValue + "";
      state.input = initialState.input;
    },
    setInput: (state, action: PayloadAction<string>) => {
      state.input += action.payload;
      state.value = +state.input;
      state.result = state.input;
    },
    setDot: (state, action: PayloadAction<string>) => {
      if (!state.input.includes(".")) {
        state.input ? (state.input += ".") : (state.input = "0.");
      } else {
        state;
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
      state.value ? (state.value = +state.result) : (state.preValue *= -1);
    },
    setEqual: () => {},
    clear: (state, action: PayloadAction<string>) => {
      if (action.payload === "AC") {
        return initialState;
      }
    }
  }
});

export const { operate, setInput, setDot, setSign, setEqual, clear } = calSlice.actions;
export default calSlice.reducer;
