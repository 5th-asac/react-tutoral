import { Children, useState } from 'react'
import './App.css'

function ListItemComponent({ children }) {
  return <li>{children}</li>
}

function UnorderedListComponent({ items }) {
  return (
    <ul>
      {items.map((each) => {
        return <ListItemComponent>{each}</ListItemComponent>
      })}
    </ul>
  )
}

function App() {
  const stringArray = ['Unordered List Item 1', 'Unordered List Item 2', 'Unordered List Item 3']
  return (
    <>
      <div>
        <UnorderedListComponent items={stringArray} />
      </div>
    </>
  )
}

export default App
