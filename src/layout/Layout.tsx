import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ScrollToTop from '../components/layout/ScrollToTop';

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;