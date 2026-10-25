import React from 'react'
import User from './user'
import { useRef } from 'react'
//Call Parent component Function from child component
// const App = () => {

//   const displayName = (name) => {
//     alert(name)
//   }

//   const getUser = () => {
//     alert("get user function called")
//   }
//   return (
//     <div>
//       <h1>Call Parent component Function from child component</h1>
//       <User displayName={displayName} name='anil' getUser={getUser} />
//       <User displayName={displayName} name='rahul' getUser={getUser} />
//       <User displayName={displayName} name='sam' getUser={getUser} />
//       <User displayName={displayName} name='ram' getUser={getUser} />
//     </div>
//   )
// }

// export default App

//Forward Ref
import UserInput from './UserInput'
const App = () => {

  const inputRef = useRef(null)

  const updateInput = () => {
    inputRef.current.value = 1000;
    inputRef.current.focus();
    inputRef.current.style.color = 'red';
  }
  return (
    <div>
      <h1>Forward Ref</h1>
      <input type="text" ref={inputRef} />
      <button onClick={updateInput}>Update Input Field</button>
    </div>
  )
}

export default App

