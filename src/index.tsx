import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { GlobalStyles } from './globalStyle';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement as HTMLElement);
  root.render(
    <React.StrictMode>
      <GlobalStyles />
      <App />
    </React.StrictMode>,
  );
} else {
  console.error('Elemento root não encontrado.');
}
