import React, { useTransition } from 'react'
import { useFormStatus } from 'react-dom'

//UseFormStatus Hooks


// function CustomerForm() {

//   const { pending } = useFormStatus();
//   console.log(pending);

//   return (
//     <div>
//       <input type="text" placeholder='Enter name' />
//       <br />
//       <br />
//       <input type="text" placeholder='Enter password' />
//       <br />
//       <br />
//       <button type='submit' disabled={pending}>{pending ? 'Submitting...' : 'Submit'} </button>
//     </div>
//   )
// }

// const App = () => {

//   const handleSubmit = async () => {
//     await new Promise(res => setTimeout(res, 2000));
//     console.log("Submit");
//   }


//   return (
//     <div>
//       <h1>useFormStatus Hook in react JS</h1>
//       <form action={handleSubmit}>
//         <CustomerForm />
//       </form>

//     </div>
//   )
// }

// export default App


// useTransition


const App = () => {
  const [pending, startTranistion] = useTransition();

  const handleButton = () => {
    startTranistion(async () => {
      await new Promise(res => setTimeout(res, 2000))
    })
  }

  return (
    <div>
      <h1>useTransition Hook in React JS</h1>
      {
        pending ?
          <img style={{ width: '100px' }} src="https://media1.tenor.com/m/TAqs38FFJiwAAAAC/loading.gif" alt="" /> : null
      }
      <button disabled={pending} onClick={handleButton}>Click</button>
    </div>
  )
}

export default App
