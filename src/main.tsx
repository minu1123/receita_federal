import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css'; // ou o nome do seu CSS global

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
