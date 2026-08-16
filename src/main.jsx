import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Theme tokens MUST load first so all subsequent styles consume them.
import './theme/variables.css';
import './theme/global.css';
import './theme/animations.css';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);