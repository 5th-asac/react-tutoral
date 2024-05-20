import { useState } from 'react'
import './App.css'

function App() {
  const [visible, setVisible] = useState(false)
  return (
    <div>
      <>
        <div>아이디</div>
        <input type='text' />
        <div>아이디 검증 에러 메세지</div>
      </>
      <>
        <div>패스워드</div>
        {/* 1. DOM "요소 자체"를 삼항 연산자로 */}
        {/* {visible ? <input type='text' /> : <input type='password' />} */}
        {/* 2. DOM 요소 내 "속성(Attribute)"을 삼항 연산자로 = 중복의 최소화 */}
        <input type={visible ? 'text' : 'password'} />
        <button
          onClick={() => {
            setVisible((prev) => !prev)
          }}
        >
          {visible ? '안보임' : '보임'}
        </button>
        <div>비밀번호 검증 에러 메세지</div>
      </>
      <div>로그인 버튼</div>
    </div>
  )
}

export default App
