// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './AuthContext'; // Importe o provedor de autenticação

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider> {/* Envolver o aplicativo com o provedor de autenticação */}
        <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
