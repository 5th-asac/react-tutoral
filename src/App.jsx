import { useReducer, useState } from "react";
import "./App.css";

function reducer(previousState, { type, value }/* action */) {
  switch (type) {
    case 'INCREASE':
      return previousState + value
    case 'DECREASE':
      return previousState - value
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
      <button onClick={() => dispatch({ type: 'INCREASE', value: 5 }/* action */) }>증가</button>
      <button onClick={() => dispatch({ type: 'DECREASE', value: 8 }/* action */) }>감소</button>
    </>
  );
}

export default App;
