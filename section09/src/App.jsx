import "./App.css";
import { useReducer, useRef } from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "1 리액트 공부하기",
    createdAt: new Date().getTime(), //timestamp
  },
  {
    id: 1,
    isDone: true,
    content: "2 타입스크립트 공부하기",
    createdAt: new Date().getTime(), //timestamp
  },
  {
    id: 2,
    isDone: false,
    content: "3 리액트 공부하기",
    createdAt: new Date().getTime(), //timestamp
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.todo, ...state];
    case "UPDATE":
      return state.map((todo) => {
        todo.id === action.targetId ? { ...todo, isDone: !todo.isDone } : todo;
      });
    case "DELETE":
      return state.filter((todo) => todo.id !== action.targetId);
    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      todo: {
        id: idRef.current++,
        isDone: false,
        content: content,
        createdAt: new Date().getTime(),
      },
    });
  };

  const onUpdate = (targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
