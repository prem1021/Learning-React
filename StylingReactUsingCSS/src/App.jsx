import React from 'react'
import { useState } from 'react'
//Inline style in React JS
// const App = () => {
//   const cardStyle = {
//     border: '5px solid #cccccc3b',
//     width: '200px',
//     boxShadow: '1px 2px 3px 0px #cccccc57',
//     margin: '10px'
//   }
//   return (
//     <>
//       <h1 style={{ color: 'red' }}>Inline style in React JS</h1>
//       <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//         <div style={cardStyle}>
//           <img style={{ width: '200px' }} src="https://cdn.pokecut.com/resource/webseo/tryuse/tryusebefore_104_25022017475902.webp" alt="" />
//           <div style={{ padding: '5px' }}>
//             <h4>Anil Sidhu</h4>
//             <p>Software Developer</p>
//           </div>
//         </div><div style={cardStyle}>
//           <img style={{ width: '200px' }} src="https://cdn.pokecut.com/resource/webseo/tryuse/tryusebefore_104_25022017475902.webp" alt="" />
//           <div style={{ padding: '5px' }}>
//             <h4>Anil Sidhu</h4>
//             <p>Software Developer</p>
//           </div>
//         </div><div style={cardStyle}>
//           <img style={{ width: '200px' }} src="https://cdn.pokecut.com/resource/webseo/tryuse/tryusebefore_104_25022017475902.webp" alt="" />
//           <div style={{ padding: '5px' }}>
//             <h4>Anil Sidhu</h4>
//             <p>Software Developer</p>
//           </div>
//         </div><div style={cardStyle}>
//           <img style={{ width: '200px' }} src="https://cdn.pokecut.com/resource/webseo/tryuse/tryusebefore_104_25022017475902.webp" alt="" />
//           <div style={{ padding: '5px' }}>
//             <h4>Anil Sidhu</h4>
//             <p>Software Developer</p>
//           </div>
//         </div><div style={cardStyle}>
//           <img style={{ width: '200px' }} src="https://cdn.pokecut.com/resource/webseo/tryuse/tryusebefore_104_25022017475902.webp" alt="" />
//           <div style={{ padding: '5px' }}>
//             <h4>Anil Sidhu</h4>
//             <p>Software Developer</p>
//           </div>
//         </div><div style={cardStyle}>
//           <img style={{ width: '200px' }} src="https://cdn.pokecut.com/resource/webseo/tryuse/tryusebefore_104_25022017475902.webp" alt="" />
//           <div style={{ padding: '5px' }}>
//             <h4>Anil Sidhu</h4>
//             <p>Software Developer</p>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default App

//Dynamic and Conditional Inline Style


const App = () => {
  const [cardStyle, setCardStyle] = useState(
    {
      border: '5px solid #cccccc3b',
      width: '200px',
      boxShadow: '1px 2px 3px 0px #cccccc57',
      margin: '10px'
    }
  )
  const [textColor, setTextColor] = useState('black')
  const [grid, setGrid] = useState(true)

  const updateTheme = (bgColor, textColor) => {
    setCardStyle({ ...cardStyle, backgroundColor: bgColor })
    setTextColor(textColor)
  }
  return (
    <>
      <h1 style={{ color: 'red' }}>Inline style in React JS</h1>
      <button onClick={() => updateTheme('gray', 'red')}>Gray Theme</button>
      <button onClick={() => updateTheme('white', 'black')}>Default Theme</button>
      <button onClick={() => setGrid(!grid)}>Toggle Grid</button>
      <div style={{ display: grid ? 'flex' : 'block', flexWrap: 'wrap' }}>
        <div style={cardStyle}>
          <img style={{ width: '200px' }} src="https://cdn.pokecut.com/resource/webseo/tryuse/tryusebefore_104_25022017475902.webp" alt="" />
          <div style={{ padding: '5px', color: textColor }}>
            <h4>Anil Sidhu</h4>
            <p>Software Developer</p>
          </div>
        </div><div style={cardStyle}>
          <img style={{ width: '200px' }} src="https://cdn.pokecut.com/resource/webseo/tryuse/tryusebefore_104_25022017475902.webp" alt="" />
          <div style={{ padding: '5px', color: textColor }}>
            <h4>Anil Sidhu</h4>
            <p>Software Developer</p>
          </div>
        </div><div style={cardStyle}>
          <img style={{ width: '200px' }} src="https://cdn.pokecut.com/resource/webseo/tryuse/tryusebefore_104_25022017475902.webp" alt="" />
          <div style={{ padding: '5px', color: textColor }}>
            <h4>Anil Sidhu</h4>
            <p>Software Developer</p>
          </div>
        </div><div style={cardStyle}>
          <img style={{ width: '200px' }} src="https://cdn.pokecut.com/resource/webseo/tryuse/tryusebefore_104_25022017475902.webp" alt="" />
          <div style={{ padding: '5px', color: textColor }}>
            <h4>Anil Sidhu</h4>
            <p>Software Developer</p>
          </div>
        </div><div style={cardStyle}>
          <img style={{ width: '200px' }} src="https://cdn.pokecut.com/resource/webseo/tryuse/tryusebefore_104_25022017475902.webp" alt="" />
          <div style={{ padding: '5px', color: textColor }}>
            <h4>Anil Sidhu</h4>
            <p>Software Developer</p>
          </div>
        </div><div style={cardStyle}>
          <img style={{ width: '200px' }} src="https://cdn.pokecut.com/resource/webseo/tryuse/tryusebefore_104_25022017475902.webp" alt="" />
          <div style={{ padding: '5px', color: textColor }}>
            <h4>Anil Sidhu</h4>
            <p>Software Developer</p>
          </div>
        </div><div style={cardStyle}>
          <img style={{ width: '200px' }} src="https://cdn.pokecut.com/resource/webseo/tryuse/tryusebefore_104_25022017475902.webp" alt="" />
          <div style={{ padding: '5px', color: textColor }}>
            <h4>Anil Sidhu</h4>
            <p>Software Developer</p>
          </div>
        </div><div style={cardStyle}>
          <img style={{ width: '200px' }} src="https://cdn.pokecut.com/resource/webseo/tryuse/tryusebefore_104_25022017475902.webp" alt="" />
          <div style={{ padding: '5px', color: textColor }}>
            <h4>Anil Sidhu</h4>
            <p>Software Developer</p>
          </div>
        </div><div style={cardStyle}>
          <img style={{ width: '200px' }} src="https://cdn.pokecut.com/resource/webseo/tryuse/tryusebefore_104_25022017475902.webp" alt="" />
          <div style={{ padding: '5px', color: textColor }}>
            <h4>Anil Sidhu</h4>
            <p>Software Developer</p>
          </div>
        </div><div style={cardStyle}>
          <img style={{ width: '200px' }} src="https://cdn.pokecut.com/resource/webseo/tryuse/tryusebefore_104_25022017475902.webp" alt="" />
          <div style={{ padding: '5px', color: textColor }}>
            <h4>Anil Sidhu</h4>
            <p>Software Developer</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
