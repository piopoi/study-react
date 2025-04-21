// 단락 평가(Short-circuit Evaluation)

function returnFalse() {
  console.log("False Function");
  return false; //Falsy한 값(undefined 등)을 넣어도 같은 동작을 함
}

function returnTrue() {
  console.log("True Function");
  return true; //Truthy한 값(1, "문자열" 등)을 넣어도 같은 동작을 함
}
("");

console.log(returnFalse() && returnTrue()); // returnTrue는 실행되지 않음
console.log(returnTrue() && returnFalse()); // 둘 다 실행됨

console.log(returnTrue() || returnFalse()); // returnFalse는 실행되지 않음
console.log(returnFalse() || returnTrue()); // 둘 다 실행됨

// 단락 평가 활용 사례
function printName(person) {
  const name = person && person.name;
  console.log(name || "이름이 없음");
}
printName(); // 이름이 없음
printName({ name: "John" }); // John
