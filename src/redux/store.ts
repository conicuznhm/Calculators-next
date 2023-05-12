import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import calReducer from "./cal-slice";

interface RootState {
  cal: {
    value: number;
    preValue: number;
    result: string;
    operator: string;
    opEqual: string;
    input: string;
    keepValue: number;
  };
  user: {
    firstName: string;
    lastName: string;
  };
}

export const store = configureStore({
  reducer: {
    cal: calReducer
  }
});

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch();
// export interface CalState extends Pick<RootState, "cal"> {}
