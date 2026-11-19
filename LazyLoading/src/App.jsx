import React from 'react'
import { useState } from 'react'
import { lazy } from 'react'
import { Suspense } from 'react';

const User = lazy(() => import('./User'));

const App = () => {
  const [load, setLoad] = useState(false);
  return (
    <div>
      <h1>Lazy Loading</h1>
      {
        load ? <Suspense fallback={<h3>Loading...</h3>}><User /></Suspense> : null
      }
      <button onClick={() => setLoad(true)}>Load user</button>
    </div>
  )
}

export default App
