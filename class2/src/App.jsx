// import React from 'react'
// import ToDo from "./ToDo.jsx"
// const App = () => {
//   return (
//     <div>
//       <ToDo />
//     </div>
//   )
// }

// export default App

import React from 'react'

const App = () => {
  const name = "Prem Kumar"
  let x = 10;
  let y = 20;
  function fruit() {
    return "Apple"
  }
  function sum(a, b) {
    return a + b;
  }
  function operation(a, b, op) {
    if (op == "+") {
      return a + b;
    }
    else if (op == "-") {
      return a - b;
    }
    else {
      return a * b;
    }

  }
  let path = "https://tse4.mm.bing.net/th?id=OIF.BfW%2bSPXVAUGmXg38AmUZpg&r=0&pid=Api&h=220&P=0"
  return (
    <div>
      <h1>JSX with curly Braces</h1>
      <h1>{name ? name : "User not found"}</h1>
      <h1>{x + y}</h1>
      <h1>{fruit}</h1>
      <h1>{sum(10, 100)}</h1>
      <h1>{operation(20, 10, "-")}</h1>
      <input type="text" value={name} id={name} />
      <br />
      <img src={path} />
    </div>
  )
}

export default App

