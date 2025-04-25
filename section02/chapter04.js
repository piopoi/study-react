// Spread 연산자와 Rest 매개변수

// 1. Spread 연산자
// - Spread: 흩뿌리다, 펼치다 라는 뜻.
// - 배열이나 객체에 저장된 여러 개의 값을 펼쳐서 새로운 배열이나 객체를 만드는 데 사용됨.
// - 배열이나 객체를 복사하거나 결합할 때 유용하다.

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];
// console.log(arr2); // [4, 1, 2, 3, 5, 6]

let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3, d: 4 };
// console.log(obj2); // { a: 1, b: 2, c: 3, d: 4 }

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}
funcA(...arr1); //1 2 3 // arr1의 요소를 펼쳐서 매개변수로 전달

// 2. Rest 매개변수
// - Rest: 나머지라는 뜻.
// - 매개변수에 ...을 붙이면 나머지 매개변수로 사용됨.
// - 배열로 전달됨.
// - 반드시 마지막에 위치해야 함.
function funcB(p1, p2, ...rest) {
  console.log(p1, p2, rest);
}
let arr3 = [1, 2, 3, 4, 5];
funcB(...arr3); // 1 2 [3, 4, 5]
funcB(...[1, 2, 3]); // 1 2 3
funcB(...[1]); // 1 undefined []
