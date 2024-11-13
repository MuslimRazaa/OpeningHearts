import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import signuplogo from '../media/images/logo-sign-up.png'
import fb from '../media/images/fb.png'
import google from '../media/images/google.png'
import eye from '../media/images/eye.png'

function Login() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        password: '',
    });
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };
    
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
        // You could send formData to an API or use it in other ways
    };
    return (
        <div className='sign-up'>
            <div className='sign-form' >
                <div className='form-wrapper'>
                    <div className='sign-up-image'>
                    <a href='/'><img src={signuplogo} /></a>
                    </div>
                    <form onSubmit={handleSubmit} className='form-main-login'>
                        <div className='Form-heading'>
                            <h2>
                                WELCOME BACK
                            </h2>
                        </div>
                        <div className='m-10'>
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
                        <div className='m-10' style={{  position: 'relative'  }}>
                            <p>Password</p>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder='*************'
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <img
                            src={eye}
                                className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}  // Font Awesome eye icon
                                onClick={togglePasswordVisibility}
                                style={{
                                    position: 'absolute',
                                    right: '2rem',
                                    top: '4rem',
                                    transform: 'translateY(-50%)',
                                    cursor: 'pointer',
                                    color: '#888',
                                }}
                            />
                        </div>

                        <div className='mt-10 flex-container'>
                            <div className='remember-me'>
                                <input type='checkbox' />
                                <p>Remember me?</p>
                            </div>
                            <Link to="/forgotPassword">
                            <h2 className='forget-password'>Forget Password?</h2>
                            </Link>
                        </div>

                        <div className='sign-up-form-button'>
                            <button type="submit">Login</button>
                        </div>
                    <div className='login-form-bottom'>
                        <div>
                            <p>Not Regestered ? <Link to='/register' className='link'>Sign up</Link></p>
                        </div>
                        <div className='login-icons'>
                            <p>Or you can login with</p>
                            <div className='social-icons'>
                                <img src={fb} />
                                <img src={google} />
                            </div>
                        </div>
                    </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
