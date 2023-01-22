import React from 'react'
import './SignUp.css'
import Logo from '../../assets/Login Assets/Logo1.png'
import googlesignup from '../../assets/Login Assets/google.png'
import facebooksignup from '../../assets/Login Assets/facebook.png'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'

const SignUp = () => {
    const navigate = useNavigate()

    async function verifyUser(){
      navigate('/')
    }

  
    return (
      <div className='signup-page'>

        <div className='signup-left-div'>
          <img className='logo' src={Logo} alt='img'/>
        </div>

        <div className='signup-div'>
          <h1>Sign Up</h1>
          <form onSubmit={verifyUser}>
            <input type='text' placeholder='Full Name'/>
            <input type='email' placeholder='Email Address'/>
            <input type='password' placeholder='Password'/>
            <input type='password' placeholder='Confirm Password'/>
            <input type='submit' value='SignUp'/>
          </form>
  
          <div className='account'><span>Already have account?</span><Link to='/login'><span> LogIn </span></Link></div>
  
          <div className='or-div'>
            <p><span>OR</span></p>
          </div>
  
          <div className='signup-option'>
            <button onClick={verifyUser}><img className='logo' src={googlesignup} alt='img'/>SignUp with Google</button>
            <button onClick={verifyUser}><img className='logo' src={facebooksignup} alt='img'/>SignUp with Facebook</button>
          </div>
  
        </div>
      </div>
    )
}

export default SignUp