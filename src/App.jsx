import { useState } from 'react'
import './App.css'

// State Lifting : 부모 컴포넌트가 가지고 있는 상태 변경을 위한 Controller = SetState 를 자식 컴포넌트가 호출
// '상태 끌어올리기' = 부모의 SetState 호출을 자식에게 넘긴다.
function ButtonComponent({ className, onClick, children }) {
  return (
    <button className={className} onClick={onClick}>
      {children}
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
        <ButtonComponent
          className={'increase-button'}
          onClick={() => {
            setCount((previousCount) => previousCount + 1)
          }}
        >
          증가
        </ButtonComponent>
        <ButtonComponent
          className='decrease-button'
          onClick={() => {
            setCount((previousCount) => previousCount - 1)
          }}
        >
          감소
        </ButtonComponent>
      </div>
    </>
  )
}

export default App
