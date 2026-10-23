import React, { useEffect } from 'react'

const Counter = ({ count, data }) => {
    const handleCounter = () => {
        console.log("handleCounter Called");
    }
    const dataCounter = () => {
        console.log("dataCounter called");
    }
    // 
    //Props update hone k krn function barr barr call hue ja rha h
    useEffect(() => {
        handleCounter();
    }, [])

    useEffect(() => {
        dataCounter();
    }, [data])

    useEffect(() => {
        return () => {
            console.log("Unmount phase only");
        }
    }, [])

    return (
        <div>
            <h1>Counter Value {count}</h1>
            <h1>Data Counter {data}</h1>
        </div>
    )
}

export default Counter