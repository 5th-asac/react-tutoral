import { useState, useRef } from 'react'
import './App.css'

function App() {
  const passwordReference = useRef()
  return (
    <div>
      <>
        <div>아이디</div>
        <input type='text' />
        <div>아이디 검증 에러 메세지</div>
      </>
      <>
        <div>패스워드</div>
        <input ref={passwordReference} type='password' />
        <button
          onClick={(e) => {
            if (passwordReference.current.type === 'password') {
              passwordReference.current.type = 'text'
              e.target.innerText = '안보임'
              // e.target = buttonReference.current
              // 속성 접근 똑같이 하면됨 e.target.innerText = buttonReference.current.innerText
            } else {
              passwordReference.current.type = 'password'
              e.target.innerText = '보임'
            }
          }}
        >
          보임
        </button>
        <div>비밀번호 검증 에러 메세지</div>
      </>
      <div>로그인 버튼</div>
    </div>
  )
}

export default App
