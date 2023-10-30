import React from "react";
import { Redirect, Switch, Route, Routes , Outlet , BrowserRouter } from "react-router-dom";
import Login from './components/login/login';
import Register from './components/register/register';
import Dashboard from './components/dashpage/dashboard'; // Use 'Dashboard', com D maiúsculo
import { useState } from 'react';
import { history } from "./ult/history";

function App() { 
  return (
      <div className="App">
        <BrowserRouter>
           <Routes>
              <Route path="/" element={<Login/>} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/dashboard" element={<Dashboard />}/>
           </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;

