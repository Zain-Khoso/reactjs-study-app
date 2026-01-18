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
import QuizSkeleton from '../skeletons/arena.skeleton';

const Navbar = lazy(() => import('./index'));

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

      case '/profile':
        return <ProfileSkeleton key="skeleton-profile" />;

      case '/leaderboards':
        return <LeaderboardsSkeleton key="skeleton-leaderboards" />;

      case '/arenas':
        return <ArenasSkeleton key="skeleton-arenas" />;

      case '/quiz':
        return <QuizSkeleton key="skeleton-quiz" />;

      default:
        return <LandingSkeleton key="skeleton-landing" />;
    }
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
