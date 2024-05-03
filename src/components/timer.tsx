import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addObject } from '../store/reducers//dataSlice';

const Timer: React.FC = () => {
  const dispatch = useDispatch();
  const [seconds, setSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  let timerId: NodeJS.Timeout | null = null; // Declare timerId outside useEffect

  const handleAddObject = () => {
    dispatch(addObject({ key: '', value: seconds }));
    setSeconds(0); // Reset timer value after adding object
  };

  useEffect(() => {
    if (isRunning) {
      timerId = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000); // Run every 1 second
    } else {
      if (timerId) clearInterval(timerId); // Clear interval only if timerId is not null
    }

    return () => { // Cleanup function
      if (timerId) clearInterval(timerId); // Clear interval when component unmounts
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div className="timer">
      <h1>Timer: {seconds} seconds</h1>
      {isRunning ? (
        <button onClick={handleStop}> Stop </button>
      ) : (
        <button onClick={handleStart}> Start </button>
      )}
      <button onClick={handleAddObject}> Complete Set </button>
    </div>
  );
};

export default Timer;