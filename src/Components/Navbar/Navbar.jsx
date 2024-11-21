import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={logo} alt="logo" />
      <ul className='navbar-menu'>
        <li>About Me</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact Me</li>
        <li>Blogs</li>
      </ul>
    </div>
  )
}

export default Navbar
