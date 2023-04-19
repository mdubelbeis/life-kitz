import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Forms from './auth/Forms';

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false); // TODO: Use state management call to set auth
  const [token, setToken] = useState<{
    access: string;
    refresh: string;
  } | null>(null); // TODO: Use state management call to set token

  // const handleLogout = () => {} //?

  // const handleLogin = (token: { access: string; refresh: string }) => {
  //   setToken(token);
  //   setIsAuthenticated(true);
  // }
  const { push } = useRouter();

  const getAuthUser = async () => {
    try {
      const res = await fetch('http://127.0.0.1:8000/auth/login/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorizations: `Bearer ${token?.access}`,
        },
      });

      const data = await res.json();

      if (data.auth) {
        setIsAuthenticated(true);
      } else {
        push('/login');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAuthUser();
  });
  return (
    <>
      <Header token={token} setToken={setToken} />
      {token && <main>{children}</main>}
      {!token && (
        <main className="mx-auto flex h-screen w-11/12 items-center justify-center">
          <Forms setToken={setToken} />
        </main>
      )}
      <Footer />
    </>
  );
};

export default Layout;
