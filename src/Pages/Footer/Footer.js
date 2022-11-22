import React from 'react'
import './Footer.css'
import footerLogo from '../../assets/FooterAssets/Logo1.png'
import footerFb from '../../assets/FooterAssets/fb.png'
import footerInsta from '../../assets/FooterAssets/insta.png'
import footerLinkedIn from '../../assets/FooterAssets/linkedin.png'
import footerTwitter from '../../assets/FooterAssets/twitter.png'

const Footer = () => {
  return (
    <section className='footer'>
      <div className='footer-grid'>
          <div className='footer-logo'>
            <img src={footerLogo} alt='footer-logo'/>
          </div>
          <div className='footer-navs'>
            <div className='footer-nav-column'>
              <ul className='footer-ul'>
                <li className='footer-li'><a href='/'>Home</a></li>
                <li className='footer-li'><a href='/'>Hotels</a></li>
                <li className='footer-li'><a href='/'>Reviews</a></li>
                <li className='footer-li'><a href='/'>Maps</a></li>
              </ul>
            </div>
            <div className='footer-nav-column'>
              <ul className='footer-ul'>
                <li className='footer-li'><a href='/'>Tour Plans</a></li>
                <li className='footer-li'><a href='/'>Restaurants</a></li>
                <li className='footer-li'><a href='/'>Destinations</a></li>
                <li className='footer-li'><a href='/'>Transport</a></li>
              </ul>
            </div>
            <div className='footer-nav-column'>
            <ul className='footer-ul'>
                <li className='footer-li'><a href='/'>Season and weather</a></li>
                <li className='footer-li'><a href='/'>Useful Vocabulary</a></li>
                <li className='footer-li'><a href='/'>Recommendation</a></li>
              </ul>
            </div>
          </div>
          <div className='subscribe-div'>
            <h3>Join Our Newsletter</h3>
            <div className='subscribe-input-div'>
              <input className='sub-input' type='email' placeholder='your email address'/>
              <button className='sub-btn'>SUBSCRIBE</button>
            </div>
          </div>
      </div>
      <div className='footer-social'>
        <img src={footerFb} alt='img'/>
        <img src={footerInsta} alt='img' />
        <img src={footerTwitter} alt='img' />
        <img src={footerLinkedIn} alt='img' />
      </div>
      <div className='footer-copyright'>
        <p>&copy 2022 MYPakistan. All rights reserved. Terms of Service / Privacy Policy</p>
      </div>
    </section>
  )
}

export default Footer