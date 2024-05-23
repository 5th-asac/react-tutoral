import { useState, createContext, useContext } from 'react'
import './App.css'

// 3. Consumer

function ButtonComponent() {
  const { show, hide } = useContext(ModalContext)
  // 조건 : Context.Consumer
  const { theme } = useContext(ThemeContext)
  console.log('Button Input')
  return (
    <>
      <button
        style={{ color: theme }}
        onClick={() => show({ title: '로그인 성공', desc: '와 축ㅎ해요', confirmButton: '확인' })}
      >
        로그인하기
      </button>
      <button style={{ color: theme }} onClick={() => hide() }>
        모달닫기
      </button>
    </>
  )
}

function PasswordInputComponent() {
  // 조건 : useContext
  const { theme } = useContext(ThemeContext)
  console.log('Password Input')
  return <input type='password' style={{ color: theme }} />
}

function IdInputComponent() {
  // 조건 : useContext
  const { theme } = useContext(ThemeContext)
  console.log('Id Input')
  return <input type='text' style={{ color: theme }} />
}

function LoginComponent() {
  return (
    <>
      <IdInputComponent />
      <PasswordInputComponent />
      <ButtonComponent />
    </>
  )
}

const ThemeContext = createContext({ theme: 'red', setTheme: () => {} })

function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState('red')
  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

function Header() {
  return (
    <>
      <button>테마 변경</button>
    </>
  )
}

function Modal({
  title, desc, confirmButton, cancelButton, onCancel
}) {
  const modalstyle = { position: 'fixed', top: 130, left: 230, height: 300, width: 300, border: 'solid 2px white', backgroundColor: 'white', color: 'black' } 

  return <div style={modalstyle}>
    <h3>{title}</h3>
    <div>{desc}</div>
    {confirmButton !== undefined && confirmButton !== '' && <button onClick={onCancel}>{confirmButton}</button>}
    {cancelButton !== undefined && cancelButton !== '' && <button onClick={onCancel}>{cancelButton}</button>}
  </div>
}

const ModalContext = createContext({
  show: () => {},
  hide: () => {},
})

function ModalContextProvider({ children }) {
  const [show, setShow] = useState({
    show: false,
    title: '',
    desc: '',
    confirmButton: '',
    cancelButton: '',
  })

  return (
    <ModalContext.Provider value={{
      show: (params) => {
        setShow({ ...params, show: true })
      },
      hide: () => {
        setShow({ show: false })
      },
    }}>
      {children}
      {show.show &&
        <Modal
          title={show.title}
          desc={show.desc}
          confirmButton={show.confirmButton}
          cancelButton={show.cancelButton}
          onCancel={() => setShow({ show: false })}
        />
      }
    </ModalContext.Provider>
  )
}

function App() {
  return (
    <>
      <ThemeContextProvider>
        <ModalContextProvider>
          <Header />
          <LoginComponent />
        </ModalContextProvider>
      </ThemeContextProvider>
    </>
  )
}

export default App
