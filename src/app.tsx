// Lib Imports.
import { BrowserRouter } from 'react-router';

// Component Imports.
import Router from './router';

// Webapp's entry point component.
export default function Application() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
