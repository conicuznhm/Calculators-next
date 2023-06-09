import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import operateFn from "./reducers/standard/operate-fn";
import setInputFn from "./reducers/standard/setInput-fn";
import setDotFn from "./reducers/standard/setDot-fn";
import setSignFn from "./reducers/standard/setSign-fn";
import setEqualFn from "./reducers/standard/setEqual-fn";
import clearFn from "./reducers/standard/clear";
import setPercFn from "./reducers/standard/setPerc-fn";

export interface CalState {
  value: number;
  preValue: number;
  result: string;
  operator: string;
  opEqual: string;
  input: string;
  keepValue: number;
}

export const initialState: CalState = {
  value: 0,
  preValue: 0,
  result: "",
  operator: "",
  opEqual: "",
  input: "",
  keepValue: 0
};

const calSlice = createSlice({
  name: "cal",
  initialState,
  reducers: {
    operate: operateFn,
    setInput: setInputFn,
    setDot: setDotFn,
    setSign: setSignFn,
    setEqual: setEqualFn,
    setPerc: setPercFn,
    clear: clearFn
  }
});

export const { operate, setInput, setDot, setSign, setEqual, setPerc, clear } = calSlice.actions;
export default calSlice.reducer;
