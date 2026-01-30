// Lib Import.
import { Outlet } from 'react-router';

// Util Imports.
import { useScrollToTop } from '@/lib/hooks';

// Component Imports.
import Navbar from './static-nav';

// Layout for pages with navbar.
export default function NavigationLayout() {
  useScrollToTop();

  return (
    <>
      <Navbar />

      <Outlet />
    </>
  );
}
