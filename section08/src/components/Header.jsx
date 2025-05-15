import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <h1>🗓️ {new Date().toLocaleDateString()}</h1>
    </div>
  );
};

export default Header;
