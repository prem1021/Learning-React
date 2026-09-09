import React from 'react'
import User from './User'
const App = () => {
  const userData = [{
    name: 'Prem',
    age: '20',
    email: 'prem@test.com',
    id: 1
  },
  {
    name: 'Rahul',
    age: '21',
    email: 'rahul@test.com',
    id: 2
  },
  {
    name: 'Aman',
    age: '40',
    email: 'aman@test.com',
    id: 3
  },
  {
    name: 'Naman',
    age: '50',
    email: 'naman@test.com',
    id: 4
  }]
  return (
    // <div>
    //   <h1>Loops in JSX with Maps</h1>
    //   <table border='1'>
    //     <thead>
    //       <tr>
    //         <td>Id</td>
    //         <td>Name</td>
    //         <td>Email</td>
    //         <td>Age</td>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {
    //         userData.map((user) => (
    //           <tr key={user.id}>
    //             <td>{user.id}</td>
    //             <td>{user.name}</td>
    //             <td>{user.email}</td>
    //             <td>{user.age}</td>
    //           </tr>
    //         ))
    //       }
    //     </tbody>
    //   </table>

    //   <h1>Dummy Data</h1>
    //   <table border="1">
    //     <thead>
    //       <tr>
    //         <td>Id</td>
    //         <td>Name</td>
    //         <td>Email</td>
    //         <td>Age</td>
    //       </tr>
    //     </thead>
    //   </table>
    // </div>
    <div>
      <h1>Reuse Component</h1>
      {
        userData.map((user) => (
          <div>
            <User data = {user}/>
          </div>
        ))
      }

    </div>
  )
}

export default App
