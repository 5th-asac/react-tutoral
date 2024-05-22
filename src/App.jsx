import { useEffect, useLayoutEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('changed ! : ', count)
  }, [count/* useEffect 안의 함수를 수행할지/말지를 판단하는 기준 : 의존성 배열 (Dependancy Array) */])

  return (
    <>
      <div>{count}</div>
      <button
        onClick={() => {
          setCount((prev) => prev + 1)
        }}
      >
        증가
      </button>
    </>
  )
}

export default App
