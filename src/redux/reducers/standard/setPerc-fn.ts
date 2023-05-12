import { PayloadAction } from "@reduxjs/toolkit";
import { CalState, initialState } from "@/redux/cal-slice";

export default function setPercFn(state: CalState, action: PayloadAction<string>) {
  if (state.opEqual) {
    state.preValue /= 100;
  } else {
    state.value
      ? ((state.preValue = state.value / 100), (state.value = state.preValue))
      : (state.preValue *= state.keepValue / 100);
  }
  state.result = state.preValue + "";
  // state.result = state.opEqual ? state.preValue + "" : state.keepValue + "";
}
