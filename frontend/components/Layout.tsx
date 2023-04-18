import { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Forms from './auth/Forms';

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // TODO: Use state management call to set auth

  return (
    <>
      <Header />
      {isAuthenticated && <main>{children}</main>}
      {!isAuthenticated && (
        <main>
          <Forms setIsAuthenticated={setIsAuthenticated} />
        </main>
      )}
      <Footer />
    </>
  );
};

export default Layout;
