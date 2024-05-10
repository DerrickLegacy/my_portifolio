import React from 'react'

import './contact.css'
import logo from '../../assets/logo.jpg'
import facebook from '../../assets/facebook.png'
import x from '../../assets/x.png'
import instagram from '../../assets/instagram.jpeg'
function Contact() {
  return (
    <section id="contactPage">
      <div id='clients'>
        <h1 className="contactPageTitle">
          My Clients
        </h1>
        <p className="clientDescription">
          I have haad an opportunity to have a diverse group of companies while on this my career journey.
        </p>
        <div className="clientImgs">
          <img src={logo} alt="" className="clientImg" />
          <img src={facebook} alt="" className="clientImg" />
          <img src={x} alt="" className="clientImg" />
        </div>
      </div>

      <div ID="contact">
        <h1 className="contactPageTitle">
          Contact Me
        </h1>
        <span className="contactDescription">Reach out to me here</span>
        <form action="" className="contactForm">
          <input type="text" name="name" id="name" placeholder='Your Name' />
          <input type="email" name="email" id="email" placeholder='Your Email' />
          <textarea name="message" id="message" placeholder='Your Message' rows='5' color='5' className="message">
          </textarea>
          <button type='submit' value='send' className="submitBtn">Submit</button>
        </form>
      </div>

      <div className="links">
        <img src={instagram} alt="instagram" className="link" />
        <img src={facebook} alt="facebook" className="link" />
        <img src={x} alt="twitter" className="link" />
      </div>
    </section>
  )
}

export default Contact