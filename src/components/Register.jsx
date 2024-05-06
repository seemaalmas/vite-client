import React, { useState } from 'react'
import { register } from '../api-component/Api';
import './Register.css';
import { isValidEmailFormat, isValidName } from '../common/common';
import { Link } from 'react-router-dom';

const Register = () => {
    const [isValidEmail, setValidEmailId] = useState(true);
    const [isValidNameFormat, setValidName] = useState(true);
    const [formData, setFormData] = useState(
        {
            username: "",
            email: "",
            password: ""
        }
    );
    const [registeredMessage, setRegisteredMessage ] = useState("");
    const { username, email, password } = formData;

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });



    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isValidEmailFormat(email) && isValidName(username)) {
            const registered = register({ username, email, password });
            setValidEmailId(true);
            setValidName(true);
            console.log(registered);
            return setRegisteredMessage(registered);

        } else {
            setValidEmailId(false);
            setValidName(false);
        }

    }
    return (
        <div className="container">
            {!!registeredMessage && <div>Registered Successfully!!!!!</div>}

            <div className="form-container">
                <h1 className='form-header'>Register</h1>
                <div className="input-wrapper">
                    <input type="text" name="username" placeholder="User Name" value={username} onChange={(e) => onChange(e)} required />
                </div>
                {!isValidNameFormat && <span style={{ color: 'red', marginLeft: '12%' }}>Please enter a valid User name</span>}

                <div className="input-wrapper">
                    <input type="email" name="email" placeholder="Email ID" value={email} onChange={(e) => onChange(e)} required />
                </div>
                {!isValidEmail && <span style={{ color: 'red', marginLeft: '12%' }}>Please enter a valid email address</span>}
                <div className="input-wrapper">
                    <input type="text" name="password" placeholder='Password' value={password} onChange={(e) => onChange(e)} required />

                </div>
                <div className="input-wrapper">
                    <button type="submit" onClick={(e) => handleSubmit(e)}>Register</button>
                </div>

                <div className="input-wrapper position">
                    <div>Already have account |  </div>
                    {/* <div><a href="">Login</a></div> */}
                    <Link to="/login"><div className='text-color'> Login</div></Link> 
                </div>


            </div>
        </div>
    )
}

export default Register;
