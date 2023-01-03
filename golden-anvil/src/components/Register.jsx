import React, { useState } from 'react';
import AxiosInstance from '../AxiosInstance'
import {LoginContext} from '../LoginContext'

const Register = () => {

    

    const [formValues, setFormValues] = useState({
        email: '',
        first_name: '',
        last_name: '',
        username: '',
        password: ''
    })

    const handleChange = (event) => {
        setFormValues({...formValues, [event.target.name]: event.target.value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        await AxiosInstance.post('/users/create', {
            email: formValues.email,
            first_name: formValues.first_name,
            last_name: formValues.last_name,
            username: formValues.username,
            password: formValues.password
        })

        .then((res) => {
            localStorage.setItem('username', formValues.username)
            localStorage.setItem('user_id', res.data.id)
            AxiosInstance.post('token/obtain/', {
                username: formValues.username,
                password: formValues.password
            })
        .then(res => {
            AxiosInstance.defaults.headers['Authorization'] = `JWT ${res.data.access}`
            localStorage.setItem('access_token', res.data.access)
            localStorage.setItem('refresh_token', res.data.refresh)
            return res
            })
        })
        .catch(error => console.error)
    }

    return (
        <div className='form signup-form'>
          <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                Email: <input type='email' name='email' placeholder='Email'
                    value={formValues.email} onChange={handleChange} />
                First name: <input type='text'
                    name='first_name' placeholder='First Name'
                    value={formValues.first_name} onChange={handleChange} />
                Last name: <input type='text'
                    name='last_name' placeholder='Last Name'
                    value={formValues.last_name} onChange={handleChange} />
                Username: <input type='text' 
                    name='username' placeholder='Username'
                    value={formValues.username} onChange={handleChange} />
                Password: <input type='password'
                    name='password' placeholder='Password'
                    value={formValues.password} onChange={handleChange} />
                        
                <button type='submit'>Register</button>                
                
                <div className="form-footer">
                <p>Have an account already?</p>
                <a href='/login/'> Log-In </a>
                    </div>
            </form>
      </div>
    )
}
export default Register;

