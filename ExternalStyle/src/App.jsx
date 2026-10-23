import { useState } from 'react'
import './css/style.css'
//External CSS in React JS
function App() {


  return (
    <>
      <h1 className='heading'>External Style</h1>
      <div className='container'>
        <div className='user-card'>
          <div>
            <img className='image-style' src="https://cdn.pokecut.com/resource/webseo/tryuse/tryusebefore_104_25022017475902.webp" alt="" />
          </div>
          <div className='text-wrap'>
            <h4>Rahul Kumar</h4>
            <p>Software Developer</p>
          </div>
        </div><div className='user-card'>
          <div>
            <img className='image-style' src="https://cdn.pokecut.com/resource/webseo/tryuse/tryusebefore_104_25022017475902.webp" alt="" />
          </div>
          <div className='text-wrap'>
            <h4>Rahul Kumar</h4>
            <p>Software Developer</p>
          </div>
        </div><div className='user-card'>
          <div>
            <img className='image-style' src="https://cdn.pokecut.com/resource/webseo/tryuse/tryusebefore_104_25022017475902.webp" alt="" />
          </div>
          <div className='text-wrap'>
            <h4>Rahul Kumar</h4>
            <p>Software Developer</p>
          </div>
        </div><div className='user-card'>
          <div>
            <img className='image-style' src="https://cdn.pokecut.com/resource/webseo/tryuse/tryusebefore_104_25022017475902.webp" alt="" />
          </div>
          <div className='text-wrap'>
            <h4>Rahul Kumar</h4>
            <p>Software Developer</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App