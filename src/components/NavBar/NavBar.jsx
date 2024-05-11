import React, { useState } from 'react'

import logo3 from '../../assets/logo3.avif'
import { Link } from 'react-scroll'
import './navbar.css'
import contactImg from '../../assets/contactImg.jpg'
import menu from '../../assets/menu.png.png'

function NavBar() {
    const [showMenu, setShowMenu] = useState(false)

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

                <img src={menu} alt="mobMenu" className='mobMenu'  onClick={()=>{setShowMenu(!showMenu)}}  />
            <div className="navMenu" style={{display :showMenu ? 'flex': 'none'}}>
                <Link className="listItem" activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} onClick={()=>{setShowMenu(false)}} >Home</Link>
                <Link className="listItem"  activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} onClick={()=>{setShowMenu(false)}} >About</Link>
                <Link className="listItem"  activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} onClick={()=>{setShowMenu(false)}} >Portifolio</Link>
                <Link className="listItem"  activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} onClick={()=>{setShowMenu(false)}} >Client</Link>
                <Link className="listItem"  activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} onClick={()=>{setShowMenu(false)}} >Contact Me</Link>

            </div>
        </nav>
    )
}

export default NavBar