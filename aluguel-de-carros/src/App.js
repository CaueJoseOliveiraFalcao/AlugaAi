import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/login/login';
import Register from './components/register/register';
import Dashboard from './components/dashpage/dashboard'; // Use 'Dashboard', com D maiúsculo
import ProtectedRoute from './ProtectedRoute';
import { AuthProvider } from './AuthContext'; // Importe o provedor de autenticação

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={<ProtectedRoute />}
          />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
