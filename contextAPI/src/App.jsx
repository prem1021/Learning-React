import React from 'react'
import { useState } from 'react'
import College from './College'
import { subjectContext } from "./ContextData"
const App = () => {

  const [subject, setSubject] = useState('')
  return (
    <div style={{ backgroundColor: 'yellow', padding: '10px' }}>
      <subjectContext.Provider value={subject}>
        <select value={subject} onChange={(event) => setSubject(event.target.value)}>
          <option value="">Select Option</option>
          <option value="Maths">Maths</option>
          <option value="History">History</option>
          <option value="English">English</option>
        </select>
        <h1>Context API</h1>
        <button onClick={() => setSubject('')}>Clear Subject</button>
        <College />
      </subjectContext.Provider>

    </div>
  )
}

export default App
