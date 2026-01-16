// Lib Imports.
import { lazy } from 'react';
import { Routes, Route } from 'react-router';

// Layouts.
import RootLayout from './components/layouts/root';
import NavigationLayout from './components/layouts/navigation';

// Pages.
const LandingPage = lazy(() => import('./components/pages/landing'));
const TermsAndConditionsPage = lazy(() => import('./components/pages/terms-and-conditions'));
const PrivacyPolicyPage = lazy(() => import('./components/pages/privacy-policy'));
const SignInPage = lazy(() => import('./components/pages/signin'));
const UserPage = lazy(() => import('./components/pages/user'));

// Application Routes.
export default function Router() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route element={<NavigationLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="terms-and-conditions" element={<TermsAndConditionsPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />

          <Route path="profile" element={<UserPage />} />
        </Route>

        <Route path="signin" element={<SignInPage />} />
      </Route>
    </Routes>
  );
}
