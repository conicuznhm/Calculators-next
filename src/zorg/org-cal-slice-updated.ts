import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";

interface CalState {
  value: number;
  preValue: number;
  result: string;
  operator: string;
  opEqual: string;
  input: string;
}

const initialState: CalState = {
  value: 0,
  preValue: 0,
  result: "",
  operator: "",
  opEqual: "",
  input: ""
};

const calSlice = createSlice({
  name: "cal",
  initialState,
  reducers: {
    operate: (state: CalState, action: PayloadAction<string>) => {
      console.log(JSON.stringify(state));
      state.input = initialState.input;
      if (state.value) {
        switch (state.operator) {
          case "+":
            state.preValue += state.value;
            break;
          case "-":
            state.preValue -= state.value;
            break;
          case "X":
            state.preValue *= state.value;
            break;
          case "/":
            state.preValue /= state.value;
            break;
          default:
            state.preValue = state.opEqual ? state.preValue : state.value;
            break;
        }
      }
      state.opEqual = initialState.opEqual;
      state.operator = action.payload;
      state.value = initialState.value;
      state.result = state.preValue + "";
      // state.input = initialState.input;
    },
    setInput: (state: CalState, action: PayloadAction<string>) => {
      // if(state.input==="-0"){
      //   state.input = "-"
      // }
      state.input = state.input === "-0" ? "-" : state.input;
      state.input += action.payload;
      state.value = +state.input;
      state.result = state.input;
    },
    setDot: (state: CalState, action: PayloadAction<string>) => {
      if (!state.input.includes(".")) {
        state.input ? (state.input += ".") : (state.input = "0.");
      }
      state.result = state.input;
      state.preValue = state.operator ? state.preValue : initialState.preValue;
    },
    setSign: (state: CalState, action: PayloadAction<string>) => {
      state.value
        ? state.result[0] === "-"
          ? (state.result = state.result.slice(1))
          : (state.result = "-" + state.result)
        : (state.result = "-0");
      state.value = state.input ? +state.result : state.value;
      state.preValue = state.input ? state.preValue : state.preValue * -1;
    },
    setEqual: (state: CalState, action: PayloadAction<string>) => {
      // state.input = initialState.input;
      // if (state.operator) {
      //   state.opEqual = state.operator;
      // }
      // if (!state.value) {
      //   state.value = state.preValue;
      // }
      state.input = initialState.input;
      state.opEqual = state.operator ? state.operator : state.opEqual;
      state.value = state.value ? state.value : state.preValue;
      state.operator = initialState.operator;
      switch (state.opEqual) {
        case "+":
          state.preValue += state.value;
          break;
        case "-":
          state.preValue -= state.value;
          break;
        case "X":
          state.preValue *= state.value;
          break;
        case "/":
          state.preValue /= state.value;
          break;
        default:
          state.preValue = state.value;
          break;
      }
      state.result = state.preValue + "";
      // state.input = initialState.input;
    },
    clear: (state: CalState, action: PayloadAction<string>) => {
      if (action.payload === "AC") {
        return initialState;
      }
    }
  }
});

export const { operate, setInput, setDot, setSign, setEqual, clear } = calSlice.actions;
export default calSlice.reducer;
