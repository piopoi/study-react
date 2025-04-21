// Falsy & Truthy

// 1. Fasly한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN; //Not a Number
let f6 = ""; //빈 문자열
let f7 = 0n; //BigInteger

if (!f1 && !f2 && !f3 && !f4 && !f5 && !f6 && !f7) {
  console.log("All values are falsy");
}

// 2. Truthy한 값
// 7가지 Falsy한 값을 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = []; //Array
let t4 = {}; //Object
let t5 = function () {}; //Function
let t6 = () => {}; //Arrow Function
let t7 = Symbol("symbol"); //Symbol
let t8 = BigInt(123); //BigInteger

if (t1 && t2 && t3 && t4 && t5 && t6 && t7 && t8) {
  console.log("All values are truthy");
}

// 3. 활용 사례
function printName(person) {
  // 이렇게 조건을 설정하면 모든 Falsy한 값 체크해야 한다.
  // if (person == undefined || person == null) {
  // !person으로 한 번에 체크 가능
  if (!person) {
    console.log("Person의 값이 없음");
    return;
  }
  console.log(person.name);
}
let person1 = { name: "John" };
let person2;
printName(person1);
printName(person2);
