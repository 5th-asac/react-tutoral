import { useState, useRef, useEffect, useLayoutEffect } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState(0)

  // 각 Hook 들을 주석처리하면서 버튼 클릭 시 깜빡임의 유무를 눈으로 확인해보세요.
  // 1. useEffect
  useEffect(() => {
    if (value === 0) {
      setValue(10 + Math.random() * 200)
    }
  }, [value])

  // 2. useLayoutEffect
  // useLayoutEffect(() => {
  //   if (value === 0) {
  //     setValue(10 + Math.random() * 200)
  //   }
  // }, [value])

  return <button onClick={() => setValue(0)}>value: {value}</button>
}

export default App
