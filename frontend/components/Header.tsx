import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [userAuth, setUserAuth] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      setUserAuth(true);
    } else {
      setUserAuth(false);
    }
  }, [userAuth]);

  return (
    <header>
      <h1 className="w-6/12">Life-Kitz</h1>
      {userAuth ? (
        <nav className="flex w-full justify-between">
          <div>
            <Link href="/todos">Todos</Link>
            <Link href="/expenses">Expenses</Link>
            <Link href="/notes">Notes</Link>
          </div>
          <Link href="/logout">Logout</Link>
        </nav>
      ) : (
        <nav>
          <Link href="/">Home</Link>

          {router.pathname === '/login' ? (
            <Link href="/signup" className="text-blue-700 underline">
              Sign up
            </Link>
          ) : (
            <Link href="/login" className="text-blue-700 underline">
              Log in
            </Link>
          )}
        </nav>
      )}
    </header>
  );
};

export default Header;
