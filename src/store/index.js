import { createSlice, configureStore } from "@reduxjs/toolkit";
import counterSlice from "../reducer/reducer"

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterAction = counterSlice.actions;

export default store;
