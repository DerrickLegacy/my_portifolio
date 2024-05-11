import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';


import './contact.css'
import logo from '../../assets/logo.jpg'
import facebook from '../../assets/facebook.png'
import x from '../../assets/x.png'
import instagram from '../../assets/instagram.jpeg'
import linkedin from '../../assets/linkedin.png'
import slack from '../../assets/slack.png'
function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_p6ejalt', 'template_5n3nwfn', form.current, {
        publicKey: 'gPe2w-wE0kmFNXJ6R',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset()
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

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

      <div id="contact">
        <h1 className="contactPageTitle">
          Contact Me
        </h1>
        <span className="contactDescription">Reach out to me here</span>
        <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" name="from_name" id="name" placeholder='Your Name' />
          <input type="email" name="from_email" id="email" placeholder='Your Email' />
          <textarea name="message" id="message" placeholder='Your Message' rows='5' color='5' className="message">
          </textarea>
          <button type='submit' value='send' className="submitBtn">Submit</button>
        </form>
      </div>

      <div className="links">
        <img src={instagram} alt="instagram" className="link" />
        <img src={facebook} alt="facebook" className="link" />
        <img src={x} alt="twitter" className="link" />
        <a href="https://www.linkedin.com/in/ahaabwe-derrick-201bab236/">
          <img src={linkedin} alt="linkedin" className="link" />

        </a>
        <img src={slack} alt="slack" className="link" />
      </div>
    </section>
  )
}

export default Contact