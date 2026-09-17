import React from 'react'
import College from './College'

const App = () => {
  const collegeData = [
    {
      name: "IET Alwar",
      city: "Alwar",
      website: "www.iet.com",
      student: [
        {
          name: "Prem Kumar",
          age: 20,
          email: "prem@gmail.com"
        },
        {
          name: "Rahul Kumar",
          age: 22,
          email: "rahul@gmail.com"
        },
        {
          name: "Aman Kumar",
          age: 26,
          email: "aman@gmail.com"
        }
      ]
    },
    {
      name: "IIT Delhi",
      city: "Delhi",
      website: "www.iit.com",
      student: [
        {
          name: "Prem Kumar",
          age: 20,
          email: "prem@gmail.com"
        },
        {
          name: "Rahul Kumar",
          age: 22,
          email: "rahul@gmail.com"
        },
        {
          name: "Aman Kumar",
          age: 26,
          email: "aman@gmail.com"
        }
      ]

    },
    {
      name: "KCIET Hisar",
      city: "Hisar",
      website: "www.kciet.com",
      student: [
        {
          name: "Prem Kumar",
          age: 20,
          email: "prem@gmail.com"
        },
        {
          name: "Rahul Kumar",
          age: 22,
          email: "rahul@gmail.com"
        },
        {
          name: "Aman Kumar",
          age: 26,
          email: "aman@gmail.com"
        }
      ]

    }
  ]
  return (
    <div>
      {
        collegeData.map((college, index) => (
          <div key={index}>
            <College college={college} />
          </div>
        ))
      }
    </div>
  )
}

export default App
