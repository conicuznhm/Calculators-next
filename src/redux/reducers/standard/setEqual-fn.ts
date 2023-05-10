import { PayloadAction } from "@reduxjs/toolkit";
import { CalState, initialState } from "@/redux/cal-slice2";

export default function setEqual(state: CalState, action: PayloadAction<string>) {
  // if (state.operator) {
  //   state.opEqual = state.operator;
  // }
  // if (!state.value) {
  //   state.value = state.preValue;
  // }
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
  state.input = initialState.input;
}
