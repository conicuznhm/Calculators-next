import { PayloadAction } from "@reduxjs/toolkit";
import { CalState, initialState } from "@/redux/cal-slice";

export default function setDot(state: CalState, action: PayloadAction<string>) {
  if (!state.input.includes(".")) {
    state.input ? (state.input += ".") : (state.input = "0.");
  }
  state.result = state.input;
  state.preValue = state.operator ? state.preValue : initialState.preValue;
}
