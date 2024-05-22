import { forwardRef, useRef, useState } from 'react'
import './App.css'

// '클래스 컴포넌트' : ref 를 쓰기위해서 한번 감싸기 위해 사용되는 컴포넌트 = Wrapper
// 함수(형) 컴포넌트 : 실제 사용하는 컴포넌트
const CustomInput = forwardRef(function WrappedCustomInput(
  {
    /* value, onChange */
  },
  ref,
) {
  if (true) {
    throw Error('익명함수에러')
  }
  return <input type='number' ref={ref} /* value={value} onChange={onChange} */ />
})

function App() {
  // const [number, setNumber] = useState(0)
  const numberReference = useRef()

  return (
    <>
      <CustomInput
        ref={numberReference}
        // value={number}
        // onChange={(e) => {
        //   setNumber(e.target.value)
        // }}
      />
    </>
  )
}

export default App
