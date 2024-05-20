import { useState, useEffect, useRef } from 'react'
import './App.css'
import example from './example.json'

function Header({ title }) {
  return (
    <div style={{ position: 'sticky', top: 0, height: 60, backgroundColor: 'white' }}>
      <div id='header-title'>{title}</div>
    </div>
  )
}

function Title({ title }) {
  const titleReference = useRef()

  useEffect(() => {
    //
    // 1. Define
    const observer = new window.IntersectionObserver(([entry]) => {
      // entry.intersectionRatio = "보인다"의 뜻
      if (!entry.intersectionRatio) {
        // 해당 요소가 보이지 않으면 -> 'scrolled-a-bit' 클래스를 붙인다 -> 어디에? 'header-title' id인 요소에
        document.getElementById('header-title').classList.add('scrolled-a-bit')
      } else {
        // 해당 요소가 보이면 -> 'scrolled-a-bit' 클래스를 제거한다 -> 어디에서? 'header-title' id인 요소에
        document.getElementById('header-title').classList.remove('scrolled-a-bit')
      }
    })
    //
    // 2. Attach
    observer.observe(titleReference.current)
    //
    // 3. Detach
    return () => {
      observer.disconnect()
    }
    //
  }, [])

  return <h3 ref={titleReference}>{title}</h3>
}

function Text({ value }) {
  return <div style={{ whiteSpace: 'pre-line' }}>{value}</div>
}

function Content({ post }) {
  return (
    <div style={{ padding: '0 2rem' }}>
      {/* 블로그 글 제목 & 내용 */}
      <Title title={post.title} />
      <Text value={post.value} />
    </div>
  )
}

function App() {
  const post = example
  return (
    <>
      <Header title={post.title} />
      <Content post={post} />
    </>
  )
}

export default App
