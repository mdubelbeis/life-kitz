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
    if (!localStorage.getItem('jwtToken')) {
      setIsAuthenticated(false);
    } else {
      setIsAuthenticated(true);
    }
  };

  useEffect(() => {
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
