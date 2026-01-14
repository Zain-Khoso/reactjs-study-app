// Lib Imports.
import { Suspense, lazy } from 'react';
import { Outlet } from 'react-router';

// Skeleton Imports.
import NavbarSkeleton from '../skeleton.navbar';
import { FooterSkeleton } from '../skeleton.footer';

// Component Imports.
const Navbar = lazy(() => import('../navbar'));
const Footer = lazy(() => import('../footer'));

// Layout for static/info pages.
export default function GeneralLayout() {
  return (
    <>
      <Suspense fallback={<NavbarSkeleton />}>
        <Navbar />
      </Suspense>

      <Outlet />

      <Suspense fallback={<FooterSkeleton />}>
        <Footer />
      </Suspense>
    </>
  );
}
