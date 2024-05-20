import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [age, setAge] = useState(0)
  const ageReference = useRef(0)

  // * Rerender 일어나는지 여부 판단을 위한 콘솔 로그
  console.log('Re-rendered !')
  return (
    <>
      {/* 교훈 : ref.current 를 View 에 사용하는 멍청한짓은 하지말자 */}
      {/* <div>{ageReference.current}</div> */}
      <input
        ref={ageReference}
        type='number'
        // value={ageReference.current}
        // onChange={(e) => {
        //   ageReference.current = e.target.value
        // }}
      />
      <button
        onClick={() => {
          console.log('지금 값은 : ', ageReference.current.value)
        }}
      >
        표기
      </button>
    </>
  )
}

export default App
