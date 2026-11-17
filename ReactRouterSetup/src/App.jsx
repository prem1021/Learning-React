// import { BrowserRouter, Routes, Route, Link } from 'react-router'
// export default function App() {

import { Navigate, Routes, Route, Link } from "react-router";
import Home from "./Home";
import Login from "./Login";
import About from "./About";
import Navbarr from "./Navbarr";
import PageNotFound from "./PageNotFound";
import College from "./College";
import Student from "./Student";
import Department from "./Department";
import CollegeDetails from "./CollegeDetails";

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

      <Routes>
        <Route element={<Navbarr />}>   //This route bounds the Navbar
          <Route path="/" element={<Home />} />
          <Route path='user'>
            <Route path="/user/about" element={<About />} />
            <Route path="/user/login" element={<Login />} />
          </Route>

        </Route>
        <Route path="/college" element={<College />}>
          <Route index element={<Student />} />  //index will open student at default
          <Route path="department" element={<Department />} />
          <Route path="details" element={<CollegeDetails />} />
        </Route>

        //topic Page not found (404)
        {/* <Route path="/*" element={<PageNotFound />} />   */}

        //if at any wrong url we want to naviagte diretcly at any particular Page
        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>

    </>
  )
}

export default App