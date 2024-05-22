import { useReducer, useState } from "react";
import "./App.css";

function reducer(previousState, action) {
  switch (action.type) {
    case 'INCREASE_TEN':
      return previousState + 10
    case 'DECREASE_TEN':
      return previousState - 10
    default: 
      throw new Error('정의되어있지 않은 action 입니다.')
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, 0 /* 초기 상태 = initial state */)
  // dispatch : 상태 변경 요청 호출
  // action   : 상태 변경 요청
  return (
    <>
      <>{count}</>
      <button onClick={() => dispatch({ type: 'INCREASE_TEN' }) }>증가</button>
      <button onClick={() => dispatch({ type: 'DECREASE_TEN' }) }>감소</button>
    </>
  );
}

export default App;
