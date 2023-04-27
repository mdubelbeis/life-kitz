import React from 'react';
import Footer from './Footer';
import Header from './Header';

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex w-screen flex-col justify-between gap-10 bg-logo">
      <Header />
      <main className="mx-auto w-11/12 max-w-7xl bg-logo pb-72">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
