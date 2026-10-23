import React from 'react'
import Counter from './Counter'
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <h1>Handling props side effects using usestate</h1>
      {
        display ? <Counter count={count} data={data} ></Counter> : null
      }
      <button onClick={() => setCount(count + 1)}>Counter {count}</button>
      <button onClick={() => setData(data + 1)}>Data {data}</button>
      <button onClick={() => setDisplay(!display)}>Toggle</button>
    </div>
  )
}

export default App
