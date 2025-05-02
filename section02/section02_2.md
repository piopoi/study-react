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

### Promise

- 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체
- 비동기 작업을 래핑하는(감싸는) 객체
- 기능: 비동기 작업의 실행, 상태 관리, 결과 저장, 병렬 실행, 다시 실행 등등
