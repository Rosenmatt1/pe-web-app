import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { addObject } from '../store/reducers//dataSlice';
import { RootState } from '../store/store';

const Timer: React.FC = () => {
  const dispatch = useDispatch();
  const [seconds, setSeconds] = useState<number>(0);
  const [time, setTime] = useState<string>("");
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const selectedKey = useSelector((state: RootState) => state.data.selectedKey);
  let timerId: NodeJS.Timeout | null = null; // Declare timerId outside useEffect

  const handleAddObject = ()  => {
    formatTime(seconds)
    dispatch(addObject({ key: selectedKey, value: time }));
    setSeconds(0); // Reset timer value after adding object
  };

  // const formattedTime = await formatTime(seconds); 
  // dispatch(addObject({ key: selectedKey, value: formattedTime }));

  const formatTime = (seconds: number)  => {
    const minutes = Math.floor(seconds / 60)
    console.log("minutes", minutes)
    const remainingSeconds = seconds % 60;
    console.log("Seconds", remainingSeconds)
  
    if (minutes > 1) {
      setTime(`${minutes} minutes ${remainingSeconds} seconds`)
      console.log("time minutes greater thna 1", time)
    } else {
      setTime(`${remainingSeconds} seconds`)
      console.log("time only seconds", time)
    }
  }

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