import React from 'react'
import { useState } from 'react'
import "./App.css"
const App = () => {
  const [name, setName] = useState('');
  const [nameErr, setNameErr] = useState('');

  const [password, setPassword] = useState('');
  const [passwordErr, setPasswordErr] = useState('');


  const handleName = (event) => {
    console.log(event.target.value);
    if (event.target.value.length > 5) {
      setNameErr("Please enter valid username. Only 5 characters are allowed")
    } else {
      setNameErr()
    }
  }

  const handlePassword = (event) => {
    let regex = /^[A-Z0-9]+$/i;
    if (regex.test(event.target.value)) {
      setPasswordErr()
    } else {
      setPasswordErr("Please enter valid password. Only numbers and alphabet are allowed")
    }
  }
  return (
    <div>
      <input className={nameErr ? 'error' : ''} type="text" onChange={handleName} placeholder='Enter Name' />
      <span>{nameErr && nameErr}</span>
      <br /><br />

      <input className={passwordErr ? 'error' : ''} type="text" onChange={handlePassword} placeholder='Enter Password' />
      <span>{passwordErr}</span>
      <br /><br />
      
      <button disabled={nameErr || passwordErr}>Login</button>

    </div>
  )
}

export default App
