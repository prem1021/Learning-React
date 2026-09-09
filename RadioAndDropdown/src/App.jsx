import React from 'react'
import { useState } from 'react'
const App = () => {
  const [gender, setGender] = useState("female")
  const [city, setCity] = useState("delhi")
  return (
    <div>
      <h1>Handle Radio and Dropdown</h1>
      <h4>Select Gender</h4>
      <input onChange={(event) => setGender(event.target.value)} type="radio" name='gender' value="male" checked={gender == 'male'} id='male' />
      <label htmlFor="male">Male</label>
      <input onChange={(event) => setGender(event.target.value)} type="radio" name='gender' value="female" checked={gender == 'female'} id='female' />
      <label htmlFor="female">Female</label>

      <h2>Selected Gender : {gender}</h2>
      <br /><br />

      <h1>Dropdown</h1>

      <select onChange={(event) => setCity(event.target.value)} defaultValue={'delhi'}>
        <option value="noida">Noida</option>
        <option value="gurgaon">Gurgaon</option>
        <option value="delhi">Delhi</option>
      </select>

      <h2>Selected City : {city}</h2>
    </div>
  )
}

export default App
