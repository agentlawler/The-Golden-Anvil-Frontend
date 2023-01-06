import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {

   
    let navigate = useNavigate()
    

    const [formValues, setFormValues] = useState({
        email: '',
        firstName: '',
        lastName: '',
        username: '',
        password: ''
    })

    const handleChange = (event) => {
        setFormValues({...formValues, [event.target.name]: event.target.value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        await axios.post('http://localhost:3001/user/register', {
            email: formValues.email,
            firstName: formValues.firstName,
            lastName: formValues.lastName,
            username: formValues.username,
            password: formValues.password
        })
        setFormValues({
            email: '',
            firstName:'',
            lastName: '',
            username: '',
            password: '',
            confirmPassword: ''
        })
        navigate('/login')
    }

    return (
        <div className='form signup-form'>
          <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                Email: <input type='email' name='email' placeholder='Email'
                    value={formValues.email} onChange={handleChange} />
                First name: <input type='text'
                    name='firstName' placeholder='First Name'
                    value={formValues.firstName} onChange={handleChange} />
                Last name: <input type='text'
                    name='lastName' placeholder='Last Name'
                    value={formValues.lastName} onChange={handleChange} />
                Username: <input type='text' 
                    name='username' placeholder='Username'
                    value={formValues.username} onChange={handleChange} />
                Password: <input type='password'
                    name='password' placeholder='Password'
                    value={formValues.password} onChange={handleChange} />
                Confirm Password: <input type='password'
                    name='confirmPassword' placeholder='Confirm Password'
                    value={formValues.confirmPassword} onChange={handleChange} />
                <button type='submit'>Register</button>                
                
                <div className="form-footer">
                <p>Have an account already?</p>
                <a href='/login'> Log-In </a>
                    </div>
            </form>
      </div>
    )
}
export default Register;

