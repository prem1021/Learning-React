import React from 'react'
import { useState } from 'react'
import DisplayUser from './DisplayUser'
import AddUser from './AddUser'

const App = () => {

  const [user, setUser] = useState('')
  return (
    <div>
      <AddUser setUser={setUser} />
      <DisplayUser user={user} />
    </div>
  )
}

export default App
