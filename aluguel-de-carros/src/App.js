import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login/login';
import Register from './components/register/register';
import Dashboard from './components/dashpage/dashboard'; // Use 'Dashboard', com D maiúsculo
import { useState } from 'react';
import { PrivateRoute } from './privateRoute';



function App() {
  localStorage.setItem('autenticated' , 'true');
  const  authenticated = localStorage.getItem('autenticated')  === 'true'
  const [user, setUser] = useState(authenticated);
  console.log(user)
  return (
      <div className="App">
        <BrowserRouter>
           <Routes>
              <Route path="/" element={<Login setUser={setUser} />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute user={user}>
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
