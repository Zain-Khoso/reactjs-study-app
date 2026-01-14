// Lib Imports.
import { Suspense, lazy } from 'react';
import { Outlet, useLocation } from 'react-router';
import { AnimatePresence } from 'motion/react';

// Skeleton Imports.
import NavbarSkeleton from '../skeleton.navbar';
import LandingSkeleton from '@/pages/skeleton.landing';
import LegalSkeleton from '@/pages/skeleton.legal';
import { FooterSkeleton } from '../skeleton.footer';

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
