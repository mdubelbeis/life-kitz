import Footer from './Footer';
import Header from './Header';

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
