// Lib Imports.
import { lazy } from 'react';
import { Routes, Route } from 'react-router';

// Hook Imports.
import { useScrollToTop } from './hooks/useScrollToTop';

// Layouts.
import EmptyLayout from './components/layouts/empty';
import GeneralLayout from './components/layouts/general';

// Pages.
const LandingPage = lazy(() => import('./components/pages/landing'));
const TermsAndConditionsPage = lazy(() => import('./components/pages/terms-and-conditions'));
const PrivacyPolicyPage = lazy(() => import('./components/pages/privacy-policy'));
const SignInPage = lazy(() => import('./components/pages/signin'));

// Application Routes.
export default function Router() {
  useScrollToTop();

  return (
    <Routes>
      <Route element={<GeneralLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="terms-and-conditions" element={<TermsAndConditionsPage />} />
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
      </Route>

      <Route element={<EmptyLayout />}>
        <Route path="signin" element={<SignInPage />} />
      </Route>
    </Routes>
  );
}
