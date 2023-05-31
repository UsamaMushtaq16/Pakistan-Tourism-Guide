import React from 'react'
import './SignUp.css'
import Logo from '../../assets/Login Assets/Logo1.png'
import googlesignup from '../../assets/Login Assets/google.png'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import axios from 'axios'
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; // Disable SSL certificate verification


const SignUp = () => {
  const navigate = useNavigate()

  async function verifyUser() {
    navigate('/signup-user-info')
    // debugger;
    // let name = document.getElementById('name').value;
    // let email = document.getElementById('email').value;
    // let password = document.getElementById('password').value;
    // let type = document.getElementById('floatingSelect');
    // let userType = type.value;


    // const user = {
    //   name: name,
    //   email: email,
    //   pass: password,
    //   userType: userType
    // }
    // const uri = 'http://localhost:3000/users/signup';

    // try {
    //   const response = await axios.post(uri, user, {
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   });      console.log(response)
    // } catch (error) {
      
    // }


  }


  return (
    <div className='signup-page'>

      <div className='signup-left-div'>
        <img className='logo' src={Logo} alt='img' />
      </div>

      <div className='signup-div'>
        <h1>Sign Up</h1>
        <form >

          <input type="name" placeholder='Full Name' id='name' />
          <input type='email' placeholder='Email Address' id='email' />
          <input type='password' placeholder='Password' id='password' />
          <input type='password' placeholder='Confirm Password' id='confirm-password' />

          <div class="form-floating signup-type">
            <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
              <option selected>Select User Type</option>
              <option value="Tourist">Tourist</option>
              <option value="Hotel-manager">Hotel Manager</option>
              <option value="Restaurant-manager">Restaurant Manager</option>
              <option value="Transport-manager">Transport Manager</option>
              <option value="Tour-agency">Tour Agency</option>
              <option value="Tourist-guide">Tourist Guide</option>
            </select>
           </div>
          <input type="button" onClick={verifyUser} value='SignUp' />
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

export default SignUp