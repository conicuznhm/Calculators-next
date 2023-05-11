import { PayloadAction } from "@reduxjs/toolkit";
import { CalState, initialState } from "@/redux/cal-slice";

export default function clearFn(state: CalState, action: PayloadAction<string>) {
  if (action.payload === "AC") {
    return initialState;
  }
}
