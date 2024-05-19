import { Children, useState } from 'react'
import './App.css'

function ListItemComponent({ item: person, children, setPeople }) {
  const [activated, setActivated] = useState(false)
  const [changedDescription, setChangedDescription] = useState(person.desc)

  return (
    <li
      onClick={(e) => {
        setActivated((prev) => !prev)
      }}
    >
      <div>{children}</div>
      <div>{person.age}</div>
      {activated ? (
        <>
          <input
            type='text'
            value={changedDescription}
            onChange={(e) => {
              const typed = e.target.value
              setChangedDescription(typed)
            }}
          />
          <button
            onClick={() => {
              // 1. SetPeople 업데이트
              // console.log('저장되었습니다.')
              setPeople((previousPeople) => {
                const nextPeople = previousPeople.map((previousPerson) => {
                  if (previousPerson.name === person.name) {
                    return { ...previousPerson, desc: changedDescription }
                  } else {
                    return previousPerson
                  }
                })
                return nextPeople
              })
            }}
          >
            확인
          </button>
          <button
            onClick={(e) => {
              // 2. SetChangedDescription 를 통한 롤백
              // console.log('원상복귀 되었습니다.')
              setChangedDescription(person.desc)
              setActivated((prev) => !prev)
            }}
          >
            취소
          </button>
        </>
      ) : (
        <div>{person.desc}</div>
      )}
    </li>
  )
}

function UnorderedListComponent({ items, setPeople }) {
  return (
    <ul>
      {items.map((each) => {
        return (
          <ListItemComponent item={each} setPeople={setPeople}>
            {each.name}
          </ListItemComponent>
        )
      })}
    </ul>
  )
}

function App() {
  const [people, setPeople] = useState([
    { name: 'Aaron', age: 10, desc: '안녕하세요!' },
    { name: 'Baron', age: 30, desc: '안녕하세요!' },
    { name: 'Caron', age: 22, desc: '안녕하세요!' },
    { name: 'Daron', age: 17, desc: '안녕하세요!' },
  ])
  return (
    <>
      <div>
        <UnorderedListComponent items={people} setPeople={setPeople} />
      </div>
    </>
  )
}

export default App
