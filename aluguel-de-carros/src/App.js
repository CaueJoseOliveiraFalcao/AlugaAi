import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login/login';
import Register from './components/register/register';
import Dashboard from './components/dashpage/dashboard'; // Use 'Dashboard', com D maiúsculo

import { PrivateRoute } from './privateRoute';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
           <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
              }
              />
           </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
