# Section07. 라이프사이클

## 라이프사이클 (LifeCycle)

React의 라이프사이클(LifeCycle, 생애 주기)은 아래와 같은 3가지 단계를 가진다.

1. **Mount**: 컴포넌트가 화면에 **처음 렌더링**되는 단계.
2. **Update**: 컴포넌트가 **리렌더링**되는 단계.
3. **UnMount**: 컴포넌트가 **랜더링에서 제외**되는 단계.

React의 라이프사이클은 `useEffect`라는 **React Hook**을 이용하여 쉽게 관리할 수 있다.

## useEffect

React 컴포넌트의 **사이드 이펙트(SideEffect)를 제어**하는 React Hook.

- React 컴포넌트의 사이드 이펙트: 컴포넌트의 동작에 따라 **파생**되는 여러 효과.

```javascript
const [count, setCount] = useState(0);
const [input, setInput] = useState("");

useEffect(() => {
  console.log(`count: ${count}, input: ${input}`);
}, [count, input]);
```

- 첫 번째 인자: **콜백 함수**
- 두 번째 인자: **의존성 배열(dependency array, deps)**
- `count`, `input` 값이 변경될 때마다 콘솔에 현재 값을 출력한다.

### 그냥 값을 변경하는 함수에 추가하면 되는거 아닌가?

결론부터 **React의 상태 변화 함수**는 **비동기**로 실행되기 때문에 useEffect를 필수로 사용해야 한다.

아래와 같이 버튼을 클릭할 때 `count` 값을 변경하는 함수를 예로 들어보자.

```javascript
const onClickButton = (value) => {
  setCount(count + value);
  console.log(count); //count 변경 시 실행되어야하는 로직 = useEffect의 콜백 로직
};
```

`count` 값이 변경될 때마다 `console.log(count)`가 실행되어야 한다고 하자.
`useEffect`를 사용하지 않고 위 코드처럼 클릭 함수에 바로 넣으면 된다고 생각할 수 있다.
하지만, 실제 실행해보면 원하는 결과가 출력되지 않고, `count + value`로 변경되기 이전의 값이 출력된다.

왜냐하면, `setCount`라는 **React의 상태 변화 함수**는 **비동기**로 실행되기 때문이다.

따라서, 아래와 같이 `useEffect`를 사용해야 한다.

```javascript
const [count, setCount] = useState(0);

useEffect(() => {
  console.log(`count: ${count}`); //useEffect의 콜백 로직
}, [count]);

const onClickButton = (value) => {
  setCount(count + value);
};
```
