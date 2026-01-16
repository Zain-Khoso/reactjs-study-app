// Lib Import.
import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router';

// Hook Imports.
import { useScrollToTop } from '@/hooks/useScrollToTop';

// Component Imports.
import LandingSkeleton from '../skeletons/landing.skeleton';
import LegalSkeleton from '../skeletons/legal.skeleton';
import Navbar from '.';

// Layout for pages with navbar.
export default function NavigationLayout() {
  const { pathname } = useLocation();
  useScrollToTop();

  const getSkeleton = () => {
    switch (pathname) {
      case '/':
        return <LandingSkeleton key="skeleton-landing" />;

      case '/terms-and-conditions':
      case '/privacy-policy':
        return <LegalSkeleton key="skeleton-legal" />;

      default:
        return <LandingSkeleton key="skeleton-landing" />;
    }
  };

  return (
    <Suspense fallback={getSkeleton()}>
      <Navbar user={null} />

      <Outlet />
    </Suspense>
  );
}
