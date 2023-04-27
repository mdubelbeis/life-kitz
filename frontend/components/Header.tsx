import { getAuth } from '@/auth/getAuth';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState<string>('');
  const router = useRouter();
  const { push, pathname } = useRouter();
  const [pathStyle, setPathStyle] = useState<string>(
    'border-b-[1px] border-b-quaternary text-quaternary hover:border-b-logo hover:text-logo'
  );
  const [notPathStyle, setNotPathStyle] = useState<string>(
    'hover:text-quaternary text-tertiary'
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

    // Get username from api call and set it to state
    const getUsername = async () => {
      const response = await fetch('http://127.0.0.1:8000/auth/login/', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token').slice(1, -1)}`,
        },
      });
      const data = await response.json();
      setUsername(data.user);
    };

    getUsername();
  }, [router]);

  return (
    <header className="flex w-full flex-col items-center justify-center gap-3 bg-primary px-3 py-10 font-thin text-white lg:flex-row lg:justify-between lg:font-light">
      <h1 className="text-6xl font-bold tracking-wide text-logo">
        <Link href="/">LifeKitz</Link>
      </h1>
      {!isAuthenticated ? (
        <nav>
          {pathname === '/login' ? (
            <Link href="/signup" className="text-tertiary underline">
              Sign up
            </Link>
          ) : (
            <Link href="/login" className="text-tertiary underline">
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
          <span
            className="text-white hover:cursor-pointer"
            onClick={handleLogout}
          >
            Logout
          </span>
          <h3 className="absolute left-2 top-2">Hello, {username}</h3>
        </nav>
      )}
    </header>
  );
};

export default Header;
