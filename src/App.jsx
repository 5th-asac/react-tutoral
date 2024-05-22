import { useEffect, useLayoutEffect, useState } from 'react'
import './App.css'

function App() {
  const [surprise, setSurprise] = useState(false)

  useEffect(
    () => {
      // setTimeout : 2개 파라미터
      //  1. "특정 시간" 뒤 수행할 (콜백) 함수
      //  2. "특정 시간" ms 단위 (3초 = 3000ms)
      setTimeout(() => {
        setSurprise(true)
      }, 3000)
    },
    [
      /* useEffect 안의 함수를 수행할지/말지를 판단하는 기준 : 의존성 배열 (Dependancy Array) */
    ],
  )

  return (
    <>
      <div>{Math.random()}</div>
      {surprise && <div>깜짝 선물 !</div>}
    </>
  )
}

export default App
