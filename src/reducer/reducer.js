import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// const counterReducer = (state = initalState, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return {
//         counter: state.counter + 1,
//         showCounter: state.showCounter,
//       };
//     case "DECREMENT":
//       return {
//         counter: state.counter - 1,
//         showCounter: state.showCounter,
//       };
//     case "INCREASE":
//       return {
//         counter: state.counter + action.amount,
//         showCounter: state.showCounter,
//       };
//     case "TOGGLE":
//       return {
//         showCounter: !state.showCounter,
//         counter: state.counter,
//       };
//     default:
//       return state;
//   }
// };

export const counterAction = counterSlice.actions; 

export default counterSlice;