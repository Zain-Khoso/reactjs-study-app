// Lib Imports.
import { Suspense, lazy } from 'react';
import { Outlet } from 'react-router';
import { motion, type Variants } from 'motion/react';

// Skeleton Imports.
import NavbarSkeleton from '../skeletons/navbar.skeleton';

// Component Imports.
const Navbar = lazy(() => import('../navbar'));

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

// Layout for dashboard pages.
export default function DashboardLayout() {
  return (
    <motion.div variants={variants} initial="initial" animate="animate" exit="exit">
      <Suspense fallback={<NavbarSkeleton />}>
        <Navbar user={{}} />
      </Suspense>

      <Outlet />
    </motion.div>
  );
}
