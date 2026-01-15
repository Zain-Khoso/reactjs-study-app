// Lib Imports.
import { Suspense, lazy } from 'react';
import { Outlet, useLocation } from 'react-router';
import { AnimatePresence } from 'motion/react';

// Skeleton Imports.
import NavbarSkeleton from '../skeletons/navbar.skeleton';
import LandingSkeleton from '@/components/skeletons/landing.skeleton';
import LegalSkeleton from '@/components/skeletons/legal.skeleton';
import { FooterSkeleton } from '../skeletons/footer.skeleton';

// Component Imports.
const Navbar = lazy(() => import('../navbar'));
const Footer = lazy(() => import('../footer'));

// Layout for static/info pages.
export default function GeneralLayout() {
  const { pathname } = useLocation();

  const getSkeleton = () => {
    switch (pathname) {
      case '/':
        return <LandingSkeleton key="landing-skeleton" />;

      case '/terms-and-conditions':
        return <LegalSkeleton key="legal-skeleton" />;

      case '/privacy-policy':
        return <LegalSkeleton key="legal-skeleton" />;

      default:
        return <LandingSkeleton key="landing-skeleton" />;
    }
  };

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<NavbarSkeleton />}>
        <Navbar />
      </Suspense>

      <Suspense fallback={getSkeleton()}>
        <Outlet />
      </Suspense>

      <Suspense fallback={<FooterSkeleton />}>
        <Footer />
      </Suspense>
    </AnimatePresence>
  );
}
