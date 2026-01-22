// Lib Import.
import { lazy, Suspense } from 'react';
import { Outlet, useLocation } from 'react-router';

// Hook Imports.
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useSession } from '@/lib/auth-client';

// Component Imports.
import LandingSkeleton from '../skeletons/landing.skeleton';
import LegalSkeleton from '../skeletons/legal.skeleton';
import ProfileSkeleton from '../skeletons/profile.skeleton';
import LeaderboardsSkeleton from '../skeletons/leaderboards.skeleton';
import ArenasSkeleton from '../skeletons/arenas.skeleton';
import ArenaSkeleton from '../skeletons/arena.skeleton';
import ArenaResultsSkeleton from '../skeletons/arena-results.skeleton';

const Navbar = lazy(() => import('./index'));

// Layout for pages with navbar.
export default function NavigationLayout() {
  useScrollToTop();

  const { pathname } = useLocation();
  const { data } = useSession();

  const getSkeleton = () => {
    const segments = pathname.split('/').filter(Boolean);

    if (segments.length === 0) return <LandingSkeleton key="skeleton-landing" />;

    if (pathname === '/terms-and-conditions' || pathname === '/privacy-policy') {
      return <LegalSkeleton key="skeleton-legal" />;
    }

    if (pathname === '/profile') return <ProfileSkeleton key="skeleton-profile" />;

    if (pathname === '/leaderboards') return <LeaderboardsSkeleton key="skeleton-leaderboards" />;

    if (segments[0] === 'arenas') {
      if (segments.length === 1) return <ArenasSkeleton key="skeleton-arenas" />;

      if (segments.length === 2) return <ArenaSkeleton key="skeleton-arena" />;

      if (segments.length === 3) return <ArenaResultsSkeleton key="skeleton-arena-results" />;
    }

    return <LandingSkeleton key="skeleton-landing" />;
  };

  return (
    <Suspense fallback={getSkeleton()}>
      <Navbar user={data?.user} />

      <Outlet />
    </Suspense>
  );
}
