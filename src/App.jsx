import { useState } from 'react'
import './App.css'

function App() {
  const [age, setAge] = useState(0)

  // * Rerender 일어나는지 여부 판단을 위한 콘솔 로그
  console.log('Re-rendered !')
  return (
    <>
      <div>{age}</div>
      <input type='number' value={age} onChange={(e) => setAge(e.target.value)} />
    </>
  )
}

export default App
