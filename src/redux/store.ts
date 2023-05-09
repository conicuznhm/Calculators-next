import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import calReducer from "./cal-slice";
import calReducer2 from "./cal-slice2";

interface RootState {
  cal: {
    value: number;
    preValue: number;
    result: string;
    operator: string;
    input: string;
  };
  user: {
    firstName: string;
    lastName: string;
  };
}

export const store = configureStore({
  reducer: {
    cal: calReducer2
  }
});

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch();
