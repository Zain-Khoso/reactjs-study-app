// Lib Imports.
import { BrowserRouter, Routes, Route } from 'react-router';

// Layouts.
import GeneralLayout from './components/layouts/general';

// Pages.
import LandingPage from './pages/landing';
import TermsAndConditionsPage from './pages/terms-and-conditions';
import PrivacyPolicyPage from './pages/privacy-policy';

// Application Routes.
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GeneralLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="terms-and-conditions" element={<TermsAndConditionsPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
