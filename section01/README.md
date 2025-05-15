# Section01. JavaScript 기초

## 콘솔 로그 출력

```javascript
console.log("Console Log 출력");
```

## 변수 선언

### 변수

- 초기화 이후 재할당 가능

```javascript
let age = 20;
age = 30;
```

### 상수

- 초기화 이후 재할당 불가능
- 초기화 시 값 할당 필수

```javascript
const cons = 10;
```

## 변수 명명 규칙(네이밍 규칙)

### 1. $, \_ 제외한 기호는 사용할 수 없다.

```javascript
let $_name;
```

### 2. 숫자로 시작할 수 없다.

```javascript
let name1;
let $2name;
let _2name;
```

### 3. 예약어를 사용할 수 없다.

```javascript
// let let;
// let if;
```

## JavaScript의 자료형(Data Type)

- 원시 타입 (Primitive Type)
  - Number
  - String
  - Boolean
  - Null
  - Undefined
- 객체 타입 (Object Type)
  - Object
    - Array
    - Function
    - RegExp

### Number Type

```javascript
let number1 = 10;
let number2 = 1.5;
let number3 = -20;

let inf = Infinity;
let mInf = -Infinity;

let nan = NaN;
```

### String Type

```javascript
let apple = "사과";
let orange = "오렌지";
let concat = apple + ", " + orange;

// 탬플릿 리터럴 문법
let fruitsText = `${apple}와 ${orange}입니다.`;
```

### Boolean Type

```javascript
let isEmpty = false;
let isNull = true;
```

### Null Type

```javascript
let empty = null;
```

### Undefined Type

```javascript
let none;
```

## 형 변환(Type Conversion)

### 묵시적 형 변환

- 자바스크립트 엔진이 알아서 형 변환.

```javascript
let num = 10;
let str = "20";
const result1 = num + str; // "1020"
```

### 명시적 형 변환

- 개발자가 내장함수 등을 이용해서 직접 형 변환을 명시.

#### 문자열 -> 숫자

```javascript
const strToNum1 = num + Number(str); //30

let str2 = "20개";
const strToNum2 = num + parseInt(str2); //30
```

#### 숫자 -> 문자열

```javascript
const numToStr = num + String(20); //"1020"
```

## 연산자(Operator)

### 대입 연산자

```javascript
let var0 = 1;
```

### 산술 연산자

- \*, /, % 연산의 우선순위가 +, - 연산보다 높다.

```javascript
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;
let num6 = (1 + 2) * 10;
```

### 복합 대입 연산자

```javascript
let num7 = 10;
num7 += 2; //12
num7 -= 2; //10
num7 *= 2; //20
num7 /= 2; //10
num7 %= 7; //3
```

### 증감 연산자

```javascript
let num8 = 10;
++num8; //전위 연산
num8++; //후위 연산
```

### 논리 연산자

```javascript
let or = true || false; //true
let and = true && false; //false
let not = !true; //false;
```

### 비교 연산자

```javascript
let comp1 = 1 === 2; //false
let comp2 = 1 !== 2; //true
let comp3 = 2 > 1; //true
let comp4 = 2 < 1; //false
let comp5 = 2 >= 2; //true
let comp6 = 2 <= 2; //true
```

### null 병합 연산자

- 존재하는 값을 추려내는 기능
- null, undefined가 아닌 값을 찾아내는 연산자

```javascript
let var1;
let var2 = 10;
let var3 = 20;
let var4 = var1 ?? var2; //var4 = 10
let var5 = var1 ?? var3; //var5 = 20
let userName = "Captain America";
let nickName = "Winter Soldier";
let displayName = userName ?? nickName; //Captain America
```

### typeof 연산자

- 변수의 자료형을 문자열로 반환

```javascript
let type1 = typeof 10; //number
let type2 = typeof "Hello"; //string
let type3 = typeof true; //boolean
let type4 = typeof null; //object
let type5 = typeof undefined; //undefined
let type6 = typeof {}; //object
```

### 3항 연산자

- 조건식 ? 참일 때 반환값 : 거짓일 때 반환값

```javascript
let var6 = true;
let res1 = var6 ? "참" : "거짓"; //참
```

## 조건문(Conditional Statement)

### if문

```javascript
let num9 = 10;

if (num9 >= 10) {
  console.log("num는 10 이상입니다.");
} else if (num9 >= 5) {
  console.log("num9는 5 이상입니다.");
} else {
  console.log("num9는 5 미만입니다.");
}
```

### switch문

```javascript
let fruit = "apple";

switch (fruit) {
  case "apple": {
    console.log("사과입니다.");
    break;
  }
  case "banana": {
    console.log("바나나입니다.");
    break;
  }
  default: {
    console.log("과일이 아닙니다.");
  }
}
```

## 반복문(Loop Statement)

### 1. for문

- for (초기식; 조건식; 증감식) {실행문}

```javascript
for (let i = 0; i < 5; i++) {
  if (i % 2 == 0) {
    continue;
  }

  console.log("반복 차수: " + i); // 1, 3

  if (i >= 5) {
    break;
  }
}
```

### 2. for...in문

- 객체의 key(속성 이름)를 순회
- 반복 횟수가 불명확할 때 사용
- for (let key in 객체) {실행문}

```javascript
const objs = { a: 1, b: 2, c: 3 };

for (let key in objs) {
  console.log(key, obj[key]); // a 1, b 2, c 3
}
```

### 3. for...of문

- Iterable 객체(배열, 문자열, Map, Set 등)를 순회
- ES6에서 추가된 문법
- for (let value of 배열) {실행문}

```javascript
const fruits = ["apple", "banana", "orange"];

for (let fruit of fruits) {
  console.log(fruit); // apple, banana, orange
}
```

### 4. while문

- 조건이 참(true)인 동안 반복
- while (조건식) {실행문}

```javascript
let i = 0;

while (i < 5) {
  console.log("반복 차수: " + i); // 0, 1, 2, 3, 4
  i++;
}
```

### 5. do...while문

- 최소 1번은 실행 후 조건 검사
- 조건과 상관없이 무조건 한 번은 실행해야 할 때 사용
- do {실행문} while (조건식)

```javascript
i = 0;
do {
  console.log(i); // 0, 1, 2, 3, 4
  i++;
} while (i < 5);
```

### 6. Array.prototype.forEach()

- 배열의 각 요소에 대해 지정된 함수를 실행
- return, break, continue가 불가능
- 콜백 함수를 통해 요소 접근
- 배열.forEach(콜백함수)

```javascript
const arr1 = [10, 20, 30];

arr1.forEach((value, index) => {
  console.log(value, index); // 10 0, 20 1, 30 2
});
```

### 7. map, filter, reduce

- 고차 함수(Higher-Order Functions)
- 배열을 순회하며 값 변형, 필터링, 축약 등 수행
- 배열.map(콜백함수)
- 배열.filter(콜백함수)
- 배열.reduce(콜백함수)

```javascript
const arr2 = [1, 2, 3];
const mapRes = arr2.map((x) => x * x);
console.log(squared); // [1, 4, 9]

const filterRes = arr2.filter((x) => x > 1);
console.log(filterRes); // [2, 3]

const reduceRes = arr2.reduce((acc, cur) => acc + cur, 0);
console.log(reduceRes); // 6
```

## 함수(Function)

### 함수 선언문

```javascript
function add(a, b) {
  return a + b;
}

let addFn = add; //함수 참조

//함수 코드가 출력됨
console.log(add); //function add(a, b) {return a + b;}
console.log(addFn); //function add(a, b) {return a + b;}
```

### 호이스팅(Hoisting)

- 함수 선언문은 코드 실행 전에 먼저 실행되어,
- 코드 상 함수 선언과 호출의 순서가 맞지 않아도 함수 호출이 가능하다.
- 함수 표현식은 호이스팅이 되지 않는다.

```javascript
// 함수 호출
getArea(10, 20); //200

// 함수 선언
function getArea(width, height) {
  return width * height;
}
```

### 함수 표현식

- 익명 함수를 생성하여 바로 변수에 할당
- 호이스팅의 대상이 아님

```javascript
let subFn = function (a, b) {
  return a - b;
};
```

### 화살표 함수(Arrow Function)

- function 키워드 대신 => 사용
- 화살표 함수는 항상 익명 함수

```javascript
let addOne = (value) => value + 1;

let mulFn = (a, b) => {
  console.log("곱셈 함수");
  return a * b;
};
```

## 콜백 함수(Callback Function)

- 함수의 인자로 전달되는 함수
- 비동기 처리, 이벤트 처리 등에 사용

```javascript
function subMain(value) {
  value();
}

function printSub() {
  console.log("i am sub");
}

subMain(printSub);
```

### 콜백 함수의 활용

```javascript
function callFn(callback) {
  callback();
}

callFn(() => {
  console.log("콜백 함수 호출");
});
```

### 활용 예시

```javascript
function repeat(count, callback) {
  for (let i = 0; i < count; i++) {
    callback(i);
  }
}

repeat(5, (i) => {
  console.log(i); // 0, 1, 2, 3, 4
});

repeat(5, (i) => {
  console.log(i * 2); // 0, 2, 4, 6, 8
});

repeat(5, (i) => {
  console.log(i * 3); // 0, 3, 6, 9, 12
});
```

## 스코프(Scope)

- 우리말로 "범위"를 뜻함
- 변수나 함수에 접근하거나 호출할 수 있는 범위를 말함
- 전역 스코프(Global Scope): 코드 어디서든 접근 가능
- 지역 스코프(Local Scope): 특정 범위 내에서만 접근 가능
- 함수 스코프(Function Scope): 함수 내부에서만 접근 가능
- 블록 스코프(Block Scope): 블록 내부에서만 접근 가능

```javascript
const a = 1;

function outerFn() {
  const b = 2;

  console.log(a); //1
  console.log(b); //2
  console.log(c); //ReferenceError: c is not defined

  function innerFn() {
    const c = 3;

    console.log(a); //1
    console.log(b); //2
    console.log(c); //3
  }
}

console.log(a); //1
console.log(b); //ReferenceError: b is not defined
console.log(c); //ReferenceError: c is not defined
```

### 렉시컬 스코프(Lexical Scope)

- 함수가 선언된 위치(문맥)에 따라 상위 스코프가 결정되는 것을 의미한다.
- 실행되는 위치가 아니라 코드 상에서 함수가 어디에 작성되어 있는지가 중요하다.
- "렉시컬" 은 "문법적" 또는 "코드 작성 위치"라는 의미를 가진다.
- 자바스크립트는 렉시컬 스코프를 따르기 때문에 함수 선언 시점의 스코프 체인이 고정된다.
- 스코프 체인(Scope Chain): 스코프가 중첩되어 있는 구조
- 함수 내부에서 변수를 찾을 때, 자신의 스코프 → 외부 스코프 → 전역 스코프 순서로 탐색한다.

```javascript
const d = 1;

function outer() {
  const e = 2;

  function inner() {
    const f = 3;
  }
}
```

- inner() 함수는 outer() 안에서 선언되었기 때문에 outer()의 스코프를 기억한다.
- inner()가 **어디서 실행되든** 상관없이 d, e, f를 순서대로 참조할 수 있다.
- 이는 함수가 선언된 위치를 기준으로 스코프가 결정되기 때문이다.

## 객체(Object)

- 객체는 키(key)와 값(value)의 집합
- 객체는 중괄호 {}를 사용하여 만들 수 있다.
- 키는 문자열이나 심볼만 가능하고, 값은 모든 데이터 타입이 가능하다.

### 객체 생성

```javascript
let obj1 = new Object();
let obj2 = {}; //객체 리터럴 (대부분 이렇게 사용)
```

### 객체 프로퍼티 (객체 속성)

```javascript
const person = {
  name: "Tony Stark",
  age: 45,
  isIronMan: true,
  10: 20,
  "has a suit": true, //키 값에 공백이나 특수문자가 있을 때는 문자열로 작성
};
```

### 객체 프로퍼티 접근

```javascript
// 점 표기법 (Dot Notation): 객체.프로퍼티
let personName = person.name;
console.log(personName); //Tony Stark
// 대괄호 표기법 (Bracket Notation): 객체["프로퍼티"]
let personHasASuit = person["has a suit"]; //꼭 문자열로 작성.
console.log(personHasASuit); //true
// 활용
let propertyName = "age";
let personAge = person[propertyName];
console.log(personAge); //45
```

### 객체 프로퍼티 추가

```javascript
person.job = "CEO";
person["favoriteFood"] = "burger";
```

### 객체 프로퍼티 삭제

```javascript
delete person.favoriteFood;
delete person[10];
delete person["has a suit"];
console.log(person); //{name: "Tony Stark", age: 45, isIronMan: true, job: "CEO"}
```

### 객체 프로퍼티 존재 여부 확인

```javascript
let hasJob = "job" in person;
console.log(hasJob); //true
```

### 상수 객체(Const Object)

- 객체 자체를 변경할 수 없는 것이 아니라 객체의 **참조값**을 변경할 수 없다는 의미이다.
- 객체를 상수로 선언해도 객체의 내용을 변경할 수 있다.

```javascript
const animal = {
  type: "고양이",
  name: "나비",
  color: "검정색",
};

animal.age = 2; //추가
animal.color = "흰색"; //수정
delete animal.name; //삭제
```

### 메서드

- 값이 함수인 프로퍼티를 말한다.

```javascript
const person2 = {
  name: "Steve Rogers",
  age: 100,
  sayHi: function () {
    console.log("Hi, I'm " + this.name);
  },
  sayHello() {
    console.log("Hello, I'm " + this.name);
  },
};

person2.sayHi(); //Hi, I'm Steve Rogers
person2["sayHi"](); //Hi, I'm Steve Rogers
person2.sayHello(); //Hello, I'm Steve Rogers
person2["sayHello"](); //Hello, I'm Steve Rogers
```

## 배열(Array)

- 배열: 여러 개의 값을 순차적으로 나열한 자료구조

### 배열 생성

```javascript
let arrA = new Array(); //배열 생성자
let arrB = []; //배열 리터럴
let arrC = [
  1,
  2,
  3,
  true,
  false,
  "Hello",
  "World",
  null,
  undefined,
  () => {},
  [],
  {},
];
```

### 배열 요소 접근

```javascript
let item1 = arrC[0]; //1
let item2 = arrC[5]; //"Hello"
console.log(item1, item2); //1 "Hello"

arrC[0] = 10; //요소 수정
console.log(arrC[0]); //10
```
