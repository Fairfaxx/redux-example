
const initalState = { 
  counter: 0,
  showCounter: true
};

const counterReducer = (state = initalState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + 1,
        showCounter: state.showCounter,
      };
    case "DECREMENT":
      return {
        counter: state.counter - 1,
        showCounter: state.showCounter,
      };
    case "INCREASE":
      return {
        counter: state.counter + action.amount,
        showCounter: state.showCounter,
      };
    case "TOGGLE":
      return {
        showCounter: !state.showCounter,
        counter: state.counter,
      };
    default:
      return state;
  }
};

export default counterReducer;