import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { AuthContextProvider } from './auth/AuthContext';
import { ChatContextProvider } from './auth/ChatContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <ChatContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ChatContextProvider>
  </AuthContextProvider>
);