import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../store/reducers/counterSlice';
import { RootState } from '../store/store'; // Adjust the import as needed

const Counter: React.FC = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrementByAmount = (amount: number) => {
    dispatch(incrementByAmount(amount));
  };

  return (
    <div>
      <h2>Counter</h2>
      <div>
        <button onClick={handleDecrement}>-</button>
        <span>{count}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
      <div>
        <button onClick={() => handleIncrementByAmount(5)}>Increment by 5</button>
        <button onClick={() => handleIncrementByAmount(10)}>Increment by 10</button>
      </div>
    </div>
  );
};

export default Counter;
