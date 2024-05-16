import { useState } from 'react'
import './App.css'

const NON_ADAULT_FEE = 10000
const ADAULT_FEE = 15000

function App() {
  const [age, setAge] = useState(0)
  const [valid, setValid] = useState(false)
  const [entrance, setEntrance] = useState(NON_ADAULT_FEE)

  return (
    <>
      <div>{entrance}</div>
      <input
        type='number'
        value={age}
        onChange={(e) => {
          const changed = e.target.value
          setAge(changed)
          setValid(changed >= 19)
          // 여러분들이 각자 한번 풀어보세요.
          setEntrance(valid ? ADAULT_FEE : NON_ADAULT_FEE)
        }}
      />
      {valid ? <div>성년입니다.</div> : <div style={{ color: 'red' }}>미성년입니다.</div>}
    </>
  )
}

export default App
