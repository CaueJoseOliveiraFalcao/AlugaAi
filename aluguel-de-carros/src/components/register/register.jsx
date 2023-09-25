import axios from 'axios';
import './register.css';
import { useNavigate } from 'react-router-dom'
import React , { useState } from 'react';
const  Register = () => {
  const [FormData , SetFormData] = useState({
    username : '',
    email : '',
    password : ''
  });
  const navigate = useNavigate();
  const handleChange = (e) =>{
    const {name , value} = e.target;
    SetFormData({...FormData, [name] :value});
  }
  const handleSubmit = (e) =>{
    e.preventDefault(e);
    axios.post('http://localhost:8081/signup' , FormData)
    .then(res =>  {
      navigate('/');
    })
    .catch(err => console.log(err));
  
  }
  return (
    

    <div className='Divp'>

    <div className='FixCollum'>

      <div className='ParalaxDiv'>
        <p>The Car Rent</p>
      </div>
      <form onSubmit={handleSubmit}>
        <h1>Register Page</h1>
        <label htmlFor="Name">Name  </label>
        <input 
        required
        type="text"
        name='username'
        value={FormData.username}
        onChange={handleChange}
         />
        <label htmlFor="Email">Email  </label>
        <input 
        name='email'
        type="email"
        value={ FormData.email}
        onChange={handleChange} />
        <label htmlFor="password">Password  </label>
        <input 
        name='password'
        type="password"
        value={ FormData.password}
        onChange={handleChange} />
        <a href="/">Have a login? Click Here</a>
        <input className='Submit' type="submit" value="Submit" />
      </form>
      </div>
    </div>
  );
}

export default Register;
