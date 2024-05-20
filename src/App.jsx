import { useState, useRef } from 'react'
import './App.css'

function App() {
  const videoReference = useRef()
  return (
    <>
      <video ref={videoReference} autoPlay controls />
      <button
        onClick={() => {
          videoReference.current.src = 'https://vjs.zencdn.net/v/oceans.mp4'
        }}
      >
        전환 1
      </button>
      <button
        onClick={() => {
          videoReference.current.src = 'https://lamberta.github.io/html5-animation/examples/ch04/assets/movieclip.mp4'
        }}
      >
        전환 2
      </button>
    </>
  )
}

export default App
