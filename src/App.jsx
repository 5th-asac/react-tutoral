import { useState } from 'react'
import './App.css'

function TC({ count }) {
  return (
    <div className='component-box' style={{ padding: 10 }}>
      Third Component : {count}
    </div>
  )
}

function SC({ count }) {
  return (
    <div className='component-box' style={{ padding: 10 }}>
      Second Component
      <TC count={count} />
    </div>
  )
}

function FC({ count }) {
  return (
    <div className='component-box' style={{ padding: 10 }}>
      First Component
      <SC count={count} />
    </div>
  )
}

function NonContextComponent({ onClick }) {
  return (
    <div className='component-box' style={{ padding: 10 }}>
      NonContextComponent
      <button onClick={onClick}>증가</button>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16 }}>
      <FC count={count} />
      <NonContextComponent onClick={() => setCount((prev) => prev + 1)} />
    </div>
  )
}

export default App
