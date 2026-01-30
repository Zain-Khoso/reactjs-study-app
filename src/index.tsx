// Lib Imports.
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';

// Asset Imports.
import './index.css';

// Util Imports.
import routes from './router';

// Constants.
const elem_ApplicationRoot = document.getElementById('root')!;

// React entry point.
createRoot(elem_ApplicationRoot).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
