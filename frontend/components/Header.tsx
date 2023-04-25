import { getAuth } from '@/auth/getAuth';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const { push, pathname } = useRouter();
  const [pathStyle, setPathStyle] = useState<string>(
    'border-b-[1px] border-b-quaternary text-quaternary hover:border-b-quinary hover:text-quinary'
  );
  const [notPathStyle, setNotPathStyle] = useState<string>(
    'hover:text-quinary text-tertiary'
  );

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('zipcode');
    push('/login');
  };

  useEffect(() => {
    // Check if user is authenticated
    const { token } = getAuth();
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [router]);

  return (
    <header className="flex w-full flex-col items-center justify-center gap-3 bg-primary px-3 py-10 text-white">
      <h1 className="text-6xl font-bold tracking-wide text-quaternary">
        <Link href="/">
          LifeKitz
        </Link>
      </h1>
      {!isAuthenticated ? (
        <nav>
          {pathname === '/login' ? (
            <Link href="/signup" className="text-quinary underline">
              Sign up
            </Link>
          ) : (
            <Link href="/login" className="text-quinary underline">
              Log in
            </Link>
          )}
        </nav>
      ) : (
        <nav className="flex gap-5 tracking-wide text-tertiary">
          <Link
            href="/todos"
            className={pathname === '/todos' ? pathStyle : notPathStyle}
          >
            Todos
          </Link>
          <Link
            href="/expenses"
            className={pathname === '/expenses' ? pathStyle : notPathStyle}
          >
            Expenses
          </Link>
          <Link
            href="/notes"
            className={pathname === '/notes' ? pathStyle : notPathStyle}
          >
            Notes
          </Link>
          <span onClick={handleLogout} className="text-quinary">
            Logout
          </span>
        </nav>
      )}
    </header>
  );
};

export default Header;
