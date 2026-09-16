import React from 'react'
import { useState } from 'react'
import Clock from './Clock'
const App = () => {
  const [color, setColor] = useState('white')
  return (
    <div>
      <h1>Digital clock in React JS</h1>
      <select onChange={(event) => setColor(event.target.value)}>
        <option value={"white"}>Select Color</option>
        <option value={"red"}>Red</option>
        <option value={"blue"}>Blue</option>
        <option value={"green"}>Green</option>
        <option value={"orange"}>Orange</option>
        <option value={"purple"}>Purple</option>
      </select>
      <Clock color={color} />
    </div>
  )
}

export default App
 