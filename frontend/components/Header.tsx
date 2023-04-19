import Link from 'next/link';
import { useRouter } from 'next/router';

interface HeaderProps {
  token: {
    access: string;
    refresh: string;
  } | null;
  setToken: (value: null) => void;
}

const Header: React.FC<HeaderProps> = ({ token, setToken }) => {
  const { push, pathname } = useRouter();

  const handleLogout = () => {
    setToken(null);
  };

  return (
    <header>
      <h1 className="w-6/12">Life-Kitz</h1>
      {token ? (
        <nav className="flex w-full justify-between">
          <div>
            <Link href="/todos">Todos</Link>
            <Link href="/expenses">Expenses</Link>
            <Link href="/notes">Notes</Link>
          </div>
          <span onClick={handleLogout}>Logout</span>
        </nav>
      ) : (
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
      )}
    </header>
  );
};

export default Header;
