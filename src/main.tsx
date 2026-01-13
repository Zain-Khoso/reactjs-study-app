// Lib Imports.
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Assets.
import './index.css';

// Components.
import Application from './App';

// Render Application.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Application />
  </StrictMode>
);
