import { useState } from 'react'
import './App.css'

function App() {
  const [age, setAge] = useState(0)
  const [valid, setValid] = useState(false)

  return (
    <>
      <input
        type='number'
        value={age}
        onChange={(e) => {
          // console.log(e.target.value)
          const changed = e.target.value
          // 1. 비축약 버전
          // setAge(changed)
          // if (changed >= 19) {
          //   setValid(true)
          // } else {
          //   setValid(false)
          // }
          // 2. 축약 버전
          setAge(changed)
          setValid(changed >= 19)
        }}
      />
      {/* 1. 단일 컴포넌트 내 표기할 값 변경 */}
      {/* <div>{valid && '성년입니다.'}</div> */}
      {/* 2. 상태값에 따라 다른 컴포넌트 노출 (삼항연산자) */}
      {valid ? <div>성년입니다.</div> : <div style={{ color: 'red' }}>미성년입니다.</div>}
    </>
  )
}

export default App
