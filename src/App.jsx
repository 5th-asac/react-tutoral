import { Children, useState } from 'react'
import './App.css'

function ListItemComponent({ item: person, children, setPeople }) {
  const [activated, setActivated] = useState(false)
  return (
    <li
      onClick={() => {
        setActivated(!activated)
      }}
    >
      <div>{children}</div>
      <div>{person.age}</div>
      {activated ? (
        <input
          type='text'
          value={person.desc}
          onChange={(e) => {
            const typed = e.target.value
            // 원하는거 : 1개 요소에 대한 수정
            // 파라미터 : 4개 요소로 구성된 배열
            setPeople((previousPeople) => {
              // const changedPerson = // 1개의 변한 Person
              // const changedPeople = // 3개의 변하지 않은 Person + 1개의 변한 Person
              // return []
              //
              // 우리가 천천히 차분하게 생각하면됩니다.
              // 우리가 가지고 있는것은 무엇일까? 아래 3가지이다.
              // - 입력받은 값 : typed
              // - 내가 누구인지? 어떤 아이템인지 : person
              // - 이전 상태(People 상태) : previousPeople
              // const nextPeople = previousPeople.map((previousPerson) => {
              //   if (person.name === previousPerson.name) {
              //     // return {
              //     //   name: previousPerson.name,
              //     //   age: previousPerson.age,
              //     //   desc: typed,
              //     // }
              //     return { ...previousPerson, desc: typed }
              //   } else {
              //     return previousPerson
              //   }
              // })
              const nextPeople = previousPeople.map((previousPerson) =>
                person.name === previousPerson.name
                  ? { ...previousPerson, desc: typed }
                  : previousPerson,
              )
              return nextPeople
            })
          }}
        />
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
