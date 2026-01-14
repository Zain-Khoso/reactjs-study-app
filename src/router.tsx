// Lib Imports.
import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { AnimatePresence } from 'motion/react';

// Skeletons.
import LandingSkeleton from './pages/skeleton.landing';
import LegalSkeleton from './pages/skeleton.legal';

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
              <AnimatePresence mode="wait">
                <Suspense fallback={<LandingSkeleton key="landing-skeleton" />}>
                  <LandingPage />
                </Suspense>
              </AnimatePresence>
            }
          />

          <Route
            path="terms-and-conditions"
            element={
              <AnimatePresence mode="wait">
                <Suspense fallback={<LegalSkeleton key="legal-skeleton" />}>
                  <TermsAndConditionsPage />
                </Suspense>
              </AnimatePresence>
            }
          />
          <Route
            path="privacy-policy"
            element={
              <AnimatePresence mode="wait">
                <Suspense fallback={<LegalSkeleton key="legal-skeleton" />}>
                  <PrivacyPolicyPage />
                </Suspense>
              </AnimatePresence>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
