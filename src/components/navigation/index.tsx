// Lib Import.
// import { Outlet, useLocation } from 'react-router';
import { Outlet } from 'react-router';
// import { useSelector } from 'react-redux';

// Util Imports.
import { useScrollToTop } from '@/lib/hooks';

// Component Imports.
import StaticNavbar from './static-nav';
// import DashboardNavbar from './dashboard-nav';

// Types.
// import type { StoreT } from '@/store';

// Layout for pages with navbar.
export default function NavigationLayout() {
  useScrollToTop();

  // const { pathname } = useLocation();
  // const user = useSelector((store: StoreT) => store.user.data);

  return (
    <>
      {/* {pathname.startsWith('/dashboard') ? (
        <DashboardNavbar user={user!} />
      ) : (
        <StaticNavbar user={user} />
      )} */}

      <StaticNavbar />

      <Outlet />
    </>
  );
}
