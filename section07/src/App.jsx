import "./App.css";
import { useState, useEffect, useRef } from "react";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const isMounted = useRef(false);

  // 라이프사이클
  // 1. mount
  useEffect(() => {
    console.log("mount");
  }, []);

  // 2. update
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    console.log("update");
  });

  // 3. unmount
  useEffect(() => {});

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 && <Even />} {/* 조건부 렌더링 */}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
