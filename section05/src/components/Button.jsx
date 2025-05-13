const Button = ({ text, color, children }) => {
  const onClickButton = (e) => {
    console.log(text);
    console.log(e);
  };

  return (
    <>
      <button
        onClick={onClickButton}
        // onMouseEnter={onClickButton}
        style={{ color: color }}
      >
        {text} - {color}
        {children}
      </button>
      <br />
    </>
  );
};

// 기본 값 설정 (React 18 까지)
Button.defaultProps = {
  text: "button",
  color: "black",
};

// 기본 값 설정 (React 19 이상): 구조분해 할당 방식으로 기본값 설정하도록 변경됨.
//const Button = ({ text = "button", color = "black" }) => {

export default Button;
