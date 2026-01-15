// Lib Imports.
import { Suspense, lazy } from 'react';
import { Outlet, useLocation } from 'react-router';
import { motion, type Variants } from 'motion/react';

// Skeleton Imports.
import NavbarSkeleton from '../skeletons/navbar.skeleton';
import FooterSkeleton from '../skeletons/footer.skeleton';
import LandingSkeleton from '@/components/skeletons/landing.skeleton';
import LegalSkeleton from '@/components/skeletons/legal.skeleton';

// Component Imports.
const Navbar = lazy(() => import('../navigation'));
const Footer = lazy(() => import('../footer'));

// Data.
const variants: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1], when: 'beforeChildren' },
  },
  exit: { opacity: 0, y: -10, transition: { duration: 0.3, ease: 'easeIn' } },
};

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
    <motion.div variants={variants} initial="initial" animate="animate" exit="exit">
      <Suspense fallback={<NavbarSkeleton />}>
        <Navbar user={{}} />
      </Suspense>

      <Suspense fallback={getSkeleton()}>
        <Outlet />
      </Suspense>

      <Suspense fallback={<FooterSkeleton />}>
        <Footer />
      </Suspense>
    </motion.div>
  );
}
