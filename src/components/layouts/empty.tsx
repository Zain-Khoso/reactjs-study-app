// Lib Import.
import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { AnimatePresence } from 'motion/react';

// Layout used for unique pages.
export default function EmptyLayout() {
  return (
    <AnimatePresence>
      <Suspense>
        <Outlet />
      </Suspense>
    </AnimatePresence>
  );
}
