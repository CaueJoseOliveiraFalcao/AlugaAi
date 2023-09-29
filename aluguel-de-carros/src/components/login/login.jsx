import { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({ setUser }) => {
  const [FormData, SetFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetFormData({ ...FormData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    axios
      .post('http://localhost:8081/login', FormData)
      .then((res) => {
        console.log(res.data)
        if(res.data.message && res.data.token === "Success"){
          setUser(true)
          
          localStorage.setItem(token , res.data.token);

          navigate('/dashboard')
        }
        else {
          alert('Credenciais invalidas')
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    
    <div className='Divp'>

    <div className='FixCollum'>

      <div className='ParalaxDiv'>
        <p>The Car Rent</p>
      </div>
      <form onSubmit={handleSubmit}>
        <h1>Login Page</h1>
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
        <a href="/register">Don't have a login? Click Here</a>
        <input className='Submit' type="submit" value="Submit" />
      </form>
      </div>
    </div>
  );
}

export default Login;
