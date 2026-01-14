// Lib Imports.
import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';

// Skeletons.
import LandingSkeleton from './pages/skeleton.landing';
import NavbarSkeleton from './components/skeleton.navbar';

// Layouts.
import GeneralLayout from './components/layouts/general';

// Pages.
const LandingPage = lazy(() => import('./pages/landing'));
const TermsAndConditionsPage = lazy(() => import('./pages/terms-and-conditions'));
const PrivacyPolicyPage = lazy(() => import('./pages/privacy-policy'));

// Application Routes.
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GeneralLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<LandingSkeleton />}>
                <LandingPage />
              </Suspense>
            }
          />

          <Route path="terms-and-conditions" element={<TermsAndConditionsPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
