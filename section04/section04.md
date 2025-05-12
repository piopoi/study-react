# Section04. React.js 개론

## React의 핵심 특징

### 1. 컴포넌트를 기반으로 UI를 표현한다.

코드 중복을 제거하고 재사용성을 증가시켜 유지보수에 이점을 준다.

### 2. 화면 업데이트 구현이 쉽다.

업데이트를 위한 복잡한 동작을 직접 정의할 필요 없이, 특정 변수의 값을 바꾸는 것 만으로도 화면을 업데이트 시킬 수 있다.

- 선언형 프로그래밍: 과정은 생략하고 목적만 간결히 명시하는 방법.

### 3. 화면 업데이트가 빠르게 처리된다. (Virtual DOM)

React는 동시에 발생한 업데이트를 모아서 한 번에 DOM을 업데이트하는 과정을 자동으로 해준다. **Virtual DOM**이라는 자바스크립트 객체에 동시에 발생한 업데이트들을 반영하고, 한 번에 실제 DOM으로 업데이트 한다.

#### 브라우저의 렌더링 과정 (Critical Rendering Path)

1. DOM(Document Object Model) 트리를 생성한다.
2. CSSOM(CSS Object Model) 트리를 생성한다.
3. 렌더 트리(Rander Tree): DOM과 CSSOM을 결합하여 렌더 트리를 생성한다.
4. 레이아웃(Layout) 단계에서 각 요소의 크기와 위치를 계산한다.
5. 페인팅(Painting) 단계에서 픽셀을 화면에 그린다.

#### 업데이트는 언제 발생할까?

Javascript가 DOM을 수정하면 업데이트가 발생한다.

#### 주의: Reflow, Repaint

Reflow, Repaint라는 별도의 명칭이 있을 정도로 Layout, Painting은 매우 오래걸리는 과정이라 주의해야 한다.

- Reflow: Layout을 다시 한다.
- Repaint: Painting을 다시 한다.

#### Virtual DOM

React는 Virtual DOM이라는 자바스크립트 객체에 동시에 발생한 업데이트들을 반영하고, 한 번에 실제 DOM으로 업데이트 한다.

## React App 생성하기

**Vite**를 이용하여 앱을 생성한다.

- Vite: 프론트엔드 개발 툴. 기본 설정이 적용된 React App 생성을 가능하게 해준다.
