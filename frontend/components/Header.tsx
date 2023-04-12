import { useState } from "react";

const Header: React.FC = () => {
  const [userAuth, setUserAuth] = useState(false);

  return (
    <header>
      <h1>Life-Kitz</h1>
      {userAuth ? (
        <nav>
          <a href="/">Home</a>
          <a href="/todos">Todos</a>
          <a href="/expenses">Expenses</a>
          <a href="/notes">Notes</a>
        </nav>
      ) : (
        <nav>
          <a href="/">Home</a>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
