// Lib Import.
import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router';
import { AnimatePresence } from 'motion/react';

// Page Skeletons.
import SignInSkeleton from '@/pages/skeleton.signin';

// Layout used for unique pages.
export default function EmptyLayout() {
  const { pathname } = useLocation();

  const getSkeleton = () => {
    switch (pathname) {
      case '/signin':
        return <SignInSkeleton key="signin-skeleton" />;

      default:
        return <SignInSkeleton key="signin-skeleton" />;
    }
  };

  return (
    <AnimatePresence>
      <Suspense fallback={getSkeleton()}>
        <Outlet />
      </Suspense>
    </AnimatePresence>
  );
}
