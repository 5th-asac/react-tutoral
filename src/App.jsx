import { useState, useRef } from 'react'
import './App.css'

function App() {
  const textReference = useRef()
  console.log('Re-rendered !')
  return (
    <>
      <div ref={textReference}>Ref 를 통한 DOM 조작</div>
      <button
        onClick={() => {
          if (textReference.current.style.color === 'white') {
            textReference.current.style.color = 'red'
          } else {
            textReference.current.style.color = 'white'
          }
        }}
      >
        변경
      </button>
    </>
  )
}

export default App
