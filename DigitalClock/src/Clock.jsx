import React from 'react'
import { useEffect, useState } from 'react';
const Clock = ({color}) => {
    const [time, setTime] = useState(0);
    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
    }, [])
    return (
        <div>
            <h1 style={{ color: color, backgroundColor: 'black', width: '120px', padding: '10px', borderRadius: '20px' }}>{time}</h1>
        </div >
    )
}

export default Clock
