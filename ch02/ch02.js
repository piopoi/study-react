//콘솔 로그 출력
console.log("Console Log 출력");

// *************************************
// 변수 선언
// *************************************

// 변수
// 초기화 이후 재할당 가능
let age = 20;
age = 30;

// 상수
// 초기화 이후 재할당 불가능
// 초기화 시 값 할당 필수
const cons = 10;

// *************************************
// 변수 명명 규칙(네이밍 규칙)
// *************************************

// 1. $, _ 제외한 기호는 사용할 수 없다.
let $_name;

// 2. 숫자로 시작할 수 없다.
let name1;
let $2name;
let _2name;

// 3. 예약어를 사용할 수 없다.
// let let;
// let if;

// *************************************
// JavaScript의 자료형(Data Type)
// ├── 원시 타입 (Primitive Type)
// │   ├── Number
// │   ├── String
// │   ├── Boolean
// │   ├── Null
// │   └── Undefined
// └── 객체 타입 (Object Type)
//     └── Object
//         ├── Array
//         ├── Function
//         └── RegExp
// *************************************

// Number Type
let number1 = 10;
let number2 = 1.5;
let number3 = -20;

let inf = Infinity;
let mInf = -Infinity;

let nan = NaN;

// String Type
let apple = "사과";
let orange = "오렌지";
let concat = apple + ", " + orange;

// 탬플릿 리터럴 문법
let fruitsText = `${apple}와 ${orange}입니다.`;

// Boolean Type
let isEmpty = false;
let isNull = true;

// Null Type (아무것도 없다)
let empty = null;

// Undefined Type
let none;

// *************************************
// 형 변환(Type Conversion)
// *************************************

// 묵시적 형 변환
// 자바스크립트 엔진이 알아서 형 변환.
let num = 10;
let str = "20";
const result1 = num + str; // "1020"

// 명시적 형 변환
// 개발자가 내장함수 등을 이용해서 직접 형 변환을 명시.
// 문자열 -> 숫자
const strToNum1 = num + Number(str); //30

let str2 = "20개";
const strToNum2 = num + parseInt(str2); //30

// 숫자 -> 문자열
const numToStr = num + String(20); //"1020"

// *************************************
// 연산자(Operator)
// *************************************

// 대입 연산자
let var0 = 1;

// 산술 연산자
// *, /, % 연산의 우선순위가 +, - 연산보다 높다.
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;
let num6 = (1 + 2) * 10;

// 복합 대입 연산자
let num7 = 10;
num7 += 2; //12
num7 -= 2; //10
num7 *= 2; //20
num7 /= 2; //10
num7 %= 7; //3

// 증감 연산자
let num8 = 10;
++num8; //전위 연산
num8++; //후위 연산

// 논리 연산자
let or = true || false; //true
let and = true && false; //false
let not = !true; //false;

// 비교 연산자
let comp1 = 1 === 2; //false
let comp2 = 1 !== 2; //true
let comp3 = 2 > 1; //true
let comp4 = 2 < 1; //false
let comp5 = 2 >= 2; //true
let comp6 = 2 <= 2; //true

// null 병합 연산자
// 존재하는 값을 추려내는 기능
// null, undefined가 아닌 값을 찾아내는 연산자
let var1;
let var2 = 10;
let var3 = 20;
let var4 = var1 ?? var2; //var4 = 10
let var5 = var1 ?? var3; //var5 = 20
