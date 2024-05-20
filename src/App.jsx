import { useState, useRef } from 'react'
import './App.css'

function PasswordInputForm({ passwordReference, valid }) {
  //
  function changeVisibleType(e) {
    if (passwordReference.current.type === 'password') {
      passwordReference.current.type = 'text'
      e.target.innerText = '안보임'
    } else {
      passwordReference.current.type = 'password'
      e.target.innerText = '보임'
    }
  }

  return (
    <>
      <div>패스워드</div>
      <input ref={passwordReference} type='password' />
      <button onClick={changeVisibleType}>보임</button>
      {valid ? <></> : <div>비밀번호 검증 에러 메세지</div>}
    </>
  )
}

function App() {
  const passwordReference = useRef()
  const [passwordValid, setPasswordValid] = useState(true)
  return (
    <div>
      <>
        <div>아이디</div>
        <input type='text' />
        <div>아이디 검증 에러 메세지</div>
      </>
      <PasswordInputForm passwordReference={passwordReference} valid={passwordValid} />
      <button
        onClick={() => {
          console.log('- 입력받은 패스워드 : ', passwordReference.current.value)
          if (passwordReference.current.value.length < 8) {
            console.error('에러 : 패스워드가 너무 짧음')
            setPasswordValid(false)
          } else {
            setPasswordValid(true)
          }
        }}
      >
        로그인 버튼
      </button>
    </div>
  )
}

export default App
