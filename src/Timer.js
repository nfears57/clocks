import React, { useState, useRef } from 'react';

function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [selectedMinutes, setSelectedMinutes] = useState(0);
  const [selectedSeconds, setSelectedSeconds] = useState(0);
  const intervalRef = useRef(null);

  function start() {
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(intervalRef.current);
          setIsRunning(false);
        }
        return prevTime - 1;
      });
    }, 1000);
  }

  function stop() {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  }

  function reset() {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
  }
  

  function handleMinutesChange(event) {
    setSelectedMinutes(parseInt(event.target.value));
    setTime(parseInt(event.target.value) * 60 + selectedSeconds);
  }

  function handleSecondsChange(event) {
    setSelectedSeconds(parseInt(event.target.value));
    setTime(selectedMinutes * 60 + parseInt(event.target.value));
  }

  const minutesOptions = Array.from(Array(61).keys()).map((num) => (
    <option key={num} value={num}>
      {num} 
    </option>
  ));

  const secondsOptions = Array.from(Array(60).keys()).map((num) => (
    <option key={num} value={num}>
      {num.toString().padStart(2, '0')} 
    </option>
  ));

  return (
    <div>
      <h1>Timer</h1>
      <div>
        <select value={selectedMinutes} onChange={handleMinutesChange}>
          {minutesOptions}
        </select>minutes
        <select value={selectedSeconds} onChange={handleSecondsChange}>
          {secondsOptions}
        </select>seconds
        <button onClick={isRunning ? stop : start}>
          {isRunning ? 'Stop' : 'Start'}
        </button>
        <button onClick={reset}>Reset</button>
      </div>
      <div>
        <p>{time > 0 ? formatTime(time) : 'Time up!'}</p>
      </div>
    </div>
  );
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

export default Timer;
