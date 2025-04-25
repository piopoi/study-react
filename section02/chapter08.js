// 5가지 요소 순회 및 탐색 메서드

// 1. forEach
// 배열의 각 요소에 대해 주어진 함수를 실행
const arr0 = ["a", "b", "c"];

arr0.forEach(function (item, idx, arr) {
  console.log(item, idx, arr);
});
// a 0 [ 'a', 'b', 'c' ]
// b 1 [ 'a', 'b', 'c' ]
// c 2 [ 'a', 'b', 'c' ]

const arr1 = [1, 2, 3];
const doubledArr = [];
arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

console.log(doubledArr); // [2, 4, 6]

// 2. includes
// 배열에 특정 요소가 포함되어 있는지 확인
const arr2 = [1, 2, 3];
const isInclude1 = arr2.includes(3);
const isInclude2 = arr2.includes(99);

console.log(isInclude1, isInclude2); // true false

// 3. indexOf
// 배열에서 특정 요소의 인덱스를 반환
let arr3 = [1, 2, 3];
const index1 = arr3.indexOf(2); // 2의 인덱스 반환
arr3 = [2, 2, 2];
const index2 = arr3.indexOf(2); // 첫 번째로 발견된 인덱스 반환
const index3 = arr3.indexOf(99); // 없는 요소는 -1 반환

console.log(index1, index2, index3); // 1 0 -1

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 첫 번째 요소의 "인덱스"를 반환
const arr4 = [1, 2, 3];
const findedIndex1 = arr4.findIndex((item) => {
  if (item % 2 !== 0) return true; // 홀수인 첫 번째 요소 반환
});
const findedIndex2 = arr4.findIndex((item) => item % 2 !== 0); // 홀수인 첫 번째 요소 반환
const findedIndex3 = arr4.findIndex((item) => item === -1); // 없는 요소는 -1 반환

console.log(findedIndex1, findedIndex2, findedIndex3); // 0 0 -1

// indexOf와 findIndex의 차이점
// - indexOf는 요소의 값으로 인덱스를 찾고, findIndex는 콜백함수의 조건으로 인덱스를 찾는다.
// - indexOf는 얕은 비교(===)를 사용한다 -> 참조 메모리 주소를 비교한다.
// - findIndex는 콜백 함수를 이용하여, 특정 프로퍼티 값으로 객체를 찾을 수 있다.
let objectArr = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
  { id: 3, name: "c" },
];

console.log(
  objectArr.indexOf({ id: 1, name: "a" }), // -1
  objectArr.findIndex((item) => item.name === "b") // 1
);

// 5. find
// 모든 요소를 순회하면서, 콜백함수를 만족하는 첫 번째 "요소"를 반환
let arr5 = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
  { id: 3, name: "c" },
];

console.log(
  arr5.find((item) => item.id === 1), // { id: 1, name: 'a' }
  arr5.find((item) => item.name === "b"), // { id: 2, name: 'b' }
  arr5.find((item) => item.id === 99) // undefined
);
