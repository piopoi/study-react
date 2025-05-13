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

## React 버전 별 Props 기본값 설정

### React 18 까지

React 18까지는 컴포넌트에 `defaultProps` 객체를 사용하여 props의 기본값을 설정할 수 있었다.

```javascript
Button.defaultProps = {
  text: "button",
  color: "black",
};
```

### React 19 이상

React 19 이상에서는 defaultProps 객체가 더 이상 지원되지 않는다.  
**구조분해 할당** 방식으로 기본값을 직접 설정해야 한다.

```javascript
const Button = ({ text = "button", color = "black" }) => {
  ...
}
```

## 이벤트 핸들링 (Event Handeling)

웹에서 이벤트가 발생했을 때 그 것을 처리하는 것.

- (ex) 버튼 클릭 시 경고창 노출
- 이벤트(Event)
  - 웹 내부에서 발생하는 사용자의 행동.
  - (ex) 버튼 클릭, 메시지 입력, 스크롤 등등.

## 합성 이벤트 (Synthetic Base Event)

React에서 사용하는 **이벤트 객체**로, 브라우저의 네이티브 이벤트를 감싸는 크로스 브라우저 래퍼다.

- Cross Browsing Issue 해결: 브라우저 간 일관된 이벤트 처리를 보장.
- 이벤트 풀링을 통해 성능을 최적화한다.
- 네이티브 이벤트와 유사한 인터페이스를 제공하지만 React의 방식으로 동작한다.
