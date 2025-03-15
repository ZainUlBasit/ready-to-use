import { configureStore } from "@reduxjs/toolkit";
import TempSlice from "./Slices/TempSlice";

export const store = configureStore({
  reducer: { Temp: TempSlice },
});
