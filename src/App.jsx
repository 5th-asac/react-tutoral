import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // Rerender 가 일어날때마다 표기
  console.log(count)
  return (
    <>
      {/* 1. 표기 View */}
      <div>{count}</div>
      {/* 2. 조작 Controller */}
      <button onClick={() => setCount((prev) => prev + 1)}>증가</button>
    </>
  )
}

export default App
