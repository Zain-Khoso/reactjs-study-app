// Lib Imports.
import { BrowserRouter, Routes, Route } from 'react-router';

// Layouts.
import GeneralLayout from './components/layouts/general';

// Pages.
import LandingPage from './pages/landing';
import TermsAndConditionsPage from './pages/terms-and-conditions';

// Application Routes.
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GeneralLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="terms-and-conditions" element={<TermsAndConditionsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
