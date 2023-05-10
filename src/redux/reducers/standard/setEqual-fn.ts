import { PayloadAction } from "@reduxjs/toolkit";
import { CalState, initialState } from "@/redux/cal-slice2";
import equalFn from "@/redux/functions/standard/equalFn";

export default function setEqual(state: CalState, action: PayloadAction<string>) {
  state.opEqual = state.operator ? state.operator : state.opEqual;
  state.value = state.value ? state.value : state.preValue;
  state.operator = initialState.operator;

  const res = equalFn(state.opEqual, state.preValue, state.value);
  state.preValue = res ? +res : state.value;
  state.result = state.preValue + "";
  state.input = initialState.input;
}
