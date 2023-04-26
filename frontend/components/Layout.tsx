import Footer from './Footer';
import Header from './Header';

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen w-screen flex-col justify-between gap-10 bg-logo">
      <Header />
      <main className="mx-auto w-11/12 max-w-7xl">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
