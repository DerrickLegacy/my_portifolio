import React from 'react'

import logo3 from '../../assets/logo3.avif'
import { Link } from 'react-scroll'
import './navbar.css'
import contactImg from '../../assets/contactImg.jpg'

function NavBar() {
    return (
        <nav className="navbar">
            <img src={logo3} alt="Logo" className='logo' />
            <div className="desktopMenu">
                <Link className="desktopMenuListItem" activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} >Home</Link>
                <Link className="desktopMenuListItem"  activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} >About</Link>
                <Link className="desktopMenuListItem"  activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} >Portifolio</Link>
                <Link className="desktopMenuListItem"  activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} >Client</Link>

            </div>
            <button className="desktopMenuBtn" onClick={()=>{
                document.getElementById('contact').scrollIntoView({behavior:'smooth'}) 
            }}>
                <img src={contactImg} alt="contact logo" className="desktopMenuImg" />
                Contact Me
            </button>
        </nav>
    )
}

export default NavBar