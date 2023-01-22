import React from 'react'
import './Login.css'
import Logo from '../../assets/Login Assets/Logo1.png'
import googleLogin from '../../assets/Login Assets/google.png'
import facebookLogin from '../../assets/Login Assets/facebook.png'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()

  async function verifyUser(){
    navigate('/')
  }


  return (
    <div className='login-page'>

      <div className='login-left-div'>
        <img className='logo' src={Logo} alt='img'/>
      </div>

      <div className='login-div'>
        <h1>Log In</h1>
        <form onSubmit={verifyUser}>
          <input type='email' placeholder='Email Address'/>
          <input type='password' placeholder='Password'/>
          <input id='login-btn' type='submit' value='LogIn'/>
        </form>

        <p className='forget-password' onClick={verifyUser}><span>Forgot your login details?</span><span> Get help logging in</span></p>

        <div className='or-div'>
          <p><span>OR</span></p>
        </div>

        <div className='login-option'>
          <button className='option-btn' onClick={verifyUser}><img className='logo' src={googleLogin} alt='img'/>Continue with Google</button>
          <button className='option-btn' onClick={verifyUser}><img className='logo' src={facebookLogin} alt='img'/>Continue with Facebook</button>
          <Link to='/signup' className='txt'><button className='option-btn'>SignUp</button></Link>
        </div>

      </div>
    </div>
  )
}

export default Login