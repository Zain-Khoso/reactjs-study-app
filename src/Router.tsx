// Lib Imports.
import { BrowserRouter, Routes, Route } from 'react-router';

// Pages.
import LandingPage from './pages/Landing';

// Application Routes.
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
