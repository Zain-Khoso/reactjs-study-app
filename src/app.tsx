// Lib Imports.
import { HelmetProvider } from 'react-helmet-async';

// Component Imports.
import Router from './router';

// Webapp's entry point component.
export default function Application() {
  return (
    <HelmetProvider>
      <Router />
    </HelmetProvider>
  );
}
