// Lib Imports.
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Assets.
import './index.css';

// Render Application.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1>Hello World</h1>
  </StrictMode>
);
