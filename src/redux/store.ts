import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import calReducer from "./cal-slice";

interface RootState {
  cal: {
    value: number;
    preValue: number;
    result: number;
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
    cal: calReducer
  }
});

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch();
