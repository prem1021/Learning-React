import React from 'react'
import { useState } from 'react'
import Checkboxes from './Checkboxes'
const App = () => {
  // const [val, setVal] = useState("")


  // const [name, setName] = useState("")
  // const [password, setPassword] = useState("")
  // const [email, setEmail] = useState("")


  return (
    // <div>
    //   <h1>Get input field value</h1>
    //   <input type="text" value={val} onChange={(event) => setVal(event.target.value)} placeholder="Enter text here" />
    //   <h1>{val}</h1>
    //   <button onClick={() => setVal("")}>Clear Value</button>
    // </div>

    // <div>
    //   <h1>CONTROLLER COMPONENT</h1>
    //   <form action="">
    //     <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder='Enter Name' />
    //     <br /><br />
    //     <input type="text" value={password} onChange={(event) => setPassword(event.target.value)} placeholder='Enter Password' />
    //     <br /><br />
    //     <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} placeholder='Enter Email' />
    //     <br /><br />
    //     <button>Submit</button>

    //     <button onClick={() => { setName(""); setPassword(""); setEmail("") }}>Clear</button>

    //     <h1>{name}</h1>
    //     <h1>{password}</h1>
    //     <h1>{email}</h1>
    //   </form>
    // </div>
    <div>
      <Checkboxes />
    </div>
  )
}

export default App
