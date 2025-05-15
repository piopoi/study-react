# Section09. useReducer

## useReducer

컴포넌트 내부에 **새로운 State를 생성**하는 React Hook.

- 모든 `useState`는 `useReducer`로 대체할 수 있다.

```javascript
import { useReducer } from "react";

// reducer: 상태를 실제로 변화시키는 변환기 역할.
function reducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    default:
      return state;
  }
}

const Exam = () => {
  // dispatch: 상태 변화가 있어야 한다는 사실을 알리는, 발송하는 함수.
  const [state, dispatch] = useReducer(reducer, 0);

  const onClickPlus = () => {
    // action 객체: 인수로 상태가 어떻게 변화되길 원하는지 전달.
    dispatch({
      type: "INCREASE",
      data: 1,
    });
  };
  const onClickMinus = () => {
    dispatch({
      type: "DECREASE",
      data: 1,
    });
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};

export default Exam;
```

## useState와 결정적인 차이점: 상태 관리 코드 위치

`useReducer`는 **상태 관리 코드를 컴포넌트 외부로 분리**할 수 있다.

### useState의 경우

`useState`를 사용하면, 컴포넌트 내부에 상태 관리 코드를 작성해야 한다.  
아래 예제에서 상태 관리 코드인 `onCreate`는 `App` 컴포넌트 내부에 있어야 한다.

```javascript
function App() {
  const [todos, setTodos] = useState();

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      createdAt: new Date().getTime(),
    };

    setTodos([newTodo, ...todos]);
  };

  // ...
}
```

### useReducer의 경우

`useReducer`를 사용하면, 상태 관리 코드를 컴포넌트 외부로 분리할 수 있다.  
아래 예제에서 상태 관리 코드인 `reducer`가 `App` 컴포넌트 외부에 있다.

```javascript
function reducer() {
  // ...
}

function App() {
  const [todos, dispatch] = useReducer(reducer);

  // ...
}
```
