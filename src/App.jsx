import { useState, useRef } from 'react'
import './App.css'

function App() {
  const textReference = useRef()
  console.log('Re-rendered !')
  return (
    <>
      <div className='not-modified' ref={textReference}>
        Ref 를 통한 DOM 조작
      </div>
      <button
        onClick={() => {
          if (textReference.current.className === 'not-modified') {
            textReference.current.className = 'modified'
          } else {
            textReference.current.className = 'not-modified'
          }
        }}
      >
        변경
      </button>
    </>
  )
}

export default App
