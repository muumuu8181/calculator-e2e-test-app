import React from 'react';
import ReactDOM from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import { greet } from '@core/index';

function App() {
  return (
    <div>
      <h1>{greet('World')}</h1>
      <HomePage />
    </div>
  );
}

const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(<App />);
}