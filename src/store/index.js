import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../reducer/auth-reducer";
import { counterSlice } from "../reducer/counter-reducer";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
