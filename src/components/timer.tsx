import React, { useState, useEffect } from 'react';

const Timer: React.FC = () => {
  const [seconds, setSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  let timerId: NodeJS.Timeout | null = null; // Declare timerId outside useEffect

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
    <div>
      <h1>Timer: {seconds} seconds</h1>
      {isRunning ? (
        <button onClick={handleStop}>Stop</button>
      ) : (
        <button onClick={handleStart}>Start</button>
      )}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Timer;