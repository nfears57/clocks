import React, { useState, useEffect } from 'react'

function Home() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);


return (
    <div>
        <h1>Current Time:</h1>
        <h2>{time.toLocaleTimeString()}</h2>
    </div>
)
}
export default Home