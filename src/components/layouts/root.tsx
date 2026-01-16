// Lib Import.
import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router';
import { AnimatePresence } from 'motion/react';

// Hook Imports.
import { useScrollToTop } from '@/hooks/useScrollToTop';

// Component Imports.
import LandingSkeleton from '../skeletons/landing.skeleton';
import LegalSkeleton from '../skeletons/legal.skeleton';
import SignInSkeleton from '../skeletons/signin.skeleton';

// Root layout on which the rest of the app builds.
export default function RootLayout() {
  const { pathname } = useLocation();
  useScrollToTop();

  const getSkeleton = () => {
    switch (pathname) {
      case '/':
        return <LandingSkeleton key="skeleton-landing" />;

      case '/terms-and-conditions':
      case '/privacy-policy':
        return <LegalSkeleton key="skeleton-legal" />;

      case '/signin':
        return <SignInSkeleton key="skeleton-signIn" />;

      default:
        return <LandingSkeleton key="skeleton-landing" />;
    }
  };

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={getSkeleton()}>
        <Outlet />
      </Suspense>
    </AnimatePresence>
  );
}
