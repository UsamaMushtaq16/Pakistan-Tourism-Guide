import React from 'react'
import './SignUp.css'
import Logo from '../../assets/Login Assets/Logo1.png'
import googlesignup from '../../assets/Login Assets/google.png'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'

const TransportAgencySignup = () => {
  const navigate = useNavigate()

  async function verifyUser() {
    navigate('/')
  }


  return (
    <div className='signup-page'>

      <div className='signup-left-div'>
        <img className='logo' src={Logo} alt='img' />
      </div>

      <div className='signup-div'>
        <h1>Sign Up</h1>
        <form onSubmit={verifyUser}>
          
          <input type="name" placeholder='Full Name' />
          <input type='email' placeholder='Email Address' />
          <input type='password' placeholder='Password' />
          <input type='password' placeholder='Confirm Password' />
          {/* <select name="signup-type" id="signup-type">
            <option value="" selected>Choose...</option>
            <option value="User">User</option>
            <option value="Hotel-manager">Hotel Manager</option>
            <option value="Restaurant-manager">Restaurant Manager</option>
            <option value="Transport-manager">Transport Manager</option>
            <option value="Tour-agency">Tour Agency</option>
            <option value="Tourist-guide">Tourist Guide</option>
          </select> */}
          <input type='submit' value='SignUp' />
        </form>

        <div className='account'><span>Already have account?</span><Link to='/login'><span> LogIn </span></Link></div>

        <div className='or-div'>
          <p><span>OR</span></p>
        </div>

        <div className='signup-option'>
          <button onClick={verifyUser}><img className='logo' src={googlesignup} alt='img' />SignUp with Google</button>
        </div>

      </div>
    </div>
  )
}

export default TransportAgencySignup;