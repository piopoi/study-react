// Promise: 비동기 작업의 결과를 나타내는 객체
// executor: 비동기 작업을 실행하는 함수
// resolve(): Promise 객체를 성공(Fulfilled) 상태로 전환하는 함수
// reject(): Promise 객체를 성공(Rejected) 상태로 전환.

const promise = new Promise((resolve, reject) => {
  // executor
  setTimeout(() => {
    const num = 10;

    if (typeof num === "number") {
      resolve(num + 10);
    } else {
      reject("num is not a number");
    }
  }, 1000);
});

// then(): Promise 객체가 성공(Fulfilled) 상태일 때 그 후에 호출되는 함수
promise.then((value) => {
  console.log(value);
});

// catch(): Promise 객체가 실패(Rejected) 상태일 때 그 후에 호출되는 함수
promise.catch((error) => {
  console.log(error);
});

// then()과 catch()는 모두 Promise 객체를 반환한다. 따라서 아래와 같이 연결해서 사용할 수 있다.
// => Promise 체이닝
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num is not a number");
      }
    }, 1000);
  });
  return promise;
}

// 콜백 지옥 예시
const p1 = add10(0);
p1.then((result) => {
  console.log(result);
  const newP = add10(result);
  newP.then((result) => {
    console.log(result);
  });
  return newP; //then 메서드의 결과를 가진 새로운 Promise 객체를 반환한다
});

add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    //return add10(result);
    return add10(undefined); // 에러 발생
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    // 위의 어떤 then 메서드에서든 에러가 발생하면 catch 메서드로 전달된다.
    console.log(error);
  });
