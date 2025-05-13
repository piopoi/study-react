import { useState, useRef } from "react";

// 간단한 회원 가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const countRef = useRef(0);
  const nameRef = useRef();
  const birthRef = useRef();
  const countryRef = useRef();
  const bioRef = useRef();

  const onChange = (e) => {
    countRef.current++;
    console.log(countRef.current);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    if (input.name === "") {
      nameRef.current.focus(); // 이름을 입력하는 DOM 요소에 포커스
    } else if (input.birth === "") {
      birthRef.current.focus();
    } else if (input.country === "") {
      countryRef.current.focus();
    } else if (input.bio === "") {
      bioRef.current.focus();
    }
  };

  return (
    <div>
      <div className="m-5 space-y-4">
        <input
          ref={nameRef}
          type="text"
          name="name"
          className="input input-neutral"
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
        />
        <input
          ref={birthRef}
          type="date"
          name="birth"
          className="input input-neutral"
          value={input.birth}
          onChange={onChange}
        />
        <select
          ref={countryRef}
          name="country"
          className="select select-neutral"
          value={input.country}
          onChange={onChange}
        >
          <option value="">선택</option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
        <textarea
          ref={bioRef}
          name="bio"
          className="textarea textarea-neutral resize-none"
          value={input.bio}
          onChange={onChange}
          placeholder={"자기소개"}
        />
      </div>
      <div className="m-5">
        <button className="btn" onClick={onSubmit}>
          제출
        </button>
      </div>
    </div>
  );
};

export default Register;
