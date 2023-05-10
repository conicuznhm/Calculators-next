import { PayloadAction } from "@reduxjs/toolkit";
import { CalState, initialState } from "@/redux/cal-slice2";

const setSign = (state: CalState, action: PayloadAction<string>) => {
  state.result
    ? state.result[0] === "-"
      ? (state.result = state.result.slice(1))
      : (state.result = "-" + state.result)
    : (state.result = "-0");
  state.input = state.result;
  state.value ? (state.value = +state.result) : (state.preValue *= -1);
};

export default setSign;
