import React from 'react'
import { useState } from 'react'
const App = () => {
  const [data, setData] = useState({
    name: 'Rahul',
    address: {
      city: 'Delhi',
      country: 'India'
    }
  })

  const handlename = (val) => {
    data.name = val
    setData({ ...data })
  }

  const handleCity = (city) => {
    data.address.city = city
    setData({ ...data, address: { ...data.address, city } })
  }

  return (
    <div>
      <input type="text" placeholder='Update Name' onChange={(event) => handlename(event.target.value)} />
      <input type="text" placeholder='Update City' onChange={(event) => handleCity(event.target.value)} />
      <h2>Name: {data.name}</h2>
      <h2>City: {data.address.city}</h2>
      <h2>Country: {data.address.country}</h2>
    </div>
  )
}

export default App
