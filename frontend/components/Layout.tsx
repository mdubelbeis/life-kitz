import { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Forms from './auth/Forms';

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // TODO: Use state management call to set auth

  const setAuthToLocalStorage = () => {
    // TODO: Set auth to local storage
    if (!localStorage.getItem('jwtToken')) {
      setIsAuthenticated(false);
    } else {
      setIsAuthenticated(true);
    }
  };

  useEffect(() => {
    // Use useEffect to access sessionid and if sessionid valid -> setIsAuth(true)
    // Access sessionid from Application cookies
    setAuthToLocalStorage();
  }, []);
  return (
    <>
      <Header />
      {isAuthenticated && <main>{children}</main>}
      {!isAuthenticated && (
        <main className="mx-auto flex h-screen w-11/12 items-center justify-center">
          <Forms setIsAuthenticated={setIsAuthenticated} />
        </main>
      )}
      <Footer />
    </>
  );
};

export default Layout;
