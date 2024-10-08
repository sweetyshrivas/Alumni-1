import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Ensure this path is correct
import { AuthProvider } from './context/AuthContext'; // Ensure this path is correct

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);