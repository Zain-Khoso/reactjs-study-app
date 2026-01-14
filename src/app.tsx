// Lib Imports.
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router';

// Component Imports.
import Router from './router';

// Webapp's entry point component.
export default function Application() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </HelmetProvider>
  );
}
