// Lib Imports.
import { lazy } from 'react';
import { Outlet } from 'react-router';

// Component Imports.
const Navbar = lazy(() => import('../navigation'));

// Layout for static/info pages.
export default function NavigationLayout() {
  return (
    <>
      <Navbar user={null} />

      <Outlet />
    </>
  );
}
