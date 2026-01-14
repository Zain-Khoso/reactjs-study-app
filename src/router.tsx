// Lib Imports.
import { lazy } from 'react';
import { Routes, Route } from 'react-router';

// Hook Imports.
import { useScrollToTop } from './hooks/useScrollToTop';

// Layouts.
import GeneralLayout from './components/layouts/general';

// Pages.
const LandingPage = lazy(() => import('./pages/landing'));
const TermsAndConditionsPage = lazy(() => import('./pages/terms-and-conditions'));
const PrivacyPolicyPage = lazy(() => import('./pages/privacy-policy'));

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
    </Routes>
  );
}
