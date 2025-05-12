# Section03. Node.js 기초

## 왜 React를 공부하는데 Node.js를 배워야 할까?

React.js, Next.js, Vue.js, Svelte 등은 모두 Node.js를 기반으로 동작하기 때문이다.

## Node.js

웹 브라우저가 아닌 환경에서도 자바스크립트 코드를 실행시켜주는 자바스크립트 런타임(실행 환경).

## NVM (Node Version Manager)

여러 버전의 Node.js를 설치하고 관리할 수 있게 해주는 도구.  
NVM을 먼저 설치 후 NVM으로 Node.js를 설치하면 Node.js 버전 관리가 편해진다.

## 모듈 (Module)

프로그램의 기능을 독립적인 파일로 분리한 것으로, 코드의 재사용성과 유지보수성을 높이기 위해 사용된다.

## 모듈 시스템 (Module Syatem)

모듈을 생성하고, 불러오고, 사용하는 등의 모듈을 다루는 다양한 기능을 제공하는 시스템.

- 종류: Common JS(CJS), ES Module(ESM), AMD, UMD, ....

### ES Module 예제

```javascript
// src/math.js
export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

export default function multiply(a, b) {
  return a * b;
}
```

```javascript
// src/index.js
import multi, { add, sub } from "./math.js";

console.log(add(1, 2));
console.log(sub(1, 2));
console.log(multi(2, 3));
```

## 라이브러리 (Library)

프로그램을 개발할 때 필요한 다양한 기능들을 미리 만들어 모듈화 해 놓은 것.

- `package.json`의 `dependencies`에 설정된 의존성들을 `npm i` 명령어로 언제든 다시 설정할 수 있다.
- 따라서 라이브러리가 실제 저장되는 `node_modules` 디렉토리는 프로젝트 소스 전달 시 함께 공유할 필요 없다.
