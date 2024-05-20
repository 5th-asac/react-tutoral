import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const countReference = useRef(0)

  useEffect(() => {
    console.log(countReference.current)
    console.log(countReference.current.value)
  }, [])

  return (
    <>
      <input ref={countReference} type='number' />
    </>
  )
}

export default App
