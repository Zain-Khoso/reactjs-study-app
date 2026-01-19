// Lib Imports.
import { lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router';

// Layouts.
import NavigationLayout from './components/navigation/layout';
import { AnimatePresence } from 'motion/react';

// Pages.
const LandingPage = lazy(() => import('./components/pages/landing'));
const TermsAndConditionsPage = lazy(() => import('./components/pages/terms-and-conditions'));
const PrivacyPolicyPage = lazy(() => import('./components/pages/privacy-policy'));
const SignInPage = lazy(() => import('./components/pages/signin'));
const ProfilePage = lazy(() => import('./components/pages/profile'));
const LeaderboardsPage = lazy(() => import('./components/pages/leaderboards'));
const ArenasPage = lazy(() => import('./components/pages/arenas'));
const ArenaPage = lazy(() => import('./components/pages/arena'));
const ArenaResultsPage = lazy(() => import('./components/pages/arena-results'));

// Application Routes.
export default function Router() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="signin" element={<SignInPage />} />

        <Route element={<NavigationLayout />}>
          {/* "Static" pages */}
          <Route index element={<LandingPage />} />
          <Route path="terms-and-conditions" element={<TermsAndConditionsPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />

          {/* Dashboard pages */}
          <Route path="profile" element={<ProfilePage />} />
          <Route path="leaderboards" element={<LeaderboardsPage />} />
          <Route path="arenas">
            <Route index element={<ArenasPage />} />

            <Route path=":arenaId">
              <Route index element={<ArenaPage />} />

              <Route path=":userId" element={<ArenaResultsPage />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
