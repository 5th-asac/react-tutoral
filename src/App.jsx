import { useState } from 'react'
import './App.css'

// 단방향
function CustomInput({ value, onChange }) {
  // 1. value 상태를 통해 input 을 변경하기만 합니다.
  return <input type='number' value={value} onChange={onChange} />
}

// 양방향
function CustomInput({ value }) {
  // 1. value 상태를 통해 input 을 변경하기도 하지만
  // 2. input 이 변경되면 value 상태도 변경되는것입니다.
  return <input type='number' value={value} />
}

function App() {
  const [number, setNumber] = useState(0)
  return (
    <>
      <CustomInput
        value={number}
        onChange={(e) => {
          setNumber(e.target.value)
        }}
      />
    </>
  )
}

export default App
