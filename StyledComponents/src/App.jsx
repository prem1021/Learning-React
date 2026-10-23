
import React from 'react'
import styled from 'styled-components'

// const Heading = styled.h1`
//   color: red;
//   border: 1px solid black
// `
const Heading = styled.h1({
  color: 'red',
  border: '1px solid green',
  borderRadius: '5px',
  margin: '20px',
  padding: '20px'
})

const StyleBtn = styled.button`
color:red;
width:130px;
height:40px;
margin:20px
`
function App() {
  return (
    <>
      <h1>Styled Component with React JS</h1>
      <Heading>Hello Heading</Heading>
      <Heading>Hello Heading 2</Heading>
      <Heading>Hello Heading 3</Heading>
      <Heading>Hello Heading 4</Heading>
      <Heading>Hello Heading 5</Heading>
      <StyleBtn>Button</StyleBtn>
    </>
  )
}

export default App
