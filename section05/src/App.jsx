import "./App.css";
import Header from "./components/Header"; //Vite 앱에서는 확장자 안써도 됨.
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button";

function App() {
  const buttonProps = {
    text: "mail",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
  };

  return (
    <>
      <Button {...buttonProps} />
      <Button text={"cafe"} />
      <Button text={"blog"}>
        <Header />
      </Button>
    </>
  );
}

export default App;
