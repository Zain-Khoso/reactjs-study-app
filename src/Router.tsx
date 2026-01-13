// Lib Imports.
import { BrowserRouter, Routes, Route } from 'react-router';

// Layouts.
import GeneralLayout from './components/layouts/general';

// Pages.
import LandingPage from './pages/Landing';

// Application Routes.
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GeneralLayout />}>
          <Route index element={<LandingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
