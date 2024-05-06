import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './Register.css';
import { isValidName } from '../common/common';

const Login = () => {
    const [isValidNameFormat, setUsername] = useState(true);
    const [formData, setFormdata] = useState({
        username: "",
        password: ""
    })

    const {username, password} = formData;

    const onChange = (e) => setFormdata({...formData, [e.target.name]: e.target.value});

    const handleSubmit=(e)=>{
        console.log(e.target.value);

    }
    return (
        <div className="container">

            <div className="form-container">
                <h1 className='form-header'>Register</h1>
                <div className="input-wrapper">
                    <input type="text" name="username" placeholder="User Name" value={username} onChange={(e) => onChange(e)} required />
                </div>
                {!isValidNameFormat && <span style={{ color: 'red', marginLeft: '12%' }}>Please enter a valid User name</span>}

                <div className="input-wrapper">
                    <input type="text" name="password" placeholder='Password' value={password} onChange={(e) => onChange(e)} required />

                </div>
                <div className="input-wrapper">
                    <button type="submit" onClick={(e) => handleSubmit(e)}>Login</button>
                </div>

                <div className="input-wrapper position">
                    <div>Don't have account |  </div>
                    <Link to="/register"><div className='text-color'> Register</div></Link>
                </div>

            </div>
        </div>
    )
}

export default Login;
