// Lib Imports.
import { Outlet } from 'react-router';

// Component Imports.
import Navbar from '../navbar';
import Footer from '../footer';

// Layout for static/info pages.
export default function GeneralLayout() {
  return (
    <>
      <Navbar />

      <Outlet />

      <Footer />
    </>
  );
}
