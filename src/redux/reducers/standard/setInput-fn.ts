import { PayloadAction } from "@reduxjs/toolkit";
import { CalState, initialState } from "@/redux/cal-slice2";

export default function setInputFn(state: CalState, action: PayloadAction<string>) {
  // if(state.input==="-0"){
  //   state.input = "-"
  // }
  state.input = state.input === "-0" ? "-" : state.input;
  state.input += action.payload;
  state.value = +state.input;
  state.result = state.input;
}
