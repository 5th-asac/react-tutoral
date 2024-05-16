import { Children, useState } from 'react'
import './App.css'

function ListItemComponent({ children }) {
  return <li>{children}</li>
}

function UnorderedListComponent() {
  const stringArray = ['Unordered List Item 1', 'Unordered List Item 2', 'Unordered List Item 3']
  // String 의 배열을 받아서 <ListItemComponent> 의 새 배열을 만들어 반환하면되겠네
  const reactArray = stringArray.map((each) => {
    return <ListItemComponent>{each}</ListItemComponent>
  })
  console.log(stringArray)
  console.log(reactArray)
  return (
    <ul>
      {/* 구버전 */}
      {/* 
      <li>Unordered List Item 1</li>
      <li>Unordered List Item 2</li>
      <li>Unordered List Item 3</li>
      */}
      {/* 신버전 */}
      {stringArray.map((each) => {
        return <ListItemComponent>{each}</ListItemComponent>
      })}
      {/*
      <ListItemComponent>Unordered List Item 1</ListItemComponent>
      <ListItemComponent>Unordered List Item 2</ListItemComponent>
      <ListItemComponent>Unordered List Item 3</ListItemComponent>
      */}
    </ul>
  )
}

function App() {
  return (
    <>
      <div>
        {/* ul = Unordered List */}
        <UnorderedListComponent />
        {/* ol = Ordered List */}
        <ol>
          {/* li = List Item */}
          <li>Ordered List Item 1</li>
          <li>Ordered List Item 2</li>
          <li>Ordered List Item 3</li>
        </ol>
      </div>
    </>
  )
}

export default App
