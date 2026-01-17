// Lib Imports.
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Asset Imports.
import './index.css';

// Components.
import Application from './app';

// Render Application.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Application />
  </StrictMode>
);
