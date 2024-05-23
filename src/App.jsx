import { createContext, useContext, useState } from 'react'
import './App.css'

function AdditionalRender() {
  console.log('AdditionalRender Rerendered')
  return (
    <div className='component-box' style={{ padding: 10 }}>
      AdditionalRender
    </div>
  )
}

function TC() {
  // const count = useContext(CountContext)
  console.log('Third Component Rerendered')
  return (
    <div className='component-box' style={{ padding: 10 }}>
      Third Component
      <CountContext.Consumer>
        {(count) => {
          return <>{count}</>
        }}
      </CountContext.Consumer>
      <AdditionalRender />
    </div>
  )
}

function SC() {
  console.log('Second Component Rerendered')
  return (
    <div className='component-box' style={{ padding: 10 }}>
      Second Component
      <TC />
    </div>
  )
}

function FC() {
  console.log('First Component Rerendered')
  return (
    <div className='component-box' style={{ padding: 10 }}>
      First Component
      <SC />
    </div>
  )
}

function NonContextComponent() {
  const count = useContext(CountContext)
  console.log('NonContextComponent Rerendered')
  return (
    <div className='component-box' style={{ padding: 10 }}>
      Non-Context Component{count}
    </div>
  )
}

const CountContext = createContext(-10 /* DV : default value */)

function CountContextProvider({ children }) {
  const [count, setCount] = useState(0)
  return (
    <CountContext.Provider value={count /* IV : initial value */}>
      {children}
      <button onClick={() => setCount((prev) => prev + 1)}>증가</button>
    </CountContext.Provider>
  )
}

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16 }}>
      {/* 나, CountContext 는 다음의 Provider 범주에 있는 자식들에게 value 상태를 전역으로 제공(Provide)하겠다 */}
      <CountContextProvider>
        <FC />
      </CountContextProvider>
      <NonContextComponent />
    </div>
  )
}

export default App
