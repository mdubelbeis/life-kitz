import Link from "next/link";
import { useState } from "react";

const Header: React.FC = () => {
  const [userAuth, setUserAuth] = useState(false);

  return (
    <header>
      <h1>Life-Kitz</h1>
      {userAuth ? (
        <nav>
          <Link href="/">Home</Link>
          <Link href="/todos">Todos</Link>
          <Link href="/expenses">Expenses</Link>
          <Link href="/notes">Notes</Link>
          <Link href="/logout">Logout</Link>
        </nav>
      ) : (
        <nav>
          <Link href="/">Home</Link>
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
