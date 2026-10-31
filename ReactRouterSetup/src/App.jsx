// import { BrowserRouter, Routes, Route, Link } from 'react-router'
// export default function App() {

import { Routes, Route, Link } from "react-router";
import Home from "./Home";
import Login from "./Login";
import About from "./About";
import Navbarr from "./Navbarr";

//   return (
//     <div>
//       <BrowserRouter>
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/contact">Contact</Link>

//         <Routes>
//           <Route path='/' element={<h1>Home</h1>} />
//           <Route path='/about' element={<h1>About</h1>} />
//           <Route path='/contact' element={<h1>Contact</h1>} />
//         </Routes>
//       </BrowserRouter>

//     </div>
//   )
// }

function App() {

  return (
    <>

      <Navbarr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </>
  )
}

export default App