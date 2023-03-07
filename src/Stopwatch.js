import React, { useState, useRef } from 'react';
import './Stopwatch.css'

function Stopwatch() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    function start() {
        setIsRunning(true);
        intervalRef.current = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 10);
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

    function formatTime(time) {
        const minutes = Math.floor(time / 6000);
        const seconds = Math.floor((time % 6000) / 100);
        const milliseconds = time % 100;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
    }

    return (
        <div className="stopwatch-container">
            <h1>Stopwatch</h1>
            <div className="stopwatch-display">
                <span>{formatTime(time)}</span>
            </div>
            <div className="stopwatch-buttons">
                <button className="stopwatch-button" onClick={isRunning ? stop : start}>
                    {isRunning ? 'Stop' : 'Start'}
                </button>
                <button className="stopwatch-button" onClick={reset}>Reset</button>
            </div>
        </div>

    );
}

export default Stopwatch;
