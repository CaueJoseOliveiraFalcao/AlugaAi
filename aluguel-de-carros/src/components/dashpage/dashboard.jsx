import React from 'react';
import './dashboard.css'
import Navbar from '../navbar';
import { Navigate } from 'react-router-dom';
const navigate = useNavigate();
const Dashboard = () => {
   const handleLogout = () =>{
    localStorage.removeItem("authenticated");
    navigate('/')
   }
  return (
    <main>
      <Navbar/>
      <button onClick={handleLogout}>Deslogar</button>
    </main>
  );
};

export default Dashboard;