import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import signuplogo from '../media/images/logo-sign-up.png'
import fb from '../media/images/fb.png'
import google from '../media/images/google.png'

function ForgotPassword() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        password: '',
    });
    const navigate = useNavigate();  // Declare navigate hook here

    // Handler to update state on input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handler for form submission (you can expand this as needed)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        navigate("/opt")
    };
    return (
        <div className='sign-up'>
            <div className='sign-form-fgp' >
                <div className='form-wrapper'>
                    <div className='sign-up-image'>
                    <a href='/'><img src={signuplogo} /></a>
                    </div>
                    <form onSubmit={handleSubmit} className='form-main-forgot-password'>
                        <div className='Form-heading-forgot-password'>
                            <h2>
                            Forgot Password
                            </h2>
                        </div>
                        <div className='mt-10'>
                            <p>Email</p>
                            <input
                                type="email"
                                name="email"
                                placeholder='example@example.com'
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='sign-up-form-button'>
                            <button type="submit">Send Code</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword
