import { useState } from 'react'
import './App.css'

function App() {
  const [level, setLevel] = useState(1)
  const [title, setTitle] = useState('노비스')

  // * Key : SetState 동기가 아닌 비동기적으로 동작
  const upgradeTitleDeprecated = () => {
    // 모든 함수의 동작이 동기적으로 수행될것이라 가정하는 패착
    // SetState 동기가 아닌 비동기적으로 동작
    console.log('이전 상태 : ', level)
    setLevel((previousLevel) => previousLevel + 1)
    console.log('이후 상태 : ', level)
    // 여기서의 level 은 상태 변경 이전값이다.
    if (level >= 15) {
      setTitle('1차 전직')
    }
    if (level >= 30) {
      setTitle('2차 전직')
    }
  }

  // 2. SetState 새로운 값 생성하는 "함수"를 넘기는 방식
  const upgradeTitle1 = () => {
    setLevel((previousLevel) => {
      const nextLevel = previousLevel + 1
      if (nextLevel >= 15) {
        setTitle('1차 전직')
      }
      if (nextLevel >= 30) {
        setTitle('2차 전직')
      }
      return nextLevel
    })
  }

  // 2. SetState 새로운 "값"을 넘기는 방식
  const upgradeTitle2 = () => {
    const nextLevel = level + 1
    setLevel(nextLevel)
    if (nextLevel >= 15) {
      setTitle('1차 전직')
    }
    if (nextLevel >= 30) {
      setTitle('2차 전직')
    }
  }

  return (
    <>
      <div style={{ marginBottom: 10 }}>{level}</div>
      <div style={{ marginBottom: 10 }}>{title}</div>
      <div>
        <button onClick={upgradeTitle2}>레벨업</button>
      </div>
    </>
  )
}

export default App
