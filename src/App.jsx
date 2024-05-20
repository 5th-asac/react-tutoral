import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const state = useState(0)
  // const count = state[0]
  // const setCount = state[1]
  const countReference = useRef(0)
  // Rerender 가 일어날때마다 표기 | countReference 를 '조작'하고, '표기'했을때 어떠한 Rerender 도 발생하지 않음
  console.log(countReference.current)
  return (
    <>
      {/* 1. 표기 View */}
      <div>{countReference.current}</div>
      {/* 2. 조작 Controller */}
      <button onClick={() => (countReference.current += 1)}>증가</button>
      <button onClick={() => console.log('지금 값은 : ', countReference.current)}>표기</button>
    </>
  )
}

export default App
