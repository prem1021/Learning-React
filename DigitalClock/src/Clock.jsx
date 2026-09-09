import React from 'react'
import { useEffect, useState } from 'react';
const Clock = () => {
    cosnt[time, setTime] = useState(0);
    useEffect(() => {
        setInterval(() => {
            setTime(new DataTransfer().toLocaleTimeString());
        }, 1000);
    }, [])
    return (
        <div>
            <h1 style={color = 'green'}>{time}</h1>
        </div >
    )
}

export default Clock
