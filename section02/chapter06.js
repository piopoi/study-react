// 반복문으로 배열과 객체 순회하기

// 순회(iteration)
// - 배열, 객체에 저장된 여러개의 값에 순서대로 하나씩 접근하는 것

// 1. 배열 순회
let arr = [1, 2, 3];

// 1-1. 배열 인덱스를 이용한 순회
for (let i = 0; i < arr.length; i++) {
  // console.log(arr[i]);
}

// 1-2. for of 문을 이용한 순회
for (let item of arr) {
  // console.log(item);
}

// 2. 객체 순회
let person = {
  name: "John",
  age: 20,
  hobby: "Reading Books",
};

// 2.1 Object.keys()를 이용한 순회
// Object.keys(): 객체의 키를 배열로 반환
let keys = Object.keys(person); // ['name', 'age', 'hobby']
for (let key of keys) {
  const value = person[key];
  // console.log(key, value); // 키, 값 출력
}

// 2.2 Object.values()를 이용한 순회
// Object.values(): 객체의 값을 배열로 반환
let values = Object.values(person); // ['John', 20, 'Reading Books']
for (let value of values) {
  // console.log(value); // 값만 출력
}

// 2.3 for in 문을 이용한 순회
for (let key in person) {
  const value = person[key];
  // console.log(key, value); // 키, 값 출력
}
