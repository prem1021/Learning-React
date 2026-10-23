import React from 'react'
import { useEffect, useState } from 'react'
const App = () => {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(0);

  useEffect(() => {
    counterFunction();
  }, [counter])

  function counterFunction() {
    console.log("Counter Function", counter);
  }
  function callOnce() {
    console.log("callOnce fucntion called");
  }

  // counterFunction(); it will call every time on click of both buttons
  return (
    <div>
      <h1>useEffect Hook</h1>
      <button onClick={() => setCounter(counter + 1)}>Counter {counter}</button>
      <button onClick={() => setData(data + 1)}>Data {data}</button>
    </div>
  )
}

export default App
