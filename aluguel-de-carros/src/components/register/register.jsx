import './register.css';
const  Register = () => {
  return (
    
    <div className='Divp'>

    <div className='FixCollum'>

      <div className='ParalaxDiv'>
        <p>The Car Rent</p>
      </div>
      <form>
        <h1>Register Page</h1>
        <label htmlFor="Name">Name  </label>
        <input type="text" />
        <label htmlFor="Email">Email  </label>
        <input type="email" />
        <label htmlFor="password">Password  </label>
        <input type="password" />
        <a href="">Don't have a login? Click Here</a>
        <input className='Submit' type="submit" value="Submit" />
      </form>
      </div>
    </div>
  );
}

export default Register;
