
import Props from './Props'
import College from './College'
import Wrapper from './Wrapper'
const App = () => {
  let userObject = {
    name: "Prem",
    age: "20",
    email: "Prem@gmail.com"
  }
  let userObject2 = {
    name: "Peter",
    age: "29",
    email: "Peter@gmail.com"
  }
  let userObject3 = {
    name: "Peer",
    age: "9",
    email: "Peer@gmail.com"
  }
  let collegeNames = ["IIT", "UPES", "NIT", "MIT"]
  return (
    <div>
      <h1>Props in react JS</h1>


      {/* <Props name="Prem" age={20} email="Prem@gmail.com" /> */}
      <Props Props={userObject} />
      <Props Props={userObject2} />
      <Props Props={userObject3} />
      <College names={collegeNames} />

      {/* <Wrapper name="Anil" />
      <Wrapper name="Rahul" />
      <Wrapper />
      <Wrapper />
      <Wrapper /> */}
      <Wrapper color = 'orange'>
        <h1>Hello Everyone</h1>
      </Wrapper>

      <Wrapper color='blue'>
        <h1>Hello Prem Kumar</h1>
        <h2 style={{color:'red'}}>Please </h2>
      </Wrapper>
      <Wrapper />

    </div>
  )
}

export default App
