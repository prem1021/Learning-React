import React, { useActionState } from 'react'

const App = () => {
  const handleLogin = (prevData, formData) => {
    let name = formData.get('name')
    let password = formData.get('password')
    let regex = /^[A-Z0-9]+$/i

    if (!name || name.length > 5) {
      return { error: 'Name should not more than 5 characaters', name, password }; //this bcz data ruke field me
    } else if (!regex.test(password)) {
      return { error: 'Password cam contain only numbers and alphabets', name, password };
    } else {
      return { message: 'Login Successful', name, password }
    }
  }

  const [data, action, pending] = useActionState(handleLogin, {})

  return (
    <div>
      <h1>Validation using useActionState in React</h1>
      {
        data?.message && <span style={{ color: 'green' }}>{data.message}</span>
      }
      {
        data?.error && <span style={{ color: 'red' }}>{data.error}</span>
      }
      <form action={action}>
        //default value is to stop data in field
        <input defaultValue={data?.name} type="text" name="name" placeholder='Enter user name' />
        <br /><br />
        <input defaultName={data?.password} type="text" name="password" placeholder='Enter user password' />
        <br /><br />

        <button disabled={data?.error}>Login</button>
      </form>
    </div>
  )
}

export default App
