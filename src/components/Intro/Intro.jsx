import React from 'react'
import { Link } from 'react-scroll'
import profilePhoto from '../../assets/person1.jpg'
import hireIcon from '../../assets/contactImg.jpg'
import './intro.css'

function Intro() {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Derrick</span> <br />Full Stack Developer</span>
            <p className="introPara">am a skilled developer with experience in creating responsive applications.</p>
            <Link>
            <button className="btn">
                <img src={hireIcon} alt="Hire Me" className='hireImg' /> Hire Me
            </button>
            </Link>
        </div>
        <img src={profilePhoto} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro 