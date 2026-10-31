import React from 'react'
import { useActionState } from 'react'

//UseActionState Hook in React JS


// const App = () => {

//   const handleSubmit = async (previousData, formData) => {
//     let name = formData.get('name');
//     let password = formData.get('password');

//     await new Promise(res => setTimeout(res, 2000))

//     if (name && password) {
//       return { message: 'Data submitted', name, password }
//     } else {
//       return { error: "Failed to Submit ", name, password }
//     }
//   }

//   const [data, action, pending] = useActionState(handleSubmit, undefined)
//   console.log(data);


//   return (
//     <div>
//       <h1>UseActionState Hook in React JS</h1>
//       <form action={action}>
//         <input type="text" defaultValue={data?.name} placeholder='Enter Name' name='name' />
//         <br /><br />
//         <input type="password" defaultValue={data?.password} placeholder='Enter Password' name='password' />
//         <br /><br />
//         <button disabled={pending}>Submit Data</button>
//         <br /><br />

//       </form>

//       {
//         data?.error && <span style={{ color: 'red' }}>{data?.error}</span>
//       }

//       {
//         data?.message && <span style={{ color: 'green' }}>{data?.message}</span>
//       }

//       <h3>Name : {data?.name}</h3>
//       <h3>Password : {data?.password}</h3>
//     </div>
//   )
// }

// export default App


//UseId Hook

import { useId } from 'react'
export default function App() {
  return (
    <div>
      <UserForm />
      <hr />

      <UserForm />
    </div>
  )
}

function UserForm() {
  // const name = useId();
  // const password = useId();
  // const terms = useId();
  // const skills = useId();

  //we can use with useId also with prefix
  const user = useId();


  return (
    <div>
      <form action="" >
        <label htmlFor={user + 'name'}>Enter User name</label>
        <input type="text" id={user + 'name'} placeholder='Enter Name' />
        <br /><br />
        <label htmlFor={user + 'password'}>Enter user password</label>
        <input type="text" id={user + 'password'} placeholder='Enter password' />
        <br /><br />
        <label htmlFor={user + 'skills'}>Skills</label>
        <input type="text" id={user + 'skills'} placeholder='enter skills' />
        <br /><br />
        <input type="checkbox" id={user + 'terms'} placeholder='enter' />
        <label htmlFor={user + 'terms'}>Terms and Condition</label>
      </form>
    </div>
  )
}