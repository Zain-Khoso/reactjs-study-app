// Lib Imports.
import { createBrowserRouter } from 'react-router';

// Util Imports.
import { fetchCurrentUserState, authenticationRequired } from './lib/data-loaders';

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
    loader: fetchCurrentUserState,
    children: [
      {
        path: 'loginPage',
        loader: () => authenticationRequired(false),
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
            loader: () => authenticationRequired(true),
            children: [
              {
                index: true,
                Component: DashboardPage,
              },
              {
                path: 'leaderboard',
                Component: LeaderboardPage,
              },
              {
                path: 'arenas',
                children: [
                  {
                    index: true,
                    Component: ArenasPage,
                  },
                  {
                    path: ':arenaId',
                    children: [
                      {
                        index: true,
                        Component: ArenaPage,
                      },
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
        ],
      },
    ],
  },
]);
