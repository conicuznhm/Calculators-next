import { PayloadAction } from "@reduxjs/toolkit";
import { CalState, initialState } from "@/redux/cal-slice";

const setSign = (state: CalState, action: PayloadAction<string>) => {
  state.value
    ? state.result[0] === "-"
      ? (state.result = state.result.slice(1))
      : (state.result = "-" + state.result)
    : (state.result = "-0");
  state.value = state.input ? +state.result : state.value;
  state.preValue = state.input ? state.preValue : state.preValue * -1;
};

export default setSign;
