import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // React.Fragment : JSX 단위는 무조건 단일 태그로 감싸져야하기때문 <- JSX 식에는 부모 요소가 하나 있어야 합니다.ts(2657)
  return (
    <>
      <div style={{ marginBottom: 10 }}>{count}</div>
      {/* tag 2가지 : button, input type="button" */}
      <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
        <button
          className='increase-button'
          onClick={(e) => {
            // SetState 사용법 2가지 : (1) 새로운 상태"값" (2) 새로운 상태값 생성 "함수"
            // (1) setCount(count + 1)
            // (2) setCount((previousCount) => {
            //   return previousCount + 1
            // })
            setCount((previousCount) => previousCount + 1)
          }}
        >
          증가
        </button>
        {/* onClick, onChange 같은것들의 파라미터는 Callback 함수(수행할것) */}
        {/* click, change 같은것들은 이벤트라고 부르고 event 객체에 이벤트 관련된 값들을 다 담고있다. */}
        <button
          className='decrease-button'
          onClick={(e) => {
            setCount((previousCount) => previousCount - 1)
          }}
        >
          감소
        </button>
      </div>
    </>
  )
}

export default App
