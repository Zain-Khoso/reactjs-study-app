// Lib Imports.
import { createBrowserRouter } from 'react-router';

// Page component Imports.
import LandingPage from './components/pages/landing';
import TermsAndConditionsPage from './components/pages/terms-and-conditions';
import PrivacyPolicyPage from './components/pages/privacy-policy';
import SignInPage from './components/pages/signin';
import ProfilePage from './components/pages/profile';
import LeaderboardsPage from './components/pages/leaderboards';
import ArenasPage from './components/pages/arenas';
import ArenaPage from './components/pages/arena';
import ArenaResultsPage from './components/pages/arena-results';

// Application Page Routes.
export default createBrowserRouter([
  {
    index: true,
    Component: LandingPage,
  },
  {
    path: 'signin',
    Component: SignInPage,
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
    path: 'profile',
    Component: ProfilePage,
  },
  {
    path: 'leaderboards',
    Component: LeaderboardsPage,
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
]);
