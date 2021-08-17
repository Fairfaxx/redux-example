import { useSelector, useDispatch } from "react-redux";
import { counterAction } from "../reducer/counter-reducer";

import styles from "./Counter.module.css"; 

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);

  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter());
  };

  const incrementHandler = () => {
    dispatch(counterAction.increment());
  };

  const incrementByFiveHandler = () => {
    dispatch(counterAction.increase(5)); // {type: SOME_IDENTIFIER, payload: 10}
  };

  const decrementHandler = () => {
    dispatch(counterAction.decrement());
  };

  return (
    <main className={styles.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={styles.value}>{counter}</div>}
      <div>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementByFiveHandler}>Increment by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
