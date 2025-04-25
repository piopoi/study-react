// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 현재 날짜와 시간
let date2 = new Date("2025-3-25"); // 2025-03-24T15:00:00.000Z

// month 값이 0부터 시작한다는 부분에 주의해야 함
// 1월은 0, 2월은 1로 설정해야 한다.
let date3 = new Date(1977, 1, 7, 23, 59, 59); // 1977-02-07T14:59:59.000Z

// 2. Timestamp
// 1970-01-01T00:00:00.000Z부터 현재까지의 밀리초
// 1970-01-01T00:00:00.000Z = UTC
let ts1 = date1.getTime(); // Date to Timestamp
let date4 = new Date(ts1); // Timestamp to Date

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear(); // 연도
let month = date1.getMonth(); // 월 (0~11)
let date = date1.getDate(); // 일 (1~31)
let day = date1.getDay(); // 요일 (0~6, 0: 일요일)
let hours = date1.getHours(); // 시 (0~23)
let minutes = date1.getMinutes(); // 분 (0~59)
let seconds = date1.getSeconds(); // 초 (0~59)
let milliseconds = date1.getMilliseconds(); // 밀리초 (0~999)
let timezoneOffset = date1.getTimezoneOffset(); // UTC와의 차이 (분 단위)

// 4. 시간 수정하기
// 요일은 수정할 수 없음
date1.setFullYear(2025); // 연도 수정
date1.setMonth(2); // 월 수정 (0~11)
date1.setDate(15); // 일 수정 (1~31)
date1.setHours(10); // 시 수정 (0~23)
date1.setMinutes(30); // 분 수정 (0~59)
date1.setSeconds(45); // 초 수정 (0~59)
date1.setMilliseconds(500); // 밀리초 수정 (0~999)

// 5. 시간을 여러 포맷으로 출력하기
let defaultString = date1.toString(); // "Sat Mar 15 2025 10:30:45 GMT+0900 (KST)"
let dateString = date1.toDateString(); // "2025-03-15"
let timeString = date1.toTimeString(); // "10:30:45 GMT+0900 (KST)"
let isoString = date1.toISOString(); // "2025-03-15T01:30:45.500Z"
let utcString = date1.toUTCString(); // "Sat, 15 Mar 2025 01:30:45 GMT"

let localeString1 = date1.toLocaleString(); // "2025. 3. 15. 오전 10:30:45"
let localeString2 = date1.toLocaleString("ko-KR"); // "2025. 3. 15. 오전 10:30:45"
let localeDateString = date1.toLocaleDateString(); // "2025. 3. 15."
let localeTimeString = date1.toLocaleTimeString(); // "오전 10:30:45"

let customString = date1.toLocaleString("ko-KR", { timeZone: "Asia/Seoul" }); // "2025. 3. 15. 오전 10:30:45"
