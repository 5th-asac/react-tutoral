import { useState, useRef } from 'react'
import './App.css'

// HOC : High Order Component
function PrintErrorMessage({ valid, type }) {
  if (valid) {
    return <></>
  }
  if (type === 'long') {
    return <div style={{ color: 'red' }}>비밀번호 너무 깁니다</div>
  } else if (type === 'short') {
    return <div style={{ color: 'red' }}>비밀번호 너무 짧습니다</div>
  }
}

function PasswordInputForm({ passwordReference, valid /* { valid, type } */ }) {
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
      {/* {valid ? <></> : <div>비밀번호 검증 에러 메세지</div>} */}
      <PrintErrorMessage valid={valid.valid} type={valid.type} />
    </>
  )
}

function App() {
  const passwordReference = useRef()
  const [passwordValid, setPasswordValid] = useState({ valid: true })
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
            setPasswordValid({ valid: false, type: 'short' })
            passwordReference.current.focus()
          } else if (passwordReference.current.value.length > 12) {
            console.error('에러 : 패스워드가 너무 김')
            setPasswordValid({ valid: false, type: 'long' })
            passwordReference.current.focus()
          } else {
            setPasswordValid({ valid: true })
          }
        }}
      >
        로그인 버튼
      </button>
    </div>
  )
}

export default App
