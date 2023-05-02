import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { AuthContextProvider } from './auth/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </AuthContextProvider>
);