// Lib Import.
import { lazy, Suspense } from 'react';
import { Outlet, useLocation } from 'react-router';

// Hook Imports.
import { useScrollToTop } from '@/hooks/useScrollToTop';

// Component Imports.
import LandingSkeleton from '../skeletons/landing.skeleton';
import LegalSkeleton from '../skeletons/legal.skeleton';
import ProfileSkeleton from '../skeletons/profile.skeleton';
import LeaderboardsSkeleton from '../skeletons/leaderboards.skeleton';
import ArenasSkeleton from '../skeletons/arenas.skeleton';
import ArenaSkeleton from '../skeletons/arena.skeleton';

const Navbar = lazy(() => import('./index'));

// Layout for pages with navbar.
export default function NavigationLayout() {
  const { pathname } = useLocation();
  useScrollToTop();

  const getSkeleton = () => {
    // Landing Page.
    if (pathname === '/') return <LandingSkeleton key="skeleton-landing" />;
    // Legal Pages.
    else if (pathname === '/terms-and-conditions' || pathname === '/privacy-policy')
      return <LegalSkeleton key="skeleton-legal" />;
    // Profile Page.
    else if (pathname === '/profile') return <ProfileSkeleton key="skeleton-profile" />;
    // Leaderboard Page.
    else if (pathname === '/leaderboards')
      return <LeaderboardsSkeleton key="skeleton-leaderboards" />;
    // Arena List Page.
    else if (pathname === '/arenas') return <ArenasSkeleton key="skeleton-arenas" />;
    // Arena Page
    else if (pathname.startsWith('/arenas') && !pathname.endsWith('/arenas'))
      return <ArenaSkeleton key="skeleton-arena" />;
    // Default.
    else return <LandingSkeleton key="skeleton-landing" />;
  };

  return (
    <Suspense fallback={getSkeleton()}>
      <Navbar
        user={{
          image:
            'https://lh3.googleusercontent.com/-vMM9R2UlBpM/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkkQSh6CEfa4PH8bRLDDUxvUhhTriQ/photo.jpg?sz=512',
          name: 'Zain Khoso',
        }}
      />

      <Outlet />
    </Suspense>
  );
}
