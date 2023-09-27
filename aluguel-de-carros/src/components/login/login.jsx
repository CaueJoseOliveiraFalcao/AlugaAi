import { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from './../../AuthContext'; // Importe o contexto de autenticação

const Login = () => {
  const [FormData, SetFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  const { login } = useAuth(); // Use a função de login do contexto de autenticação

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetFormData({ ...FormData, [name]: value });
    console.log(FormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8081/login', FormData)
      .then((res) => {
        // Se a autenticação for bem-sucedida, chame a função de login do contexto de autenticação
        login(res.data); // Você pode passar os dados do usuário (por exemplo, token) para a função login
        navigate('/dashboard');
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
