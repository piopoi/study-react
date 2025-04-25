// 6가지 요소 조작 메서드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하고, 추가된 요소의 개수를 반환
const arr1 = [1, 2, 3];
const arr1Length = arr1.push(4, 5, 6, 7);
// console.log(arr1); // [1, 2, 3, 4, 5, 6, 7]
// console.log(arr1Length); // 7

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고, 제거된 요소를 반환
const arr2 = [1, 2, 3];
const arr2PoppedItem = arr2.pop();
// console.log(arr2); // [1, 2]
// console.log(arr2PoppedItem); // 3

// 3. shift
// 배열의 맨 앞에 있는 요소를 제거하고, 제거된 요소를 반환
const arr3 = [1, 2, 3];
const arr3ShiftedItem = arr3.shift();
// console.log(arr3); // [2, 3]
// console.log(arr3ShiftedItem); // 1

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하고, 추가된 요소의 개수를 반환
const arr4 = [1, 2, 3];
const arr4Length = arr4.unshift(4, 5);
// console.log(arr4); // [4, 5, 1, 2, 3]
// console.log(arr4Length); // 5

// 주의사항
// - shift/unshift 메서드는 배열의 맨 앞에 요소를 추가하거나 제거하기 때문에, 기존의 요소들은 뒤로 밀리게 된다.
// - 따라서, shift/unshift는 push/pop보다 느리다.

// 5. slice
// 배열의 일부를 잘라내어 새로운 배열을 반환
// 원본 배열은 변경되지 않음
const arr5 = [1, 2, 3, 4, 5];
const arr5Sliced1 = arr5.slice(0, 2); // 인덱스 0부터 1까지 잘라냄
const arr5Sliced2 = arr5.slice(2); // 인덱스 2부터 끝까지 잘라냄
const arr5Sliced3 = arr5.slice(-2); // 뒤에서부터 2개 잘라냄
// console.log(arr5); // [1, 2, 3, 4, 5]
// console.log(arr5Sliced1); // [1, 2]
// console.log(arr5Sliced2); // [3, 4, 5]
// console.log(arr5Sliced3); // [4, 5]

// 6. concat
// 두 개 이상의 배열을 합쳐서 새로운 배열을 반환
// 원본 배열은 변경되지 않음
const arr6 = [1, 2, 3];
const arr7 = [4, 5, 6];
const concatedArr = arr6.concat(arr7);
// console.log(concatedArr); // [1, 2, 3, 4, 5, 6]
