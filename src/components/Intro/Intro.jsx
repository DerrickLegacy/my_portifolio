import React from 'react'
import { Link } from 'react-scroll'
import derrick from '../../assets/derrick.jpeg'
import hireIcon from '../../assets/contactImg.jpg'
import './intro.css'

function Intro() {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className="introName">Derrick</span> <br />Full Stack Developer</span>
        <p className="introPara">am a skilled developer with experience in creating responsive applications.</p>
        <p className="introPara">Visit my <a className='githubrepo'href="https://github.com/DerrickLegacy?tab=repositories">github repository</a></p>

        <Link to='contact'>
          <button className="btn">
            <img src={hireIcon} alt="Hire Me" className='hireImg' /> Hire Me
          </button>
        </Link>
      </div>
      <img src={derrick} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro 