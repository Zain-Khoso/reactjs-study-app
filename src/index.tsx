// Lib Imports.
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { Provider as StoreProvider } from 'react-redux';

// Asset Imports.
import './index.css';

// Util Imports.
import routes from './router';
import store from './store';

// Constants.
const elem_ApplicationRoot = document.getElementById('root')!;

// React entry point.
createRoot(elem_ApplicationRoot).render(
  <StrictMode>
    <StoreProvider store={store}>
      <RouterProvider router={routes} />
    </StoreProvider>
  </StrictMode>
);
