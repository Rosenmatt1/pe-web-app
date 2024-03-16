import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    // Cleanup function to clear the timer when component unmounts
    return () => clearTimeout(timerId);
  }, [seconds]); // Run effect whenever 'seconds' state changes

  return (
    <div>
      <h1>Timer: {seconds} seconds</h1>
      <button onClick={() => setSeconds(0)}>Reset</button>
    </div>
  );
}

export default Timer;


