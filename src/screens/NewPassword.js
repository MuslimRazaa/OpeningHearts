import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import signuplogo from '../media/images/logo-sign-up.png'
import eye from '../media/images/eye.png'

function NewPassword() {
    const [formData, setFormData] = useState({
        newPassword: '',
        confirmPassword: '',
    });
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowNewPassword((prevShowNewPassword) => !prevShowNewPassword);
    };

    const togglePasswordVisibility2 = () => {
        setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
    };
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
                    <div className='m-10' style={{  position: 'relative'  }}>
                            <p>New Password</p>
                            <input
                                type={showNewPassword ? "text" : "password"}
                                name="newpassword"
                                placeholder='*************'
                                value={formData.newpassword}
                                onChange={handleChange}
                                required
                            />
                            <img
                            src={eye}
                                className={`fas ${showNewPassword ? 'fa-eye-slash' : 'fa-eye'}`}  // Font Awesome eye icon
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
                        <div className='m-10' style={{  position: 'relative'  }}>
                            <p>Confirm Password</p>
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmpassword"
                                placeholder='*************'
                                value={formData.confirmpassword}
                                onChange={handleChange}
                                required
                            />
                            <img
                            src={eye}
                                className={`fas ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'}`}  // Font Awesome eye icon
                                onClick={togglePasswordVisibility2}
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

                    </form>
                    <div className='sign-up-form-New-password-button'>
                            <button type="submit">Conform</button>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default NewPassword
