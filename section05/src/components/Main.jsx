import "./Main.css";

const Main = () => {
  const user = {
    name: "John",
    isLogin: true,
  };

  if (user.isLogin) {
    return (
      // <div style={{ backgroundColor: "red", borderBottom: "5px solid blue" }}>
      <div className="logout">로그아웃</div> //class가 아니라 className이다.
    );
  } else {
    return <div>로그인</div>;
  }
};

export default Main;
