import "./App.css";
import Header from "./components/Header"; //Vite 앱에서는 확장자 안써도 됨.
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
