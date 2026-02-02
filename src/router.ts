// Lib Imports.
import { createBrowserRouter } from 'react-router';

// Component Imports.
import NavigationLayout from './components/navigation';
import LandingPage from './components/pages/landing';
import TermsAndConditionsPage from './components/pages/terms-and-conditions';
import PrivacyPolicyPage from './components/pages/privacy-policy';
import LoginPage from './components/pages/login';
import DashboardPage from './components/pages/dashboard';
import LeaderboardPage from './components/pages/leaderboard';
import ArenasPage from './components/pages/arenas';
import ArenaPage from './components/pages/arena';
import ArenaResultsPage from './components/pages/arena-results';

// Application Page Routes.
export default createBrowserRouter([
  {
    path: 'login',
    Component: LoginPage,
  },
  {
    Component: NavigationLayout,
    children: [
      {
        index: true,
        Component: LandingPage,
      },
      {
        path: 'terms-and-conditions',
        Component: TermsAndConditionsPage,
      },
      {
        path: 'privacy-policy',
        Component: PrivacyPolicyPage,
      },
      {
        path: 'dashboard',
        Component: DashboardPage,
      },
      {
        path: 'leaderboard',
        Component: LeaderboardPage,
      },
      {
        path: 'arenas',
        Component: ArenasPage,
        children: [
          {
            path: ':arenaId',
            Component: ArenaPage,
            children: [
              {
                path: ':userId',
                Component: ArenaResultsPage,
              },
            ],
          },
        ],
      },
    ],
  },
]);
