import React from 'react'
function callFunc() {
  alert("Function called")
}

const fruit = (name) => {
  alert(name)
}
const App = () => {
  return (
    <div>
      <h1>Event And Fucntion Call</h1>
      {/* <button onClick={callFunc}>Click Me</button> */}
      <button onClick={() => fruit("apple")}>Apple</button>
      <button onClick={() => fruit("banana")}>Banana</button>
    </div>
  )
}

export default App
