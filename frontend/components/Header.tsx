import { getAuth } from '@/auth/getAuth';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const { push, pathname } = useRouter();

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
      router.push('/login');
    }
  });

  return (
    <header>
      <Link href="/">
        <h1 className="w-6/12">Life-Kitz</h1>
      </Link>
      {!isAuthenticated ? (
        <nav>
          {pathname === '/login' ? (
            <Link href="/signup" className="text-blue-700 underline">
              Sign up
            </Link>
          ) : (
            <Link href="/login" className="text-blue-700 underline">
              Log in
            </Link>
          )}
        </nav>
      ) : (
        <nav className="flex w-full justify-between">
          <div>
            <Link href="/todos">Todos</Link>
            <Link href="/expenses">Expenses</Link>
            <Link href="/notes">Notes</Link>
          </div>
          <span onClick={handleLogout}>Logout</span>
        </nav>
      )}
    </header>
  );
};

export default Header;
