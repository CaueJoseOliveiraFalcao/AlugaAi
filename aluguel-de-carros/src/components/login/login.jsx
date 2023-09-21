import { useState } from 'react';
import './login.css'
import axios from 'axios';
const Login = () => {
  const [FormData , SetFormData] = useState({
    email : '',
    password : ''
  });
  const handleChange = (e) =>{
    const {name , value} = e.target;
    SetFormData({...FormData, [name] :value});
  }
  const handleSubmit = (e) =>{
    e.preventDefault(e);
    axios
    .post("http://localhost:3030/login" , FormData)
    .then((response) => {
      console.log(response.data.message);
    })
    .catch((error) => {
      console.log(error)
    })
  
  }
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
