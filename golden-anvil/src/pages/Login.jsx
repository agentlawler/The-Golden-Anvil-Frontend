import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'


const Login = () => {

  const navigate = useNavigate()
  
  const [formValues, setFormValues] = useState(
    {
      username: '',
      password: ''
    }
  )

  const handleChange = (event) => {
    setFormValues({...formValues,[event.target.name]: event.target.value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(formValues)
    await axios.post('http://localhost:3001/user/login', {
          username: formValues.username,
          password: formValues.password
    })
    
    setFormValues({
          username: '',
          password: ''
    })
    navigate('/items')
  }
  

  return (
      <div className= 'container'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          Username: <input type='text' name='username' placeholder='Username' 
              value={formValues.username} onChange={handleChange} />
          Password: <input type='password' name='password' placeholder='Password' 
              value={formValues.password} onChange={handleChange} />
          <button type='submit'>Login</button>      
        </form>
          <div className='form-footer'>
              <p>Don't have an account yet?</p>
              <a href='/register/'>Register</a>
          </div>
      </div>
  );
}

export default Login;
