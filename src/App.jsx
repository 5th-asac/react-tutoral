import { useState } from 'react'
import './App.css'

// 1. SetState 파라미터가 새로운 상태"값"
function IncreaseButtonComponent({ count, setCount } /* Object Deconstructure 객체 비구조화 */) {
  // console.log('props : ', props)
  return (
    <button
      className='increase-button'
      onClick={() => {
        // props.setCount(props.count + 1)
        setCount(count + 1)
      }}
    >
      증가
    </button>
  )
}

// 2. SetState 파라미터가 새로운 상태를 생성하는 "함수"
function DecreaseButtonComponent({ setCount }) {
  return (
    <button
      className='decrease-button'
      onClick={() => {
        setCount((previousCount) => previousCount - 1)
      }}
    >
      감소
    </button>
  )
}

function App() {
  const [count, setCount] = useState(0)

  // * JSX 는 객체이고, 그 객체 내부에 props 라는 프로퍼티를 갖는다
  const example = <div className='hello'>안녕하세요</div>
  console.log('jsx example : ', example)

  return (
    <>
      <div style={{ marginBottom: 10 }}>{count}</div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
        <IncreaseButtonComponent count={count} setCount={setCount} />
        <DecreaseButtonComponent setCount={setCount} />
      </div>
    </>
  )
}

export default App
