import { useState, createContext, useContext, useEffect, useReducer } from 'react'
import './App.css'

const ModalContext = createContext({ open: () => {} })

// Reducer 를 통해 Modal 템플릿화
function reducer(previousState, action /* 타입(뭘 수행할지) + 페이로드(유저가 전달한 파라미터) */) {
  switch (action.type.toUpperCase()) {
    case 'COMMON':
      return { ...action.payload }
    case 'ERROR_UNKNOWN':
      return { show: true, type: 'error', title: '알수없는 에러 발생', content: '고객 센터에 문의하세요.' }
    case 'ERROR_TYPEERROR':
      return { show: true, type: 'warn', title: '타입 에러 발생', content: '다시 입력해 주세요.' }
    default:
      throw new Error('지원하지 않는 모달 타입입니다.')
  }
}

function ModalContextProvider({ children }) {
  // Modal 타입 : info, success, warn, error
  // - SetState : 자율성 <-> SetReducer : 제약 "꼭 어떻게 호출해야돼" => Modal 에도 공통적으로 사용되는 템플릿들이 있다! 재사용성

  const [modal, dispatch] = useReducer(reducer, { show: false })
  // setState(이전 상태 (인자) => 새 상태 (반환))
  // reducer(이전 상태 + Action (인자) => 새 상태 (반환))
  // const [modal, setModal] = useState({
  //   show: false,
  // })

  // 제대로 param 을 받아내기 위해서는 TypeScript(정적 타입 체크) 필요
  const open = (param /* { title, content, confirm, cancel } */) => {
    dispatch({
      type: 'COMMON',
      payload: { show: true, ...param /* title, content, confirm, cancel */ },
    })
  }

  const openTemplate = (templateName /* 'ERROR_UNKNOWN', 'ERROR_TYPEERROR' */) => {
    const action = { type: templateName }
    dispatch(action)
  }

  return (
    <ModalContext.Provider value={{ open, openTemplate }}>
      {children}
      {modal.show && (
        <Modal
          type={modal.type}
          title={modal.title}
          content={modal.content}
          confirm={modal.confirm}
          invisibleConfirm={modal.invisibleConfirm}
          onConfirm={() => {
            modal.onConfirm && modal.onConfirm()
            setModal({ show: false })
          }}
          cancel={modal.cancel}
          invisibleCancel={modal.invisibleCancel}
          onCancel={() => {
            modal.onCancel && modal.onCancel()
            setModal({ show: false })
          }}
        />
      )}
    </ModalContext.Provider>
  )
}

const modalstyle = {
  position: 'fixed',
  top: 20,
  left: 250,
  height: 180,
  width: 300,
  backgroundColor: 'white',
  color: 'black',
}

function Modal(props) {
  const getColorByType = (type) => {
    switch (type) {
      case 'info':
        return 'blue'
      case 'success':
        return 'green'
      case 'warn':
        return 'orange'
      case 'error':
        return 'red'
      default:
        throw new Error('존재하지 않는 modal 타입 입니다.')
    }
  }
  return (
    <div style={modalstyle}>
      <div style={{ height: 10, width: 'full', backgroundColor: getColorByType(props.type ?? 'info') }} />
      <h3>{props.title}</h3>
      <div>{props.content}</div>
      <div id='button-area'>
        {!props.invisibleConfirm && (
          <button
            onClick={() => {
              props.onConfirm()
            }}
          >
            {props.confirm ? props.confirm : '확인'}
          </button>
        )}
        {!props.invisibleCancel && (
          <button
            onClick={() => {
              props.onCancel()
            }}
          >
            {props.cancel ? props.cancel : '취소'}
          </button>
        )}
      </div>
    </div>
  )
}

function ButtonComponent() {
  const { open } = useContext(ModalContext)
  return (
    <>
      <button
        onClick={() =>
          open({
            title: '로그인 완료',
            content: '로그인이 완료되었습니다 :)',
            onConfirm: () => {
              console.log('어서오세요!')
              // 로그인이 완료되면 (1) DB 에 세션이 저장되거나 (2) JWT 발행, 그 다음에 리프레시로 인증정보 기반으로 페이지를 갱신할 필요가 있기 때문
              history.go('/')
            },
            invisibleCancel: true,
            onCancel: () => {
              console.log('왜 돌아가시나요 흑흑')
            },
          })
        }
      >
        모달띄우기
      </button>
    </>
  )
}

function UnknownErrorButtonComponent() {
  const { openTemplate } = useContext(ModalContext)
  return (
    <>
      <button onClick={() => openTemplate('ERROR_UNKNOWN')}>알수없는 에러 발생</button>
    </>
  )
}

function TypeErrorButtonComponent() {
  const { openTemplate } = useContext(ModalContext)
  return (
    <>
      <button onClick={() => openTemplate('ERROR_TYPEERROR')}>타입 에러 발생</button>
    </>
  )
}

function LoginComponent() {
  return (
    <>
      <ButtonComponent />
      <div>
        <div>
          <div>
            <div>
              <div>
                <div>
                  <button></button>
                  <div>modal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UnknownErrorButtonComponent />
      <TypeErrorButtonComponent />
    </>
  )
}

function App() {
  return (
    <>
      <ModalContextProvider>
        <LoginComponent />
      </ModalContextProvider>
    </>
  )
}

export default App
