import { useState } from 'react'
import MultipleCond from './MultipleConditions'
import Props from './Props'
function App() {
  const [display, setDisplay] = useState(true)
  return (
    <div>
      <h1>Toggle in React JS</h1>
      <button onClick={() => setDisplay(!display)}>Toggle</button>
      {
        display ? <h1>Prem Kumar</h1> : null

      }
      <MultipleCond />

      <h1>Props in React Js</h1>
      
      {/* <Props name="Prem Kumar" age={20} email="premkumardav@gmail.com" /> */}
    </div>


  )
}
export default App