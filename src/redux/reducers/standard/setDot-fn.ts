import { PayloadAction } from "@reduxjs/toolkit";
import { CalState, initialState } from "@/redux/cal-slice2";

export default function (state: CalState, action: PayloadAction<string>) {
  if (!state.input.includes(".")) {
    state.input ? (state.input += ".") : (state.input = "0.");
  } else {
    state;
  }
  state.result = state.input;
}
