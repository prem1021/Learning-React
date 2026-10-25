import React from 'react'
import { useRef } from 'react'
function App() {
  const inputRef = useRef(null);
  const h1Ref = useRef(null);
  const inputHandler = () => {
    console.log(inputRef);
    inputRef.current.focus();
    inputRef.current.style.color = 'red'
    inputRef.current.placeholder = 'enter password'
    inputRef.current.value = '123'
  }

  const toggleHandler = () => {
    if (inputRef.current.style.display != 'none') {
      inputRef.current.style.display = 'none'
    } else {
      inputRef.current.style.display = 'inline'
    }
  }

  const h1Handler = () => {
    h1Ref.current.style.color = 'green'
  }
  return (
    <div>
      <h1>useRef</h1>
      <button onClick={toggleHandler}>Toggle</button>

      <input ref={inputRef} type="text" placeholder='Enter user Name' />
      <button onClick={inputHandler}>Focus on Input Field</button>

      <h1 ref={h1Ref}>Code Step by Step</h1>
      <button onClick={h1Handler}>Focus on Input Field</button>

    </div>
  )
}

export default App
