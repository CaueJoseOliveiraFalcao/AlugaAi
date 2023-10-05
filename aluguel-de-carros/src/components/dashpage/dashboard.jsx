import React from 'react';
import './dashboard.css'
import Navbar from '../navbar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  
   const navigate = useNavigate();   
   const handleLogout = () =>{
    axios.post('/logout')
    .then((res) => {
      console.log(res.statusText)
      if(res.statusText === "OK"){
        
        navigate('/')
      }
      else {
        alert('Erro no Lougout')
      }
    })
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