// 구조분해할당

// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three, four = "기본값"] = arr;
// console.log(one, two, three, four); // 1 2 3 undefined

// 2. 객체의 구조 분해 할당
let person = {
  name: "홍길동",
  age: 30,
  hobby: "독서",
};

let { name, age: myAge, hobby, job = "프로그래머" } = person;
// console.log(name, myAge, hobby, job); // 홍길동 30 독서 프로그래머

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra); // 홍길동 30 독서 undefined
};
func(person); //객체를 매개변수로 전달해야 한다.
