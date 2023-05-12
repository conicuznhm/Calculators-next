import { PayloadAction } from "@reduxjs/toolkit";
import { CalState, initialState } from "@/redux/cal-slice";
import equalFn from "@/redux/functions/standard/equalFn";
// import { CalState, initialState } from "../../cal-slice2";

const operateFn = (state: CalState, action: PayloadAction<string>) => {
  if (state.value) {
    const res = equalFn(state.operator, state.preValue, state.value);
    res ? (state.preValue = +res) : (state.preValue = state.opEqual ? state.preValue : state.value); //for when click 2+= = = it goes  4,6,8
  }
  state.opEqual = initialState.opEqual;
  state.operator = action.payload;
  state.keepValue = state.value ? state.value : state.keepValue; // setPerc
  state.value = initialState.value;
  state.result = state.preValue + "";
  state.input = initialState.input;
};

export default operateFn;
