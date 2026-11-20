import React, { Suspense, use } from 'react'
const fetchData = () => fetch('https://dummyjson.com/users').then((response) => response.json());
// console.log(fetchData());
const userResource = fetchData();

const App = () => {

  return (
    <div>
      <h1>use API in react js </h1>
      <Suspense fallback={<p>Loading....</p>}>
        <Users userResource={userResource} />
      </Suspense>
    </div>

  );
}

export default App

const Users = ({ userResource }) => {
  const userData = use(userResource);
  console.log(userData.users); //It is use API

  return (
    <div>
      <h1>Users List</h1>
      {
        userData?.users?.map((user) => (
          <h1>{user.firstName}</h1>
        ))
      }
    </div>
  )
}