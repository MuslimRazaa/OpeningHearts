import React, { useState } from 'react'
import { OtpInput } from 'reactjs-otp-input';
import signuplogo from '../media/images/logo-sign-up.png'
import { Link, useNavigate } from 'react-router-dom';

function Opt() {
    const [otp, setOtp] = useState('');
    const [formData, setFormData] = useState("");
    
    
    const handleChange = (otp) => setOtp(otp);

    const navigate = useNavigate();  // Declare navigate hook here


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        navigate("/newpassword")
        // You could send formData to an API or use it in other ways
    };
  return (

    <div className='sign-up'>
    <div className='sign-form-fgp' >
        <div className='form-wrapper'>
            <div className='sign-up-image'>
            <a href='/'><img src={signuplogo} /></a>
            </div>
            <form onSubmit={handleSubmit} className='form-main-forgot-password'>
                <div className='Form-heading-otp'>
                  <p>Now Enter Your 4 Digit Code We’ve Sent You On The Email<br></br> 
                    <Link to="" className='link'>abc123@gmai.com</Link></p>
                </div>
                <div className='OTP-holder'>
                    <OtpInput
                                value={otp}
                                onChange={handleChange}
                                numInputs={4}
                                placeholder="____"
                                separator={<span> </span>}
                                inputStyle={styles.input}
                    />
                    </div>
                <div className='sign-up-form-button'>
                    <button type="submit">Confirm</button>
                </div>
            </form>
        </div>
    </div>
</div>
  )
}
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontFamily: 'Arial, sans-serif',
    },
    input: {
        width: '82px',
        height: '92px',
        // textAlign: 'center',
        fontSize: '50px',
        borderRadius: '15px',
        border: 'none',
        backgroundColor: '#E6E6E66B',
        margin: '0 5px',
        padding: '0px',
        color: '#000000B2',  // Optional: Set text color
    },
    placeholder: {
        color: '#0000', // Change placeholder color if necessary
    }
};
export default Opt
