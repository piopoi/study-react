// async & await

// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 Promise를 반환하도록 변환해준다

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

// await
// 비동기 작업을 동기적으로 작성할 수 있게 해주는 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할
// await는 async 함수 내부에서만 사용할 수 있다

function printData1() {
  getData().then((result) => {
    console.log(result);
  });
}

async function printData2() {
  const data = await getData();
  console.log(data);
}
