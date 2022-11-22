import React from 'react'
import './ContactUs.css'
import Logo1 from '../../assets/ContactAssets/Logo1.png'
import contactFb from '../../assets/FooterAssets/fb.png'
import contactInsta from '../../assets/FooterAssets/insta.png'
import contactLinkedIn from '../../assets/FooterAssets/linkedin.png'
import contactTwitter from '../../assets/FooterAssets/twitter.png'
import Contactcall from '../../assets/ContactAssets/call.png'
import Contactmail from '../../assets/ContactAssets/mail.png'

const ContactUs = () => {
  return (
    <section className='contact-us-div'>
        <h1><span>Contact </span><span>With Us</span></h1>
        <div className='contact-content'>
            <div className='contact-grid'>
                <div className='contact-letf'>
                    <p className='contact-left-p'>Please Fill the form below and our representative will contact you just <br/>
                        upon a click. We do not share your private information elsewhere.</p>
                    <div className='block-input'>
                        <div className='block-input-left'>
                            <label>FIRST NAME</label>
                            <input placeholder='Your name'/>
                            <label>PHONE NUMBER</label>
                            <input placeholder='Your phone number'/>
                        </div>
                        <div className='block-input-right'>
                            <label>LAST NAME</label>
                            <input placeholder='Last name'/>
                            <label>EMAIL</label>
                            <input type='email' placeholder='Your email address'/>
                        </div>
                    </div>
                    <div className='last-input'>
                        <label>Last Input</label>
                        <textarea id='contact-textarea' placeholder='write your message'/>
                    </div>
                    <div className='submit-btn'>
                        <button>Submit Now</button>
                    </div>
                </div>
                <div className='vertical'></div>
                <div className='contact-right'>
                    <img id='contact-logo' src={Logo1} alt='LogoImg' />
                    <div className='contact-social'>
                        <div className='contact-way'>
                            <span><img src={Contactcall} alt='call-icon'/></span>
                            <span ><a href="tel:+92 300 6200 507" rel="noreferrer">+92 300 6200 507</a></span>
                        </div>
                        <div className='contact-way'>
                            <span><img src={Contactmail} alt='email-icon'/></span>
                            <span><a href='mailto:dummy@gmail.com' target="_blank" rel="noreferrer">dummy@gmail.com</a></span>
                        </div>
                    </div>
                    <div className='social-media'>
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><img src={contactFb} alt='facebook-icon'/></a>
                        <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><img src={contactInsta} alt='instagram-icon'/></a>
                        <a href="https://www.twitter.com" target="_blank" rel="noreferrer"><img src={contactTwitter} alt='twitter-icon'/></a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><img src={contactLinkedIn} alt='linkedIn-icon'/></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactUs