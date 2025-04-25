// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 추출(필터링)하여 새로운 배열을 생성 후 반환.
let arr1 = [
  { name: "홍길동", hobby: "테니스" },
  { name: "이몽룡", hobby: "테니스" },
  { name: "성춘향", hobby: "독서" },
];

const tennisPeople = arr1.filter((person) => person.hobby === "테니스");
console.log(tennisPeople);
// [{ name: "홍길동", hobby: "테니스" }, { name: "이몽룡", hobby: "테니스" }]

// 2. map
// 기존 배열의 각 요소를 변형하여 새로운 배열을 생성 후 반환.
let arr2 = [1, 2, 3];

const mapResult1 = arr2.map((item, idx, arr) => {
  return item * 2;
});
console.log(mapResult1); // [2, 4, 6]

let names = arr1.map((person) => person.name);
console.log(names); // ["홍길동", "이몽룡", "성춘향"]

// 3. sort
// 배열을 사전 순으로 정렬하는 메서드
let arr3 = ["b", "a", "c"];

arr3.sort();
console.log(arr3); // ["a", "b", "c"]

// sort 메서드는 기본적으로 문자열 정렬을 수행하므로 숫자 정렬을 원할 경우 비교 함수를 제공해야 함
let arr4 = [10, 3, 2];
arr4.sort(); // 오름차순
console.log(arr4); // [10, 2, 3]

arr4.sort((a, b) => a - b); // 오름차순
console.log(arr4); // [2, 3, 10]

arr4.sort((a, b) => b - a); // 내림차순
console.log(arr4); // [10, 3, 2]

// 4. toSorted
// sort 메서드는 원본 배열을 변형하는 반면, toSorted 메서드는 원본 배열을 변형하지 않고 정렬된 새로운 배열을 반환
let arr5 = ["c", "a", "b"];

const arr5Sorted = arr5.toSorted();

console.log(
  arr5, // ["c", "a", "b"]
  arr5Sorted // ["a", "b", "c"]
);

// 5. join
// 배열의 모든 요소를 연결하여 문자열로 반환
let arr6 = ["a", "b", "c"];

let arr6Joined1 = arr6.join(); // 기본 구분자(콤마) 사용
let arr6Joined2 = arr6.join(""); // 빈 문자열을 구분자로 사용

console.log(
  arr6Joined1, // "a,b,c"
  arr6Joined2 // "abc"
);
