import React, { Suspense } from 'react';
import createRoot from 'react-dom/client';
import App from './App.jsx';
import { StrictMode } from 'react'
import '@/lib/i18n'; 
import './index.css'
const root = createRoot.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </StrictMode>
);