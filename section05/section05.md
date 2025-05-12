# Section05. React.js 입문

## JSX (JavaScript Extensions)

확장된 자바스크립트 문법으로, Javascript와 HTML을 섞어서 사용할 수 있다.

```javascript
function Footer() {
  const myName = "John";
  return (
    <footer>
      <h1>Hi, my name is {myName}!!</h1>
      <h1>footer</h1>
    </footer>
  );
}
```

- 위 function의 `<footer> ... </footer>` 부분은 원래 자바스크립트에서 허용되지 않는 문법이다.
- 하지만, React.js에서는 JSX 문법을 사용하므로 적법하다고 판단한다.

### JSX 주의사항

#### 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.

- 자바스크립트 표현식: 특정 값으로 평가될 수 있는 코드.

#### 2. 숫자, 문자열, 배열 값만 렌더링된다.

객체, boolean 값, null, undefined는 웹페이지에 랜더링되지 않는다.

- 객체는 `{obj.name}` 이런 식으로 내부의 값을 렌더링 할 수 있지만, 객체 통째로 렌더링 할 수는 없다.

#### 3. 모든 태그는 닫혀있어야 한다.

#### 4. 최상위 태그는 반드시 하나여야만 한다.

- 최상위 태그로 사용할 태그가 없다면 빈 태그(`<>` ... `</>`)를 사용하면 된다.
  - 빈 태그를 사용하면, 실제 렌더링 될 때 **최상위 태그가 없는 것처럼 렌더링**된다.
    - 빈 태그는 렌더링되지 않는다.

```javascript
const Main = () => {
  return (
    <main>
      <h1>main</h1>
    </main>
    <div></div> //Error: JSX 식에는 부모 요소가 하나 있어야 합니다.
  );
};
```
