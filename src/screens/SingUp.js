import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import signuplogo from '../media/images/logo-sign-up.png'
import eye from '../media/images/eye.png'

function SingUp() {
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
        <form onSubmit={handleSubmit} className='form-main-signup'>
            <div className='m-10'>
                <p>Name</p>
                <input
                    type="text"
                    name="name"
                    placeholder='Example'
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
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

            <div className='m-10'>
                <p>Address</p>
                <input
                    type="text"
                    name="address"
                    placeholder='Newyork city, USA'
                    value={formData.address}
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
        

            <div className='signup-bottom-text'>
              <p>Already Registered? <Link to="/login" className='link'>Login</Link></p>
            </div>

            <div className='sign-up-form-button'>
            <button type="submit">Sign up</button>
            </div>
        </form>
      </div>
      </div>
    </div>
  )
}

export default SingUp
