import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Header: React.FC = () => {
  const [userAuth, setUserAuth] = useState(false);
  const router = useRouter();

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
          <div>
            {router.pathname === '/login' ? (
              <Link href="/signup" className="text-blue-700 underline">
                Sign up
              </Link>
            ) : (
              <Link href="/login" className="text-blue-700 underline">
                Log in
              </Link>
            )}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
