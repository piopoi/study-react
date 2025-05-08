# Section02. JavaScript 심화 2

## 동기와 비동기

### 동기(Sync)

- 동기란, 여러개의 작업을 순서대로 하나씩 처리하는 실행 방식을 말한다.
- 자바스크립트는 기본적으로 동기 방식으로 코드가 실행된다.
- 자바스크립트 엔진에는 쓰레드가 1개밖에 없다.
  - 자바스크립트는 싱글 쓰레드로 동작한다.
- 동기 방식에는 치명적인 단점이 존재한다.
  - 먼저 실행되는 작업이 얼마나 걸리냐에 따라 전체 작업 시간이 그 만큼 더 길어진다.

### 비동기(Async)

- 비동기 방식에서는 앞선 작업의 종료를 기다리지 않고 다음 작업을 시작할 수 있다.
- 자바스크립트는 싱글 스레드로 동작하는데 어떻게 비동기 방식이 가능한가?
  - 비동기 작업들은 자바스크립트 엔진이 아닌 Web APIs에서 실행된다.
  - Web APIs: 웹 브라우저가 직접 관리하는 별도의 영역.
  - Nginx가 I/O Blocking 작업을 커널 명령어를 호출하여 수행하는 것과 비슷한 메커니즘으로 보인다.

```javascript
console.log(1);

setTimeout(() => {
  console.log(2);
}, 1000); // 1000ms(1초) 후에 실행

console.log(3);
```

실행 결과

```
1
3
2
```

### 비동기 함수와 Callback 함수 사용 예시

```javascript
function add(a, b, callback) {
  setTimeout(() => {
    const result = a + b;
    callback(result);
  }, 1000);
}

add(1, 2, (value) => {
  console.log(value);
});
```

실행 결과

```
3 (1초 뒤)
```

```javascript
// 음식을 주문하는 기능
function orderFood(callback) {
  setTimeout(() => {
    const food = "햄버거";
    callback(food);
  }, 1000);
}

// 음식을 식히는 기능
function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 1000);
}

// 음식을 냉동하는 기능
function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 1000);
}

orderFood((food) => {
  console.log(food);
  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood);

    freezeFood(cooldownedFood, (freezedFood) => {
      console.log(freezedFood);
    });
  });
});
```

실행 결과

```
햄버거 (1초 뒤)
식은 햄버거 (1초 뒤)
냉동된 식은 햄버거 (1초 뒤)
```

- 위와 같이 비동기 방식으로 콜백을 이용한 기능을 만들어 봤지만, **콜백 지옥** 상황이 벌어졌다.
  - 콜백 지옥으로 인해, 가독성이 매우 떨어진다.
  - **Promise**를 사용하자!!

## Promise

- **비동기 작업**을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 **객체**
- **비동기 작업을 래핑**하는(감싸는) 객체
- 기능: 비동기 작업의 실행, 상태 관리, 결과 저장, 병렬 실행, 다시 실행 등등

### Promise의 3가지 상태

- 대기(Pending): 아직 작업이 완료되지 않은 상태
- 성공(Fulfilled): 비동기 작업이 성공적으로 마무리 된 상태
- 실패(Rejected): 비동기 작업이 실패한 상태

### resolve(), reject()

executor: 비동기 작업을 실행하는 함수  
`resolve()`: Promise 객체를 **성공(Fulfilled) 상태로 전환**하는 함수  
`reject()`: Promise 객체를 **실패(Rejected) 상태로 전환**하는 함수

```javascript
const promise = new Promise((resolve, reject) => {
  // executor
  const num = 10;
  if (typeof num === "number") {
    resolve(num + 10);
  } else {
    reject("num is not a number");
  }
});
```

### then()

Promise 객체가 **성공(Fulfilled)** 상태일 때 그 후에 호출되는 함수

```javascript
promise.then((value) => {
  console.log(value);
});
```

### catch()

Promise 객체가 **실패(Rejected)** 상태일 때 그 후에 호출되는 함수

```javascript
promise.catch((error) => {
  console.log(error);
});
```

### Promise 체이닝

`then()`과 `catch()`는 모두 Promise 객체를 반환한다. 따라서 아래와 같이 연결해서 사용할 수 있다.

```javascript
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
```

### 콜백 지옥

```javascript
function add10(num) {
  const promise = new Promise((resolve, reject) => {
    if (typeof num === "number") {
      resolve(num + 10);
    } else {
      reject("num is not a number");
    }
  return promise;
}

// 콜백 지옥
const p1 = add10(0);          // 1
p1.then((result) => {         // 2
  const newP = add10(result); // 3
  newP.then((result) => {     // 4
    console.log(result);
  });
  return newP;
});
```

1. add10(0)을 호출하여 첫 번째 Promise 객체(p1)를 생성한다.
2. p1이 성공(Fulfilled) 상태가 되면 then() 메서드의 콜백 함수가 실행된다.
3. 콜백 함수 내부에서 다시 add10(result)를 호출하여 두 번째 Promise 객체(newP)를 생성한다.
4. 이 방식은 Promise를 사용하더라도 콜백 함수 안에 또 다른 Promise의 then()을 중첩하여 사용하므로 여전히 콜백 지옥 패턴이 발생한다.

이런 중첩된 구조는 코드 가독성을 떨어뜨리고 유지보수를 어렵게 만든다.

### Promise Chaining: 콜백 지옥 해결

Promise Chaining은 **여러 비동기 작업을 순차적으로 처리**할 수 있게 해주는 패턴이다. 각 `then()`은 **새로운 Promise를 반환**하므로, 이를 연결하여 **중첩된 콜백 없이** 깔끔하게 비동기 로직을 구성할 수 있다. 이 방식은 코드의 가독성을 높이고 에러 처리를 단순화한다.

`catch()` 메서드는 체인 내 **어느 단계에서든 발생한 모든 에러를 한 곳에서 처리**할 수 있게 해준다. 이는 여러 개의 에러 처리 콜백을 작성할 필요 없이 마지막에 **하나의 `catch()`만 추가하면 되므로 코드가 간결**해진다.

```javascript
add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(undefined); // 에러 발생
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
```

## async & await

`async`와 `await`는 Promise를 더 간결하고 직관적으로 사용할 수 있게 해주는 키워드다.

### async

- 어떤 함수를 **비동기 함수로 만들어주는** 키워드
- 함수가 **Promise를 반환**하도록 변환해준다.

```javascript
async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "John",
        age: 20,
      });
    }, 1000);
  });
}
```

### await

- **비동기 작업을 동기적으로** 작성할 수 있게 해주는 키워드
- **비동기 함수가 다 처리되기를 기다리는** 역할을 한다.
- await는 **async 함수 내부에서만 사용할 수 있다**.

```javascript
async function printData2() {
  const data = await getData();
  console.log(data);
}
```

### Promise vs async/await

Promise 방식

```javascript
function printData1() {
  getData().then((result) => {
    console.log(result);
  });
}
```

async/await 방식

```javascript
async function printData2() {
  const data = await getData();
  console.log(data);
}
```

- **두 방식 모두 Promise를 기반**으로 비동기 작업을 처리한다.
- async/await 방식이 더 직관적이고 동기 코드와 유사한 구조로 작성할 수 있다.
- Promise 방식은 체이닝을 통해 연속적인 비동기 작업을 처리하지만, async/await는 일반 코드처럼 순차적으로 작성할 수 있다.
- async/await 방식이 코드 가독성 측면에서 더 우수하다.

### 연속적인 비동기 작업 처리

- async/await 방식도 **연속적인 비동기 작업을 처리할 수 있다**.
- Promise 체이닝보다 **더 직관적으로 코드를 작성**할 수 있다.
- 일반 동기 코드와 유사한 구조로 **읽기 쉽고 디버깅하기 편하다**.
- try-catch 구문을 사용해 오류 처리를 더 자연스럽게 할 수 있다.
- await는 Promise의 .catch()처럼 에러를 직접 변환하거나 추가 정보를 더하는 기능이 없어 에러 처리 유연성이 떨어진다.

#### Promise Chaining 방식

```javascript
function processData() {
  fetchData()
    .then((data) => {
      return processStep1(data);
    })
    .then((result1) => {
      return processStep2(result1);
    })
    .then((result2) => {
      return processStep3(result2);
    })
    .then((finalResult) => {
      console.log(finalResult);
    })
    .catch((error) => {
      console.error(error);
    });
}
```

#### async/await 방식

```javascript
async function processData() {
  try {
    const data = await fetchData();
    const result1 = await processStep1(data);
    const result2 = await processStep2(result1);
    const finalResult = await processStep3(result2);
    console.log(finalResult);
  } catch (error) {
    console.error(error);
  }
}
```
