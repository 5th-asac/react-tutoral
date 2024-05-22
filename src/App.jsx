import { useState, useContext, createContext } from 'react'
import './App.css'

function TC() {
  // const count = useContext(CreatedContext)
  // const { count } = useContext(CreatedContext)

  return (
    <div className='component-box' style={{ padding: 10 }}>
      Third Component :
      <CreatedContext.Consumer>
        {({ count }) => {
          return <>{count}</>
        }}
      </CreatedContext.Consumer>
    </div>
  )
}

function SC() {
  return (
    <div className='component-box' style={{ padding: 10 }}>
      Second Component
      <TC />
    </div>
  )
}

function FC() {
  return (
    <div className='component-box' style={{ padding: 10 }}>
      First Component
      <SC />
    </div>
  )
}

function NonContextComponent() {
  const { setCount } = useContext(CreatedContext)

  return (
    <div className='component-box' style={{ padding: 10 }}>
      NonContextComponent
      <button
        onClick={() => {
          setCount((prev) => prev + 1)
        }}
      >
        증가
      </button>
    </div>
  )
}

// 1. 나 Context 쓸게? 오키? 만든다?
const CreatedContext = createContext()

function App() {
  const [count, setCount] = useState(0)

  return (
    <CreatedContext.Provider value={{ count, setCount }}>
      {/* 2. 전역 상태를 사용할 범주를 정의하기 위한 ()= 감싸주기 위한) "Provider 컴포넌트" 정의 */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16 }}>
        <FC />
        <NonContextComponent />
      </div>
    </CreatedContext.Provider>
  )
}

/* 
  좋은 질문 : 그럼 Provider 하위의 컴포넌트들은 consume하지 않는한,
  상태를 가진 부모 컴포넌트가 리렌더되더라도,
  하위 컴포넌트들은 리렌더되지 않는건가요:?
*/

export default App
