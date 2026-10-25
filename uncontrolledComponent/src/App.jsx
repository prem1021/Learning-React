import React from 'react'
import { useRef } from 'react'

function App() {

  const userRef = useRef(null)
  const passwordRef = useRef(null)

  const handleForm = (event) => {
    event.preventDefault();
    const user = document.querySelector("#user").value;
    const password = document.querySelector("#password").value;
    console.log(user, password);
  }

  const handleFormRef = (event) => {
    event.preventDefault();
    const user = userRef.current.value
    const password = passwordRef.current.value

    console.log("handleFormRef", user, password);
  }
  return (
    <>
      <h1>Unctrolled Component</h1>
      <form action="" method="post" onSubmit={handleForm}>
        <input type="text" id='user' placeholder='enter user name' />
        <br /><br />
        <input type="password" id='password' placeholder='enter user password' />
        <br /><br />
        <button>Submit</button>
      </form>

      <hr />

      <h1>Unctrolled Component with useRef</h1>
      <form action="" method="post" onSubmit={handleFormRef}>
        <input type="text" ref={userRef} id='userRef' placeholder='enter user name' />
        <br /><br />
        <input type="password" ref={passwordRef} id='passwordRef' placeholder='enter user password' />
        <br /><br />
        <button>Submit</button>
      </form>
    </>
  )
}

export default App
